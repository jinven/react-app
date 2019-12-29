export default (state = 'zh', action) => {
    let rs = state;
    switch (action.type) {
        case 'zh':
            rs = 'zh'
            window.localStorage.setItem('lang', rs)
            break
        case 'en':
            rs = 'en'
            window.localStorage.setItem('lang', rs)
            break
        default:
            let lang = window.localStorage.getItem('lang');
            rs = lang === 'en'? 'en' : 'zh'
            break
    }
    return rs
}
