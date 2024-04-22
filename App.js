// alteraçao remota para teste de repositório - Thalles

import React from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

function App() {
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (data) => { 
    console.log(data);
  }

  const checkCEP = (e) => { 
    if (!e.target.value) return; 

    const cep = e.target.value.replace(/\D/g, '');
    if (cep.length !== 8) {
      console.log("CEP inválido.");
      return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(res => res.json())
      .then(data => {
        if (data.erro) {
          console.log("CEP não encontrado.");
          return;
        }
        console.log(data);
        setValue('address', data.logradouro);
        setValue('neighborhood', data.bairro);
        setValue('city', data.localidade);
        setValue('uf', data.uf);
      })
      .catch(err => {
        console.error("Falha na requisição:", err);
      });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        CEP:
        <input type="text" {...register("cep")} onBlur={checkCEP} />
      </label>
      <label>
        Rua:
        <input type="text" {...register("address")}/>
      </label>
      <label>
        Número:
        <input type="text" {...register("addressNumber")}/>
      </label>
      <label>
        Bairro:
        <input type="text" {...register("neighborhood")}/>
      </label>
      <label>
        Cidade:
        <input type="text" {...register("city")}/>
      </label>
      <label>
        Estado:
        <input type="text" {...register("uf")}/>
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
