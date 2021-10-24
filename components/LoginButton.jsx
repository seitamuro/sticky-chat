import "../components/fire"
import firebase from "firebase"
import { useState } from "react"

const db = firebase.firestore()

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export default function LoginButton() {
    const [message, setMessage] = useState(auth.currentUser == null ? "Login" : "Logout")

    const doLogin = () => {
        auth.signInWithPopup(provider).then(result => {
            setMessage("Logout")
        }).catch(error => {
            setMessage("Login")
        })
    }

    const doLogout = () => {
        auth.signOut()
        setMessage("Login")
    }

    return (
        <button className="btn btn-info" onClick={auth.currentUser == null ? doLogin : doLogout}>{message}</button>
    )
}