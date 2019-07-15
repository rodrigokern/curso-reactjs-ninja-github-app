import React from 'react';
import PropTypes from 'prop-types'

const UserInfo = ({ userInfo }) => {
    const { avatar, login, repos, followers, following } = userInfo

    return (
        <div className='user-info'>
            <img src={avatar} alt='avatar' />
            <h1><a href={`https://github.com/users/${login}`}>{login}</a></h1>
            <ul className='repos-info'>
                <li>Repositórios: {repos}</li>
                <li>Seguidores: {followers}</li>
                <li>Seguindo: {following}</li>
            </ul>
        </div>
    )
}

UserInfo.propTypes = {
    userInfo: PropTypes.shape({
        login: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        repos: PropTypes.number.isRequired,
        followers: PropTypes.number.isRequired,
        following: PropTypes.number.isRequired
    })
}

export default UserInfo
