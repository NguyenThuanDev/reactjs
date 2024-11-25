import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Demo from './demo.jsx'
import Link from './Link.jsx'
import Radio from './Radio.jsx';
import Container from './Container.jsx'
import Input from './Input.jsx'
import CheckBox from './CheckBox.jsx'
import Todo from './Todo.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App>
      <Radio></Radio>
      <CheckBox></CheckBox>
      <Todo></Todo>
    </App>
  </StrictMode>



)