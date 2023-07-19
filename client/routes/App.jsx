import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  useParams,
} from 'react-router-dom';

import Home from './Home.jsx';
import User from './User.jsx';
import SignIn from './SignIn.jsx';
import '../styles.scss';
import FileContext from './dataStore.js';

const App = () => {

  return (
    <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/user/:userId" element={<User />} />
        </Routes>
    </div>
  );
};

export default App;
