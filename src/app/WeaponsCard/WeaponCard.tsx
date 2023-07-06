import { Dispatch, SetStateAction } from "react"
import { Weapon } from "../../insurgencyapi/Types";

import ChooseWeaponSection from "./sections/ChooseWeaponSection";
import WeaponStatsSection from './sections/WeaponStatsSection';

interface IWeaponPage {
    weapon: Weapon
    setWeapon: Dispatch<SetStateAction<Weapon>>
}
function WeaponPage({ weapon, setWeapon }: IWeaponPage) {
    return (
        <div className="card page-card">
            <div className="card-section">
                <div className="grid-x">
                    <ChooseWeaponSection setWeapon={setWeapon} weapon={weapon} />
                    <WeaponStatsSection weapon={weapon} />
                </div>
            </div>
        </div>
    );
}

export default WeaponPage