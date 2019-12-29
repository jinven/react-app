// https://reacttraining.com/react-router/
import React from 'react'
import '../assets/css/route.scss'
export default class ChildRoute extends React.Component{
    render(){
        return (
            <div>
                <h2>route</h2>
                <label><input type="checkbox" /><span>A</span></label>
                <label><input type="checkbox" /><span>B</span></label>
                <label><input type="checkbox" /><span>C</span></label>
                <label><input type="checkbox" /><span>D</span></label>
                <p></p>
                <button>go back</button>
                <button>go forward</button>
                <div>
                    <h1>Route props</h1>
                    <ul>
                        <li><a href="/route">/route</a></li>
                        <li><a href="/route/hello">/route/hello</a></li>
                        <li><a href="/route/hello/you">/route/hello/you</a></li>
                        <li><a href="/route/static">/route/static</a></li>
                        <li><a href="/route/dynamic/1">/route/dynamic/1</a></li>
                        <li><a href="/route/attrs">/route/attrs</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
