import { useState } from 'react';
import Home from './assets/compsants/home';
import Game from './assets/compsants/game';
import Path from './assets/compsants/path';
import Rules from './assets/compsants/rules';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderComponent = () => {
    switch (currentPage) {
      case  'home':
        return <Home />;
      case 'game':
        return <Game />;
      case 'path':
        return <Path />;
      case 'rules':
        return <Rules />;
      default:
        return <Home />;
    }
  };

  const goNextPage = () => {
    const pages = ['home', 'game', 'path', 'rules'];
    const currentIndex = pages.indexOf(currentPage);
    const nextIndex = (currentIndex + 1) % pages.length;
    setCurrentPage(pages[nextIndex]);
  }

  const setLanguage = () => {
    console.log('Language toggled');
  }

  return (
    <>
      <div className='header'>
        <div id="floting-menu">
          <div className='logo'>
            <img src="src/assets/IMG_2037.png" id='logo' alt="Logo" onClick={() => setCurrentPage('home')} />
          </div>
          <div className='menu-button' onClick={() => setCurrentPage('home')}>
            Home
          </div>
          <div className='menu-button' onClick={() => setCurrentPage('game')}>
            Mini game
          </div>
          <div className='menu-button' onClick={() => setCurrentPage('path')}>
            Path
          </div>
          <div className='menu-button' onClick={() => setCurrentPage('rules')}>
            Rules
          </div>
          <div className='change-language menu-button' onClick={() => setLanguage()}>
            FR/EN
          </div>
        </div>
      </div>
      <main>
        {renderComponent()}
      </main>
      <div className="footer">
        <button id="button-changepage" onClick={() => goNextPage()}>Next page</button>
      </div>
    </>
  );
};
export default App;