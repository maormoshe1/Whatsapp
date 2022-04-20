import ContactItem from "./ContactItem";
import users from "../hard_coded/users";
import "./ContactItem.css"

function ContactList({contacts,show_msg}){

    const contactList = contacts.map((contact,key)=>{
        const user = users.find((user) => {
            return user.uname == contact.user})
        
        return <ContactItem img={user.img} name={contact.dname} messages={contact.messages} show_msg={show_msg}  key={key}/>
        });

        return(
            <div className="chats overflow-auto">
                {contactList}        
            </div>

        )

}

export default ContactList;