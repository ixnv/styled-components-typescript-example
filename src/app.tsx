import * as React from 'react'
import {useState} from 'react'
import Loader from './components/Loader'

export const App: React.FC = () => {
    const [show, toggle] = useState(false)
    const onClick = (): void => toggle(!show)

    return (
        <div>
            <button onClick={onClick}>Show loader</button>
            <Loader show={show}/>
        </div>
    )
}