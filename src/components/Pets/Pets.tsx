import './Pets.css'

function Pets() {
    return(
        <div className="pets-container">
            <h1>Our friends who<br /> are looking for a house</h1>
                <div className='navigation'>
                    <button className='nav-button left'>
                        <img src="../src/image/left-arrow.svg" alt="" />
                    </button>
                    <div className="animals">
                        <div className="animal-card">
                            <img src="../src/image/katrine.png" alt="" />
                            <h3>Katrine</h3>
                            <button>Learn more</button>
                        </div>

                        <div className="animal-card">
                            <img src="../src/image/jennifer.png" alt="" />
                            <h3>Jennifer</h3>
                            <button>Learn more</button>
                        </div>

                        <div className="animal-card">
                            <img src="../src/image/woody.png" alt="" />
                            <h3>Woody</h3>
                            <button>Learn more</button>
                        </div>
                    </div>
                    <button className='nav-button right'>
                        <img src="../src/image/right-arrow.svg" alt="" />
                    </button>
                </div>
            <button className='more-button'>Get to know the rest</button>
        </div>

    )
}

export default Pets