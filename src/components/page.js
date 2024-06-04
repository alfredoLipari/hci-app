import React, { useState, useContext } from 'react';
import { WikiContext } from '../context/WikiContext';
import {Link, useParams} from 'react-router-dom';
import JsxParser from 'react-jsx-parser'

export const Page = () => {
    const { id } = useParams();
    const { pages, updatePage } = useContext(WikiContext);
    const page = pages.find(p => p.id === parseInt(id));

    const [isEditing, setIsEditing] = useState(false);
    const [content, setContent] = useState(page.content);

    const handleSave = () => {
        updatePage(page.id, content);
        setIsEditing(false);
    };

    return (
        <div>
            <h1>{page.title}</h1>
            {isEditing ? (
                <div>
                    <textarea value={content} onChange={(e) => setContent(e.target.value)} />
                    <button onClick={handleSave}>Save</button>
                </div>
            ) : (
                <div>
                    <JsxParser
                        components={{Link}}
                        jsx={page.content}
                    />
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </div>
            )}
        </div>
    );
};