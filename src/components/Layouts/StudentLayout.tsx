import { NavLink, Outlet } from "react-router";
import {
  LogoIcon,
  ProfileIcon,
  StatsIcon,
  TestsIcon,
} from "C:/Users/kluki/test/src/assets/icons.tsx";
import styled from "@emotion/styled";

const Container = styled.div`
  min-height: 100vh;
  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 16px;
  gap: 25px;
  width: 240px;
  flex-shrink: 0;
  min-height: 100vh;
  @media (max-width: 600px) {
    width: 100%;
    min-height: auto;
    border-radius: 0;
  }
`;
const Logo = styled.div`
  color: #0e73f6;
`;

const RoutesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const RouteContainer = styled.div<{ isActive?: boolean }>`
  display: flex;
  cursor: pointer;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  background-color: ${({ isActive }) => (isActive ? "#e8f5ff" : "transparent")};
  border-radius: 10px;
  padding: 10px;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  &.active {
    color: #0e73f6;
  }
  color: black;
`;

const RouteTitle = styled.p`
  font-weight: 500;
  font-size: 14px;
  margin: 0;
`;

const Main = styled.main`
  padding: 26px 36px;
`;
export function StudentLayout() {
  return (
    <Container>
      <NavContainer>
        <Logo>
          <LogoIcon w={163} h={23} />
        </Logo>
        <RoutesContainer>
          <StyledNavLink to="/student/tests">
            {({ isActive }) => (
              <RouteContainer isActive={isActive}>
                <TestsIcon size={24} />
                <RouteTitle>Тестирования</RouteTitle>
              </RouteContainer>
            )}
          </StyledNavLink>
          <StyledNavLink to="/student/stats">
            {({ isActive }) => (
              <RouteContainer isActive={isActive}>
                <StatsIcon size={20} />
                <RouteTitle>Статистика</RouteTitle>
              </RouteContainer>
            )}
          </StyledNavLink>
          <StyledNavLink to="/student/profile">
            {({ isActive }) => (
              <RouteContainer isActive={isActive}>
                <ProfileIcon w={16} h={20} isActive />
                <RouteTitle>Профиль</RouteTitle>
              </RouteContainer>
            )}
          </StyledNavLink>
        </RoutesContainer>
      </NavContainer>
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
}
