import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "../pages/Home";


function App() {

    

    return ( 

       <BrowserRouter>
       <Route>
        <Route path="/HojadeVida/" element={<Home/>}></Route>
       </Route>
       </BrowserRouter>

      
        
     );
}


export default App;