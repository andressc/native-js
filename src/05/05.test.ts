import {CityType} from "../types/types"
import {getStreetsTitlesOfGovernmentsBuildings, getStreetsTitlesOfHouses} from "./05"

let city: CityType

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                id: 1,
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
                id: 2,
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
                id: 3,
                buildedAt: 2020,
                repaired: false,
                address: {
                    street: {
                        title: "Happy street"
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
                        title: "Souths str"
                    },
                },
            }
        ],
        citizensNumbers: 1000000
    }
})

test("list of streets titles of goverments buildings", () => {
    let streetsNames = getStreetsTitlesOfGovernmentsBuildings(city.governmentBuildings)

    expect(streetsNames.length).toBe(2)
    expect(streetsNames[0]).toBe("Central Str")
    expect(streetsNames[1]).toBe("Souths str")
})

test("list of streets titles", () => {
    let streetsNames = getStreetsTitlesOfHouses(city.houses)

    expect(streetsNames.length).toBe(3)
    expect(streetsNames[0]).toBe("White street")
    expect(streetsNames[1]).toBe("Happy street")
    expect(streetsNames[2]).toBe("Happy street")
})