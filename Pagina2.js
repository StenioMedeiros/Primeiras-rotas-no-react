import React from 'react';
import { Link } from 'react-router-dom';

function Pagina2(){
    return(
        <div>
            <h1>Página 2</h1>
            <p>React Router 2</p>
            <Link to='/'>Página Home</Link> 
        </div>
    );
}

export default Pagina2