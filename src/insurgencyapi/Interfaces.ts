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
    optic?: Optic
    barrel?: Barrel
    underbarrel?: Underbarrel
    magazine?: Magazine
    siderail?: Siderail
    ammo?: Ammo
    stock?: Stock
    miscellaneous?: Miscellaneous
    chamber?: Chamber
}



// TODO: Make seperate SecondaryWeapon and PrimaryWeapon types
export interface ILoadout {
    primary_weapons: Weapon
    explosives: Explosive
    //explosives2: Explosive
    //explosives3: Explosive
    //ammo_carrier: AmmoCarrier
    //armor: Armor
    //accessory: Accessory
}

export interface IPlayerClass {
    secondary_weapons: Weapon
    rifleman: ILoadout
    breacher: ILoadout
    advisor: ILoadout
    demolitions: ILoadout
    marksman: ILoadout
    gunner: ILoadout
    observer?: ILoadout
    commander?: ILoadout
}

export interface IFaction {
    insurgents: IPlayerClass
    security: IPlayerClass
}