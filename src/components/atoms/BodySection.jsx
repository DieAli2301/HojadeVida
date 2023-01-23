
import data from '../../data/data'
import '../../assets/Styles/BodySection.css'



function BodySecion() {
    return ( 

        <>
        <div className='ubication'>
            <h2>Direccion</h2>

         {data.ubicacion.donde[0].calle}
        </div>

        <div className='ILIKE'>
            <h2>MIS GUSTOS</h2>
            

            {data.misgustoa.like[0].ami}
            
        </div>
        
        
        </>
     );
}

export default BodySecion;