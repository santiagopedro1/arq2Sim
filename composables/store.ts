export const instList = () => {
    return useState<
        Array<[string, string, string, string | number, number, number]>
    >('instList', () => [])
}

export const step = () => {
    return useState<number>('step', () => 0)
}

export const maxStep = () => {
    return useState<number>('maxStep', () => 0)
}
