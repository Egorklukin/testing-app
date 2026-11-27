import styled from "@emotion/styled";
import { NavLink } from "react-router";

export function TestsPage() {
  const tests = [
    { id: 1, name: "rust", text: "Lorem ipsum dolor sit." },
    { id: 2, name: "C+", text: "Что такое визуальный баланс?" },
    { id: 3, name: "Ruby", text: "123" },
    { id: 4, name: "F#", text: "" },
  ];

  const PageTitle = styled.h1`
    color: #0e73f6;
    font-weight: 700;
    font-size: 36px;
    margin: 0;
  `;

  return (
    <section>
      <PageTitle>Тестирования</PageTitle>
      <ul>
        {tests.map((t) => (
          <NavLink to={`${t.id}`}>
            <li>Тест №{t.id}</li>
          </NavLink>
        ))}
      </ul>
    </section>
  );
}
