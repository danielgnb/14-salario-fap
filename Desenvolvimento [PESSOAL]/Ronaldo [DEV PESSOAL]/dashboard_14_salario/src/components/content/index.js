import Card from '../card';
import Card1 from '../card1';
import Card3 from '../card3';
import Cnthome from '../cnthome';
import Sectioncontent from '../sectioncontent';
import './content.css'

const Content = () => {
    return (
        <section className='conteiner-content'>
            <div className='conteiner-esquero'>
                <div className='coluna'>
                    <Card/>
                    <Card1/>
                    <Card3/>
                </div> </div>
            <div className='conteiner-direito'>
                <Sectioncontent
                    titulo="Seja Bem Vindo!"
                    conteudo = <Cnthome/>
                />
            </div>
        </section>
    )
}

export default Content;