import "../components/fire"
import firebase from "firebase"

const db = firebase.firestore()

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export default function TimeLine() {
    return (
        <div className="col-lg-6">
            <div className="container">
            <div className="card">
                <p>This is card.</p>
            </div>
            </div>
        </div>
    )
}