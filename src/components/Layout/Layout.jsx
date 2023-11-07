import { NavLink, Outlet } from 'react-router-dom';
import { StyledLayout, HeaderLayout, NavLayout, Link } from './Layout.styled';
const Layout = () => {
  return (
    <StyledLayout>
      <HeaderLayout>
        <NavLayout>
          <Link to="/"> Home </Link>
          <Link to="/movies"> Movies </Link>
        </NavLayout>
      </HeaderLayout>
      <main>
        <Outlet />
      </main>
    </StyledLayout>
  );
};
export default Layout;
