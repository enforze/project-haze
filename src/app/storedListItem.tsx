'use client';
import React, {Component} from 'react'
import { useState } from 'react';
import ListItem from './listItem';
//react type
enum Priority {
    low,
    medium,
    high
}
type storedListItem = {
    data: String
}



export default function storedListItem (itemData: any) {
    return (
        <div>{itemData.data}</div>
    );
}

