import mifoto from '../../assets/img/mifoto.jpg'
import '../../assets/Styles/Header.css'
import '../../data/data'
import data from '../../data/data';


function Header() {
    return ( 
    <header>

        <div className='image'>
        <img src={mifoto} alt="" />
        </div>
            
            <div className='info'>
            <h5>{data.personal.name}</h5>
            <h6>{data.personal.carrera}</h6>
            </div>

    </header> );

    
}

export default Header;