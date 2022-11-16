export const instList = () => {
    return useState('instList', () => ref([]))
}

export const step = () => {
    return useState('step', () => ref(0))
}
