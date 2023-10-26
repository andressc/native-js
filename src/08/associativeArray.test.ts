
type UsersType = {
    [key: string]: {id: number, name: string}
}

let users: UsersType

beforeEach(() => {
    users = {
        "233": {id: 233, name: "Andrey"},
        "234": {id: 234, name: "Igor"},
        "235": {id: 235, name: "Petr"},
        "236": {id: 236, name: "Svetlana"},
        "237": {id: 237, name: "Alexei"},
        "238": {id: 238, name: "Masha"},
    }
})

test("", () => {

    const findUser = users[237]

    users[238].name = "Lusya"

    delete users[234]

    expect(findUser.name).toBe("Alexei")
    expect(users[238].name).toBe("Lusya")
    expect(users).toEqual({
        "233": {id: 233, name: "Andrey"},
        "235": {id: 235, name: "Petr"},
        "236": {id: 236, name: "Svetlana"},
        "237": {id: 237, name: "Alexei"},
        "238": {id: 238, name: "Lusya"},
    })
})