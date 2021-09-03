import React, { useEffect, useState } from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import axios from 'axios';
import Article from '../components/Article';

const News = () => {

    const [newsData, setNewsData] = useState([]);
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState(false); // On crée un booléen pour gérer les erreurs

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        axios.get('http://localhost:3003/articles').then((res) => setNewsData(res.data));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit !");


        if (content.length < 140) {

            setError(true);

        } else {
        axios.post("http://localhost:3003/articles", {
            author, //l'index à le même nom que la variable et donc on peut tout juste écrire author;
            content,
            date: Date.now(),
        }).then(() => {
            setError(false);
            setAuthor('');
            setContent('');
            getData();
        })
    }
    };

    return (
        <div className="news-container">
            <h1>News</h1>
            <Navigation />
            <Logo />
            
            <form onSubmit={(e) => handleSubmit(e)}>
                <input 
                onChange={(e) => setAuthor(e.target.value)} 
                type="text" 
                placeholder="Nom" 
                value={author}
                />

                <textarea
                style={{border: error ? "1px solid red" : "1px solid #61dafb" }} //Pour gérer le style en react on utilise deux accolades.
                onChange={(e) => setContent(e.target.value)} 
                placeholder="Message" 
                value={content}>
                </textarea>
                {error && <p>Veuillez écrire un minimum de 140 caractères</p>}

                <input 
                type="submit" 
                value="Envoyer" 
                />

            </form>

            <ul>
                {newsData
                    .sort((a,b) => b.date - a.date)
                    .map((article) => (
                    <Article key={article.id} article={article} />
                ) )}
            </ul>
        </div>
    );
};

export default News;