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
        
        this.socket.on('output', (data) => {
            this.setState({messages: data.conversation})
        });

        this.socket.on('conversation private post', (msg)=> {
            console.log(msg)
            this.receiveMessage(msg.message);
        });
    }

    receiveMessage(msg){
        this.setState({
            input:'',
            messages: [...this.state.messages, {message: msg, 
                room: this.room,
                timestamp:Date.now(),
                userId: this.props.userInSession._id}]
        })
    }

    submitChat(){
        let msg = this.state.input;
        this.setState({
            input:'',
            messages: [...this.state.messages, {message: msg, 
                room: this.room,
                timestamp:Date.now(),
                userId: this.props.userInSession._id}]
            
        });
        this.socket.emit('send message',{message: msg, 
            room: this.room,
            timestamp:Date.now(),
            userId: this.props.userInSession._id
        })
        console.log(this.state.messages)
        
    }
    
    render(){
        let {messages, input} = this.state;
        return (
            <div style={{border:'1px solid green', padding:'10px'}} onKeyDown={e => e.keyCode==13 ? this.submitChat():null}>
                <div className="messages">
                    {messages.map( (e,i) => <div className={"msg me"} key={i}><div className="wrap">{e.message}</div></div>)}
                </div>
                <input value={input} onChange={e => this.setState({input:e.currentTarget.value})}/>
            </div>
            )
    }
}