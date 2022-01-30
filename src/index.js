import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const rootElement = document.getElementById('root')

ReactDOM.render(
  <StrictMode>
    <App
      title='Affordale plans for every developer'
      content='Subscribe now to unlock over 500+ UI Components and templates, plus new updates every month 🔥'
      price='Personal'
      amount='$0'
      features='Perfect for use in a personal website or a client project.'
      plan='Choose Personal'
      bg='#0336ff'
    />
    <App
      price='Pro'
      amount='$29'
      features='Get instant access to all 500+ UI components and templates.'
      plan='Choose Pro'
      bg='#ff0266'
    />
    <App
      price='Team'
      amount='$100'
      features='Perfect for teams with big goals and commerical projects or SAAS apps.'
      plan='Choose Team'
      bg='#03dac5'
    />
  </StrictMode>
  , rootElement
)
