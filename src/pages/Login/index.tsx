import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate('/notifications');
  };

  return (
    <S.Container>
      <S.LoginForm onSubmit={handleSubmit}>
        <h2>Login</h2>
        <S.InputField
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <S.InputField
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <S.Button type="submit">Entrar</S.Button>
      </S.LoginForm>
    </S.Container>
  );
}

export { LoginPage };
