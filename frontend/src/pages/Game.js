import "./Game.css";
import Navbar from "../components/navbar/";
import SeeGame from "../components/seeGame";

function Game(props) {
  const jogo = {
    title: "Megasena",
    premio: 10000.0,
    cotas: 10,
    preco: 80.0,
    date: "20/10/2022",
  };

  return (
    <div>
      <Navbar />
      <SeeGame 
        key = 'id'
        {...jogo}
      />
    </div>
  );
}

export default Game;
