import {ManType} from "./Destructuring"


let man: ManType

beforeEach(() => {
    man = {
        name: "Andrey",
        age: 34,
        lessons: [{title: "1"}, {title: "2"}],
        address: {
            street: {
                title: "Lenina 12"
            }
        }
    }
})

test("", () => {

    const {age, lessons} = man
    const {title} = man.address.street

    expect(age).toBe(34)
    expect(lessons.length).toBe(2)
    expect(title).toBe("Lenina 12")
})

test("", () => {
    /*const l1 = man.lessons[0]
    const l2 = man.lessons[1]*/

    const [l1, l2] = man.lessons

    expect(l1.title).toBe("1")
    expect(l2.title).toBe("2")
})