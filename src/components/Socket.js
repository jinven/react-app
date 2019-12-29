import React from 'react'
import io from 'socket.io-client'
let socket;
export default class Socket extends React.Component{
    constructor(props){
        super(props);
        if(!socket){
            this.initSocket();
        }
    }
    state = {
        message: 'from react',
        response: ''
    }
    initSocket = () => {
        socket = io('http://127.0.0.1:7001');
        socket.on('connect', () => {
            console.log('socket connect.');
        });
        socket.on('res', a => {
            this.setState({
                response: a
            });
            console.log('socket res', a);
        });
    }
    onChange = a => {
        this.setState({
            message: a.target.value
        });
    }
    onSend = () => {
        socket.emit('chat', this.state.message, a => {
            console.log('socket chat', a);
        });
    }
    render(){
        

        return (
            <div>
                <h2>Socket</h2>
                <p>
                    <span>message: </span>
                    <input value={this.state.message} onChange={this.onChange} />
                </p>
                <p><button onClick={this.onSend}>send</button></p>
                <div>
                    <span>result:</span>
                    <textarea value={this.state.response} onChange={()=>{}}></textarea>
                </div>
            </div>
        )
    }
}
