// Weapons
export type Weapon =
    | "Makarov"
    | "Welrod"
    | "Browning HP"
    | "M9"
    | "M1911"
    | "Desert Eagle"
    | "M16A2"
    | "AKM"
    | "Alpha AK"
    | "QBZ-97"
    | "AK-74"
    | "QBZ-03"
    | "FAMAS F1"
    | "Sterling"
    | "Uzi"
    | "MP5A2"
    | "P90"
    | "AS VAL"
    | "AKS-74U"
    | "TOZ-194"
    | "KS-23"
    | "SKS"
    | "ACE 52"
    | "FAL"
    | "SVD"
    | "Mosin-Nagant"
    | "M1 Garand"
    | "M99"
    | "Galil"
    | "RPK"
    | "PKM"
    | "MG3"
    | "Tariq"
    | "L106A1"
    | "PF940"
    | "M45"
    | "MR 73"
    | "M16A4"
    | "AUG A3"
    | "G36K"
    | "QTS-11"
    | "M4A1"
    | "L85A2"
    | "VHS-2"
    | "Grease Gun"
    | "MP5A5"
    | "MP7"
    | "Vector"
    | "Honey Badger"
    | "Mk 18 CQBR"
    | "M870"
    | "KSG"
    | "Mk 17 MOD 0"
    | "Tavor 7"
    | "G3A3"
    | "Mk 14 EBR"
    | "M24"
    | "M110 SASS"
    | "M82A1 CQ"
    | "Galil SAR"
    | "M249"
    | "M60"
    | "M240B"
    | "SG 552"
    | "MDR"

export type Caliber =
    | "9x18mm"
    | "9x19mm"
    | ".45 ACP"
    | ".50 Action Express"
    | "5.56x45mm NATO"
    | "7.62x39mm"
    | "5.45x39mm"
    | "5.7x28mm"
    | "9x39mm"
    | "12 Gauge Buckshot"
    | "12 Gauge Flechette"
    | "12 Gauge Slug"
    | "4 Gauge Buckshot"
    | "4 Gauge Flechette"
    | "4 Gauge Slugs"
    | "7.62x51mm NATO"
    | "7.62x54mmR"
    | "7.62x54mmR AP"
    | ".30-06"
    | "12.7x108 ATM"
    | "7.62x51mm NATO AP"
    | ".357 Magnum"
    | "5.8x42mm"
    | "4.6x30mm AP"
    | "300 Blackout"
    | ".50 BMG ATM"

export type FiringMode =
    | "semi"
    | "burst"
    | "bolt"
    | "semi,burst"
    | "semi,full"
    | "semi,burst,full"
    | "full"
    | "pump"

// Classes
export type Explosive =
    | "FLASH GRENADE"

export type AmmoCarrier =
    | "LIGHT CARRIER"
    | "HEAVY CARRIER"

export type Armor =
    | "LIGHT ARMOR"
    | "HEAVY ARMOR"

export type Accessory =
    | "GAS MASK"

// Attachments
export type Optic =
    | "3X A2 SCOPE"
    | "4X M150" 
    | "4X-1X M150 BUS"

export type Barrel =
    | "FLASH HIDER"
    | "COMPENSATOR"
    | "SUPPRESSOR"
    // MR 73
    | "SNIPER BARREL"
    | "SUPPRESSED SNIPER BARREL"

export type Underbarrel =
    | "QUICKDRAW GRIP"
    | "SMOKE LAUNCHER"
    | "BIPOD"
    | "LOADING GRIP"
    | "AIMING GRIP"
    | "RECOIL GRIP"
    | "MASTERKEY"

export type Magazine =
    | "EXTENDED MAGAZINE"
    | "DRUM MAGAZINE"

export type Siderail =
    | "LASER SIGHT"
    | "FLASHLIGHT"

export type Ammo =
    | "TRACER ROUNDS"

export type Stock =
    | ""

export type Miscellaneous =
    | "FLAT TOP"

export type Chamber =
    | "GREASED BOLT"

export type AttachmentTypes =
    | Optic
    | Barrel
    | Underbarrel
    | Magazine
    | Siderail
    | Ammo
    | Stock
    | Miscellaneous
    | Chamber

export type AttachmentTypeNames =
    | "optic"
    | "barrel"
    | "underbarrel"
    | "magazine"
    | "siderail"
    | "ammo"
    | "stock"
    | "miscellaneous"
    | "chamber"

    export type Class = 
    | "rifleman"
    | "breacher"
    | "advisor"
    | "demolitions"
    | "marksman"
    | "gunner"
    | "observer"
    | "commander"

export type Gamemode =
    | "coop"
    | "versus"

export type Faction =
    | "insurgents"
    | "security"