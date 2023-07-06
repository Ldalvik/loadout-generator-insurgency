import { Weapon } from "../../../insurgencyapi/Types"
import weaponStats from "../../../insurgencyapi/stats/weapons.json"

const WeaponStatsSection = ({ weapon }: { weapon: Weapon }) => {
    const {
        caliber,
        vertical_recoil,
        horizontal_recoil,
        velocity,
        fire_rate,
        penetration_power,
        mag_capacity,
        fire_modes,
        weight,
        hitscan_range
    } = weaponStats[weapon]

    return (
        <div className="large-4 weapon-stats-section">
            <h3>Stats</h3>
            <div className="divider" />
            <p className="stats-text"><b>Caliber</b>:  {caliber}</p>
            <p className="stats-text"><b>Vertical Recoil</b>:  {vertical_recoil}</p>
            <p className="stats-text"><b>Horizontal Recoil</b>:  {horizontal_recoil}</p>
            <p className="stats-text"><b>Velocity</b>:  {velocity}m/s</p>
            <p className="stats-text"><b>Fire Rate</b>:  {fire_rate}rpm</p>
            <p className="stats-text"><b>Penetration Power</b>:  {penetration_power}pp</p>
            <p className="stats-text"><b>Mag Capacity</b>:  {mag_capacity}</p>
            <p className="stats-text"><b>Fire Modes</b>:  {fire_modes.replaceAll(",", " + ")}</p>
            <p className="stats-text"><b>Weight</b>:  {weight}%</p>
            <p className="stats-text"><b>Hitscan Range</b>:  {hitscan_range}m</p>
        </div>
    )
}

export default WeaponStatsSection