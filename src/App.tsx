import React from 'react';
import logo from './logo.svg';
import './App.css';
import useLocalStorage from 'use-local-storage'
import { EBButton } from 'eastbytes-ui'

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }
  return (
    <div className="App" data-theme={theme}>
      <span>Easy React Dark Mode</span>
      <button onClick={switchTheme}>Switch Theme</button>
      <div className='code-wrapper'>
        <code>Sample code </code>
      </div>
      <EBButton label={'Sample Button'} size='large' primary={false} backgroundColor='green' />
    </div>
  );
}

export default App;
