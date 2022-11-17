export const instList = () => {
    return useState<Array<Array<string>>>('instList', () => ref([]))
}

export const step = () => {
    return useState<number>('step', () => ref(0))
}
