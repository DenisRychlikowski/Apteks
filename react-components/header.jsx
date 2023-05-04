class LikeButton extends React.Component {
    render() {
        return(
            <React.StrictMode>
                <div className="header-logo">
                    <a href="index.html">
                    <img src="./assets/logo.png" alt="Logo" width="250px" height="80px" />
                    </a>
                </div>
        
                <div className="header-menu">
                    <ul className="navbar d-flex">
                    <li className="links">
                        <a href="index.html" className="link">
                        Strona główna
                        </a>
                    </li>
                    <li className="links --drop">
                        <a href="sklep.html" className="link">
                        Sklep
                        </a>
                        <div className="drop-menu-sklep">
                        <ul>
                            <li>
                            <a href="./sklep-drop-links/zdrowie-sklep.html">Zdrowie</a>
                            </li>
                            <li>
                            <a href="./sklep-drop-links/sport-sklep.html">Sport</a>
                            </li>
                            <li>
                            <a href="./sklep-drop-links/higiena-sklep.html">Higiena</a>
                            </li>
                            <li>
                            <a href="./sklep-drop-links/kosmetyki-sklep.html">Kosmetyki</a>
                            </li>
                        </ul>
                        </div>
                    </li>
                    <li className="links">
                        <a href="information.html" className="link">
                        O nas
                        </a>
                    </li>
                    <li className="cart-icon">
                        <a>
                        <ion-icon size="large" name="cart-outline"></ion-icon>
                        <span className="cart-counter" style={{ display: "none" }}></span>
                        </a>
                    </li>
                    </ul>
                </div>
            </React.StrictMode>
        );
    }
}

const domContainer = document.querySelector('.header');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(LikeButton));