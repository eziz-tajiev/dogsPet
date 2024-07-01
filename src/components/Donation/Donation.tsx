import './Donation.css'

function Donation() {
    return(
        <div className='donation-container'>
            <div className='donation-img'>
                <img src="../src/image/donation-dog.png" alt="" />
            </div>
            
            <div className='donation-content'>
                <h1>You can also <br /> make a donation</h1>
                <h5>Name of the bank / Type of bank account</h5>

                <div className='credit-card'>
                    <img src="../src/image/credit-card.svg" alt="" />
                    <p className='number'>8380 2880 8028 8791 7435</p>
                </div>

                <p className='info'>Legal information and lorem ipsum dolor sit amet, consectetur adipiscing elit.
                   Maecenas a ipsum at libero sagittis dignissim sed ac diam.Praesent ultrices maximus tortor et vulputate.
                   Interdum et malesuada fames ac ante ipsum primis in faucibus.
                </p>

            </div>

        </div>

    )
}

export default Donation