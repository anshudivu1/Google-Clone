import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StateProvider } from './StateProvider';
import reducer,{initialState} from './reducer';
import SearchPage from './pages/SearchPage';
import Searchresults from './pages/searchresult';


function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path='/search' element={<Searchresults />} />
          {/* <Route path='/search' /> */}
          
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
