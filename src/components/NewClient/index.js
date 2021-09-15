function NewClient() {
  return (
    <div>
      <h4>Adicionar novo cliente ao servidor</h4>
      <form>
        <input type="text"></input>
        <br />
        <input name="pessoa" type="radio" value="pf" />
        <label>PF </label>
        <br />

        <input name="pessoa" type="radio" value="pj" />
        <label>PJ</label>
        <br />
        <button>Adicionar</button>
      </form>
    </div>
  );
}
export default NewClient;
