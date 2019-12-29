import React from 'react'
import { FormattedMessage  } from 'react-intl';
export default class About extends React.Component{
    render(){
        return (
            <div className="about">
                <h1><FormattedMessage id="about_page" /></h1>
                <style jsx>{`
                    .about{
                        background: #88ee9a;
                    }
                `}</style>
            </div>
        );
    }
}
