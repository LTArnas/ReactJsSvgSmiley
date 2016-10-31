export default class MorphPath {
    static commandLinear(fromCommandArray, toCommandArray, fraction) {
        // TODO: check arguments, so it is what we expect it to be.
        // ...same length commands, same commands, both relative/absolute, etc.
        let resultCommand = [fromCommandArray[0]];
        for (let i = 1; i < fromCommandArray.length; i++) {
            // Ignore Arc command flag values.
            if (fromCommandArray[0].toLowerCase() === "a") {
                if (i === 4 | i === 5) {
                    resultCommand.push(fromCommandArray[i]);
                    continue;
                }
            }

            let newValue = this.lerp(Number(fromCommandArray[i]),
                                    Number(toCommandArray[i]),
                                    fraction);
            resultCommand.push(newValue);
        }
        return resultCommand;
    }

    static lerp(startNumber, endNumber, fractionNumber) {
        return (startNumber + fractionNumber * (endNumber - startNumber));
    }
}