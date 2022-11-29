function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center">
        <div className="headerLeft d-flex align-center">
          <img src="/img/logo.png" width="50" height="50"/>
            <div>
              <h3 className="text-uppercase">React Sneakers</h3>
              <p>Магазин лучших кроссовок</p>
            </div>
        </div>
        
        <ul className="headerRight d-flex">
          <li className="mr-30">
            <img src="\img\cart.svg" width={18} height={18} />
              <span>1205 руб.</span>
            </li>
          <li>
          <img src="\img\user.svg" width={18} height={18} />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">Все кроссовки</h1>
        
        <div className="d-flex">
          <div className="card">
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
          <div className="card">
            <img height={112} width={133} src="/img/sneakers/2.jpg" alt="Sneakers" />
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
          <div className="card">
            <img height={112} width={133} src="/img/sneakers/3.jpg" alt="Sneakers" />
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
          <div className="card">
            <img height={112} width={133} src="/img/sneakers/4.jpg" alt="Sneakers" />
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
        </div>
      </div>
    </div>
  );
}

export default App;
