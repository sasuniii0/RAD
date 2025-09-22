import React from 'react'
import {useContext}from 'react'
import { DataContext } from '../App'

export default function CompoD({data_prop} : any) {
    const {data,setData} = useContext(DataContext)
  return (
    <div>
        <h1>Component D</h1>
        <h2>Props : {data_prop}</h2>
        <h2>Context : {data}</h2>
        <button onClick={()=>{
            setData("Hello")
        }}>Change here</button>
    </div>
  )
}
