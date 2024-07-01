import './Fotter.css'

function Footer() {
    return(
        <div className='contact-section'>
            <div className='contact-info'>
                <h2>For questions <br /> and suggestions</h2>
                <p className='icon-info'><span className='icon'><img src="./src/items/email.svg" alt="" /></span>email@shelter.com</p>
                <p className='icon-info'><span className='icon'><img src="./src/items/phone.svg" alt="" /></span>+13 674 567 75 54</p>
            </div>

            <div className='visit-info'>
                <h2>We are waiting <br /> for your visit</h2>
                <p className='icon-info'><span className='icon'><img src="./src/items/marker.svg" alt="" /></span>1 Central Street, Boston <br /> (entrance from the store)</p>
                <p className='icon-info'><span className='icon'><img src="./src/items/marker.svg" alt="" /></span>18 South Park, London </p>
            </div>

            <div className='footer-image'>
                <img src="./src/image/footer-img.png" alt="" />

            </div>

        </div>
    )
}







export default Footer