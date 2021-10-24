import "../components/fire"
import firebase from "firebase"
import { useState, useContext } from "react"
import MyContext from "./context/MyContext"
import Layout from "./Layout"

const db = firebase.firestore()

const auth = firebase.auth()

export default function AddCommentButton() {
    const [message, setMessage] = useState("")
    const context = useContext(MyContext)

    console.log(`user: ${auth.currentUser}`)

    const onChange = (e) => {
        setMessage(e.target.value)
    }

    const onClickAdd = (e) => {
        if (auth.currentUser != null) {
            console.log("access to firebase")
            db.collection("comment").add({
                name: context.project,
                content: message
            })
            e.preventDefault()
        }
    }

    return (
        <div>
            <form onSubmit={onClickAdd} class="form-group col justify-content-center">
                <div className="form-group">
                    <label className="form-control">Comment</label>
                    <input type="text" className="form-control" onChange={onChange}/>
                </div>
                <input type="submit" value="Add" className="btn btn-primary btn-sm col-2" />
            </form>
        </div>
    )
}