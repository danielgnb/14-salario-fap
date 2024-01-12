import CntGestaofuncionario from '../cntrgestaofuncionario';
import Sectioncontent from '../sectioncontent';
import './content2.css'

const Content2 = () => {
    return (
        <section className='conteiner-content2'>
    <div className='conteiner-centro'>
                <Sectioncontent
                    titulo="Gestão do Funcionário"
                    conteudo = <CntGestaofuncionario/>
                />
            </div>
        </section>
    )
}

export default Content2;