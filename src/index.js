import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import PostsProvider from './providers/PostsProvider';
import UserProvider from './providers/UserProvider';

import Application from './components/Application';

import './index.scss';

render(
  <Router>
    <UserProvider>
      <PostsProvider>
        <Application />
      </PostsProvider>
    </UserProvider>
  </Router>,
  document.getElementById('root')
);
