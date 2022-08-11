import sprite from "../images/sprite.svg"

export function Icon({iconId,iconColor,width,height}){
    return (
        <>
        {iconId && (
            <svg fill={iconColor} width={width} height={height}>
            <use xlinkHref={`${sprite}#${iconId}`}></use>
        </svg>
        )}
        </>
    )
}
Icon.defaultProps={
    iconColor: "white",
    width:"43px",
    height:"43px"
}