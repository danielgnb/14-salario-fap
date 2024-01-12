import './field.css'

const Field = (props) => {
    return(
        <section>
            <div className="campo-texto">
            <input value={props.valor} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
        </section>
    )
}

export default Field