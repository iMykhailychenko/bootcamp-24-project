import { useEffect, useState } from 'react'

import { useSearchParams } from 'react-router-dom'
import { api } from '../api'
import { TaskForm } from './TaskForm'
import { UserTable } from './UserTable'

export const UserInfo = () => {
    const [searchParams] = useSearchParams()
    const token = searchParams.get('token')

    const [isLoading, setIsLoading] = useState(false)
    const [userInfo, setUserInfo] = useState(null)

    useEffect(() => {
        if (token) {
            setIsLoading(true)
            api.get('/user/info', { headers: { Authorization: `Bearer ${token}` } })
                .then(({ data }) => setUserInfo(data))
                .finally(() => setIsLoading(false))
        }
    }, [token])

    if (isLoading) {
        return <p>Loading ...</p>
    }

    return (
        <>
            {userInfo ? (
                <>
                    <UserTable data={userInfo} />
                    <TaskForm />
                </>
            ) : (
                <p>Not authorized</p>
            )}
        </>
    )
}
