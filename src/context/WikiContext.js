import React, { createContext, useState } from 'react';
import {Link} from "react-router-dom";

export const WikiContext = createContext();

export const WikiProvider = ({ children }) => {
    const [pages, setPages] = useState([
        { id: 1, title: 'Home', content: 'Welcome to the Wiki!', language: 'en', subPages: [2, 3] },
        { id: 2, title: 'Page 1', content: 'Content of Page 1', language: 'en', subPages: [] },
        { id: 3, title: 'Page 2', content: '<Link to={"/page/1"}>ciaoo</Link>', language: 'en', subPages: [] },
    ]);

    const addPage = (title, content, language) => {
        const newPage = { id: pages.length + 1, title, content, language, subPages: [] };
        setPages([...pages, newPage]);
    };

    const updatePage = (id, updatedContent) => {
        const updatedPages = pages.map(page =>
            page.id === id ? { ...page, content: updatedContent } : page
        );
        setPages(updatedPages);
    };

    return (
        <WikiContext.Provider value={{ pages, addPage, updatePage }}>
            {children}
        </WikiContext.Provider>
    );
};