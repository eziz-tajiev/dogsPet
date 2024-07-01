import './Help.css'

function Help() {
    return(
        <div className='help-container'> 
            <h1>How you can help <br /> our shelter</h1>
            <div className='row'>
                <div className='item'>
                    <img src="./src/items/food.svg" alt="" />
                    <p>Pet food</p>
                </div>

                <div className='item'>
                    <img src="./src/items/transportation.svg" alt="" />
                    <p>Transportation</p>
                </div>

                <div className='item'>
                    <img src="./src/items/toys.svg" alt="" />
                    <p>Toys</p>
                </div>

                <div className='item'>
                    <img src="./src/items/cups.svg" alt="" />
                    <p>Bowls and cups</p>
                </div>
                <div className='item'>
                    <img src="./src/items/shampoos.svg" alt="" />
                    <p>Shampoos</p>
                </div>
            </div>

            <div className='row'>
                <div className='item'>
                    <img src="./src/items/vitamins.svg" alt="" />
                    <p>Vitamins</p>
                </div>

                <div className='item'>
                    <img src="./src/items/health.svg" alt="" />
                    <p>Medicines</p>
                </div>

                <div className='item'>
                    <img src="./src/items/collars.svg" alt="" />
                    <p>Collars / leashes</p>
                </div>

                <div className='item'>
                    <img src="./src/items/area.svg" alt="" />
                    <p>Sleeping areas</p>
                </div>
            </div>               
        </div>

    )
}

export default Help