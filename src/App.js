import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { WikiProvider } from './context/WikiContext';
import {Navigation} from './components/navigation';
import {Page} from './components/page';
import {AddPage} from './components/addPage';
import { EditPage } from './components/editPage';

export function App() {
  return (
      <WikiProvider>
        <Router>
        {/*  <Navigation /> */}  
          <Routes>
            <Route path="/page/:id" element={<Page />} />
            <Route path="/add" element={<AddPage />} />
            <Route path="/edit/:id" element={<EditPage />} />
            <Route path="/" exact element={<Page idPageOptional="1"/>} />
          </Routes>
        </Router>
      </WikiProvider>
  );
}
