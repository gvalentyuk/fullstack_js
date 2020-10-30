import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

import {InputContainer, SearchIconContainer, SearchInputContainer} from "./search-input.styles";

const SearchInput = () => {
    const history = useHistory()
    const [searchValue, setSearchValue] = useState('')

    const searchHandler = (e) => {
        if (e.key === 'Enter') {
            if (searchValue === '') {
                history.push('/')
            } else {
                history.push(`/products/${searchValue}`)
            }
            setSearchValue('')
        }
    }

    return (
        <SearchInputContainer>
            <SearchIconContainer><i className="fas fa-search"/></SearchIconContainer>
            <InputContainer
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                onKeyDown={e => searchHandler(e)}
            />
        </SearchInputContainer>
    )
}

export default SearchInput