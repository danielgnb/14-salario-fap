import './sectioncontent.css'

const Sectioncontent = (props) => {
    return (
        <section className='container-section'>
            <div className='container-container'>
            <div className='header-container-section'>
            {props.titulo}
            </div>
            <div className='body-container-section'>
            {props.conteudo}
            </div>
            </div>
        </section>
    )
}

export default Sectioncontent