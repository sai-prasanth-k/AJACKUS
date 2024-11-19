import {useState} from 'react'
import { EditButton, EditPostContainer, FormPage, InputField, } from './styledComponent';

 const EditPost = (props) => {
    const {existingUserDetail, updateUserFn} = props;
    const {
        id,
        name,
        username,
        email,
        phone,
    } = existingUserDetail;

    const [updateFormData, setUpdateFormData] = useState({
        id: id,
        name: name,
        username: username,
        email: email,
        phone: phone,
    })

    const onChangeValues = (e) => {
        setUpdateFormData({
            ...updateFormData,
            [e.target.name]: e.target.value
        })
    }

    const onUpdateUser = async (event) => {
        event.preventDefault();
        const updateUserDoc = {
            id: updateFormData.id,
            name: updateFormData.name, 
            username: updateFormData.username, 
            email: updateFormData.email, 
            phone: updateFormData.phone, 
        };
        console.log(updateUserDoc)
        updateUserFn(updateUserDoc);
    }

    return (
        <EditPostContainer>
            <FormPage onSubmit={onUpdateUser}>
                <InputField name='id' type="text" value={updateFormData.id} onChange={onChangeValues} placeholder="Enter unique Id"/>
                <InputField name='name' type="text" value={updateFormData.name} onChange={onChangeValues} placeholder="Enter your name"/>
                <InputField name='username' type="text" value={updateFormData.username} onChange={onChangeValues} placeholder="Enter your name"/>
                <InputField name='email' type="text" value={updateFormData.email} onChange={onChangeValues} placeholder="Enter your email"/>
                <InputField name='phone' type="text" value={updateFormData.phone} onChange={onChangeValues} placeholder="Enter your phone number"/>
                <EditButton onClick={onUpdateUser} type='submit'>EDIT</EditButton>
            </FormPage>
        </EditPostContainer>
    )
 }

 export default EditPost