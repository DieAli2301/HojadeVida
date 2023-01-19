import mifoto from '../../assets/img/mifoto.jpg'
import '../../assets/Styles/Header.css'

function Header() {
    return ( 
    <header>
        <img src={mifoto} alt="" />

        <h1>Diego Antonio Ortiz Cruz</h1>

    </header> );
}



export default Header;