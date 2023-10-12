export const sum = (a: number, b: number) => {
    return a + b
}

export const multiply = (a: number, b: number) => {
    return a * b
}

export const splitIntoWords = (sentence: string) => {
    return sentence
        .toLowerCase()
        .replace(/[^a-zа-яё\s]/gi, '')
        .replace(/ +/g," ")
        .trim()
        .split(" ")
}