import { Trans, useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className="body">
                <div id="main-content">
                    <h1>{t('home.title')}</h1>
                    <p>
                        <Trans
                            i18nKey="home.description"
                            components={{ strong: <strong />, ins: <ins /> }}
                        />
                    </p>
                </div>
                <div id="main-content">
                    <h1>{t('home.gauloisTitle')}</h1>
                    <li id="team-members">
                        <ul className="row">
                            <div className="member-card">
                                <img src="src\assets\Iulian-Moraru.jpg" alt={t('home.memberAlt', { name: 'Iulian Moraru' })} className="member-photo" />
                                <h2 className="member-name">Iulian Moraru</h2>
                                <p className="member-role">{t('home.members.iulianRole')}</p>
                            </div>
                        </ul>
                        <ul className="row">
                            <div className="member-card">
                                <img src="/src/assets/Gigi.jpg" alt={t('home.memberAlt', { name: 'Guillaume Benoit' })} className="member-photo" />
                                <h2 className="member-name">Guillaume Benoit</h2>
                                <p className="member-role">{t('home.members.guillaumeRole')}</p>
                            </div>
                        </ul>
                        <ul className="row">
                            <div className="member-card">
                                <img src="src\assets\Sara.png" alt={t('home.memberAlt', { name: 'Sara Gonzalez Lux' })} className="member-photo" />
                                <h2 className="member-name">Sara Gonzalez Lux</h2>
                                <p className="member-role">{t('home.members.saraRole')}</p>
                            </div>
                        </ul>
                        <ul className="row">
                            <div className="member-card">
                                <img src="src\assets\Marc-Antoine.jpg" alt={t('home.memberAlt', { name: 'Marc-Antoine Alain' })} className="member-photo" />
                                <h2 className="member-name">Marc-Antoine Alain</h2>
                                <p className="member-role">{t('home.members.marcAntoineRole')}</p>
                            </div>
                        </ul>
                        <ul className="row">
                            <div className="member-card">
                                <img src="src\assets\Felix.jpg" alt={t('home.memberAlt', { name: 'Félix' })} className="member-photo" />
                                <h2 className="member-name">Félix</h2>
                                <p className="member-role">{t('home.members.felixRole')}</p>
                            </div>
                        </ul>
                        <ul className="row">
                            <div className="member-card">
                                <img src="src\assets\Martin.jpg" alt={t('home.memberAlt', { name: 'Martin' })} className="member-photo" />
                                <h2 className="member-name">Martin</h2>
                                <p className="member-role">{t('home.members.martinRole')}</p>
                            </div>
                        </ul>
                    </li>
                    <li id="team-members">
                        <ul className="row">
                            <div className="member-card">
                                <img src="src\assets\victor.jpg" alt={t('home.memberAlt', { name: 'Victor Alois Delsaut' })} className="member-photo" />
                                <h2 className="member-name">Victor Alois Delsaut</h2>
                                <p className="member-role">{t('home.members.victorRole')}</p>
                            </div>
                        </ul>
                        <ul className="row">
                            <div className="member-card">
                                <img src="/src/assets/Clem.jpg" alt={t('home.memberAlt', { name: 'Clémence Godin' })} className="member-photo" />
                                <h2 className="member-name">Clémence Godin</h2>
                                <p className="member-role">{t('home.members.clemenceRole')}</p>
                            </div>
                        </ul>
                        <ul className="row">
                            <div className="member-card">
                                <img src="src\assets\Doha.jpg" alt={t('home.memberAlt', { name: 'Doha El khou' })} className="member-photo" />
                                <h2 className="member-name">Doha El khou</h2>
                                <p className="member-role">{t('home.members.dohaRole')}</p>
                            </div>
                        </ul>
                        <ul className="row">
                            <div className="member-card">
                                <img src="src\assets\Luis.jpg" alt={t('home.memberAlt', { name: 'Bonfanti Louis' })} className="member-photo" />
                                <h2 className="member-name">Bonfanti Louis</h2>
                                <p className="member-role">{t('home.members.louisRole')}</p>
                            </div>
                        </ul>
                        <ul className="row">
                            <div className="member-card">
                                <img src="src\assets\Gaelle.jpg" alt={t('home.memberAlt', { name: 'Gaëlle Kerneïs' })} className="member-photo" />
                                <h2 className="member-name">Gaëlle Kerneïs</h2>
                                <p className="member-role">{t('home.members.gaelleRole')}</p>
                            </div>
                        </ul>
                        <ul className="row">
                            <div className="member-card">
                                <img src="src\assets\Andrei.jpg" alt={t('home.memberAlt', { name: 'Gheorghe Andrei Ionut' })} className="member-photo" />
                                <h2 className="member-name">Gheorghe Andrei Ionut</h2>
                                <p className="member-role">{t('home.members.andreiRole')}</p>
                            </div>
                        </ul>
                    </li>
                    <li id="team-members">
                        <ul className="row">
                            <div className="member-card">
                                <img src="src\assets\Kevin.jpg" alt={t('home.memberAlt', { name: 'Kevin' })} className="member-photo" />
                                <h2 className="member-name">Kevin</h2>
                                <p className="member-role">{t('home.members.kevinRole')}</p>
                            </div>
                        </ul>
                        <ul className="row">
                            <div className="member-card">
                                <img src="src\assets\Juliette.jpg" alt={t('home.memberAlt', { name: 'Juliette Benoit' })} className="member-photo" />
                                <h2 className="member-name">Juliette Benoit</h2>
                                <p className="member-role">{t('home.members.julietteRole')}</p>
                            </div> 
                        </ul>
                        <ul className="row">
                            <div className="member-card">
                                <img src="src\assets\Augustin.png" alt={t('home.memberAlt', { name: 'Augustin' })} className="member-photo" />
                                <h2 className="member-name">Augustin</h2>
                                <p className="member-role">{t('home.members.augustinRole')}</p>
                            </div>
                        </ul>
                        <ul className="row">
                            <div className="member-card">
                                <img src="src\assets\Lucas.jpg" alt={t('home.memberAlt', { name: 'Lucas' })} className="member-photo" />
                                <h2 className="member-name">Lucas</h2>
                                <p className="member-role">{t('home.members.lucasRole')}</p>
                            </div>
                        </ul>
                        <ul className="row">
                            <div className="member-card">
                                <img src="src\assets\Ivan.png" alt={t('home.memberAlt', { name: 'Ivan' })} className="member-photo" />
                                <h2 className="member-name">Ivan</h2>
                                <p className="member-role">{t('home.members.ivanRole')}</p>
                            </div>
                        </ul>
                    </li>
                </div>
            </div>
        </>
    )
}

export default Home