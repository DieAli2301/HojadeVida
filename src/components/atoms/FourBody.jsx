import '../../assets/Styles/FourBody.css'
import data from '../../data/data';
import javafoto from '../../assets/icons/javafoto.png'
import reactfoto from '../../assets/icons/reactfoto.png'
import cssfoto from '../../assets/icons/cssfoto.png'


function FourBody() {
    return ( 
        <>
        <div className='tecnologias'>
        <h2>TECNOLOGIAS UTILIZADAS</h2>
        </div>

        <div className='fotojs'>
            <img src={javafoto} alt="" />
            <h2>JAVASCRIPT</h2>

            <h5>{data.secion4.infjs[0].ijs}</h5>

        </div>

        <div className='reafoto'>
            <img src={reactfoto} alt="" />
            <h2>REACT</h2>
            <h5>{data.secion4.infjs[1].ireact}</h5>

        
        </div>

        <div className='photocss'>
            <img src={cssfoto} alt="" />
            <h2>CSS</h2>
            <h5>{data.secion4.infjs[2].icss}</h5>

        </div>

    




        
        </>
     );
}

export default FourBody;