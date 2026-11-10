import './Footer.css'
import logo from '../../assets/img/logo.svg';
import { Link } from 'react-router-dom';

function Footer() {
    return(
    <footer>
        <div className="container footer_container">
            <Link to="/admprodutos"><img src= {logo} alt=""/></Link> 
            <span>© 2026 Bolos do Jacquin. A excelência da patisserie francesa.</span>
            <nav>
                <a href="">Instagram</a>
                <a href="">Facebook</a>
            </nav>
        </div>
    </footer>
    )
}

export default Footer