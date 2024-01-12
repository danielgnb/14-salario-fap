import { useNavigate } from 'react-router-dom';
import './row.css';

export default function Row({ id, img, name, email }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/GestaoFuncionario?id=${id}`);
  };

  return (
    <section className='row'>
      <div>
      <a className='pointer' onClick={handleClick}>
        <img className='row-img' src={img} alt='' />
      </a>
      </div>
      <div className='row-content'>
        <h3 className='row-title'>{name}</h3>
        <p className='row-subtitle'>{email}</p>
      </div>
    </section>
  );
}
