import ContactItem from "./ContactItem";
import users from "../hard_coded/users";

function ContactList({contacts,show_msg}){

    const contactList = contacts.map((contact,key)=>{
        const user = users.find((user) => {
            return user.uname == contact.user})
        return <ContactItem img={user.img} name={contact.user} messages={contact.messages} show_msg={show_msg}  key={key}/>
        });

        return(
            <div>
                {contactList}
            </div>

        )

}

export default ContactList;