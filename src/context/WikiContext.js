import React, { createContext, useState } from 'react';
import {Link} from "react-router-dom";

export const WikiContext = createContext();

export const WikiProvider = ({ children }) => {
    const [pages, setPages] = useState([
        { id: 1, title: 'Home', content: '<><Hero title="Welcome to the Wiki!" subtitle="this is a subtitle" /> <FirstTitle title="Contents" /> <LinkComponent title="Personal Documents" />  <LinkComponent title="Employment Agency" /> <FirstTitle title="Choose your route" /> <SecondTitle title="Are you a mother?" />  <LinkComponent title="Discover your rights: Maternity" /> </>', language: 'en', subPages: [2, 3] },
        { id: 2, title: 'Personal Documents', content: 'Content of Page 1', language: 'en', subPages: [] },
        { id: 3, title: 'Employment Agency', content: '<LinkComponent title="Personal Documents" />', language: 'en', subPages: [] },
        { id: 4, title: 'Discover your rights: Maternity', content: '<LinkComponent title="Personal Documents" />', language: 'en', subPages: [] },
    ]);

    const [language, setLanguage] = useState('en')

    const [isLogged, setIsLogged] = useState(false);

    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
    }

    const logout = () => {
        setIsLogged(false);
    };

    const login = () => {
        setIsLogged(true);
    }

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
        <WikiContext.Provider value={{ pages, addPage, updatePage, isLogged, login, logout, language, setLanguage  }}>
            {children}
        </WikiContext.Provider>
    );
};