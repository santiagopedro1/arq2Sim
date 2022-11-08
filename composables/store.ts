export const instNumbr = () => {
    return useState('instNumb', () => ref(0))
}

export const arr = () => {
    return useState('arr', () => ref(new Array()))
}

export const isPipeline = () => {
    return useState('isPipeline', () => ref(false))
}

export const instList = () => {
    return useState('instList', () => ref([]))
}

export const step = () => {
    return useState('step', () => ref(0))
}
