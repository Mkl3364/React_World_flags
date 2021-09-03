import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DeleteArticle from './DeleteArticle';

const Article = ({article}) => { //Destructuration du terme props

    const [isEditing, setIsEditing] = useState(false);
    const [editedContent, setEditedContent] = useState('');

    let dateParser = (date) => {
        let newDate = new Date(date).toLocaleDateString('fr-FR', {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",

        });
        return newDate;
    };

    const handleEdit = () => {

        const data = {
            author: article.author,
            content: editedContent ? editedContent : article.content,
            date: article.date,
        };

        axios.put('http://localhost:3003/articles/' + article.id, data ).then(() => {
            setIsEditing(false);
        })
        setIsEditing(false);
    }

    return (
        <div>
            <div className="article" style={{background: isEditing ? "#f3feff" : "white"}}>
                <div className="card-header">
                    <h3>{article.author}</h3>
                    <em>Posté le {dateParser(article.date)}</em>
                </div>
                {isEditing ?(
                    <textarea 
                    onChange={(e) => setEditedContent(e.target.value)}
                    autoFocus 
                    defaultValue={article.content}>
                    </textarea>
                ) : (
                    <p>{editedContent ? editedContent : article.content}</p>
                )}
                
            
            <div className="btn-container">
                {isEditing ? (
                    <button onClick={handleEdit}>Valider</button>
                ) : (
                    <button onClick={() => setIsEditing(true)}>Editer</button>
                )}
                <DeleteArticle id={article.id}/>
            </div>
            </div>
        </div>
    );
};

export default Article;