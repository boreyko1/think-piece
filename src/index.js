import React from 'react';
import { render } from 'react-dom';

import PostsProvider from './providers/PostsProvider';

import './index.scss';

import Application from './components/Application';

render(
  <PostsProvider>
    <Application />
  </PostsProvider>,
  document.getElementById('root')
);
