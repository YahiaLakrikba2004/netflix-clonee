import React from 'react';
import './App.css';
import MyFooter from './components/MyFooter';
import Header from './components/MyHeader';
import Movies from './components/MyMovies'; // Importa il componente Movies
import MyNavbar from './components/MyNavbar';

function App() {
  return (
    <div className="App">
      <div className='my-nav-bar'><MyNavbar/></div>

    
      <div className='header'>
        <Header/>
        <div className='Movies'><Movies title="One piece" category="Trending Now:" />
        <Movies title="Harry Potter" category="Watch It Again:" />
        <Movies title="Star Wars" category="New Relases:" />
        <Movies title="Avengers" category="Avengers:"/>
        <Movies title="Horror" category="New Horror Film:"/>
        <Movies title="Dragon ball" category="Because you've watched One piece:"/></div>
        
      </div>

      <div className='footer'><MyFooter/></div>
    </div>
  );
}

export default App;
