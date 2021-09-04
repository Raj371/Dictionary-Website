import {  createTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core';
import React from 'react';
import './Header.css';
import categories from '../../data/Category';

const Header = ({category , setCategory ,word,setWord ,lightMode}) => {

    const darkTheme = createTheme({
        palette:{
            primary: {  // add so  on focus color will be white 
                main:lightMode ? '#000' : "#fff",
                
            },
            type:lightMode ? "light" : "dark",
        },
    });

    const handleChange = (language) => {
        setWord("");
        setCategory(language);
    }

    return (
        <div className="header">
            <span className="title">{word?word: "Word Hunt"}</span>
            <div className="input">
                <ThemeProvider theme={darkTheme}>
                    <TextField value={word} onChange={(e)=>setWord(e.target.value)} label="Search a Word" className = "search" />
                    <TextField
                        select
                        className="select"
                        value={category}
                        onChange={(e) => handleChange(e.target.value)}
                        label="Language"
                        >
                        {
                            categories.map((option) => (
                                <MenuItem key={option.label} value={option.label}>
                                    {option.value}
                                </MenuItem>
                            ))
                        }
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header;