const Home = () => {
    return (
        <>
            <div className="body">
                <div id="main-content">
                    <h1>Le village André-Laurendeau</h1>
                    <p>Ce village resistant toujours contre l'empire Saint-Marcelin. Cette année, nous somme prêts à défaire l'envahisseur à la compétition des druides, <strong>CRC Robotique MODUEL MMXXVI</strong>.
                        Nous venons préparer avec un robot innovant et époustouflant, mais aussi le plus important, une équipe soudée et motivée pour gagner cette compétition. Commposer de notre savant 
                        fou <strong>Guillaume dit Cétautomatix</strong> (<ins>Charger de la conception du robot</ins>), puis <strong>Félix dit Asterix</strong> (<ins>Chef de progamation</ins>), 
                        avec <strong>Sara dite Fabala</strong> (<ins>Designeuse du Kiosque et charger de vidéo</ins>) et enfin <strong>Martin dit Panoramix</strong> (<ins>Penseur et stratège</ins>). 
                        Le village est habiter de bien d'autre Gaulois prêt à en découdre avec l'empire (<strong>liste des habitants ci-dessous</strong>). Alors préparez-vous La CRC, car cette année, le village André-Laurendeau va tout déchirer!!!
                    </p>
                </div>
                <div id="main-content">
                    <h1>Gaulois</h1>
                    <li id="team-members">
                        <ul className="row">
                            <div className="member-card">
                                <img src="member1.jpg" alt="Member 1" className="member-photo" />
                                <h2 className="member-name">Iulian</h2>
                                <p className="member-role">dev</p>
                            </div>
                        </ul>
                        <ul className="row">
                            <div className="member-card">
                                <img src="member2.jpg" alt="Member 2" className="member-photo" />
                                <h2 className="member-name">Gigi</h2>
                                <p className="member-role">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis deleniti necessitatibus pariatur voluptatibus cumque nobis optio quo error officia quas sint, ab, sequi dolor quos nesciunt reiciendis aperiam. Dolorum, delectus.</p>
                            </div>
                        </ul>
                        <ul className="row">
                            <div className="member-card">
                                <img src="member3.jpg" alt="Member 3" className="member-photo" />
                                <h2 className="member-name">Sara Gonzalez Lux</h2>
                                <p className="member-role">Responsable vidéo et kiosque, rôle de Assurencetourix</p>
                            </div>
                        </ul>
                        <ul className="row">
                            <div className="member-card">
                                <img src="member3.jpg" alt="Member 3" className="member-photo" />
                                <h2 className="member-name">Marc-Antoine</h2>
                                <p className="member-role">aide à la programmation du robot</p>
                            </div>
                        </ul>
                    </li>
                </div>
            </div>
        </>
    )
}

export default Home