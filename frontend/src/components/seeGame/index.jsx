import "./style.css";

const SeeGame = (props) => {
  return (
    <>
      <section className="Box-Game">
        <div className="Box-Game-Header">
          <h2 className="Box-Title">{props.title}</h2>
        </div>
        <div className="Box-Game-Footer">
          <h3 className="Box-Game-Item">Valor do prêmio: {props.premio}</h3>
          <h3 className="Box-Game-Item">Cotas: {props.cotas}/10</h3>
          <h3 className="Box-Game-Item">Preço: R${props.preco}</h3>
          <h3 className="Box-Game-Item">Data de encerramento: {props.date}</h3>
        </div>
      </section>
      <div className="Number-Box">
        <h2 className="Number-Box-Title">Números do jogo:</h2>
        <p className="Number-Box-Numbers">30 90 40 60 09 01 21 21 91 02</p>
        <p className="Number-Box-Numbers">30 90 40 60 09 01 21 21 91 02</p>
        <p className="Number-Box-Numbers">30 90 40 60 09 01 21 21 91 02</p>
        <p className="Number-Box-Numbers">30 90 40 60 09 01 21 21 91 02</p>
        <p className="Number-Box-Numbers">30 90 40 60 09 01 21 21 91 02</p>
        <p className="Number-Box-Numbers">30 90 40 60 09 01 21 21 91 02</p>
      </div>
    </>
  );
};
export default SeeGame;
