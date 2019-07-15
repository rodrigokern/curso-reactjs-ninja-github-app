import React from 'react';

const Actions = ({ handleRepos, handleStarred }) => {
    return (
        <div className='actions'>
            <button onClick={handleRepos} >Ver Repositorios</button>
            <button onClick={handleStarred} >Ver Favoritos</button>
        </div>
    )
}

export default Actions
