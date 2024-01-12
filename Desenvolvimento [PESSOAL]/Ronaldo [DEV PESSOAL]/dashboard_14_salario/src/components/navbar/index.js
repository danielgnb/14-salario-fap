import Button from '../button';
import './navbar.css'

const Navbar = () => {
    return (
        <nav className='nav-container'>
            <div className='logo-container'>
                <img src="./logo.png"/>
            </div>
            <div className='button-container'>
            
           <Button>
                Acessar o Raking
            <img src="./arrow.png"/>
            </Button>
            
            </div>

        </nav>
    )
}

export default Navbar;