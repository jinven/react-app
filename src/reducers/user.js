export default (state = {}, action) => {
    let rs = state;
    switch (action.type) {
        case 'login':
            rs = action.user
            window.localStorage.setItem('User', JSON.stringify(rs))
            break
        case 'logout':
            rs = {}
            window.localStorage.setItem('User', '{}')
            break
        default:
            let userStr = window.localStorage.getItem('User');
            if(userStr){
                rs = JSON.parse(userStr);
            } else {
                rs = {}
            }
            break
    }
    return rs
}
