import React, { useState } from 'react';
import './App.css';
import Search from './components/search';
import UserInfo from './components/user-info';
import Actions from './components/actions';
import Repos from './components/repos';

const App = () => {
  const [userInfo, setUserInfo] = useState()
  const [repos, setRepos] = useState()
  const [starred, setStarred] = useState()

  const handleSearch = (e) => {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13
    if (keyCode === ENTER && !!value && !!value.length) {
      const url = `https://api.github.com/users/${value}`
      fetch(url)
        .then((result) => result.json())
        .then((result) => {
          if (result.message === "Not Found") {
            return setUserInfo(null)
          }
          console.log(result)
          const { avatar_url, login, public_repos, followers, following, repos_url, starred_url } = result
          // TODO: repos_url, starred_url
          const __userInfo = { avatar: avatar_url, login, repos: public_repos, followers, following, repos_url, starred_url }
          setUserInfo(__userInfo)
        })
    }
  }

  const useUser = !!userInfo
  const useRepos = !!repos && !!repos.length
  const useStarred = !!starred && !!starred.length
  return (
    <div className='app'>
      <Search handleSearch={handleSearch} />
      {!!useUser && <UserInfo userInfo={userInfo} />}
      {!!useUser && <Actions repos_url={userInfo.repos_url} starred_url={userInfo.starred_url} />}
      {useRepos && <Repos className='repos' title='Repositórios' repos={repos} />}
      {useStarred && <Repos className='starred' title='Favoritos' starred={starred} />}
    </div>
  )
}

export default App;
