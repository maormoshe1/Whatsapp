import messages from "./messages";

const shirContacts=[{user: 'Maor', messages : messages[0]},
{user: 'Daniel', messages : messages[1]},
{user: 'Nikol',  messages : messages[2]},
{user: 'Rivka',  messages : messages[3]},
{user: 'Miriam',  messages : messages[4]}];

const maorContacts=[{user: 'Shir', messages : messages[0]}];

const danielContacts=[{user: 'Shir', messages : messages[1]}];

const nikolContacts=[{user: 'Shir', messages : messages[2]}];

const rivkaContacts=[{user: 'Shir', messages : messages[3]}];

const miriamContacts=[{user: 'Shir', messages : messages[4]}];

const shalevContacts=[{user: 'Shir', messages : messages[5]}];

const contacts=[shirContacts,maorContacts,danielContacts,nikolContacts,rivkaContacts,miriamContacts,shalevContacts];
export default contacts;