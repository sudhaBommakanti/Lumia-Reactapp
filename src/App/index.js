import React from 'react';
import '../avoidFOUC';
import render from './template';
import './style.scss';

// the component
class App extends React.Component {}

App.prototype.render = render;
export default App;


