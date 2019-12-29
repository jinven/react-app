// https://zh-hans.reactjs.org/docs/hooks-intro.html
import React, { useState, useEffect, useContext, useReducer } from 'react'
import { message  } from 'antd';
import {ThemeContext} from '../context/ThemeContext'

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default:
            throw new Error();
    }
}
const initialState = {count: 0};
function AddHighlight(){
    var eleHighLight = document.getElementById('highlight');
    if(eleHighLight){
        return;
    }
    var eleScript=document.createElement('script');
    var eleJs = document.createElement('script');
    eleScript.src='//cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.17.1/build/highlight.min.js'
    eleHighLight = document.createElement('div');
    eleHighLight.id='highlight';
    eleJs.innerHTML='hljs.initHighlightingOnLoad();';
    eleScript.onload=function(){
        eleHighLight.appendChild(eleJs);
    }
    eleHighLight.appendChild(eleScript);
    document.body.appendChild(eleHighLight);
}
export default function Hook(props){
    console.group('Hook.js');
    console.log('useState', useState(0));
    const [count, setCount] = useState(0);

    // 多级参数避免 props 传递
    const theme = useContext(ThemeContext);

    // 相当于 componentDidMount 和 componentDidUpdate:
    // 会在每次渲染后调用副作用函数 —— 包括第一次渲染的时候
    useEffect(() => {
        message.success('useEffect loaded - 每次组件更新调用');
        return ()=>{
            message.warning('useEffect unloaded - 每次组件更新调用');
        }
    });

    useEffect(() => {
        message.success('useEffect loaded - props.langs改变时更新调用');
        return ()=>{
            message.warning('useEffect unloaded - props.langs改变时更新调用');
        }
    }, [props.langs])

    // useState 的替代方案
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log('useReducer', initialState);
    console.groupEnd();
    AddHighlight();
    return (
        <div className="Home">
            <link rel="stylesheet" href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.17.1/build/styles/atom-one-dark-reasonable.min.css"></link>
            <h1>Hook</h1>
            <div>
                <div>
                    <h1>useState</h1>
                    <p>You clicked {count} times</p>
                    <button onClick={() => setCount(count + 1)}>
                        Click me
                    </button>
                </div>
                <div>
                    <h1>useEffect</h1>
                </div>
                <div>
                    <h1>useContext</h1>
                    <p>ThemeContext: background-{theme.background}, foreground-{theme.foreground}</p>
                </div>
                <div>
                    <h1>useReducer</h1>
                    <p>Count: {state.count}</p>
                    <button onClick={() => dispatch({type: 'decrement'})}>-</button>
                    <button onClick={() => dispatch({type: 'increment'})}>+</button>
                </div>
                <div>
                    <h1>useCallback</h1>
                    <div>
                        <pre style={{width: 650, margin: '0 auto', textAlign: 'left'}}><code className="javascript" style={{padding: '10px 20px'}}>{
`const memoizedCallback = useCallback(
    () => {
        doSomething(a, b);
    },
    [a, b],
);`
                        }</code></pre>
                    </div>
                </div>
                <div>
                    <h1>useMemo</h1>
                    <div>
                        <pre style={{width: 650, margin: '0 auto', textAlign: 'left'}}><code className="javascript" style={{padding: '10px 20px'}}>{
`const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`
                        }</code></pre>
                    </div>
                </div>
                <div>
                    <h1>useRef</h1>
                    <div>
                        <pre style={{width: 650, margin: '0 auto', textAlign: 'left'}}><code className="javascript" style={{padding: '10px 20px'}}>{
`const refContainer = useRef(initialValue);
function TextInputWithFocusButton() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
        // current 指向已挂载到 DOM 上的文本输入元素
        inputEl.current.focus();
    };
    return (
        <>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    );
}
`
                        }</code></pre>
                    </div>
                </div>
                <div>
                    <h1>useImperativeHandle</h1>
                    <div>
                        <pre style={{width: 650, margin: '0 auto', textAlign: 'left'}}><code className="javascript" style={{padding: '10px 20px'}}>{
`useImperativeHandle(ref, createHandle, [deps])

function FancyInput(props, ref) {
    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        }
    }));
    return <input ref={inputRef} ... />;
}
FancyInput = forwardRef(FancyInput);`
                        }</code></pre>
                    </div>
                </div>
                <div>
                    <h1>useLayoutEffect</h1>
                </div>
                <div>
                    <h1>useDebugValue</h1>
                    <div>
                        <pre style={{width: 650, margin: '0 auto', textAlign: 'left'}}><code className="javascript" style={{padding: '10px 20px'}}>{
`useDebugValue(value)

function useFriendStatus(friendID) {
    const [isOnline, setIsOnline] = useState(null);
    // ...
    // 在开发者工具中的这个 Hook 旁边显示标签
    // e.g. "FriendStatus: Online"
    useDebugValue(isOnline ? 'Online' : 'Offline');
    return isOnline;
}

useDebugValue(date, date => date.toDateString());`
                        }</code></pre>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
        </div>
    );
}
