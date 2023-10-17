import {GovernmentBuildingType, HouseType} from "../types/types"

export const getStreetsTitlesOfGovernmentsBuildings = (governmentBuildings: GovernmentBuildingType[]) => {
    return governmentBuildings.map(v => v.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses: HouseType[]) => {
    return houses.map(v => v.address.street.title)
}