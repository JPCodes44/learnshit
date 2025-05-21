import { ULProps } from "../settings/default";
  

  const ULCard: React.FC<ULProps> = ({ styleLink, children }) => (
    <ul style={styleLink}>
      {children}
    </ul>
  );

export const NavBarSections: React.FC<ULProps> = ({ children }) => (
  <ULCard styleLink={{
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
    margin: 0,
    padding: 0,
  }}>
    {children}
  </ULCard>
);
