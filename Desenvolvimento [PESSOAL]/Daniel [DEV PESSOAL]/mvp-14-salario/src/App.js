import { useState } from 'react'
import logo from '../src/logo.png'
import './style.css'

function App() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">SoftMakers</span>
            <span className="login-form-title">
              <img src={logo} alt="Logo SoftMakers"></img>
            </span>

            <div className='wrap-input'>
              <input className={email !== "" ? 'has-value input' : 'input'}
               type="email"
               value={email}
               onChange={e => setEmail(e.target.value)}
               ></input>
              <span className='focus-input' data-placeholder="Email"></span>
            </div>

            <div className='wrap-input'>
              <input 
              className={senha !== "" ? 'has-value input' : 'input'}
              type="password"
              value={senha}
              onChange={e => setSenha(e.target.value)}
              ></input>
              <span className='focus-input' data-placeholder="Senha"></span>
            </div>

            <div className='container-login-form-btn'>
              <button className='login-form-btn'>Login</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;