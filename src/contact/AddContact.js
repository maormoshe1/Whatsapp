import { useRef } from "react";
import messages from "../hard_coded/messages";
import users from "../hard_coded/users";

function AddContact({ modal, show_modal, user, setContactList }) {
    const new_contact = useRef(null)
    const add_contact = function () {

        var flagFound = false, flagExists = false;

        document.getElementById('alertSuccess').style.visibility = "collapse";
        document.getElementById('alert').style.visibility = "collapse";

        for (let contact of user.contacts) {
            if (contact.user == document.getElementById("new_username").value) {
                flagExists = true;
            }
        }

        for (let user of users) {
            if (user.uname == document.getElementById("new_username").value) {
                flagFound = true;
            }
        }

        if (flagFound && !flagExists) {
            user.contacts.unshift({ user: document.getElementById("new_username").value, dname: document.getElementById("new_username").value, messages: [] })
            setContactList(user.contacts);
			document.getElementById('alertSuccess').innerHTML = "Contact added:) Plz close the tab!";
			document.getElementById('alertSuccess').style.visibility = "visible";
            return;
        }

        if(!flagFound) {
			document.getElementById('alert').innerHTML = "There is no user with this username:(";
			document.getElementById('alert').style.visibility = "visible";

            return;
        }

		document.getElementById('alert').innerHTML = "This user is already in your chats ;)";
		document.getElementById('alert').style.visibility = "visible";
        return;

    }

    const closeAlert = function() {
		document.getElementById('alert').style.visibility = "collapse";
	}

    if (!modal) {
        return null;
    }
    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add new Contact</h5>
                            <button onClick={() => { show_modal(false) }} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                        </div>
                        <div className="modal-body">
                            <p>
                                <input onClick={() => { closeAlert() }} id="new_username" ref={new_contact} placeholder="Enter exact contact's identifier" />
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button onClick={() => { add_contact() }} type="button" id="AddBtn" className="btn btn-primary" >Add</button>
                            <div className="alert alert-warning" role="alert" id='alert'/>
                            <div className="alert alert-success" role="alert" id='alertSuccess'/>

                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default AddContact;