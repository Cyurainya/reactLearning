import React from 'react';
import ReactDom from 'react-dom';
import App from './App'

const AppView = ( <
    App / >
)


ReactDom.render(AppView, document.getElementById('root'))
if (module.hot) {
    module.hot.accept();
}