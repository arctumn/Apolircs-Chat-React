import { User,Message } from "./Message"

const pedro:User = {
    nickname: "Pedro"
  }
  const carlos:User = {
    nickname: "Carlos"
  }
  const joao:User = {
    nickname: "Joao"
  }
  const first_test:Message = {
    from_user:pedro,
    private_message:false,
    message:"Hello World!"
  }
  const second:Message = {
    from_user:carlos,
    private_message:false,
    message:"Goodbye World!"
  }
  const third:Message = {
    from_user:carlos,
    private_message:true,
    to_user: joao,
    message:"Não curto do Pedro!"
  }

export const user_list: User[] =[pedro,carlos,joao]
export const test_messages: Message[] = [first_test,second,third]