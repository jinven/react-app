import React from 'react'
import '../assets/css/login.scss'
import { Form, Button, Input, Icon, Alert, message  } from 'antd';
import { useHistory } from "react-router-dom";
import { withRouter } from 'react-router';
import { FormattedMessage, injectIntl  } from 'react-intl';
let history;
class LoginForm extends React.Component{
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
        error: '',
        formData: {
            name: '',
            password: ''
        }
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let formData = Object.assign(this.state.formData);
                if(formData.name!=='admin' || formData.password!=='123456'){
                    this.setState({error: '用户名或密码错误'});
                    return;
                }
                this.props.onLogined('login');
                this.props.onUserLogin({type:'login', user:formData});
                message.success('Login success');
                history.push('/home');
            }
        });
    }
    handleFormData = (name, value) => {
        let formData = Object.assign(this.state.formData);
        formData[name] = value;
        this.setState({
            formData: formData
        });
    }
    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };
    render(){
        console.group('Login.js');
        const error = this.state.error;
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
          labelCol: {
            xs: { span: 20 },
            sm: { span: 7 },
          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 15 },
          },
        };
        const tailFormItemLayout = {
          wrapperCol: {
            xs: {
              span: 24,
              offset: 0,
            },
            sm: {
              span: 12,
              offset: 7,
            },
          },
        };
        const formData = this.state.formData;
        console.log('this.props', this.props);
                
        const {intl} = this.props;
        const usernamePlaceHolder = intl.formatMessage({id: 'username'});
        const passwordPlaceHolder = intl.formatMessage({id: 'password'});
        console.groupEnd();
        return (
            <Form onSubmit={this.handleSubmit} {...formItemLayout}>
                <Form.Item label={<FormattedMessage id="name" />}>
                    {getFieldDecorator('name', {
                        initialValue: formData.name,
                        rules: [
                            { required: true, message: 'Please input your username!' }
                        ],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            onChange={e => this.handleFormData('name', e.target.value)}
                            placeholder={usernamePlaceHolder}
                            required
                        />,
                    )}
                </Form.Item>
                <Form.Item label={<FormattedMessage id="password" />} hasFeedback>
                    {getFieldDecorator('password', {
                        initialValue: formData.password,
                        rules: [
                            { required: true, message: 'Please input your Password!' },
                            { validator: this.validateToNextPassword, },
                        ],
                    })(
                        <Input.Password
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            onChange={e => this.handleFormData('password', e.target.value)}
                            type="password"
                            placeholder={passwordPlaceHolder}
                            required
                        />,
                    )}
                </Form.Item>
                {error&&
                    <Form.Item {...tailFormItemLayout}>
                        <Alert message={error} type="error" showIcon />
                    </Form.Item>
                }
                <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit"><FormattedMessage id="submit" /></Button>
                </Form.Item>
            </Form>
        )
    }
}
const WrappedLoginForm = Form.create({ name: 'login_form' })(injectIntl(LoginForm))
export default withRouter(function Login(props){
    history = useHistory();
    return (
        <div id="login">
            <h2><FormattedMessage id="loginpage" /></h2>
            <WrappedLoginForm onLogined={props.onLogined} onUserLogin={props.onUserLogin} />
        </div>
    );
})
