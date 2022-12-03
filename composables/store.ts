export const instList = () => {
    return useState<BaseInstruction[]>('instList', () => [])
}
