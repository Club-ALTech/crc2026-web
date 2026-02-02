import { Trans, useTranslation } from 'react-i18next';

  const Rules = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="body">
        <div id="main-content">
          <h1>{t('rules.title')}</h1>
          <p>{t('rules.description')}</p>
        </div>
        <div id="main-content">
          <h1>{t('rules.rulesTitle')}</h1>
          <p>
            <Trans
              i18nKey="rules.rulesDescription"
              components={{ link: <a href="https://robo-crc.ca/fr/moduel-2026/" /> }}
            />
          </p>
        </div>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1">{t('rules.rickLink')}</a>
      </div>
    </>
  );
}

export default Rules;