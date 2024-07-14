import  { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { fetchUserInfo } from '../services/api';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://rosamaster129523.protheus.cloudtotvs.com.br:4050/rest/api/oauth2/v1/token', null, {
        params: {
          grant_type: 'password',
        },
        headers: {
            password: password,
            username: username
        },
      });

      const { access_token, refresh_token } = response.data;
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('refresh_token', refresh_token);

      const userInfo = await fetchUserInfo(username);
      localStorage.setItem('user_id', userInfo.id);

      navigate('/home');
    } catch (error) {
      setError('Credenciais inválidas');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Usuário:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default LoginForm;