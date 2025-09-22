import React from 'react'
import CompoC from './CompoC'

export default function CompoB({data_prop} : any) {
  return (
    <div>
      <h1>Componen B</h1>
      <CompoC data_prop = {data_prop}/>
    </div>
  )
}
