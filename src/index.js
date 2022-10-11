import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import './index.css'
import { Provider } from 'react-redux'

//for now I'm putting comments coz I was getting errors
// import { store } from './app/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    {/* <Provider> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>,
)
