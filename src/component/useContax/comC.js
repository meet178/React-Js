import React, { useContext } from "react";
import {FirstName , LastName} from "./useContax"

const ComC = () => {
    const Fname = useContext(FirstName)
    const Lname = useContext(LastName)

    return(
        <div>
            <h1>My name is {Fname} {Lname}</h1>
        </div>
    )
}

export default ComC