import { ContentProps } from "../settings/default";
  

  type ULProps = React.PropsWithChildren<ContentProps>;

  const ULCard: React.FC<ULProps> = ({ style, children }) => (
    <ul style={style}>
      {children}
    </ul>
  );

  export const NavBarSections: React.FC<ULProps> = ({ children }) => (
    <ULCard style={{
      listStyle: 'none',
      display: 'flex',
      gap: '1rem',
      margin: 0,
      padding: 0,
    }}>
      {children}
    </ULCard>
  );
