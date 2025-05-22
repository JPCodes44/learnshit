import { ContentProps, ULProps} from "../settings/default";
  

  
export const NavBarSections: React.FC<ULProps> = ({ children }) => (
  <ul style={{
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
    margin: 0,
    padding: 0,
  }}>
    {children}
  </ul>
);
