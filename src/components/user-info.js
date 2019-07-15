import React from 'react';
import PropTypes from 'prop-types'

// const UserInfo = ({ avatar, username, repo, repos, followers, following }) => {
const UserInfo = ({ userInfo }) => {
    const { avatar, username, repo, repos, followers, following } = userInfo

    return (
        <div className='user-info'>
            <img src={avatar} alt='avatar' />
            <h1> <a href={repo}> {username} </a> </h1>
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
        username: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        repo: PropTypes.string.isRequired,
        repos: PropTypes.number.isRequired,
        followers: PropTypes.number.isRequired,
        following: PropTypes.number.isRequired
    })
}

export default UserInfo
