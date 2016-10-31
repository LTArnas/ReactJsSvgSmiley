export default class PathData {
    // Splits path string to an array, of command strings.
    static pathSplit(pathString) {
        let commandsStartIndex = [];
        let tester = new RegExp(/[A-Za-z]/);
        // Get starting index position of every command.
        for (let i = 0; i < pathString.length; i++) {
            if (tester.test(pathString[i])) {
                commandsStartIndex.push(i);
            }
        }
        let commandsArray = [];
        // Split the path string into commands.
        for (let i = 0; i < commandsStartIndex.length; i++) {
            // Command's end point is next commands' starting index, or path's length, because we are at the last command.
            let commandEnd = (i === commandsStartIndex.length - 1) ?
                            pathString.length : commandsStartIndex[i+1];
            commandsArray.push(
                pathString.substring(
                    commandsStartIndex[i], commandEnd
            ));
        }
        return commandsArray;
    }

    // Splits a command string to an array of values.
    static commandSplit(command, seperatorRegex = /[,\s]+/) {
        return command.split(seperatorRegex).filter(Boolean);
    }

    // Converts path string to an array of commands, each command being an array of values.
    // Combines pathSplit() with commandSplit().
    static pathConvert(pathString) {
        let commandsStringArray = this.pathSplit(pathString);
        let result = [];
        for (let i = 0; i < commandsStringArray.length; i++) {
            result.push(this.commandSplit(commandsStringArray[i]));
        }
        return result;
    }
}