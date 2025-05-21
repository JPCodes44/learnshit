type LinkProps = {
    styleLink?: React.CSSProperties
    children?: React.ReactNode
}

const ULCard = ({styleLink, children}: LinkProps) => {
    return(
        <ul style={styleLink}>{children}</ul>
    )
}

export const NavBarSections = (style: React.CSSProperties) => {
    return(
        <ULCard styleLink={style}/>
    )
}