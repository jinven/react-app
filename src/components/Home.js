import React from 'react'
import { useHistory } from "react-router-dom";
import { Button } from 'antd'
import { FormattedMessage  } from 'react-intl';
export default function Home(props){
    let history = useHistory();
    function handleClick(){
        history.push('/login')
    }
    return (
        <div className="Home">
            <h1><FormattedMessage id="welcome" values={{name:props.user.name}} /></h1>
            <Button onClick={handleClick}><FormattedMessage id="loginpage" /></Button>
        </div>
    );
}
