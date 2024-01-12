import './item.css'

const Item = (props) => {
    return (
        <section className='container-itens'>
           <a href={props.link}> <div className='container-titulo'>{props.titulo}</div></a>
            
            </section>
    )
}

export default Item;