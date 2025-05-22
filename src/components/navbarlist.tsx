import { ListProps } from "../settings/default";


const ListCard: React.FC<ListProps> = ({href, style, children}) => {
    return(
        <li><a href={href} style={style}>{children}</a></li>
    )
}

export const NavBarList: React.FC<ListProps> = ({href, children}) => {
    return(
        <ListCard href={href} style={{ color: '#fff', textDecoration: 'none' }}>{children}</ListCard>
    )
}