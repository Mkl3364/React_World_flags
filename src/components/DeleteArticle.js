import axios from 'axios';
import React from 'react';
import Article from './Article';

const DeleteArticle = ({ id }) => {

    const handleDelete = () => {
        axios.delete('http://localhost:3003/articles/' + id);
        window.location.reload();
    }
    
    return (
        <button onClick={() => {
            if (window.confirm("Souhaites tu supprimer cet article ?")) {
                handleDelete();
            }
        }}>
           Supprimer 
        </button>
    );
};

export default DeleteArticle;