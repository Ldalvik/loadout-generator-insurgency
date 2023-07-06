import { useState } from 'react';
import AttachmentsPage from './AttachmentsCard/AttachmentsCard';
import WeaponCard from './WeaponsCard/WeaponCard';
import { Weapon } from '../insurgencyapi/Types';
import weaponData from "../insurgencyapi/versus/classes.json"

function App() {
  const [weapon, setWeapon] = useState<Weapon>(
    weaponData.insurgents.rifleman.primary_weapons[0] as Weapon)

  return (
    <div className="grid-container">
      <div className="grid-x grid-padding-x grid-padding-y align-center">
        <div className="large-12">
          <WeaponCard weapon={weapon} setWeapon={setWeapon} />
          <AttachmentsPage weapon={weapon} />
        </div>
      </div>
    </div>
  );
}

export default App;
