import React, { createContext, useState } from 'react';
import {Link} from "react-router-dom";

export const WikiContext = createContext();

export const WikiProvider = ({ children }) => {
    const [pages, setPages] = useState([
        { id: 1, tags: ['homepage'], title: 'Home', subtitle: 'Subtitle', comments: ['1'], content: '<><Hero title="Welcome to the Wiki!" subtitle="this is a subtitle" /> <FirstTitle title="Contents" /> <LinkComponent title="Personal Documents" />  <LinkComponent title="Employment Agency" /> <FirstTitle title="Choose your route" /> <SecondTitle title="Are you a mother?" /> <Paragraph title="this is a paragraph"/> <LinkComponent title="Discover your rights: Maternity" /> </>', language: 'en', subPages: [2, 3] },
        { id: 2, tags: ['documents'], title: 'Personal Documents', subtitle: 'Subtitle', comments: [],  content: 'Content of Page 1', language: 'en', subPages: [] },
        { id: 3, tags: ['agency', 'work'], subtitle: 'Subtitle', title: 'Employment Agency', comments: [],  content: '<LinkComponent title="Personal Documents" />', language: 'en', subPages: [] },
        { id: 4, tags: ['mother'], title: 'Discover your rights: Maternity', subtitle: 'Subtitle', comments: [],  content: '<LinkComponent title="Personal Documents" />', language: 'en', subPages: [] },
        { id: 1, tags: ['homepage'], title: 'Home', subtitle: 'Subtitle', comments: [],  content: '<><Hero title="Benvenuto nella wiki!" subtitle="Questo è un sottotitolo" /> <FirstTitle title="Metti qua sotto qualcosa" /> </>', language: 'it', subPages: [2, 3] }
    ]);

    const [language, setLanguage] = useState('en')

    const [languages] = useState(['en', 'it']);

    const [isLogged, setIsLogged] = useState(false);

    const [showToast, setShowToast] = useState({
        "mode": "success",
        "message": "test",
        "show": false
    })

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
        <WikiContext.Provider value={{ pages, addPage, updatePage, isLogged, language, setLanguage,languages, showToast, setShowToast, setIsLogged  }}>
            {children}
        </WikiContext.Provider>
    );
};