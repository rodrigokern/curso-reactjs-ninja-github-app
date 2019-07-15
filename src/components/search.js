import React from 'react';

const onKeyUpFunc = (e) => {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13
    if (keyCode === ENTER) {
        const url = `https://api.github.com/users/${value}`
        fetch(url)
            .then((result) => result.json())
            .then((result) => {
                console.log(result)
            })
    }
}

const Search = () => (
    <div className='search'>
        <input
            type='search'
            placeholder='Digite o nome do usuário no GitHub'
            onKeyUp={onKeyUpFunc}
        ></input>
    </div>
)

export default Search
