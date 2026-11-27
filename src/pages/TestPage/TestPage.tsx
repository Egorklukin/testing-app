import { Link, useParams } from "react-router";

export function TestPage() {
  const params = useParams();
  console.log(params.testId);
  return (
    <section>
      <Link to="/student/tests">Назад</Link>
      <h1>Тест №{params.testId}</h1>
      <p></p>
    </section>
  );
}
