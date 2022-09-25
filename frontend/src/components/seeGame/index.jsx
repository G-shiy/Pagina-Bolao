import "./style.css";

const SeeGame = (props) => {
  return (
    <>
      <section className="Box-Game">
        <div className="Box-Game-Header">
            <h2 className="Box-Title">{props.title}</h2>
        </div>
        <div className="Box-Game-Footer">
            <h3>Valor do prêmio: {props.premio}</h3>
            <h3>Cotas: {props.cotas}/10</h3>
            <h3>Preço: R${props.preco}</h3>
            <h3>Data de encerramento: {props.date}</h3>         
        </div>
      </section>
    </>
  );
};
export default SeeGame;
