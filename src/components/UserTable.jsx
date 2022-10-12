export const UserTable = ({ data }) => {
    return (
        <>
            <h2>{data.message}</h2>

            <h3>User info</h3>
            <table>
                <thead>
                    <tr>
                        <th>balance</th>
                        <th>email</th>
                        <th>id</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>{data.user.balance}</td>
                        <td>{data.user.email}</td>
                        <td>{data.user.id}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
