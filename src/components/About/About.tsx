import './About.css'

function About() {
    return(
        <div className="container-shelter">
            <div className="shelter-content">
                <img className= "shelter-img" src="../src/image/about-pets.png" alt="" />
                <div className="shelter-description">
                    <h1>About the shelter <br /> “Cozy House”</h1>

                    <p>Currently we have 121 dogs and 342 cats on our hands and statistics show that only 20% of them will find a family.
                    The others will continue to live with us and will be waiting for a lucky chance to become dearly loved.</p>

                    <p>We feed our wards with the best food and make sure that they do not get sick, feel comfortable (including psychologically) and well.
                    We are supported by 87 volunteers and 28 employees of various skill levels. About 12% of the animals are taken by the shelter staff. 
                    Taking care of the animals, they become attached to the pets and would hardly ever leave them alone.</p>
                </div>
            </div>
        </div>
    )
}

export default About