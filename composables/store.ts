export const instList = () => {
    return useState<Array<Instruction>>('instList', () => [])
}

export const step = () => {
    return useState<number>('step', () => 0)
}

export const maxStep = () => {
    return useState<number>('maxStep', () => 0)
}
