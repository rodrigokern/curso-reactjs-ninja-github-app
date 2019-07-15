import React, { useState, useEffect } from 'react';
import './App.css';
import Search from './components/search';
import UserInfo from './components/user-info';
import Actions from './components/actions';
import Repos from './components/repos';

const App = () => {
  const [userInfo, setUserInfo] = useState()
  const [repos, setRepos] = useState()
  const [starred, setStarred] = useState()

  useEffect(() => {
    // fake search-init
    handleSearch({ keyCode: 13, target: { value: 'fdaciuk' } })
  }, [])

  const handleSearch = (e) => {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13
    if (keyCode === ENTER) {
      if (!value || !value.length) {
        // return setUserInfo(null)
        return
      }
      const url = `https://api.github.com/users/${value}`
      fetch(url)
        .then((result) => result.json())
        .then((result) => {
          if (result.message === "Not Found") {
            return setUserInfo(null)
          }
          console.log(result)
          const { avatar_url, login, public_repos, followers, following, repos_url, starred_url } = result
          const __userInfo = { avatar: avatar_url, login, repos: public_repos, followers, following, repos_url, starred_url }
          setUserInfo(__userInfo)
        })
    }
  }

  const mapRepos = (result) => {
    if (result.message === "Not Found") {
      return setRepos(null)
    }
    console.log(result)
    var _repos = result.map(
      (repo) => {
        return { id: repo.id, link: repo.html_url, name: repo.name }
      }
    )
    setRepos(_repos)
  }

  const handleRepos = (e) => {
    const url = `https://api.github.com/users/${userInfo.login}/repos`
    fetch(url)
      .then((result) => result.json())
      .then(mapRepos)
  }

  const handleStarred = (e) => {
    const url = `https://api.github.com/users/${userInfo.login}/starred`
    fetch(url)
      .then((result) => result.json())
      .then(mapRepos)
  }

  const useUser = !!userInfo
  const useRepos = !!repos && !!repos.length
  const useStarred = !!starred && !!starred.length
  return (
    <div className='app'>
      <Search handleSearch={handleSearch} />
      {!!useUser && <UserInfo userInfo={userInfo} />}
      {!!useUser && <Actions handleRepos={handleRepos} handleStarred={handleStarred} />}
      {useRepos && <Repos className='repos' title='Repositórios' repos={repos} />}
      {useStarred && <Repos className='starred' title='Favoritos' starred={starred} />}
    </div>
  )
}

export default App;
