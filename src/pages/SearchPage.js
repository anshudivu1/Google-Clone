import React, { useState } from 'react'
import './SearchPage.css'
import SearchIcon from "@mui/icons-material/Search"
import MicIcon from "@mui/icons-material/Mic"
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'


function SearchPage({ hideButtons = false}) {

    const [{}, dispatch] = useStateValue();

    const [input, setInput] = useState(""); 
    const navigate = useNavigate();

    const search = (e) => {
        e.preventDefault();
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })
        // Do something with the input
        navigate('/search')
    };
  return (
    <form className='search'>
        <div className='search_input'>
            <SearchIcon className = "search__inputicon"/>
            <input value={input} onChange={e => setInput(e.target.value)}/>

            <MicIcon />
        </div>
        {!hideButtons ? (
            <div className='search_button'>
                <Button type="submit" onClick={search} variant='outlined'>Google Search</Button>
                <Button variant='outlined'>It's Divyanshu</Button>

            </div>):(<div className='search_button'>
                <Button className='search_buttonHidden' type="submit" onClick={search} variant='outlined'>Google Search</Button>
                <Button className='search_buttonHidden' variant='outlined'>It's Divyanshu</Button>

            </div>)}
    </form>
  )
}

export default SearchPage;