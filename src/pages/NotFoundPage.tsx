import { Link } from "react-router";

export function NotFoundPage() {
  return (
    <main>
      <Link to="/student/profile">Назад</Link>
      <h1>404 — страница не найдена</h1>
    </main>
  );
}
