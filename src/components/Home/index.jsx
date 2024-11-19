import HomePage from './styledComponent'
import UsersList from '../UsersList';

const Home = () => {
    return (
        <HomePage>
            <h1 className='app-name'>Sai's User Dashboard</h1>
            <UsersList />
        </HomePage>
    )
}

export default Home;