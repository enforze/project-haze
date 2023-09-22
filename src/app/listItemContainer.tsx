'use client';
import React, {Component} from 'react'
import { useState } from 'react';
import ListItem from './listItem';
import StoredListItem from './storedListItem';



//callback function -> button clicked -> create (storedListItem(info,info,info))
//on new data ->
export default function ListItemContainer () {
    const [list,setList] = useState([] as any);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        console.log("helloFromCuntainer");
        const form = new FormData(event.currentTarget)
        const formData = Object.fromEntries(form.entries());
        console.log(formData);
        setList([...list, formData]);
    }
    //make state for having data, onstate data -> div.append<storedListItem(formData)> 
    return (
        <>      
            ${
                list.map(
                (listItem: any)=>{
                <StoredListItem listItem = {listItem}  />  
                })
            }
                        <ListItem mySubmit= {handleSubmit}/>
            <div>helloWorld</div>

            <div></div>
        </>

    );
}