import React from 'react';

const Search = ({ handleSearch }) => (
    <div className='search'>
        <input
            type='search'
            placeholder='Digite o nome do usuário no GitHub'
            onKeyUp={handleSearch}
        ></input>
    </div>
)

export default Search
