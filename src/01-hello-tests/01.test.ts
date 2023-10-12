import {multiply, splitIntoWords, sum} from "./01"

let a: number
let b: number
let c: number

let words1 = "Hello My name     is Vasili!!!    -"
let words2 = "Im - going to school         -!!242    "

beforeEach(() => {
    a = 1
    b = 2
    c = 3
})

test("sum should be corrected", () => {

    const result1 = sum(a, b)
    const result2 = sum(b, c)

    expect(result1).toBe(3)
    expect(result2).toBe(5)
})

test("multiply should be corrected", () => {

    const result1 = multiply(a, b)
    const result2 = multiply(b, c)

    expect(result1).toBe(2)
    expect(result2).toBe(6)
})

test("split into words should be corrected", () => {

    const result1 = splitIntoWords(words1)
    const result2 = splitIntoWords(words2)

    expect(result1.length).toBe(5)
    expect(result1).toStrictEqual(["hello", "my", "name", "is", "vasili"])

    expect(result2.length).toBe(4)
    expect(result2).toStrictEqual(["im", "going", "to", "school"])
})
