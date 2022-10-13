import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

let counter = 1

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <App counter={counter} />
// )

const refresh = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <App counter={counter} />
  )
}


counter += 1
counter += 1
// refresh()
counter += 7
refresh()