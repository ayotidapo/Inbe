interface Props{
    className?:string
}

const CircleCaret:React.FC<Props> = ({className=''}) => {
  return (
   <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="36" cy="36" r="36" transform="rotate(-180 36 36)" fill="white"/>
    <path d="M46.5 35L25.5 35" stroke="#0A2640" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M36 45.5L25.5 35L36 24.5" stroke="#0A2640" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
   </svg>

  )
}

export default CircleCaret