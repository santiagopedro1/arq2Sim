export const instNumbr = () => {
    return useState('instNumb', () => ref(0))
}

export const isPipeline = () => {
    return useState('isPipeline', () => ref(false))
}

export const instList = () => {
    return useState('instList', () => ref([]))
}
