import React from 'react';
import './App.css';

const App = () => {
  const avatar = 'https://avatars2.githubusercontent.com/u/487669?v=4'
  const repo = 'https://github.com/fdaciuk'
  const name = 'Fernando Daciuk'
  const repositorios = 122
  const seguidores = 10
  const seguindo = 10

  return <div className='app'>
    <div className='search'>
      <input
        type='search'
        placeholder='Digite o nome do usuário no GitHub'
      ></input>
    </div>

    <div className='user-info'>
      <img src={avatar} />
      <h1> <a href={repo}> {name} </a> </h1>
      <ul className='repos-info'>
        <li>Repositórios:{repositorios}</li>
        <li>Seguidores: {seguidores}</li>
        <li>Seguindo: {seguindo}</li>
      </ul>

      <div className='ations'>
        <button>Ver Repositorios</button>
        <button>Ver Favoritos</button>
      </div>

      <div className='repos'>
        <h2>Repositórios:</h2>
        <ul>
          <li><a href='#'>Nome do repositório</a></li>
        </ul>
      </div>

      <div className='starred'>
        <h2>Favoritos:</h2>
        <ul>
          <li><a href='#'>Nome do repositório</a></li>
        </ul>
      </div>

    </div>
  </div>
}

export default App;
