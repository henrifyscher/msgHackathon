import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginModal from './LoginPopUp';
import '../styles/login.css'


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const mockUser = {
    email: 'abc@gmail.com',
    password: '1234'
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email===mockUser.email && password===mockUser.password){
      setShowModal(true)
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/Track')
  };


  let mes = `Welcome ${mockUser.email}!`
  return (
    <div className="login-container">
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            id="email"
            value={email}
            placeholder='Username'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <br></br>
        <div>
          <input
            type="password"
            id="password"
            value={password}
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <LoginModal show={showModal} message={mes} onClose={handleCloseModal} />
    </div>
  );
}

export default Login;
