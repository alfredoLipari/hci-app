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
                <AddPagePopup open={isPopupOpen} onClose={() => setPopupOpen(false)}/>
                <Routes>
                    <Route path="/page/:id" element={<><Header openAddPagePopup={() => setPopupOpen(true)}/><Page /></>} />
                    <Route path="/edit/:id" element={<><Header openAddPagePopup={() => setPopupOpen(true)}/><EditPage /></>} />
                    <Route path={'login'} element={<><Header openAddPagePopup={() => setPopupOpen(true)}/><LoginPage /></>} />
                    <Route path={'signup'} element={<><Header openAddPagePopup={() => setPopupOpen(true)}/><SignupPage /></>} />
                    <Route path="*" element={<><Header openAddPagePopup={() => setPopupOpen(true)}/><Page idPageOptional={1}/></>} />
                </Routes>
            </Router>
        </WikiProvider>
    );
}
