'use client';
import React, {Component} from 'react'
import { useState } from 'react';
import Fab from '@mui/material/Button';
import { TextField, Stack } from '@mui/material';
import { AddCircleOutlineOutlined } from '@mui/icons-material';

const TodoItem = {
    width: 'auto',
    border: '1px solid black',
    padding: '1em',
    height: '5em'
}
const SubmitButton = {
    
}
export default function listItem() {
   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>)=> {
        event.preventDefault();
        const form = new FormData(event.currentTarget)
        const formData = Object.fromEntries(form.entries());
        console.log(formData);
    }
    const handleChange = async (event: React.FormEvent<HTMLFormElement>)=> {
        event.preventDefault();
    }
    return (
        <Stack sx={{display: "flex", border: "none", width: "fit-content", marginTop: "1em", paddingLeft: "1em"}} direction='column' >
            <h1>I need to:</h1>
       <form method="post" onSubmit={handleSubmit} onChange={handleChange}>
        <TextField id="multiline"  multiline type="text" name="message" placeholder="input item" rows = {2}/> 
        <Fab color="primary" aria-label="add" type="submit" style={{marginTop: "1.5em"}}>
          <AddCircleOutlineOutlined />
        </Fab>

 
        </form>
        </Stack>
        );
  }