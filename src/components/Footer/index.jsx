import './style.scss'

function Footer() {
    return (
        <div className="footer">
            <ul className="footer__col links">
                <li>
                    <img src="/imagens/fb.png" alt="" />
                </li>
                <li>
                    <img src="/imagens/tw.png" alt="" />
                </li>
                <li>
                    <img src="/imagens/ig.png" alt="" />
                </li>
            </ul>
            <div className="footer__col logo">
                <img src="/imagens/logo.png" alt="" />
            </div>
            <div className="footer__col signature">
                Desenvolvido por João Nunes
            </div>
        </div>
    )
}

export default Footer