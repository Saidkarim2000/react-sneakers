function Card() {
    return(
    <div className="card">
      <div className="favorite">
        <img src="/img/unliked.svg" alt="Unliked"/>
      </div>
        <img height={112} width={133} src="/img/sneakers/1.jpg" alt="Sneakers" />
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена: </span>
            <b>12 999 руб. </b>
          </div>
            <button className="d-flex">
            <img src="/img/plus.svg" alt="Plus" width={11} height={11}/>
            </button>
        </div>
    </div>  
    );
}        

export default Card;