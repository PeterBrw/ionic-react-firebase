import './ExploreContainer.css'
import { useState } from 'react'
import SearchInput from './SearchInput/SearchInput'
import User from './User/User'

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
    const [user, setUser] = useState(null)
    const [login, setLogin] = useState(null)

    const onSubmit = (e: any) => {
        e.preventDefault()
        setLogin(user)
    }

    return (
        <>
            <SearchInput setUser={setUser} onSubmit={onSubmit} />
            {login && <User login={login} />}
        </>
    )
}

export default ExploreContainer
