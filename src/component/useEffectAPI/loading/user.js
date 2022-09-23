import React from "react";
// import { FcApproval } from "react-icons/fc";

const Users = ({users}) => {    
    return(
        <>
              <h1 className="h1"> <b>All Data</b> </h1>
            <div className="container-fluid mt-5"></div>
            <div className="row text-c  enter">

                    
                        <label >Email : </label><br/>
                        <input name="email" placeholder="E-mail" id="email"/>

            
            </div>
        </>
    )
}

export default Users