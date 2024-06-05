import React, { useState, useContext } from 'react';
import { WikiContext } from '../context/WikiContext';
import {Link, useParams} from 'react-router-dom';
import JsxParser from 'react-jsx-parser'
import {LinkComponent} from './link.js';
import {Header} from './header.js';
import {Hero} from './hero.js'
import {FirstTitle} from './firstTitle.js'
import {SecondTitle} from './secondTitle.js'

export const Page = ({idPageOptional}) => {
    const { id } = useParams();
    const { pages, updatePage, language } = useContext(WikiContext);
    const page = pages.find(p => (id == null ? p.id === parseInt(idPageOptional) : p.id === parseInt(id)) && p.language === language);

    const [isEditing, setIsEditing] = useState(false);
    const [content, setContent] = useState(page.content);

    const handleSave = () => {
        updatePage(page.id, content);
        setIsEditing(false);
    };

    return (
        <div>
            <Header />
            {isEditing ? (
                <div>
                    <textarea value={content} onChange={(e) => setContent(e.target.value)} />
                    <button onClick={handleSave}>Save</button>
                </div>
            ) : (
                <div>
                    <JsxParser
                        components={{Link,LinkComponent,Hero, FirstTitle,SecondTitle}}
                        jsx={page.content}
                    />
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </div>
            )}
        </div>
    );
};