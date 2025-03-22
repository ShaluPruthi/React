import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

function MyApp() {
    return (
        <div>
            Learn
        </div>
    )
}

//this doen't work because of wrong syntax
// const ReactElement = {
//     type: 'a', //type of tag
//     props: {
//         href: 'http://google.com',
//         target: '_blank'
//     },
//     children: 'click me to visit google'
// }
const anotherElement = (
    <a href="http://google.com" target="_blank">
        visit google
    </a>
)

//create your own element
const ReactElement = React.createElement(
    'a',
    {
        href: 'http://google.com',
        target: '_blank'
    },
    'click me to visit google'
)

createRoot(document.getElementById('root')).render(
    // anotherElement
    // ReactElement
    <App/>
)
