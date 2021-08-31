//import React from 'react'; --> Depuis la nouvelle version React est importé de façon implicite.

//C'est un composant, le nom d'un composant prend une majuscule. Un composant est une fonction JavaScript
const Home = () => {
    return (
        <div className="home"> {/* Balise supérieure à toutes les autres. On peut aussi utiliser le fragment <> */}
            <h1>Accueil</h1>
        </div>
    );

};

export default Home; //le mot-clé export nous permet d'exporter le composant afin de le réutiliser dans notre code.

