import { useState, useEffect, useCallback } from "react"
import UserCard from "../../components/UserCard"
import Post from "../Post"
import { Navigate } from "react-router-dom"
import EditPost from "../EditPost"
import {UsersListPage, UsersCardContainer} from "./styledComponent"

const UsersList = () => {
    const [usersDetails, setUsersDetails] = useState([])
    const[existingUserDetail, setExistingUserDetail] = useState({})
    const [isEditing, setIsEditing] = useState(false)
    
    // Function to fetch user data
    const fetchUsers = async () => {
        try {
            const url = "https://jsonplaceholder.typicode.com/users";
            const response = await fetch(url);
            if (response.ok) {
                const userData = await response.json();
                setUsersDetails(userData);
                console.log(userData)
            }else {
                response.status(501).send("error")
            }
        } catch(error) {
            console.log(error)
        }
    }

    //Function to delete user data
    const deleteUser = async (id) => {
        try {
            const url = "https://jsonplaceholder.typicode.com/users";
            const options = {
                method: "DELETE",
            }
            await fetch(`${url}/${id}`, options);
            setUsersDetails(usersDetails.filter(user => user.id !== id))
        } catch (error) {
            console.log(error);
        }
    }

    // Function tp add new user
    const addNewUser = async (data) => {
        try {
            const url = "https://jsonplaceholder.typicode.com/users";
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }
            const response = await fetch(url, options);
            if (response.ok){
                const userData = await response.json();
                console.log(userData)
                setUsersDetails([...usersDetails, userData]);
                return <Navigate to={'/'} />
            }
        } catch (error) {
            console.log(error);
        }
    }

    // Function to get the editing user
    const existingUser = async(id) => {
        try {
            const url = `https://jsonplaceholder.typicode.com/users/${id}`;
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setIsEditing(true)
                setExistingUserDetail(data)
            }
        }catch (error) {
            console.log(error);
        }
    }

    // Function to update the user
    const updateUserFn = useCallback(async(updateUserDoc) => {
        try {
            const {id} = updateUserDoc
            const url =  `https://jsonplaceholder.typicode.com/users/${id}`;
            const options = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updateUserDoc)
            };
            const response = await fetch(url, options);
            if (response.ok) {
                const data = await response.json(updateUserDoc);
                setUsersDetails(usersDetails.map(user => user.id === id ? data : user) )
                setIsEditing(false);
                console.log(data);
            }
        }catch (error) {
            console.log(error);
        }
    }, [usersDetails])

    useEffect(() => {
        fetchUsers();
    }, [])

    return (
        <UsersListPage>
            { 
                (!isEditing && <Post addNewUser={addNewUser} /> )
            }
            {
                (isEditing && <EditPost existingUserDetail={existingUserDetail} updateUserFn={updateUserFn} />)
            }
            <UsersCardContainer>
                {
                    usersDetails.length > 0 && usersDetails.map(
                        user => (
                            <UserCard 
                                key={user.id}
                                userdetails={user}
                                deleteUser={deleteUser}
                                addNewUser={addNewUser}
                                existingUser={existingUser}
                            />
                        )
                    )
                }
            </UsersCardContainer>
        </UsersListPage>
    )
}

export default UsersList