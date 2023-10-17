import {CityType, GovernmentBuildingType} from "../types/types"

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter(v => v.address.street.title !== street)
}

export const getBuildingsWithStaffCountGreaterThen = (governmentBuildings: GovernmentBuildingType[], staffCount: number) => {
    return governmentBuildings.filter(v => v.staffCount > staffCount)
}