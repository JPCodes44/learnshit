import { ListProps } from "../../settings/default";


export const NavBarList = ({href, children}: ListProps )=> {
    return(
        <li><a href={href} style={{ color: '#fff', textDecoration: 'none' }}>{children}</a></li>
    )
} 