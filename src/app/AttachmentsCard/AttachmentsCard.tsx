import { ChangeEvent, useState } from "react"
import { Ammo, AttachmentTypeNames, Barrel, Chamber, Magazine, Miscellaneous, Optic, Siderail, Stock, Underbarrel, Weapon } from "../../insurgencyapi/Types"
import weaponAttachments from "../../insurgencyapi/versus/attachments.json"
import { IWeaponAttachments } from "../../insurgencyapi/Interfaces"

interface IAttachmentsPage {
    weapon: Weapon
}

const AttachmentsPage = ({ weapon }: IAttachmentsPage) => {
    const ATTACHMENTS = weaponAttachments[weapon]

    const [currentAttachments, setCurrentAttachments] = useState<IWeaponAttachments>({
        optic: "NONE" as Optic,
        barrel: "NONE" as Barrel,
        underbarrel: "NONE" as Underbarrel,
        magazine: "NONE" as Magazine,
        siderail: "NONE" as Siderail,
        ammo: "NONE" as Ammo,
        stock: "NONE" as Stock,
        miscellaneous: "NONE" as Miscellaneous,
        chamber: "NONE" as Chamber
    })

    const handleAttachmentChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setCurrentAttachments((prevAtt) => ({
            ...prevAtt,
            [e.target.id]: e.target.value
        }))
    }

    const handleRandomAttachments = () => {
        const randomAttachment = (att: AttachmentTypeNames) => ATTACHMENTS[att][Math.floor(Math.random() * ATTACHMENTS[att].length)]
        setCurrentAttachments({
            optic: randomAttachment("optic") as Optic,
            barrel: randomAttachment("barrel") as Barrel,
            underbarrel: randomAttachment("underbarrel") as Underbarrel,
            magazine: randomAttachment("magazine") as Magazine,
            siderail: randomAttachment("siderail") as Siderail,
            ammo: randomAttachment("ammo") as Ammo,
            stock: randomAttachment("stock") as Stock,
            miscellaneous: randomAttachment("miscellaneous") as Miscellaneous,
            chamber: randomAttachment("chamber") as Chamber
        })
    }

    const attachmentSelect = (attachment: AttachmentTypeNames) => {
        return ATTACHMENTS[attachment].length > 0 && (
            <div className="small-12 medium-6 attachment-item-section">
                <label className="attachments-text">
                    {`${attachment.charAt(0).toUpperCase()}${attachment.slice(1)}`}
                </label>
                <select
                    id={attachment}
                    value={currentAttachments[attachment]}
                    className="options-dropdown attachments-dropdown"
                    onChange={handleAttachmentChange}>
                    {ATTACHMENTS[attachment].map((name) => (
                        <option value={name} className="text-center" key={name}>
                            {name}
                        </option>
                    ))}
                </select>
            </div>
        )
    }

    return (
        <div className="card page-card">
            <div className="card-section">
                <div className="text-center">
                    {Object.values(ATTACHMENTS).every(array => array.length === 0) ? (
                        <>
                            <h4>The attachments for this weapon haven't been added! (yet)</h4>
                            <a href="https://github.com/Ldalvik/loadout-generator">
                                How about adding them yourself?
                            </a>
                        </>
                    ) : (
                        <>
                            <h4>Attachments</h4>
                            <button onClick={handleRandomAttachments} className="button btn">
                                Randomize attachments
                            </button>
                        </>
                    )}
                </div>
                <p>
                    {/* set supply point limit option */}
                </p>
                <div className="grid-x">
                    {attachmentSelect("optic")}
                    {attachmentSelect("barrel")}
                    {attachmentSelect("underbarrel")}
                    {attachmentSelect("magazine")}
                    {attachmentSelect("siderail")}
                    {attachmentSelect("ammo")}
                    {attachmentSelect("stock")}
                    {attachmentSelect("miscellaneous")}
                    {attachmentSelect("chamber")}
                </div>
            </div>
        </div>
    )
}

export default AttachmentsPage