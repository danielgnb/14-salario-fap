import Item from '../item';
import './menu.css'

const Menu = (props) => {
    return(
        <section className='container-menu'>
            <Item 
            titulo="Inicio"
            link="/home"
            />
            <Item 
            link="/cadastro"
            titulo="Cadastro de Funcionário"
            />
            <Item 
            link="/lista"
            titulo="Lista de Funcionário"
            />
            <Item
            link="/GestaoFuncionario" 
            titulo="Gestão Funcionário"
            />
            <Item
            link="/"
            titulo="Logout"
            />
            </section>
    )
}

export default Menu;