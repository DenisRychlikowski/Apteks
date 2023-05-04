class Footer extends React.Component{
    render() {
        return(
            <React.StrictMode>
                <form action="https://formsubmit.io/send/drychlikowski@gmail.com" className="contact" method="post">
                    <h2>Kontakt</h2>
                    <p>Potrzebujesz pomocy? Napisz do nas</p>
                    <div className="input">
                    <label htmlFor="Imię">Imię</label>
                    <input type="text" name="Imię" />
                    </div>
                    <div className="input">
                    <label htmlFor="Nazwisko">Nazwisko</label>
                    <input type="text" name="Nazwisko" />
                    </div>
                    <div className="input">
                    <label htmlFor="E-mail">E-mail*</label>
                    <input type="text" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" name="E-mail" required />
                    </div>
                    <div className="input">
                    <label htmlFor="Temat">Temat</label>
                    <input type="text" name="Temat" />
                    </div>
                    <div className="input" id="message">
                    <label htmlFor="Wiadomość">Wiadomość*</label>
                    <input type="text" name="Wiadomość" required />
                    </div>
                    <input name="_formsubmit_id" type="text" style={{display: 'none'}} />
                    <input name="_redirect" type="hidden" id="name" defaultValue="https://denisrychlikowski.github.io/Apteks/" /> 
                    <input type="submit" defaultValue="Prześlij" className="submit" />
                </form>
                <div className="footer-links">
                    <ul>
                    <li><a href="./footer-links/payments.html">Metody i płatności</a></li>
                    <li><a href="./footer-links/conditions.html">Zasady i warunki</a></li>
                    <li><a href="./footer-links/cookies-information.html">Polityka plików cookie</a></li>
                    <li><a href="./footer-links/regulations.html">Regulamin</a></li>
                    </ul>
                </div>
                <div className="footer-socials">
                    <ul>
                    <li><a href="https://www.facebook.com/" alt="facebook">
                        <ion-icon size="large" className="fb-icon" name="logo-facebook" />
                        </a></li>
                    <li><a href="https://www.instagram.com/" alt="instagram">
                        <ion-icon size="large" className="ig-icon" name="logo-instagram" />
                        </a></li>
                    <li><a href="https://twitter.com/" alt="twitter">
                        <ion-icon size="large" className="twitter-icon" name="logo-twitter" />
                        </a></li>
                    </ul>
                </div>
            </React.StrictMode>
        );
    }
};

const domContainer = document.querySelector('.footer');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(Footer));