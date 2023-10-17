import {demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen} from "./04"
import {CityType} from "../types/types"

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
                        title: "Souths park str"
                    },
                },
            }
        ],
        citizensNumbers: 1000000
    }
})

test("Houses shold be destroyed", () => {
    demolishHousesOnTheStreet(city, "Happy street")

    expect(city.houses.length).toBe(1)
    expect(city.houses[0].id).toBe(1)
})

test("buildings with correct staff count", () => {
    let buildings = getBuildingsWithStaffCountGreaterThen(city.governmentBuildings, 500)

    expect(buildings.length).toBe(1)
    expect(buildings[0].type).toBe("FIRE-STATION")
})