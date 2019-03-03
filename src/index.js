import React from 'react';
import { render } from 'react-dom';

import PostsProvider from './providers/PostsProvider';
import UserProvider from './providers/UserProvider';

import Application from './components/Application';

import './index.scss';

render(
  <UserProvider>
    <PostsProvider>
      <Application />
    </PostsProvider>
  </UserProvider>,
  document.getElementById('root')
);
