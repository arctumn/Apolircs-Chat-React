import { FC } from "react"
import './App.css';
export interface User {
    nickname: string,
    background: string
}

export interface Message {
    from_user: User,
    private_message: boolean,
    to_user?: User,
    message: string
}

export const user_message = (user:User) => {
   return { background: user.background}
}
export const user_name = (user:User) => {
    return {color: user.background}
}
const message_format = (message:Message) => {
    return (
        <div className="message" style={user_message(message.from_user)}>
                <div className="message_header">
                    <img alt="User ico" src="https://img.icons8.com/material-sharp/24/000000/user-male-circle.png"/>
                    <p style= {user_name(message.from_user)}>{message.from_user.nickname}</p>
                    
                </div>
                <p>{message.message}</p>
        </div>
    )
}
const private_message = (message:Message, this_user:User) => {
    return message.to_user === this_user ? message_format(message) : null
}
interface UIProp {
    message_list :Message[],
    this_user:User 
}
//Produces a message list showing messages received to this user
export const MessageBoard:FC<UIProp> = content => {
    const ready_messages = content.message_list
    .map(
        message => message.private_message ? // checks if the message is private, and will only show it if the user is the right person
         private_message(message,content.this_user) : message_format(message) // In case its not private it will generate the message
        )
    .filter(message => message !== null)

    return ( //Creates an unordered list with all the messages rightly treated
        <div>
                {ready_messages}
        </div>
    )
}