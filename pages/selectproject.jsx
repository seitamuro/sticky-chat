import Layout from "../components/Layout";
import { useRouter } from "next/router"
import usePersist from "../components/hook/usePersist";
import { useState, useContext } from "react";
import MyContext from "../components/context/MyContext";

export default function selectproject() {
    const [project, setProject] = usePersist("project", "")
    const [organizer, setOrganizer] = useState("")
    const [repository, setRepository] = useState("")
    const router = useRouter()
    const context = useContext(MyContext)

    const onChangeOrganizer = (e) => {
        setOrganizer(e.target.value)
    }

    const onChangeRepository = (e) => {
        setRepository(e.target.value)
    }

    const doAction = () => {
        setProject(`${organizer}/${repository}`)
        router.push("/")
    }

    return (
        <Layout title={context.title}>
            <div className="col-lg-2"></div>
            <div className="col-lg-8 text-center">
                <form onSubmit={doAction} class="form-group col justify-content-center">
                    <div className="form-group row">
                        <label className="form-control">Organizer</label>
                        <input type="text" className="form-control" onChange={onChangeOrganizer}/>
                    </div>
                    <div className="form-group row">
                        <label className="form-control">Repository</label>
                        <input type="text" className="form-control" onChange={onChangeRepository}/>
                    </div>
                    <input type="submit" value="Select" className="btn btn-primary btn-sm col-2" />
                </form>
            </div>
            <div className="col-lg-2"></div>
        </Layout>
    )
}