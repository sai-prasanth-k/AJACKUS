import { UserCardPage, UserCardName, UserValueField, IconButton, ButtonContainer } from './styledComponent'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const UserCard = (props) => {
    const {userdetails, existingUser, deleteUser} = props
    const {id, name, username, phone, email} = userdetails

    const onClickDeleteUser = () => {
        deleteUser(userdetails.id)
    }

    const onClickEditUser = () => {existingUser(id)}

    return(
        <UserCardPage>
            <UserCardName>{name}</UserCardName>
            <UserValueField>{username}</UserValueField>
            <UserValueField>{email}</UserValueField>
            <UserValueField>{phone}</UserValueField>
            <ButtonContainer>
                <IconButton onClick={onClickEditUser}><FaEdit /> EDIT</IconButton>
                <IconButton onClick={onClickDeleteUser}><MdDelete /> DELETE</IconButton>
            </ButtonContainer>
        </UserCardPage>
    )
}

export default UserCard