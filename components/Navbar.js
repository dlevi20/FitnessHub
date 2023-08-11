import { useState, useEffect } from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function Navbar(){

    const [toggle, setToggle] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth)
        })
    }, [window.innerWidth])

    useEffect(() => {
        const navbarMenu = document.querySelector('.navbar-menu')
        const navbarBtn = document.querySelector('#navbar-btn')
        const navbarBrand = document.querySelector('.navbar-brand')

        if(windowWidth < 650 && toggle === false){
            navbarMenu.style.transform = 'translateY(-100%)'
            navbarBtn.style.color = '#f8f8ff'

        } else if(windowWidth < 650 && toggle === true) {
            navbarMenu.style.transform = 'translateY(0%)'
            navbarBtn.style.color = '#242124'
        } else {
            navbarMenu.style.transform = 'translateY(0%)'
            navbarBtn.style.color = '#f8f8ff'
        }
    }, [toggle, window.innerWidth])

    return (
        <div className='shared-layout'>
            <nav>
                <div className="container">
                    <Link to="/"><h1 className="navbar-brand">Fitness Hub</h1></Link>
                    {/* <input className="checkbox-btn" type="checkbox" id="check" /> */}
                    {/* <label htmlFor="check">
                    </label> */}
                    <i className="fa-solid fa-bars" id="navbar-btn" onClick={() => setToggle(!toggle)}></i>
                    <ul className="navbar-menu">
                        <Link to="/about" className="navbar-menu-item" onClick={() => setToggle(!toggle)}><li>Rólunk</li></Link>
                        <Link to="services" className="navbar-menu-item" onClick={() => setToggle(!toggle)}><li>Szolgáltatások</li></Link>
                        <Link to="/prices" className="navbar-menu-item" onClick={() => setToggle(!toggle)}><li>Áraink</li></Link>
                        <Link to="/contact" className="navbar-menu-item" onClick={() => setToggle(!toggle)}><li>Kapcsolat</li></Link>
                    </ul>
                </div>
            </nav>
            <Outlet />
            <footer>
                <div className="container">
                    <div className="footer-about">
                        <h4>Rólunk</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste doloribus eum deserunt? Repellat quidem eligendi id distinctio, beatae expedita. Dolorum sit nesciunt dolore asperiores non reiciendis tempore neque vel corrupti!</p>
                    </div>
                    <div className="footer-open">
                        <h4>Nyitvatartás</h4>
                        <ul>
                            <li>Hétfő - Péntek</li>
                            <li>8:00 - 20:00</li>
                            <li>Szombat - Vasárnap</li>
                            <li>8:00 - 16:00</li>
                        </ul>
                    </div>
                    <div className="footer-contact">
                        <h4>Kapcsolat</h4>
                        <ul>
                            <li>06-70-123-4567</li>
                            <li>emailcim@gmail.com</li>
                            <li>Debrecen, Kossuth tér</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}