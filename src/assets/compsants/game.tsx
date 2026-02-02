import { useTranslation } from 'react-i18next';

  const Game = () => {
  const { t } = useTranslation();
  return( 
  <>
    <div className="game-container">
    <h2>{t('game.studentFilm')}</h2>
      <iframe 
        src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
        className="game-iframe"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title={t('game.videoTitle')}
      ></iframe>
    </div>
    <div className="game-container">
    <h2>{t('game.tutorial')}</h2>
      <iframe 
        src="https://www.youtube.com/embed/xieBHn726UM?si=27qpSlhpfay_SerI" 
        className="game-iframe"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title={t('game.videoTitle')}
      ></iframe>
    </div>
    <div className="referance-container">
      <h2>{t('game.references')}</h2>
      <div className="references-wrapper">
        <iframe 
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRscPvQnuXFhmAVGW1O5kJ7spneWohiBnwZvky6dPKMQBBG4UMkKlJhatE9GIw1410ezrpQtPAOJ4vi/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
          className="references-iframe"
          title={t('game.googleSheetTitle')}
        ></iframe>       
        <iframe 
          src="src\assets\Plan de commandite CRC AL 2025-2026 (1).pdf"
          className="references-iframe"
          title={t('game.pdfTitle')}
        ></iframe>
      </div>
    </div>
  </>
  );
}

export default Game;