import MyContext from "./context/MyContext"
import { useContext } from "react"
import Link from "next/link"

export default function Files(props) {
    const context = useContext(MyContext)

    return (
        <div className="col-lg-3">
            <Link href="/selectproject">
                <a>Project: {context.project}</a>
            </Link>
            <table className="table"><tbody>
                {props.files.map((value, key) => (
                    <tr>
                        <td scope="col">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value={value} defaultChecked="checked"/>
                                <label>
                                    {value}
                                </label>
                            </div>
                        </td>
                    </tr>
                ))}</tbody>
            </table>
        </div>
    )
}