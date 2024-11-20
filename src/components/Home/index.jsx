import {HomePage, AppName} from './styledComponent'
import UsersList from '../UsersList';

const Home = () => {
    return (
        <HomePage>
            <AppName>Sai's User Dashboard</AppName>
            <UsersList />
        </HomePage>
    )
}

export default Home;