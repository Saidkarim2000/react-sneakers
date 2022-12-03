function Header(){
    return(
    <header className="d-flex justify-between align-center">
    <div className="headerLeft d-flex align-center">
        <img src="/img/logo.png" width="50" height="50"/>
        <div>
        <h3 className="text-uppercase">React Sneakers</h3>
        <p>Магазин лучших кроссовок</p>
        </div>
    </div> 
    <ul className="headerRight d-flex">
        <li className="mr-30 d-flex">
        <img className="mr-10" src="\img\cart.svg" width={18} height={18} />
        <span> 1205 руб.</span>
        </li>
        <li>
            <img src="\img\user.svg" width={18} height={18} />
        </li>
        </ul>
    </header>
    )
}



export default Header;