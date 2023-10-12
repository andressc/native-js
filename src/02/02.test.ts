type StreetType2 = {
    title: string
}

type AddressType2 = {
    street: StreetType2
}

type ExtendedAddressType2 = AddressType2 & { number: number }

type HouseType2 = {
    buildedAt: number
    repaired: boolean
    address: ExtendedAddressType2
}

type GovernmentBuildingType2 = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: AddressType2
}

type CityType2 = {
    title: string,
    houses: HouseType2[],
    governmentBuildings: GovernmentBuildingType2[],
    citizensNumbers: number
}


let city2: CityType2

beforeEach(() => {
    city2 = {
        title: "New York",
        houses: [
            {
                buildedAt: 2012,
                repaired: false,
                address: {
                    street: {
                        title: "White street"
                    },
                    number: 100
                },
            },
            {
                buildedAt: 2008,
                repaired: false,
                address: {
                    street: {
                        title: "Happy street"
                    },
                    number: 100
                },
            },
            {
                buildedAt: 2020,
                repaired: false,
                address: {
                    street: {
                        title: "Hogwarts street"
                    },
                    number: 200
                },
            }],
        governmentBuildings: [
            {
                type: "HOSPITAL",
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: "Central Str"
                    },
                },
            },
            {
                type: "FIRE-STATION",
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: "Souths park str"
                    },
                },
            }
        ],
        citizensNumbers: 1000000
    }
})

test("city should contains 3 houses", () => {
    expect(city2.houses.length).toBe(3)

    expect(city2.houses[0].buildedAt).toBe(2012)
    expect(city2.houses[0].repaired).toBe(false)
    expect(city2.houses[0].address.number).toBe(100)
    expect(city2.houses[0].address.street.title).toBe("White street")

    expect(city2.houses[1].buildedAt).toBe(2008)
    expect(city2.houses[1].repaired).toBe(false)
    expect(city2.houses[1].address.number).toBe(100)
    expect(city2.houses[1].address.street.title).toBe("Happy street")

    expect(city2.houses[2].buildedAt).toBe(2020)
    expect(city2.houses[2].repaired).toBe(false)
    expect(city2.houses[2].address.number).toBe(200)
    expect(city2.houses[2].address.street.title).toBe("Hogwarts street")
})

test("city should contains hospital and fire station", () => {
    expect(city2.governmentBuildings.length).toBe(2)

    expect(city2.governmentBuildings[0].type).toBe("HOSPITAL")
    expect(city2.governmentBuildings[0].budget).toBe(200000)
    expect(city2.governmentBuildings[0].staffCount).toBe(200)
    expect(city2.governmentBuildings[0].address.street.title).toBe("Central Str")

    expect(city2.governmentBuildings[1].type).toBe("FIRE-STATION")
    expect(city2.governmentBuildings[1].budget).toBe(500000)
    expect(city2.governmentBuildings[1].staffCount).toBe(1000)
    expect(city2.governmentBuildings[1].address.street.title).toBe("Souths park str")
})