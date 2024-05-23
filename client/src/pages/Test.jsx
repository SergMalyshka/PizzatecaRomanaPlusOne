import Auth from "../utils/auth"

export default function test () {
    return (
        <div>
            <h2>Test page</h2>

            {Auth.loggedIn() ? (
                <p>You can you see me?</p>
            ) : (
                <p>You must log in</p>
            )}
        </div>
    )
}