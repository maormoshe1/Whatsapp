import ContactItem from "./ContactItem";

function ContactList({contacts}){

    const contactList = contacts.map((contact,key)=>{
        return <ContactItem {...contact}  key={key}/>
        });

        return(
            <div>
                {contactList}
            </div>

        )

}

export default ContactList;