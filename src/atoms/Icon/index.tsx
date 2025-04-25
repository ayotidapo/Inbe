
interface Props{ 
   id: string;
   width?: number;
   height?:number
   className?:string;
   onClick?: (e: React.MouseEvent<SVGSVGElement> | undefined)=> void;
}

 const Icon:React.FC<Props> = (props) => {

    const {id, width = 24, height = 24, className = '',...rest} = props
	return (
		<svg
			id={id}			
			width={width}
			height={height}
		    className={`${className}`}
			{...rest}
			
			
		>
			<use xlinkHref={`/icon-sprite.svg#${id}`}></use>
		</svg>
	);
};

export default Icon