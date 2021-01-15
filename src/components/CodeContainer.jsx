import React from 'react'
import Code from './Code'

function CodeContainer({ algorithm }) {
  return (
    <div className="code-container">
      <Code selectedAlgo={algorithm} />
    </div>
  )
}

export default CodeContainer
