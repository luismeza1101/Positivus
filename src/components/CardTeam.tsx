import type { Type_Team } from "../types"

const CardTeam: React.FC<Type_Team> = ({cargo, description, image, name}) => {
  return (
    <div className="border-2 border-black rounded-2xl p-10 shadow-card-services relative">
        <div className="flex items-end gap-6">
            <img src={`/icons/team/${image}.svg`} alt={name} />
            <div className="flex flex-col">
                <span className="font-extrabold">{name}</span>
                <span>{cargo}</span>
            </div>
        </div>
        <hr className="bg-black my-5"/>
        <p>{description}</p>
        <img src="/icons/rrss/linkedin-green.svg" alt="linkedin" className="absolute top-9 right-9"/>
    </div>
  )
}

export default CardTeam
