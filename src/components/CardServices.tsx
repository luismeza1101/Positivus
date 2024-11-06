import type { Type_Services } from "../types"

const CardServices: React.FC<Type_Services> = ({background,image,service}) => {
  return (
    <div
  className={`bg-${background} rounded-3xl border-2 border-black h-[300px] p-8 relative flex flex-col justify-between items-start shadow-card-services`}
>
  <h3
    className={`text-2xl font-bold px-2 py-1 rounded-lg `}
    style={{
      backgroundColor: background === 'white' ? '#B9FF66' : 'white'
    }}
    >
    {service}
  </h3>
  <img
    src={`/icons/services/${image}.svg`}
    alt={service}
    className="absolute right-4 bottom-9"
    loading="lazy"
    />
  <img src={`/icons/${background == 'secondary' ? 'arrow-white-black' : 'arrow-black-green'}.svg`} alt="arrow" />
</div>
  )
}

export default CardServices
