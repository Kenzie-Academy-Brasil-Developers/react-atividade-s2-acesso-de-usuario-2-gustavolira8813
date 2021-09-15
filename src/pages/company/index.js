import { useParams, Link } from "react-router-dom";

function Company({ members }) {
  let { id } = useParams();
  const member = members.find((e) => e.id === id);
  return (
    <div>
      <h3>Detalhes da empresa:</h3>
      <p>Nome: {member && member.name}</p>
      <Link to="/">Voltar</Link>
    </div>
  );
}

export default Company;
