import { useState } from 'react';
import home from './assets/compsants/home';
import game from './assets/compsants/game';
import path from './assets/compsants/path';
import rules from './assets/compsants/rules';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderComponent = () => {
    switch (currentPage) {
      case  'home':
        return home();
      case 'game':
        return game();
      case 'path':
        return path();
      case 'rules':
        return rules();
      default:
        return home();
    }
  };

  const goNextPage = () => {
    const pages = ['home', 'game', 'path', 'rules'];
    const currentIndex = pages.indexOf(currentPage);
    const nextIndex = (currentIndex + 1) % pages.length;
    setCurrentPage(pages[nextIndex]);
  }

  return (
    <>
      <div className='header'>
        <div id="floting-menu">
          <div className='logo'>
            <img src="logo.png" alt="Logo" />
          </div>
          <div className='menu-button' onClick={() => setCurrentPage('home')}>
            Home
          </div>
          <div className='menu-button' onClick={() => setCurrentPage('game')}>
            Students
          </div>
          <div className='menu-button' onClick={() => setCurrentPage('path')}>
            Path
          </div>
          <div className='menu-button' onClick={() => setCurrentPage('rules')}>
            Rules
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