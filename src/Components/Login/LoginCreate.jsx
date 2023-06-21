import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';

const LoginCreate = () => {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" />
        <Button>Cadastrar</Button>
      </form>
    </section>
  );
};

export default LoginCreate;
