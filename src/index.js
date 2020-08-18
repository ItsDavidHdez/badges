import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css'
// import BadgeNew from './pages/BadgeNew'
import Badge from './components/Badge';

const container = document.getElementById('app')

ReactDOM.render(<Badge
  firstName="David" 
  lastName1="Vargas" 
  lastName2="Hernandez" 
  career="Frontend engineer" 
  twitter="https://twitter.com/ItsDavidHdez"
  userName="ItsDavidHdez"
  avatarUrl="https://pbs.twimg.com/profile_images/1295633348430163968/kXPrFg6g_400x400.jpg"
  />,
container)
//ReactDOM.render(__qué__, __dónde__)
