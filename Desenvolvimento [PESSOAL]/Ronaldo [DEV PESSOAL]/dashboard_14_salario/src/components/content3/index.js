
import Cnthome from '../cnthome';

import Sectioncontent from '../sectioncontent';
import './conttent3.css'

const Content3 = () => {
    return (
        <section className='conteiner-content3'>
    <div className='conteiner-centro2'>
                <Sectioncontent
                    titulo="Cadastro de Funcionário"
                    conteudo = <Cnthome/>
                />
            </div>
        </section>
    )
}

export default Content3;