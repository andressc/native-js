import React, {useState} from "react"

export type ManType = {
    name: string
    age: number
    lessons: LessonsType[]
    address: AddressType
}

type LessonsType = {
    title: string
}

type AddressType = {
    street: StreetType
}

type StreetType = {
    title: string
}

type PropsType = {
    title: string
    man: ManType
    food: string[]
    car: {model: string }
}
export const Destructuring: React.FC<PropsType> = ({title, man, ...props},) => {

    const [message, setMessage] = useState<string>("hello")

    return (
        <div>
            <h1>{title}</h1>
            <div>{props.food}</div>
        </div>
    )
}