import { ListProps } from "../settings/default";


export const NavBarList: React.FC<ListProps> = ({href, children}) => {
    return(
        <li><a href={href} style={{ color: '#fff', textDecoration: 'none' }}>{children}</a></li>
    )
} 