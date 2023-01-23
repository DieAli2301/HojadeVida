import icono1 from '../../assets/icons/school.png' 
import icono2 from '../../assets/icons/mail.png'
import icono3 from '../../assets/icons/phone.png'
import '../../assets/Styles/PieBody.css'
import data from '../../data/data';

function PieBody() {
    return (
        <>
        <div className="lineafinal">

        </div>

        <div className='icon1'>
            <img src={icono1} alt="" />
            
            <h2>{data.personal.carrera}</h2>

        </div>

        <div className='icon2'>
            <img src={icono2} alt="" />
            <h2>{data.personal.correo}</h2>

        </div>

        <div className='icon3'>
            <img src={icono3} alt="" />
            <h2>{data.personal.telefono}</h2>

        </div>
        
        
        
        </>
      );
}

export default PieBody;