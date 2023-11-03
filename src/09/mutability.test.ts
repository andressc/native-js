type UserType = {
    name: string
    age: number
    address: {
        title: string
    }
}

const icreaseAge = (u: UserType) => {
    u.age++
}

test("", () => {

    const user = {
        name: "Andrey",
        age: 34,
        address: {
            title: "SPB"
        }
    }

    icreaseAge(user)

    expect(user.age).toBe(35)

    const superman = user
    superman.age = 1000

    expect(user.age).toBe(1000)
})

test("array test", () => {

    const users = [
        {name: "Andrey", age: 34},
        {name: "Max", age: 30}
    ]

    const admins = users

    admins.push({name: "Leha", age: 15})

    expect(users[2]).toEqual({name: "Leha", age: 15})

})

test("value type test", () => {

    const usersCount= 100

    let adminsCount = usersCount
    adminsCount = 500

    expect(usersCount).toBe(100)

})

test("object in object test", () => {

    const user = {
        name: "Andrey",
        age: 34,
        address: {
            title: "SPB"
        }
    }

    let addr = user.address

    let user2= {
        name: "Natasha",
        age: 30,
        address: user.address
    }

    user2.address.title = "Kanary"

    expect(user.address).toBe(user2.address)
    expect(user.address.title).toBe("Kanary")
})

test("object in array test", () => {

    const address = {title: "SPB"}

    const user = {
        name: "Andrey",
        age: 34,
        address: address
    }

    let user2= {
        name: "Natasha",
        age: 30,
        address: address
    }

    const users = [user, user2, {name: "Misha", age: 30, address: address}]

    const admins = [user, user2]

    admins[0].name = "Max"


    address.title = "Kanary"

    expect(user.name).toBe("Max")
    expect(users[0].name).toBe("Max")
})