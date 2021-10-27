import { User } from "./Message"
export const NavBar:React.FC<User> = user => {
    return (
        <div className="NavBar">
            <img alt="Icon for a user" src="https://img.icons8.com/material-sharp/24/000000/user-male-circle.png"/>
            <p>{user.nickname}</p>
        </div>
    )
}