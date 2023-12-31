import {addMoneyToBudget, repearHouse, toFireStaff, toHireStaff} from "./03"
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

test("Budget should be changed for HOSPITAL", () => {
    addMoneyToBudget(city.governmentBuildings, "HOSPITAL", 100000)

    expect(city.governmentBuildings[0].budget).toBe(300000)
    expect(city.governmentBuildings[1].budget).toBe(500000)
})

test("Budget should be changed for FIRE-STATION", () => {
    addMoneyToBudget(city.governmentBuildings, "FIRE-STATION", -100000)

    expect(city.governmentBuildings[0].budget).toBe(200000)
    expect(city.governmentBuildings[1].budget).toBe(400000)
})

test("House should be repeared", () => {
    repearHouse(city.houses[1])

    expect(city.houses[1].repaired).toBeTruthy()
})

test("staff should be increased", () => {
    toFireStaff(city.governmentBuildings[0], 20)

    expect(city.governmentBuildings[0].staffCount).toBe(180)
})

test("staff should be repeared", () => {
    toHireStaff(city.governmentBuildings[0], 20)

    expect(city.governmentBuildings[0].staffCount).toBe(220)
})