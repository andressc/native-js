export type StudentType = {
    name: string
    age: number
    isActive: boolean
    address: AddressOldType
    technologies: TechnologiesType[]
}
type CityOldType = {
    title: string
    country: string
}
type AddressOldType = {
    streetTitle: string
    city: CityOldType
}
type TechnologiesType = {
    id: number
    title: string
}

export const student: StudentType = {
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




