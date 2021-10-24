import Popup from "reactjs-popup"

export default function PopupExample() {
    return (
        <Popup trigger={<button> Trigger</button>} position="right center">
            <div>Popup content here !!</div>
        </Popup>
    )
}