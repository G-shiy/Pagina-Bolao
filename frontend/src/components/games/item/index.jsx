import "./style.css"
const Item = (props) =>{
    return(
        <li className="card">
            <div className="title-bar-card">
                <h3 className="card-title">{props.title}</h3>
                <p className="card-date">{props.date}</p>
            </div>
            <div className="card-main">
                <div class="main-description">Prêmio: R${props.premio}</div>
                <div class="main-description">Preço: R${props.preço}</div>
                <div class="main-description">Cotas: {props.cotas}</div>
            </div>
            <button className="card-buy">Comprar</button>
        </li>
    )
}

export default Item;