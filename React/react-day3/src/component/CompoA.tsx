import React from 'react'
import CompoB from './CompoB'

export default function CompoA({data_prop} : any) {
  return (
    <div>
      <h1>Component A</h1>
      < CompoB data_prop = {data_prop}/>
    </div>
  )
}
