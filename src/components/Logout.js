import React from 'react'
import { useHistory } from "react-router-dom";
import { Button } from 'antd'
import { FormattedMessage  } from 'react-intl';
export default function Logout(props){
    let history = useHistory();
    const onLogout = () =>{
        props.onLogined('logout');
        history.push('/login');
    }
    return (
        <p>
            <Button type="danger" size="small" onClick={onLogout}><FormattedMessage id="logout" /></Button>
        </p>
    );
}
