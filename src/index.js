import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './assets/css/global.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import counter from './reducers'
import langs from './reducers/langs'
import login from './reducers/login'
import user from './reducers/user'
// https://github.com/formatjs/react-intl/blob/master/docs/Getting-Started.md
import {IntlProvider} from 'react-intl';
import zh_CN from './locale/zh_CN'
import en_US from './locale/en_US'
import {themes, ThemeContext} from './context/ThemeContext'

const store = createStore(counter)
const storeLangs = createStore(langs);
const storeLogin = createStore(login);
const storeUser = createStore(user);

let messages = {}
messages['en'] = en_US;
messages['zh'] = zh_CN;

function Main(){
    // const [lang, setLang] = useState('zh');
    //  || setLang(lang==='zh'?'en':'zh')
    const lang = storeLangs.getState();
    console.log('lang',lang);

    // 相当于 componentDidMount 和 componentDidUpdate:
    useEffect(() => {
        document.title = 'App-js';
    });
    return (
        <IntlProvider locale={lang} messages={messages[lang]}>
            <ThemeContext.Provider value={themes.dark}>
                <App 
                    value={store.getState()}
                    langs={storeLangs.getState()}
                    login={storeLogin.getState()}
                    user={storeUser.getState()}
                    onChangeLangs={a => storeLangs.dispatch({ type: a}) }
                    onLogined={a => storeLogin.dispatch({ type: a })}
                    onUserLogin={a => storeUser.dispatch(a)}
                    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
                    onDecrement={() => store.dispatch({ type: 'DECREMENT' })} />
            </ThemeContext.Provider>
        </IntlProvider>
    )
}
const render = () => ReactDOM.render(
    <Main />, 
    document.getElementById('root')
);
// const render = () => ReactDOM.render(
//     <IntlProvider locale={lang} messages={messages[lang]}>
//         <App 
//             value={store.getState()}
//             langs={storeLangs.getState()}
//             login={storeLogin.getState()}
//             user={storeUser.getState()}
//             onChangeLangs={a => storeLangs.dispatch({ type: a})}
//             onLogined={a => storeLogin.dispatch({ type: a })}
//             onUserLogin={a => storeUser.dispatch(a)}
//             onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
//             onDecrement={() => store.dispatch({ type: 'DECREMENT' })} />
//     </IntlProvider>, 
//     document.getElementById('root')
// );

render()
store.subscribe(render)
storeLangs.subscribe(render)
storeLogin.subscribe(render)
storeUser.subscribe(render)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
