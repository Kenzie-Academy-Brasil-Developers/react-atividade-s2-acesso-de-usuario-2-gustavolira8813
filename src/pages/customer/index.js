import { useParams } from "react-router";

import { Link } from "react-router-dom";

function Customer({ members }) {
  let { id } = useParams();
  const member = members.find((e) => e.id === id);

  return (
    <div>
      <h3>Detalhes do cliente</h3>
      <p>Nome: {member && member.name}</p>
      <Link to="/">Voltar</Link>
    </div>
  );
}

export default Customer;
