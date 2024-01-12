import Card from '../card';
import Card1 from '../card1';
import Card3 from '../card3';
import Cnthome from '../cnthome';
import Cntregister from '../cntregister';
import Sectioncontent from '../sectioncontent';
import './content2.css'

const Content2 = () => {
    return (
        <section className='conteiner-content2'>
    <div className='conteiner-centro'>
                <Sectioncontent
                    titulo="Cadastro de Funcionário"
                    conteudo = <Cntregister/>
                />
            </div>
        </section>
    )
}

export default Content2;