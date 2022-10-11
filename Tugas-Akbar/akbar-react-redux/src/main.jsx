import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from  'react-redux'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* </Provider> */}
  </React.StrictMode>
)
