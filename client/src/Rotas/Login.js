import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const entrarLogin = () => {
        if (username === 'elias' && password === 'familia1!') {
            navigate('/criar-tema');
        } else {
            alert('Usuário ou senha incorretos!');
        }
    }

    return(
        <div style={{padding: '20px'}}>
            <h2>Entrar</h2>
            <input
                type="text"
                placeholder="Usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ display: 'block', marginBottom: '10px' }}
            />
                        <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ display: 'block', marginBottom: '10px' }}
            />
            <button onClick={entrarLogin}>Entrar</button>
        </div>
    )
}

export default Login;