import React from 'react';
import { Link } from 'react-router-dom';

function Pagina1(){
    return(
        <div>
            <h1>Página 1</h1>
            <p>React Router</p>
            <Link to='/pagina2'>Página 2</Link>
        </div>
    );
}

export default Pagina1