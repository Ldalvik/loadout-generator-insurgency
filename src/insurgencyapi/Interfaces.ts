import { Ammo, Barrel, Caliber, Chamber, Explosive, FiringMode, Magazine, Optic, Siderail, Stock, Underbarrel, Weapon, Miscellaneous } from "./Types"

export interface IWeaponStats {
    cost: number
    caliber: Caliber
    vertical_recoil: number
    horizontal_recoil: number 
    velocity: number
    fire_rate: number
    penetration_power: number
    mag_capacity: string
    fire_modes: FiringMode
    weight: number
    hitscan_range: number
}

export interface IWeaponAttachments {
    optic?: Optic[] | Optic
    barrel?: Barrel[] | Barrel
    underbarrel?: Underbarrel[] | Underbarrel
    magazine?: Magazine[] | Magazine
    siderail?: Siderail[] | Siderail
    ammo?: Ammo[] | Ammo
    stock?: Stock[] | Stock
    miscellaneous?: Miscellaneous[] | Miscellaneous
    chamber?: Chamber[] | Chamber
}



// TODO: Make seperate SecondaryWeapon and PrimaryWeapon types
export interface IPlayerClass {
    primary_weapons: Weapon
    secondary_weapons: Weapon
    explosives: Explosive
    //explosives2: Explosive
    //explosives3: Explosive
    //ammo_carrier: AmmoCarrier
    //armor: Armor
    //accessory: Accessory
}

export interface IClass {
    rifleman: IPlayerClass
    breacher: IPlayerClass
    advisor: IPlayerClass
    demolitions: IPlayerClass
    marksman: IPlayerClass
    gunner: IPlayerClass
    observer?: IPlayerClass
    commander?: IPlayerClass
}

export interface IFaction {
    insurgents: IClass
    security:IClass
}