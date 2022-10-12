import { useState } from 'react'

import { api, BASE_URL } from '../api'

export const AuthForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const validate = (callback) => {
        if (email.trim() && password.trim().length > 5) {
            return () =>
                callback({ email, password })
                    .then(() => alert('Success'))
                    .catch(() => alert('Error'))
        }

        return () => {
            alert('Invalid form data')
        }
    }

    const login = validate((body) => api.post('/auth/login', body))
    const register = validate((body) => api.post('/auth/register', body))

    return (
        <>
            <form
                action="#"
                onSubmit={(e) => {
                    e.preventDefault()
                    login()
                }}
            >
                <label style={{ display: 'block' }}>
                    <p>Email</p>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>

                <label style={{ display: 'block' }}>
                    <p>Password</p>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>

                <br />
                <button type="button" onClick={login}>
                    login
                </button>
                <button type="button" onClick={register}>
                    register
                </button>
            </form>

            <a style={{ display: 'block', marginTop: '40px' }} href={`${BASE_URL}auth/google`}>
                google auth
            </a>
        </>
    )
}
