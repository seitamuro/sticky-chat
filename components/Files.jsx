export default function Files(props) {
    return (
        <div className="col-lg-3">
            <table className="table"><tbody>
                {props.files.map((value, key) => (
                    <tr>
                        <td scope="col">
                            <div className="form-check">
                                <input class="form-check-input" type="checkbox" value={value} id={value} checked/>
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