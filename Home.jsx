import React from 'react';
import { Link } from 'react-router-dom';

function Home(){
    return(
        <div>
            <h1>Página Home</h1>
            <p>React Router</p>
            <Link to='/pagina1'>Página 1</Link>
        </div>
    );
}

export default Home