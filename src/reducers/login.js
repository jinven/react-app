export default (state = false, action) => {
    let rs = state;
    console.log('store-login', action)
    switch (action.type) {
        case 'login':
            rs = true
            console.log('login: true')
            window.localStorage.setItem('IsLogin', rs)
            break
        case 'logout':
            rs = false
            window.localStorage.setItem('IsLogin', rs)
            break
        default:
            let isLogin = window.localStorage.getItem('IsLogin');
            rs = isLogin === 'true'
            break
    }
    return rs
}
