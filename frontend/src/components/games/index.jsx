import "./style.css";
import Item from "./item";

const Games = () => {
  const jogos = [
    {
      title: "Megasena",
      premio: 10000.0,
      cotas: 10,
      preço: 80.0,
      date: "20/10/2022",
    },
    {
      title: "Mega Bolão da Virada",
      premio: 10000000.0,
      cotas: 10,
      preço: 8000.0,
      date: "20/10/2022",
    },
    {
      title: "Mega Bolão da Virada",
      premio: 10000000.0,
      cotas: 10,
      preço: 8000.0,
      date: "20/10/2022",
    },
    {
      title: "Mega Bolão da Virada",
      premio: 10000000.0,
      cotas: 10,
      preço: 8000.0,
      date: "20/10/2022",
    },
    {
      title: "Mega Bolão da Virada",
      premio: 10000000.0,
      cotas: 10,
      preço: 8000.0,
      date: "20/10/2022",
    },
    {
      title: "Mega Bolão da Virada",
      premio: 10000000.0,
      cotas: 10,
      preço: 8000.0,
      date: "20/10/2022",
    },
  ];
  return (
    <>
      <h2 className="game-week">Jogos da semana</h2>
      <ul className="game-card">
        {jogos.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
      <br></br><br></br>
      <h2 className="game-week">Jogos da Finalizados</h2>
      <ul className="game-card">
        {jogos.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </>
  );
};

export default Games;
