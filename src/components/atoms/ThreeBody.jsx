
import '../../assets/Styles/ThreeBody.css'
import data from '../../data/data';

function ThreeBody() {
    return ( 

        <>
        <div className='dateacademico'>
        <h2>GRADO ACADEMICO</h2>
        {data.secion3.grado[0].academico}

        </div>


        <div className='freetimes'>
        <h2>PASATIEMPOS</h2>
        {data.secion3.grado[1].hobbies}

        </div>


        <div className='looking'>
        <h2>LO QUE BUSCO</h2>
        {data.secion3.grado[2].loqbusco}

        </div>
        
        </>
     );
}

export default ThreeBody;