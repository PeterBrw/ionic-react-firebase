import { useState } from 'react'
import SearchInputOrganization from '../SearchInputOrganization/SearchInputOrganization'
import Organization from '../Organization/Organization'

interface ContainerProps {}

const OrganizationContainer: React.FC<ContainerProps> = () => {
    const [organization, setOrganization] = useState(null)
    const [login, setLogin] = useState(null)

    const onSubmit = (e: any) => {
        e.preventDefault()
        setLogin(organization)
    }

    return (
        <>
            <SearchInputOrganization setOrganization={setOrganization} onSubmit={onSubmit} />
            {login && <Organization login={login} />}
        </>
    )
}

export default OrganizationContainer
