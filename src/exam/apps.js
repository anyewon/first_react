import React,{useRef,useState} from "react";
import UserList from './UserList';
import CreateUser from "./CreateUser";

function Apps(){
    const [inputs,setInputs] = useState({
        username:"",
        email:""
    });

    const {username, email} = inputs;
    const onChange = e=>{
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]:value
        });
    };

    const [users, setUsers]=useState([
        {
            id: 1,
            username: "예원",
            email: "예원@naver.com"
        },
        {
            id: 3,
            username: "예지",
            email: "예지@naver.com"
        },
        {
            id: 3,
            username: "태현",
            email: "태현@naver.com"
        }
    ]);
    const nextId = useRef(4);
    const onCreate = ()=>{
        const user = {
            id:nextId.current,
            username,
            email
        };
        setUsers([...users, user]);

        setInputs({
            username:"",
            email:""
        });

        nextId.current+=1;
    };

    return(
        <>
            <CreateUser
            username={username}
            email={email}
            onChange={onChange}
            onCreate={onCreate}
            />
            <UserList users={users} />
        </>
    );
}

export default Apps;