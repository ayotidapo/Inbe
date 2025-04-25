import './button.scss'

interface Props{
    children: React.ReactNode;
    className?:string;
}

const Button:React.FC<Props> = (props) => {
    const {className = '', children } = props
  return (
    <button className={`btn ${className}`}>{children}</button>
  )
}

export default Button