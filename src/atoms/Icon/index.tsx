
interface Props{ 
   id: string;
   width?: number;
   height?:number
   className?:string;
}

 const Icon:React.FC<Props> = (props) => {

    const {id, width = 24, height = 24, className = ''} = props
	return (
		<svg
			id={id}			
			width={width}
			height={height}
		    className={`${className}`}
		>
			<use xlinkHref={`/icon-sprite.svg#${id}`}></use>
		</svg>
	);
};

export default Icon