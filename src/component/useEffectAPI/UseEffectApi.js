import React,{useEffect , useState} from "react"
import Loading from "./loading/loading";
import Users from "./loading/users";

const UseEffectApi = () => {

    const [users , setUsers] = useState([]); 
    const [loading , setLoading] = useState(true);
    
    const getUsers = async () => {
        try{
            setLoading(false)
            const response = await fetch(
                'http://localhost:5000/enterData/insertData'
                // 'https://api.github.com/users'
                
            //     method: 'post',
            //     body: {
            //         name: 'abc',
            //         email: 'asdf@kgmail.com',
            //     },
            //     headers: {
            //         'Content-Type':'Application/JSON',
            //         'access_token': 'asdfads5a5sdf5sdfa5'
            //     }
            );
            setUsers(await response.json());
        }
        catch(error){
            console.log("The error is" + error);
        }
   
        // console.log(data);
    }

    useEffect( ()=> {
        getUsers()
    },[] ) 


    if(loading)
    {
        return <Loading />
    }


    return(
        // <div>
        <Users users={users}/>
        // </div>

    )
}

export default UseEffectApi

