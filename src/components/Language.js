import React from 'react'
import '../assets/css/language.scss'
import { Radio } from 'antd';
import { FormattedMessage, injectIntl  } from 'react-intl';

const styles = `
article {
    text-align: left;
    color: #1d1d1d;
    font-size: 20px;
    margin: 20px 30px 30px;
    text-shadow: rgba(255, 255, 255, 0.15) 1px 2px;
    border: 1px solid #fff;
    border-radius: 3px;
    padding: 5px 10px;
    box-shadow: rgba(0, 0, 0, 0.26) 0 0 10px 0;
}
`
export default injectIntl(class Language extends React.Component{
    onChange = e => {
        this.props.onChangeLangs(e.target.value===1?'zh':'en');
    };
    render(){
        const value = this.props.langs==='zh'?1:2;
        const {intl} = this.props;
        let fiction = intl.formatMessage({id: 'fiction'});
        let arrPs = [];
        if(fiction){
            fiction.split('\n').forEach(function(a){
                arrPs.push(<p>{a}</p>)
            })
        }
        return (
            <div>
                <h2><FormattedMessage id="language" /></h2>
                <div>
                    <Radio.Group onChange={this.onChange} value={value}>
                        <Radio value={1}>中文</Radio>
                        <Radio value={2}>English</Radio>
                    </Radio.Group>
                </div>
                <div>
                    <article>
                        {arrPs}
                    </article>
                </div>
                <style jsx>{styles}</style>
            </div>
        )
    }
})
