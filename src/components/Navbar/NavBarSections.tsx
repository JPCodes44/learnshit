import { ContentProps, ULProps} from "../../settings/default";
  

  
export const NavBarSections= ({ children }: ULProps) => (
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
