import { useState } from 'react'
import { PostFormContainer, FormPage, InputField, PostButton } from './styledComponent';

 const Post = ({addNewUser}) => {
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        username: '',
        email: '',
        phone: '',
    })

    const onChangeValues = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const createNewUser = async (event) => {
        event.preventDefault();
        const newUser = {
            id: formData.id,
            name: formData.name, 
            username: formData.username, 
            email: formData.email, 
            phone: formData.phone, 
        };
        addNewUser(newUser);
        setFormData({
            id: '',
            name: '',
            username: '',
            email: '',
            phone: '',
        })

    }

    return (
        <PostFormContainer>
            <FormPage onSubmit={createNewUser}>
                <InputField type="text" name='id' value={formData.id} onChange={onChangeValues} placeholder="Enter unique Id"/>
                <InputField name='name' type="text" value={formData.name} onChange={onChangeValues} placeholder="Enter your name"/>
                <InputField name='username' type="text" value={formData.username} onChange={onChangeValues} placeholder="Enter your username"/>
                <InputField name='email' type="text" value={formData.email} onChange={onChangeValues} placeholder="Enter your email"/>
                <InputField name='phone' type="text" value={formData.phone} onChange={onChangeValues} placeholder="Enter your phone number"/>
                <PostButton onClick={createNewUser} type='submit'>POST</PostButton>
            </FormPage>
        </PostFormContainer>
    )
 }

export default Post