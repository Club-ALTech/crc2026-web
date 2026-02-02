import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Home from './assets/compsants/home';
import Game from './assets/compsants/game';
import Path from './assets/compsants/path';
import Rules from './assets/compsants/rules';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const { i18n, t } = useTranslation();

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
    const nextLanguage = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(nextLanguage);
  }

  useEffect(() => {
    document.title = t('siteTitle');
    document.documentElement.lang = i18n.language;
  }, [i18n.language, t]);

  return (
    <>
      <div className='header'>
        <div id="floting-menu">
          <div className='logo'>
            <img src="src/assets/IMG_2037.png" id='logo' alt={t('common.logoAlt')} onClick={() => setCurrentPage('home')} />
          </div>
          <div className='menu-button' onClick={() => setCurrentPage('home')}>
            {t('nav.home')}
          </div>
          <div className='menu-button' onClick={() => setCurrentPage('game')}>
            {t('nav.videos')}
          </div>
          <div className='menu-button' onClick={() => setCurrentPage('path')}>
            {t('nav.path')}
          </div>
          <div className='menu-button' onClick={() => setCurrentPage('rules')}>
            {t('nav.rules')}
          </div>
          <div className='change-language menu-button' onClick={() => setLanguage()}>
            {t('nav.languageToggle')}
          </div>
        </div>
      </div>
      <main>
        {renderComponent()}
      </main>
      <div className="footer">
        <button id="button-changepage" onClick={() => goNextPage()}>{t('footer.nextPage')}</button>
      </div>
    </>
  );
};
export default App;