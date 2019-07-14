import React from 'react';
import './App.css';
import Search from './components/search';
import UserInfo from './components/user-info';
import Actions from './components/actions';
import Repos from './components/repos';

const App = () => {
  const mock = [
    { id: 1, link: '', name: '' },
    { id: 1, link: '', name: '' }
  ]
  const repos = [
    { id: 31797671, link: 'https://api.github.com/repos/fdaciuk/ajax', name: 'fdaciuk/ajax' },
  ]
  const starred = [
  ]
  return (
    <div className='app'>
      <Search />
      <UserInfo />
      <Actions />
      <Repos className='repos' title='Repositórios' repos={repos} />
      <Repos className='starred' title='Favoritos' starred={starred} />
    </div>
  )
}

export default App;
