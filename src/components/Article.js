import React from 'react';

const Article = ({article}) => { //Destructuration du terme props

    let dateParser = (date) => {
        let newDate = new Date(date).toLocaleDateString('fr-FR', {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",

        });
        return newDate;
    }

    return (
        <div>
            <div className="article">
                <div className="card-header">
                    <h3>{article.author}</h3>
                    <em>Posté le {dateParser(article.date)}</em>
                </div>
                <p>{article.content}</p>
            
            <div className="btn-container">
                <button>Editer</button>
                <button>Supprimer</button>
            </div>
            </div>
        </div>
    );
};

export default Article;