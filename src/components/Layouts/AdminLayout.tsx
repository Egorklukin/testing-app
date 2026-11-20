import { Outlet } from "react-router";
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
  background-color: #f8fafd;
  border-radius: 0 12px 12px 0;
`;
const Title = styled.div``;

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

export function AdminLayout() {
  return (
    <Container>
      <NavContainer>
        <Title>Панель администратора</Title>
        <RoutesContainer>
          <RouteContainer>
            <RouteTitle>Личный кабинет</RouteTitle>
          </RouteContainer>
          <RouteContainer>
            <RouteTitle>Управление тестами</RouteTitle>
          </RouteContainer>
          <RouteContainer>
            <RouteTitle>Управление пользователями</RouteTitle>
          </RouteContainer>
        </RoutesContainer>
      </NavContainer>
      <main>
        <Outlet />
      </main>
    </Container>
  );
}
