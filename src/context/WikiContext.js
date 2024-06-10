import React, { createContext, useState } from 'react';
import {Link} from "react-router-dom";

export const WikiContext = createContext();

export const WikiProvider = ({ children }) => {
    const [pages, setPages] = useState([
        { id: 1, tags: ['homepage'], title: 'Home', subtitle: 'Subtitle', comments: [], content: '<><Hero title="Welcome to the Wiki!" subtitle="this is a subtitle" /> <Tags /> <FirstTitle title="Contents" /> <LinkComponent title="Personal Documents" />  <LinkComponent title="Employment Agency" />  <LinkComponent title="Guide" /> </>', language: 'en', subPages: [2, 3] },
        { id: 2, tags: ['documents'], title: 'Personal Documents', subtitle: 'Subtitle', comments: [],  content: '<><Hero title="Identity Card" subtitle="Everything you need to know" /> <Tags /> <FirstTitle title="How to obtain it" /> <Paragraph title="All non-EU foreigners, including minors, can request it. The application for this type of card requires: passport and residence permit (same requirements of the paper one ), fingerprints a single photograph, not older than 6 months, in paper format or on a USB stick, in the standard format required by the law "/>   </>', language: 'en', subPages: [] },
        { id: 3, tags: ['agency', 'work'], subtitle: 'Subtitle', title: 'Employment Agency', comments: [],  content: '<><Hero title="Employment Agency" subtitle="Everything you need to know" /> <Tags /> <FirstTitle title="What are APLs" /> <Paragraph title="They are private operators enrolled in the Computerised Register of Employment Agencies and authorised by Anpal to offer the services of meeting labour supply and demand. In Italy, employment agencies are not all the same" /> </>', language: 'en', subPages: [] },
        { id: 4, tags: ['help', 'faq'], title: 'Guide', subtitle: 'Subtitle', comments: [],  content: '<> <Hero title="Wiki Documentation" subtitle="How to use it" /> <Tags /> <FirstTitle title="How to change language" /> <Paragraph title="to change language, open the world icon and select your language if for that page exist the counterpart in another language. For now only english and italian are supported" /> <FirstTitle title="How to create a new page" /> <Paragraph title="First log in, then click the icon of create a new page and provide a title, that will be used as link to the other pages, and a language. After creating it you can provide the content. In the content input you use a new markup language. The markup language for now supports the followings elements: " /> <SecondTitle title="h1:value renders a title" /> <SecondTitle title="h2:value renders a smaller title" /> <SecondTitle title="paragraph:value renders a paragraph with a breakline" /> <SecondTitle title="link:value renders a link to another page where the value is the name of the other page" /> <Paragraph title="The link has to exist in the wiki or a warning will be provided" /> <Paragraph title="A list of tags can be created for this page so a user can search this page for the tags you provide" /> <FirstTitle title="How to edit the page" /> <Paragraph title="If you want to improve or correct the created or existent page you can instead edit that page by clicking the edit icon, there the same screen as the created page appears so you can modify the content again" /> <FirstTitle title="How to search a page" /> <Paragraph title="The pages can be searched by everyone and are searchable by tags, every page has one or more tag so its easy to identify it" /> <FirstTitle title="How to comment" /> <Paragraph title="To comment you have to be logged in, the comments section is at the end of every page and every page has its unique discussion, feel free to open one!" /> </>', language: 'en', subPages: [] },
        { id: 1, tags: ['homepage'], title: 'Home', subtitle: 'Subtitle', comments: [],  content: '<><Hero title="Benvenuto nella wiki!" subtitle="Questo è un sottotitolo" /> <Tags /> <FirstTitle title="Inizia a scrivere qualcosa!" /> </>', language: 'it', subPages: [2, 3] }
    ]);

    const [language, setLanguage] = useState('en')

    const [languages] = useState(['en', 'it']);

    const [openSideBar, setOpenSideBar] = useState(false)

    const [isLogged, setIsLogged] = useState(false);

    const [openSearch, setOpenSearch] = useState(false);

    const [showToast, setShowToast] = useState({
        "mode": "success",
        "message": "test",
        "show": false
    })

    const addPage = (title, content, language) => {
        const newPage = { id: pages.length + 1, title, content, language, subPages: [] };
        setPages([...pages, newPage]);
    };

    const updatePage = (id, updatedContent, newTags) => {
        const updatedPages = pages.map(page =>
            page.id === id ? { ...page, content: updatedContent, tags: newTags } : page
        );
        setPages(updatedPages);
    };

    const addComment = (id, comment) => {
        const updatedPages = pages.map(page =>
            page.id === id ? { ...page, comments: [...page.comments, comment] } : page
        );
        setPages(updatedPages);
    }

    return (
        <WikiContext.Provider value={{ pages, addPage, updatePage, isLogged, language, setLanguage,languages, showToast, setShowToast, setIsLogged, addComment, setPages, openSideBar, setOpenSideBar, setOpenSearch, openSearch }}>
            {children}
        </WikiContext.Provider>
    );
};