import React from 'react'
import CompoD from './CompoD'

export default function CompoC({data_prop} : any) {
  return (
    <div>
      <h1>Component C</h1>
      <CompoD data_prop = {data_prop}/>
    </div>
  )
}
