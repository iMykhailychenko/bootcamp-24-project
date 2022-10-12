import { useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { api } from '../api'

export const TaskForm = () => {
    const fileInputRef = useRef(null)

    const [searchParams] = useSearchParams()
    const token = searchParams.get('token')

    const [title, setTitle] = useState('')
    const [reward, setReward] = useState(0)

    const [file, setFile] = useState(null)
    const src = file && window.URL.createObjectURL(file)
    console.log(src)

    const handleSubmit = (event) => {
        event.preventDefault()

        if (file.size > 250000) {
            return
        }

        const body = new FormData()

        body.append('title', title)
        body.append('reward', reward)
        body.append('file', file)

        api.post('/task', body, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            },
        })
    }

    return (
        <>
            <br />
            <br />
            <br />

            <form action="#" onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <br />
                <input type="number" value={reward} onChange={(e) => setReward(e.target.value)} />
                <br />

                {src && <img src={src} alt="" />}

                <input
                    hidden
                    type="file"
                    ref={fileInputRef}
                    onChange={(e) => {
                        setFile(e.target.files?.[0])
                    }}
                />
                <button type="button" onClick={() => fileInputRef.current?.click()}>
                    Upload
                </button>

                <button type="submit">Submit</button>
            </form>
        </>
    )
}
