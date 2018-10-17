import React from 'react';
import io from 'socket.io-client';
import './chat.css';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';



export class Chat extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            messages:[],
            input:'',
            color: 'default',
            onDelete: 'none',
            avatar: 'icon',
            icon: 'none',
            variant: 'default',
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
            this.receiveMessage(msg);
        });   
    }

    receiveMessage(msg){
        this.setState({
            input:'',
            messages: [...this.state.messages, msg]
        })
    }

    submitChat(){
        let msg = this.state.input;

        this.setState({
            input:'',
            messages: [...this.state.messages, {
                message: msg, 
                room: this.room,
                timestamp:Date.now(),
                userId: this.props.userInSession._id}]
        });
        console.log(this.state.messages)

        this.socket.emit('send message',{
            message: msg, 
            room: this.room,
            timestamp:Date.now(),
            userId: this.props.userInSession._id
        })        
    }
    
    render(){
        let {messages, input} = this.state;
        return (
            <div className='chat-holder'>
                <Paper className="chat-window"  >
                    <div className="msg">
                        {messages.map( (e,i) => 
                        <div className={(e.userId === this.props.userInSession._id) ? "msg me" : "msg server"} key={i}>
                            <Chip
                            label={e.message}
                            color={(e.userId === this.props.userInSession._id) ? "primary" : "default"}
                            avatar={this.state.avatarToPlayground}
                            icon={this.state.iconToPlayground}
                            variant={this.state.variant}
                            />
                        </div> 
                        )}
                    </div>      
                </Paper>
                <input value={input} onChange={e => this.setState({input:e.currentTarget.value})} onKeyDown={e => e.keyCode==13 ? this.submitChat():null}/>
            </div>
            

            )
    }
}