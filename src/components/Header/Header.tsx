import './Header.css'

function Header() {
    return(
        <div className='start-screen'>

            <div className='header'>

                <div className='logo'>
                    <div className='title'>Cozy House</div>
                    <div className='sub-title'>Shelter for pets in Boston</div>
                </div>

                <div className='nav-menu'>
                    <a className='nav-link' href="#">About the shelter</a>
                    <a className='nav-link' href="#">Our pets</a>
                    <a className='nav-link' href="#">Help the shelter</a>
                    <a className='nav-link' href="#">Contacts</a>
                </div>

            </div>
        </div>
    )
}

export default Header