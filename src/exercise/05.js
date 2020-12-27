// Styling
// http://localhost:3000/isolated/exercise/05.js

import React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`

const boxSizes = {
  small: 'box box--small',
  medium: 'box box--medium',
  large: 'box box--large',
}

const Box = ({size, style, className = ''}) => (
  <div style={style} className={boxSizes[size]}>
    small lightblue box
  </div>
)
const smallBox = (
  <div style={{backgroundColor: 'lightblue'}} className="box box--small">
    small lightblue box
  </div>
)
const mediumBox = (
  <div style={{backgroundColor: 'pink'}} className="box box--medium">
    medium pink box
  </div>
)
const largeBox = (
  <div style={{backgroundColor: 'orange'}} className="box box--large">
    large orange box
  </div>
)

function App() {
  return (
    <div className="box">
      <Box
        size="small"
        style={{backgroundColor: 'lightblue'}}
        className="box box--small"
      />
      <Box
        size="medium"
        style={{backgroundColor: 'pink'}}
        className="box box--medium"
      />
      <Box
        size="large"
        style={{backgroundColor: 'orange'}}
        className="box box--large"
      />
    </div>
  )
}

export default App
