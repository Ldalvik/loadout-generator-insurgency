import { ChangeEvent, MouseEvent, useState } from "react"
import { Ammo, AttachmentTypeNames, AttachmentTypes, Barrel, Chamber, Magazine, Miscellaneous, Optic, Siderail, Stock, Underbarrel, Weapon } from "../../insurgencyapi/Types"
import weaponAttachments from "../../insurgencyapi/versus/attachments.json"
import { IWeaponAttachments } from "../../insurgencyapi/Interfaces"

const AttachmentsPage = ({ weapon }: { weapon: Weapon }) => {
    const [currentAttachments, setCurrentAttachments] = useState<IWeaponAttachments>({
        optic: "NONE" as Optic,
        barrel: "NONE" as Barrel,
        underbarrel: "NONE" as Underbarrel,
        magazine:"NONE" as Magazine,
        siderail:"NONE" as Siderail,
        ammo: "NONE" as Ammo,
        stock: "NONE" as Stock,
        miscellaneous: "NONE" as Miscellaneous,
        chamber: "NONE" as Chamber
    })

    const handleAttachmentChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setCurrentAttachments({
            ...currentAttachments,
            [e.currentTarget.id]: e.currentTarget.value
        })
    }

    const handleRandomAttachments = () => {
        const att = weaponAttachments[weapon]
        setCurrentAttachments({
            optic: att.optic[Math.floor(Math.random() * att.optic.length)] as Optic,
            barrel: att.barrel[Math.floor(Math.random() * att.barrel.length)] as Barrel,
            underbarrel: att.underbarrel[Math.floor(Math.random() * att.underbarrel.length)] as Underbarrel,
            magazine: att.magazine[Math.floor(Math.random() * att.magazine.length)] as Magazine,
            siderail: att.siderail[Math.floor(Math.random() * att.siderail.length)] as Siderail,
            ammo: att.ammo[Math.floor(Math.random() * att.ammo.length)] as Ammo,
            stock: att.stock[Math.floor(Math.random() * att.stock.length)] as Stock,
            miscellaneous: att.miscellaneous[Math.floor(Math.random() * att.miscellaneous.length)] as Miscellaneous,
            chamber: att.chamber[Math.floor(Math.random() * att.chamber.length)] as Chamber
        })
    }


    const attachmentSelect = (attachment: AttachmentTypeNames) => {
        const attachments = weaponAttachments[weapon][attachment]
        let attachmentMenu = <>
            <label className="attachments-text">
                {`${attachment.charAt(0).toUpperCase()}${attachment.slice(1)}`}
            </label>
            <select id={attachment} value={currentAttachments[attachment]} className="options-dropdown attachments-dropdown" onChange={handleAttachmentChange}>
                {attachments.map(name =>
                    <option value={name} className="text-center" key={name}>
                        {name}
                    </option>
                )}
            </select>
        </>
        if (attachments.length === 0) attachmentMenu = <></>
        return attachmentMenu
    }

    return (
        <div className="card page-card">
            <div className="card-section">
                <div className="text-center">
                    <h4>Attachments</h4>
                    <button onClick={handleRandomAttachments} className="button btn">Randomize attachments</button>

                </div>
                <p>
                    {/* set supply point limit option */}
                </p>
                <div className="grid-x">
                    <div className="small-6 attachments-section">
                        {attachmentSelect("optic")}
                        {attachmentSelect("barrel")}
                        {attachmentSelect("underbarrel")}
                        {attachmentSelect("magazine")}
                        {attachmentSelect("siderail")}
                    </div>

                    <div className="small-6 attachments-section">
                        {attachmentSelect("ammo")}
                        {attachmentSelect("stock")}
                        {attachmentSelect("miscellaneous")}
                        {attachmentSelect("chamber")}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AttachmentsPage