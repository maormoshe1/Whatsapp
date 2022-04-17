import { useRef } from "react";
import messages from "../hard_coded/messages";
import users from "../hard_coded/users";

function AddContact({ modal, show_modal, user, setContactList }) {
    const new_contact = useRef(null)
    const add_contact = function () {

        var flagFound = false, flagExists = false;

        for(let contact of user.contacts) {
            if (contact.user == document.getElementById("new_username").value) {
                flagExists = true;
            }
        }

        for (let user of users) {
            if (user.uname == document.getElementById("new_username").value) {
                console.log(user.uname)
                flagFound = true;
            }
        }

        if(flagFound && !flagExists) {
            user.contacts.push({user: document.getElementById("new_username").value, messages: [{content:'', time:'', from: 'Shir'}]})
            setContactList(user.contacts);
            show_modal(false);
        }

    }
    if (!modal) {
        return null;
    }
    return (
        <>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add new Contact</h5>
                        <button onClick={() => { show_modal(false) }} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>
                            <input id="new_username" ref={new_contact} placeholder="contact's identifier" />
                        </p>
                    </div>
                    <div className="modal-footer">
                        <button onClick={() => { show_modal(false) }} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button onClick={() => { add_contact() }} type="button" className="btn btn-primary">Add</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddContact;