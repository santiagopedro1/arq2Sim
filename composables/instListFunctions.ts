export const checkForConflict = (instructions: Array<Instruction>) => {
    let bubble = 0
    let comp = 0
    for (let i = 0; i < instructions.length; i++) {
        if (!instructions[i + 1]) break
        if (
            instructions[i][0] === 'LW' &&
            (instructions[i][1] === instructions[i + 1][2] ||
                instructions[i][1] === instructions[i + 1][3])
        ) {
            bubble = 2
            instructions[i + 1][4] += i + 1 + comp
            instructions[i + 1][5] += bubble
        } else {
            instructions[i + 1][4] = i + 1 + comp
            instructions[i + 1][5] = bubble
        }
        if (bubble > 0) {
            bubble--
            if (bubble == 0) comp++
        }
    }
}

export const areInstructionsValid = (instructions: Array<Instruction>) => {
    for (let i = 0; i < instructions.length; i++) {
        instructions[i][0] = instructions[i][0].toUpperCase()
        instructions[i][1] = instructions[i][1].toUpperCase()
        instructions[i][2] = instructions[i][2].toUpperCase()
        if (typeof instructions[i][3] === 'string')
            instructions[i][3] = instructions[i][3].toUpperCase()

        if (instructions[i][0] === 'LW' && isNaN(Number(instructions[i][3])))
            return Error(
                `Erro na instrução ${i + 1}. O deslocamento não é um número`
            )
        for (let j = 0; j < 4; j++) {
            if (Boolean(instructions[i][j]) === false)
                return Error(
                    `Erro na instrução ${i + 1}. Campo ${j + 1} está vazio`
                )
        }
    }
    return true
}
