import React, { createContext } from "react";
import ComA from "./comA";

const FirstName = createContext()
const LastName = createContext()

const UseContax = () => {    
    return(
        <div>
            <FirstName.Provider value={"Meet"} >
            <LastName.Provider value={"Lathiya"}>
                <ComA />
            </LastName.Provider>
            </FirstName.Provider>
        </div>
    )
}

export default UseContax
export {FirstName , LastName}

