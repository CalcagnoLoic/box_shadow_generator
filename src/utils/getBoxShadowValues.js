export const getBoxShadowValues = (shadows) => {
    let finalString = "";

    shadows.forEach((shadow) => {
        if (shadow.active) {
            shadow.inputs.forEach((input) => {
                if (input.type === "range") {
                    return (finalString += `${input.value}px `);
                } else if (input.type === "color") {
                    return (finalString += `${input.value}`);
                }
            });

            if (shadow.inset) finalString += " inset";

            if (shadows.indexOf(shadow) === shadows.length - 1) {
                return (finalString += ";");
            } else {
                return (finalString += ", ");
            }
        }
    });

    return finalString;
};
