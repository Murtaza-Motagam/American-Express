import { useState } from 'react'
import NoteContext from './noteContext'


const NoteState = (props) => {

    const userInitial = [];
    const [data, setData] = useState(userInitial);


    // Route-1:  Fetch user data and display
    

    const host = "http://localhost:5000";

    const fetchUser = async () => {
        const response = await fetch(`${host}/api/auth/getuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
        });
        const json = await response.json();
        setData(json)

    }

    // Route-2: Update the balance in mongodb database using frontend

    const updateBalance = async (id, amount, accno) => {
        const response = await fetch(`${host}/api/operations/updatebalance/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ amount, accno })
        });
        const json = await response.json();
        console.log(json);
        
    }



    return (
        <NoteContext.Provider value={{data, fetchUser, updateBalance}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;