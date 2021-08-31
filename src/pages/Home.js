//import React from 'react'; --> Depuis la nouvelle version React est importé de façon implicite.

import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

//C'est un composant, le nom d'un composant prend une majuscule. Un composant est une fonction JavaScript
const Home = () => {
    return (
        <div className="home"> {/* Balise supérieure à toutes les autres. On peut aussi utiliser le fragment <> */}
            <Navigation /> {/* import du composant Navigation */}
            <Logo />
            <h1>Accueil</h1>
        </div>
    );

};

export default Home; //le mot-clé export nous permet d'exporter le composant afin de le réutiliser dans notre code.

