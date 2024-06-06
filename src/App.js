import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {WikiProvider} from './context/WikiContext';
import {Page} from './components/page';
import { EditPage } from './components/editPage';
import {LoginPage} from "./pages/login";
import {SignupPage} from "./pages/signup";
import {Header} from "./components/header";
import {AddPagePopup} from "./pages/addPage";

export function App() {

    const [isPopupOpen, setPopupOpen] = React.useState(false);

    return (
        <WikiProvider>
            <Router>
                {/*  <Navigation /> */}
                <Header openAddPagePopup={() => setPopupOpen(true)} />
                <AddPagePopup open={isPopupOpen}/>
                <Routes>
                    <Route path="/page/:id" element={<Page />} />
                    <Route path="/edit/:id" element={<EditPage />} />
                    <Route path={'login'} element={<LoginPage />} />
                    <Route path={'signup'} element={<SignupPage />} />
                    <Route path="*" element={<Page idPageOptional={1}/>} />
                </Routes>
            </Router>
        </WikiProvider>
    );
}
