import fotoprogra from '../../assets/img/Visuel-UX.jpg'
import data from "../../data/data.js";
import '../../data/data'
import '../../assets/Styles/Section2.css'




function Section2() {
    return ( 


        <>
            <div className="informa">
            <h2>SOBRE MI</h2>

          {data.sobremi.info[0].about}

          <l1>{data.personal.js}</l1>
          
         </div>

            <div className="fotoprograma">
                <img src={fotoprogra} alt="" />

            </div>

        </>

     );
}

export default  Section2;