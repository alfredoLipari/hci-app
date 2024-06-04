import React, { useState, useContext } from 'react';
import { WikiContext } from '../context/WikiContext';
import { useNavigate } from 'react-router-dom';

export const AddPage = () => {
    const { addPage } = useContext(WikiContext);
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [language, setLanguage] = useState('en');

    const handleSubmit = (e) => {
        e.preventDefault();
        addPage(title, content, language);
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Title:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <label>Content:</label>
            <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
            <label>Language:</label>
            <input type="text" value={language} onChange={(e) => setLanguage(e.target.value)} required />
            <button type="submit">Add Page</button>
        </form>
    );
};
