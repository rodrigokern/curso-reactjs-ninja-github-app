import React from 'react';
import './App.css';
import Search from './components/search';
import UserInfo from './components/user-info';
import Actions from './components/actions';
import Repos from './components/repos';

const App = () => {
  const userInfo = {
    avatar: 'https://avatars2.githubusercontent.com/u/487669?v=4',
    repo: 'https://github.com/fdaciuk',
    username: 'Fernando Daciuk',
    repos: 12,
    followers: 10,
    following: 10
  }
  const repos = [
    { id: 31797671, link: 'https://api.github.com/repos/fdaciuk/ajax', name: 'fdaciuk/ajax' },
  ]
  const starred = [
  ]
  const useUser = !!userInfo
  const useRepos = !!repos && !!repos.length
  const useStarred = !!starred && !!starred.length
  return (
    <div className='app'>
      <Search />
      {!!useUser && <UserInfo userInfo={userInfo} />}
      {!!useUser && <Actions />}
      {useRepos && <Repos className='repos' title='Repositórios' repos={repos} />}
      {useStarred && <Repos className='starred' title='Favoritos' starred={starred} />}
    </div>
  )
}

export default App;
