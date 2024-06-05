import React, {useContext} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {WikiContext, WikiProvider} from './context/WikiContext';
import {Navigation} from './components/navigation';
import {Page} from './components/page';
import {AddPage} from './components/addPage';
import { EditPage } from './components/editPage';
import {LoginPage} from "./pages/login";
import {SignupPage} from "./pages/signup";

export function App() {

    return (
        <WikiProvider>
            <Router>
                {/*  <Navigation /> */}
                <Routes>
                    <Route path="/page/:id" element={<Page />} />
                    <Route path="/add" element={<AddPage />} />
                    <Route path="/edit/:id" element={<EditPage />} />
                    <Route path={'login'} element={<LoginPage />} />
                    <Route path={'signup'} element={<SignupPage />} />
                    <Route path="*" element={<Page idPageOptional={1}/>} />
                </Routes>
            </Router>
        </WikiProvider>
    );
}
