import React from 'react'
import sample from '../../img/sample-image.jpg'

export default function TestNull(element, JSXbody) {
  if (!element) {
    return 'Loading...'
  } else {
    return JSXbody;
  }}


console.log(sample)

const JSXbody = <img id='winner-img' src={sample} alt='RandomImage'></img>

console.log('result of TestNull():', TestNull(sample, JSXbody))