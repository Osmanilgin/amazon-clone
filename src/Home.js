import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
    return (
        <div className="Home">
           <div className="home__container">
           <img 
                   className="home__image"
           src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"           />
           
           <div className="home__row">
             <Product 
             id="90829325"
             title="Garmin Forerunner 245 Music,
             GPS Running Smartwatch
             with Music and Advanced Dynamics, Black"
             price={299.99}
             image="https://images-na.ssl-images-amazon.com/images/I/51zwK5zBswL._AC_SL1000_.jpg"
             rating={5}
             />
             <Product 
             id="90819332"
             title="Apple AirPods with Charging Case (Wired)"
             price={320.00}
             image="https://images-na.ssl-images-amazon.com/images/I/71djnhmfy-L._AC_SL1500_.jpg"
             rating={4}
             />
             </div>
             <div className="home__row">
             <Product 
             id="90824332"
             title="Victrola Vintage 3-Speed Bluetooth Portable Suitcase Record Player with Built-in Speakers | Upgraded Turntable Audio Sound| Includes Extra Stylus | Turquoise, Model Number: VSC-550BT-TQ"
             price={44.99}
             image="https://images-na.ssl-images-amazon.com/images/I/716pgZxRYhL._AC_SL1395_.jpg"
             rating={4}
             />
             <Product
             id="23445930"
             title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
             price={98.99}
             rating={5}
             image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
           />
           <Product
             id="3254354345"
             title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
             price={598.99}
             rating={4}
             image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
           />
             </div>
             <div className="home__row">
             <Product
             id="90829332"
             title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
             price={1094.98}
             rating={4}
             image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
           />
             </div>
           </div>
        </div>
    )
}

export default Home
