import React from 'react'
import HelloWorld from './components/HelloWorld'

const App = () => {
    return (
        <>
            <p className="flex justify-center">
                <img alt="React logo" src="@/assets/logo.png" />
            </p>
            <HelloWorld msg="Hello React 16.13 + Vite" />
        </>
    )
}

export default App
