const Home = () => {
    return (
        <>
            <div className="body">
                <div id="main-content">
                    <h1>Notre village</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, saepe incidunt ea eos voluptate earum consequatur ipsam dolorum quisquam atque esse in eveniet quo nesciunt accusantium quod doloremque mollitia blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quo expedita esse quis commodi reiciendis! Eaque expedita distinctio magni. Incidunt, iste. Hic incidunt voluptatem eum repudiandae quam pariatur rerum officiis!
                        Corrupti reprehenderit recusandae consectetur odit unde omnis distinctio praesentium eum perferendis, accusantium libero porro dignissimos hic quisquam cum facere officiis odio vitae architecto ea dolorum quod numquam. Molestiae, debitis perspiciatis.
                        Suscipit iste reiciendis nisi voluptas? Facilis reiciendis itaque odio inventore beatae, possimus alias quos provident labore, laudantium facere culpa corporis esse accusamus ea sequi vero fuga minus nihil perferendis. At.</p>
                </div>
                <div id="main-content">
                    <h1>Golois</h1>
                    <li id="team-members">
                        <ul>
                            <div className="member-card">
                                <img src="member1.jpg" alt="Member 1" className="member-photo" />
                                <h2 className="member-name">Iulian</h2>
                                <p className="member-role">dev</p>
                            </div>
                        </ul>
                        <ul>
                            <div className="member-card">
                                <img src="member2.jpg" alt="Member 2" className="member-photo" />
                                <h2 className="member-name">Gigi</h2>
                                <p className="member-role">yapper</p>
                            </div>
                        </ul>
                        <ul>
                            <div className="member-card">
                                <img src="member3.jpg" alt="Member 3" className="member-photo" />
                                <h2 className="member-name">Sara</h2>
                                <p className="member-role">designer</p>
                            </div>
                        </ul>
                    </li>
                </div>
            </div>
        </>
    )
}

export default Home