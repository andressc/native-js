import {addActive, addSkill, liveCountry} from "./03"
import {StudentType} from "../02/02"

let student: StudentType

beforeEach(() =>{
    student = {
        name: "Andrey",
        age: 34,
        isActive: false,
        address: {
            streetTitle: "Lenina",
            city: {
                title: "st Peterburg",
                country: "Russia",
            }
        },
        technologies: [
            {
                id: 1,
                title: "CSS"
            },
            {
                id: 2,
                title: "JS"
            },
            {
                id: 3,
                title: "NodeJS"
            }
        ]
    }
})

test("new skill can be added", () => {
    addSkill(student, "PHP")

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("PHP")
})

test("student should be made active", () => {
    addActive(student)

    expect(student.isActive).toBe(true)
})

test("student live in country?", () => {
    let isLiveCountry = liveCountry(student, "Russia")
    expect(isLiveCountry).toBe(true)

    isLiveCountry = liveCountry(student, "Greece")
    expect(isLiveCountry).toBe(false)
})