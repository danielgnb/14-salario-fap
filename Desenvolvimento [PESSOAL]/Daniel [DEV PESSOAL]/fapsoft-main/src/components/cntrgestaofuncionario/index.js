import React, { useEffect } from 'react';
import './cntregister.css';
import Field from '../field';
import Button from '../button';
import { useLocation, useNavigate } from 'react-router-dom';
import { Mock } from '../../utils/mock';

const Cntregister = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');
  console.log(id);

  const redirectToLista = () => {
    navigate('/lista');
  };

  useEffect(() => {
    if (id == null) {
      redirectToLista();
    }
  }, [id, redirectToLista]);

  const funcionario = Mock.find((item) => item.id === parseInt(id, 10));

  if (!funcionario) {
    redirectToLista();
    return null;
  }

  const { name, email } = funcionario;

  return (
    <section>
      <div className='cntrregister-container'>
        <p className='titulo-container'>Avaliação do Funcionário</p>
        <p className='titulo-container mt-3'>Nome: {name} / Email: {email}</p>
        <div className='nome-container'>
          <Field obrigatorio={true} placeholder='Assiduidade' />
          <Field obrigatorio={true} placeholder='Feedback' />
        </div>
        <Field obrigatorio={true} placeholder='Sprints' />
        <div className='buttoncnt-container'>
          <Button>Enviar</Button>
        </div>
      </div>
    </section>
  );
};

export default Cntregister;