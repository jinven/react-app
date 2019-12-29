import React from 'react'
import '../assets/css/axios.scss'
import axios from 'axios'
// import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
import { Get, withAxios } from 'react-axios'
import { Radio } from 'antd';
export default withAxios(class Axios extends React.Component{
    state = {
        url: '/logo192.png',
        method: 1,
        header: '',
        body: '',
        response: ''
    }
    onUrlChange = (e) =>{
        this.setState({url: e.target.value})
    }
    onChange = e => {
        this.setState({method: e.target.value});
    }
    onSubmit = e => {
        e.preventDefault();
        switch(this.state.method){
            case 1:
                // this.props.axios.get(this.state.url).then...
                this.props.axios(this.state.url).then(res => {
                    this.setState({response: res.data});
                });
                break;
            case 2:
                this.props.axios.post(this.state.url).then(res => {
                    this.setState({response: res.data});
                });
                break;
            case 3:
                alert('put');
                break;
            case 4:
                alert('delete');
                break;
            case 5:
                alert('head');
                break;
            default:
                break;
        }
    }
    render(){
        console.group('Axios');
        console.log('props', this.props);
        const defaultUrl = this.state.url;
        // const getUrl = 'http://www.weather.com.cn/data/cityinfo/101280601.html';
        const getUrl = '/robots.txt';
        const axiosUrl = '/';
        const axiosInstance = axios.create({
            baseURL: axiosUrl,
            timeout: 2000,
            headers: { 'X-Custom-Header': 'foobar' }
        });
        const value = this.state.method;
        const resp = this.state.response;
        console.groupEnd();
        return (
            <div>
                <h2>AXIOS</h2>
                <div>
                    <Get url={getUrl} params={{id: "12345"}}>
                        {(error, response, isLoading, onReload) => {
                        if(error) {
                            return (<div>Something bad happened: {error.message} <button onClick={() => onReload({ params: { reload: true } })}>Retry</button></div>)
                        }
                        else if(isLoading) {
                            return (<div>Loading...</div>)
                        }
                        else if(response !== null) {
                            return (<div>{JSON.stringify(response)} <button onClick={() => onReload({ params: { refresh: true } })}>Refresh</button></div>)
                        }
                        return (<div>Default message before request is made.</div>)
                        }}
                    </Get>
                    <Get url="manifest.json" instance={axiosInstance}>
                        {(error, response, isLoading, onReload) => {
                            return <div>
                                <p>url: {axiosUrl}</p>
                                <p>response: {JSON.stringify(response)}</p>
                            </div>
                        }}
                    </Get>
                </div>
                <div>
                    <Radio.Group onChange={this.onChange} value={value}>
                        <Radio value={1}>get</Radio>
                        <Radio value={2}>post</Radio>
                        <Radio value={3}>put</Radio>
                        <Radio value={4}>delete</Radio>
                        <Radio value={5}>head</Radio>
                    </Radio.Group>
                </div>
                <div className="forms">
                    <form>
                        <div>
                            <label><span>url:</span><input type="url" value={defaultUrl} onChange={this.onUrlChange} required /></label>
                        </div>
                        <div>
                            <label><span>header:</span><textarea cols="30" rows="3"></textarea></label>
                        </div>
                        <div>
                            <label><span>body:</span><textarea cols="30" rows="3"></textarea></label>
                        </div>
                        <div>
                            <span></span>
                            <button onClick={this.onSubmit}>submit</button>
                        </div>
                    </form>
                    <div>
                        <span>response:</span>
                        <textarea cols="30" rows="10" value={resp}></textarea>
                    </div>
                </div>
            </div>
        )
    }
})
