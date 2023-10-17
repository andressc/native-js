export type StreetType = {
    title: string
}

export type AddressType = {
    street: StreetType
}

export type ExtendedAddressType = AddressType & { number: number }

export type BuildingType = "HOSPITAL" | "FIRE-STATION"

export type HouseType = {
    id: number,
    buildedAt: number
    repaired: boolean
    address: ExtendedAddressType
}

export type GovernmentBuildingType = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: AddressType
}

export type CityType = {
    title: string,
    houses: HouseType[],
    governmentBuildings: GovernmentBuildingType[],
    citizensNumbers: number
}