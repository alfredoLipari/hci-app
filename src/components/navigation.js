import React, { useContext } from 'react';
import { WikiContext } from '../context/WikiContext';
import { Link } from 'react-router-dom';

export const Navigation = () => {
    const { pages } = useContext(WikiContext);

    const renderSubPages = (subPages) => {
        return subPages.map(subPageId => {
            const subPage = pages.find(p => p.id === subPageId);
            return (
                <li key={subPage.id}>
                    <Link to={`/page/${subPage.id}`}>{subPage.title}</Link>
                </li>
            );
        });
    };

    return (
        <nav>
            <ul>
                {pages.map(page => (
                    <li key={page.id}>
                        <Link to={`/page/${page.id}`}>{page.title}</Link>
                        {page.subPages.length > 0 && (
                            <ul>{renderSubPages(page.subPages)}</ul>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

