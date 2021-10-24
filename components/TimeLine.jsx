import "../components/fire"
import firebase from "firebase"
import AddCommentButton from "./AddCommentButton"

const db = firebase.firestore()

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export default function TimeLine() {
    return (
        <div className="col-lg-6">
            <div className="container col">
                <AddCommentButton />
                {/*<div className="card">
                    <p>とりあえず動くのができた!</p>
                </div>
                <div className="card">
                    <p>イテレータを使えばもっときれいに書けそう</p>
    </div>*/}
                <div className="card">
                    <p>必要なモジュールを書き足しておきました｡</p>
    </div>
                <div className="card">
                    <p>重くなるのでimgフォルダを.gitignoreに追加しました</p>
                </div>
            </div>
        </div>
    )
}