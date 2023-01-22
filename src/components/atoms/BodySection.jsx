
import data from '../../data/data'
import '../../assets/Styles/BodySection.css'



function BodySecion() {
    return ( 

        <>
        <div className='ubication'>
            <h2>Direccion</h2>

         {data.ubicacion.donde[0].calle}
        </div>

        <div>
            
        </div>
        
        
        </>
     );
}

export default BodySecion;