import { ListProps } from "../settings/default";


const ListCard: React.FC<ListProps> = ({styleLink, children}) => {
    return(
        <li><a style={styleLink}>{children}</a></li>
    )
}

export const NavBarList: React.FC<ListProps> = () => {
    return(
        <ListCard styleLink={{ color: '#fff', textDecoration: 'none' }}/>
    )
}