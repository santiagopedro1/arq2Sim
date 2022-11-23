export const checkForConflict = (
    instructions: Array<
        [string, string, string, string | number, number, number]
    >
) => {
    let bubble = 0
    let foda = 0
    for (let i = 0; i < instructions.length; i++) {
        if (!instructions[i + 1]) break
        if (
            instructions[i][0] === 'LW' &&
            (instructions[i][1] === instructions[i + 1][2] ||
                instructions[i][1] === instructions[i + 1][3])
        ) {
            bubble = 2
            instructions[i + 1][4] = i + 1 + foda
            instructions[i + 1][5] = bubble
        } else {
            instructions[i + 1][4] = i + 1 + foda
            instructions[i + 1][5] = bubble
        }
        if (bubble > 0) {
            bubble--
            if (bubble == 0) foda++
        }
    }
}

export const areInstructionsValid = (
    instructions: Array<
        [string, string, string, string | number, number, number]
    >
) => {
    for (let i = 0; i < instructions.length; i++) {
        if (instructions[i][0] === 'LW' && isNaN(Number(instructions[i][3])))
            return Error(
                `Erro na instrução ${i + 1}\nO deslocamento não é um número`
            )
        for (let j = 0; j < 4; j++) {
            if (Boolean(instructions[i][j]) === false)
                return Error(
                    `Erro na instrução ${i + 1}\nCampo ${j + 1} está vazio`
                )
        }
    }
    return true
}
