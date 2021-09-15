import { Link } from "react-router-dom";
import "./style.css";
function Home({ members }) {
  return (
    <div className="boxHome">
      <h2>Banco de Dados</h2>
      <ul className="listNames">
        {members.map((e) => (
          <li key={e.id}>
            <Link
              to={e.type === "pf" ? `/costumer/${e.id}` : `/company/${e.id}`}
            >
              {e.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Home;
