import './cntregister.css'
import Field from '../field';
import Button from '../button';

const Cntregister = () => {
    return ( 
    <section>
        <div className='cntrregister-container'>
            <p className='titulo-container'>Crie um registro para um funcionário!</p>
            <div className='nome-container'>
                <Field
                obrigatorio={true}
                placeholder='Primeiro Nome'
                />
                <Field
                obrigatorio={true}
                placeholder='Sobrenome'
                />
                </div>
                <Field
                obrigatorio={true}
                placeholder='Endereço de E-mail'
                />
                <Field
                obrigatorio={true}
                placeholder='Número de Folha'
                />
                <div className='buttoncnt-container'>
                    
                <Button>
                    Registre
                </Button>
                
                </div>
           
        </div>

    </section>
    )
}

export default Cntregister