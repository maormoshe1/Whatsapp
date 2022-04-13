import { useRef } from "react";

function AddContact({modal,show_modal,user,setContactList}){
    const new_contact = useRef(null)
    const add_contact = function(){
        user.contacts.push({user: new_contact.current.value , messagaes : [{text:'hi, shalev', time:'16:03', from: 'Shir'}]});
        console.log(user.contacts)
       setContactList(user.contacts);
       show_modal(false);

    }
    if(!modal){
        return null;
    }
    return (
        <>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add new Contact</h5>
                        <button onClick={() => {show_modal(false)}} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>
                            <input ref={new_contact} placeholder="contact's identifier"/>
                        </p>
                    </div>
                    <div className="modal-footer">
                        <button onClick={() => {show_modal(false)}} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button onClick={() => {add_contact()}} type="button" className="btn btn-primary">Add</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddContact;