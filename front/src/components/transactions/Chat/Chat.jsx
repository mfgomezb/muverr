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
        this.match = props.match
        this.props = props
        this.room = this.match.params.transactionId
    }

    componentDidMount(){
        this.socket = io('localhost:3010' ); //  + this.match.params.transactionId

        this.socket.emit('subscribe', this.room)

        this.socket.on('conversation private post', (msg)=> {
            console.log(msg)
            this.receiveMessage(msg.message);
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
        // this.socker.emit('sub')
        this.socket.emit('send message',{message: msg, 
            room: this.room,
            timestamp:Date.now(),
            user: this.props.userInSession._id
        })

        
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