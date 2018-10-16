import React from 'react';
import io from 'socket.io-client';
import './chat.css';


export class Chat extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            messages:[],
            input:''
        }
    }

    componentDidMount(){
        this.socket = io('localhost:3000');

        this.socket.on('message', (msg)=> {
            this.receiveMessage(msg.msg);
        });
    }

    receiveMessage(msg){
        this.setState({
            input:'',
            messages: [...this.state.messages, {msg,type:"server"}]
        })
    }

    submitChat(){
        let msg = this.state.input;
        this.setState({
            input:'',
            messages: [...this.state.messages, {msg,type:"me"}]
        });
        this.socket.emit('message',{msg, timestamp:Date.now()})
    }
    
    render(){
        let {messages, input} = this.state;
        return (
            <div style={{border:'1px solid green', padding:'10px'}} onKeyDown={e => e.keyCode==13 ? this.submitChat():null}>
                <div className="messages">
                    {messages.map( (e,i) => <div className={"msg "+e.type} key={i}><div className="wrap">{e.msg}</div></div>)}
                </div>
                <input value={input} onChange={e => this.setState({input:e.currentTarget.value})}/>
            </div>
            )
    }
}