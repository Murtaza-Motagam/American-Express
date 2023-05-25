import { useState } from 'react'
import NoteContext from './noteContext'


const NoteState = (props) => {

    const [data, setData] = useState([]);


    // Fetch user data
    

    const host = "http://localhost:5000";

    const fetchUser = async () => {
        const response = await fetch(`${host}/api/auth/getuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('token')
            }
        });
        const json = await response.json();
        setData(json)

    }


    return (
        <NoteContext.Provider value={{data, fetchUser}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;