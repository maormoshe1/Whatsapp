import { useRef } from "react";
import "./Message.css"

function AddImg({ modal, show_modal, type, handleSend }) {

    const new_img = useRef(null)
    const reader = new FileReader();

    const add_media = function () {
        reader.addEventListener("load", () => { handleSend(type, reader.result) });
        reader.readAsDataURL(new_img.current.files[0])

        show_modal(false);
    }
    if (!modal) {
        return null;
    }
    return (
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <button onClick={() => { show_modal(false) }} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div className="modal-footer">
                    <input ref={new_img} type="file" id="real-file" className="form-control"></input>
                    <button onClick={() => { add_media() }} type="button" className="btnSendMedia">Send</button>
                </div>
            </div>
        </div>
    )
}

export default AddImg;