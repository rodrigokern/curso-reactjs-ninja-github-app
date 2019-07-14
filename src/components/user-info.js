import React from 'react';

const UserInfo = () => {
    const avatar = 'https://avatars2.githubusercontent.com/u/487669?v=4'
    const repo = 'https://github.com/fdaciuk'
    const name = 'Fernando Daciuk'
    const repositorios = 122
    const seguidores = 10
    const seguindo = 10

    return (
        <div className='user-info'>
            <img src={avatar} alt='' />
            <h1> <a href={repo}> {name} </a> </h1>
            <ul className='repos-info'>
                <li>Repositórios:{repositorios}</li>
                <li>Seguidores: {seguidores}</li>
                <li>Seguindo: {seguindo}</li>
            </ul>
        </div>
    )
}

export default UserInfo
