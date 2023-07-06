import { ChangeEvent, useEffect, useState, Dispatch, SetStateAction, useCallback, useMemo } from "react"
import classesData from "../../../insurgencyapi/versus/classes.json"
import { Faction, Gamemode, PlayerClass, Weapon } from "../../../insurgencyapi/Types"

interface IChooseWeaponSection {
    setWeapon: Dispatch<SetStateAction<Weapon>>
    weapon: Weapon
}

interface IOptions {
    gamemode: Gamemode
    faction: Faction
    playerClass: PlayerClass
}

const ChooseWeaponSection = ({ setWeapon, weapon }: IChooseWeaponSection) => {
    const [options, setOptions] = useState<IOptions>({
        gamemode: "versus",
        faction: "insurgents",
        playerClass: "rifleman"
    })

    const { faction, playerClass } = options
    const PLAYER_CLASS = classesData[faction][playerClass]

    const WEAPONS = useMemo(() => {
        const primaryWeapons = PLAYER_CLASS.primary_weapons
        const secondaryWeapons = classesData[faction].secondary_weapons
        return [...primaryWeapons, ...secondaryWeapons] as Weapon[]
    }, [PLAYER_CLASS.primary_weapons, faction]);

    const handleWeaponChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        setWeapon(e.target.value as Weapon)
    }, [setWeapon])

    const handleOptionChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        setOptions(options => ({
            ...options,
            [e.target.id]: e.target.value
        }))
    }, [])

    const weaponsList = useMemo(() => {
        return WEAPONS.map((weapon) => (
            <option className="text-center" key={weapon}>
                {weapon}
            </option>
        ));
    }, [WEAPONS])

    const handleRandomWeapon = useCallback(() => {
        setWeapon(WEAPONS[Math.floor(Math.random() * WEAPONS.length)])
    }, [WEAPONS, setWeapon])

    useEffect(() => {
        setWeapon(WEAPONS[0]);
    }, [WEAPONS, setWeapon]);

    return (
        <div className="large-6 choose-weapon-section">
            <h3>Choose your weapon</h3>
            <div className="grid-x">
                <div className="small-9">
                    <select value={weapon} className="options-dropdown select-weapon-dropdown" onChange={handleWeaponChange}>
                        {weaponsList}
                    </select>
                </div>
                <div className="small-3">
                    <button onClick={handleRandomWeapon} className="button btn random-weapon-btn">Random</button>
                </div>
            </div>

            <label className="float-left filters-text">Gamemode</label>
            <select id="gamemode" className="options-dropdown" onChange={handleOptionChange}>
                <option value="versus">Versus</option>
                {/* <option value="coop">Co-op</option> */}
            </select>

            <label className="float-left filters-text">Faction</label>
            <select id="faction" className="options-dropdown" onChange={handleOptionChange}>
                <option value="insurgents">Insurgents</option>
                <option value="security">Security</option>
            </select>

            <label className="float-left filters-text">Class</label>
            <select id="class" className="options-dropdown" onChange={handleOptionChange}>
                <option value="rifleman">Rifleman</option>
                <option value="breacher">Breacher</option>
                <option value="advisor">Advisor</option>
                <option value="demolitions">Demolitions</option>
                <option value="marksman">Marksman</option>
                <option value="gunner">Gunner</option>
                <option value="observer">Observer</option>
                <option value="commander">Commander</option>
            </select>
        </div>

    )
}

export default ChooseWeaponSection