import React from 'react'
import '../assets/css/language.scss'
import { Radio } from 'antd';
import { FormattedMessage  } from 'react-intl';
export default class Language extends React.Component{
    onChange = e => {
        this.props.onChangeLangs(e.target.value===1?'zh':'en');
    };
    render(){
        const value = this.props.langs==='zh'?1:2;
        return (
            <div>
                <h2><FormattedMessage id="language" /></h2>
                <div>
                    <Radio.Group onChange={this.onChange} value={value}>
                        <Radio value={1}>中文</Radio>
                        <Radio value={2}>English</Radio>
                    </Radio.Group>
                </div>
            </div>
        )
    }
}
