import {StudentType} from "../02/02"
import {BuildingType, GovernmentBuildingType, HouseType} from "../types/types"

export const sum = (a: number, b: number) => {
    return a + b
}

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({id: new Date().getTime(), title: skill})
}

export const addActive = (student: StudentType) => {
    student.isActive = true
}

export const liveCountry = (student: StudentType, country: string) => {
    return student.address.city.country.toLowerCase() === country.toLowerCase()
}

export const addMoneyToBudget = (governmentBuildings: GovernmentBuildingType[], building: BuildingType, cash: number) => {
    governmentBuildings.forEach((v) => {
        if (v.type === building) v.budget += cash
    })
}

export const repearHouse = (house: HouseType) => {
    house.repaired = true
}

export const toFireStaff = (building: GovernmentBuildingType, fireStaff: number) => {
    building.staffCount -= fireStaff
}

export const toHireStaff = (building: GovernmentBuildingType, hireStaff: number) => {
    building.staffCount += hireStaff
}