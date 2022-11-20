import React from 'react';
import './App.css';
import './lib/font-awesome/font-awesome.min.css'
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import NewPost from './pages/NewPost';
import ViewPost from './pages/ViewPost';
import EditPost from './pages/EditPost';

function App() {
  return (
    <div className='wrapper'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts/new' element={<NewPost />} />
        <Route path='/posts/:id' element={<ViewPost />} />
        <Route path='/posts/:id/edit' element={<EditPost />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
