import 'babel-polyfill'
import { render } from 'react-dom'
import React, { Component } from 'react'
import { AppContainer } from 'react-hot-loader'

const rootElement = document.getElementById('app')
const renderApp = () => {
  const App = require('./App.js').default
  render(
    <AppContainer>
        <App />
    </AppContainer>,
    rootElement
  );
};

renderApp(rootElement);

if (module.hot) {
  module.hot.accept(
    './App.js',
    () => renderApp(rootElement)
  )
}
