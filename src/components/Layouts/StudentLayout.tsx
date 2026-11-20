import { Outlet } from "react-router";
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
const Logo = styled.div``;

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

const RouteTitle = styled.p<{ isActive?: boolean }>`
  font-weight: 500;
  font-size: 14px;
  margin: 0;
  color: ${({ isActive }) => (isActive ? "#0E73F6" : "#09090B")};
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
          <RouteContainer>
            <TestsIcon size={24} />
            <RouteTitle>Тестирования</RouteTitle>
          </RouteContainer>
          <RouteContainer>
            <StatsIcon size={20} />
            <RouteTitle>Статистика</RouteTitle>
          </RouteContainer>
          <RouteContainer isActive>
            <ProfileIcon w={16} h={20} isActive />
            <RouteTitle isActive>Профиль</RouteTitle>
          </RouteContainer>
        </RoutesContainer>
      </NavContainer>
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
}
