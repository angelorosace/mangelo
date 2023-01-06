import logo from '../../mangelo-logo-dark.png' 
import './header.css'
import {motion} from 'framer-motion'

function Header() {
    return (
        <motion.div 
            initial={{y:-10}} 
            animate={{y:0}}
            className="headerContainer">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="linkContainer">
                <a href="#services" className='headerLink'>Services</a>
                <a href="#about" className='headerLink'>About us</a>
                <a href="#contact" className='headerLink'>Contact</a>
            </div>
        </motion.div>
    )
}

export default Header;