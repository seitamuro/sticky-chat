import { useState, useEffect, useContext } from 'react'
import useSWR from 'swr'
import Files from "../components/Files"
import Layout from "../components/Layout"
import MyContext from '../components/context/MyContext'
import TimeLine from '../components/TimeLine'
import Members from '../components/Members'
import firebase from "firebase"
import "../components/fire"
import usePersist from '../components/hook/usePersist'
import PopupExample from '../components/PopupExample'

const db = firebase.firestore()

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export default function Home() {
  const context = useContext(MyContext)
  const [project, setProject] = usePersist("project", "")
  const [users, setUsers] = useState([])
  const url = `https://api.github.com/repos/${project}/git/trees/master?recursive=1` // 読み取るリポジトリへのGithub API
  const {data, error} = useSWR(url, (url) => fetch(url).then(res => res.json())) // 指定されたリポジトリからデータを取得
  const [paths, setPaths] = useState([]) // fileにファイル一覧を格納

  // ファイル一覧を取得
  useEffect(() => {
    console.log(data)
    console.log(error)
    if (data == undefined || data.tree == undefined || data.status != undefined) {
      setPaths([])
    } else {
      let mydata = []
      data.tree.forEach(x => {
        mydata.push(x.path)
      })
      setPaths(mydata)
    }
  }, [data])

  useEffect(() => {
    if (auth.currentUser != null) {
      db.collection("users").get().then((snapshot) => {
        let mydata = []
        snapshot.forEach((document) => {
          const doc = document.data()
          mydata.push(doc)
        })
      })

      setUsers(mydata)
    }
  }, [auth])

  return (
    <Layout header={context.title} title="Top Page">
      <MyContext.Provider value={{project: project}}>

        <Files files={paths} />

        <TimeLine />

        {
          users.map((value, key) => (
            <p>{value}</p>
          ))
        }

        <Members />
      </MyContext.Provider>
    </Layout>
  )
}
