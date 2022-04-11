import messages from "./messages";

const contacts1=[{img : 'Images/me.jpeg' , name : 'Maor', messages : messages[0]},
{img : 'Images/daniel.jpeg' , name : 'Daniel', messages : messages[1]},
{img : 'Images/nikol.jpeg' , name : 'Nikol', messages : messages[2]},
{img : 'Images/anonymous.png' , name : 'Rivka', messages : messages[3]},
{img : 'Images/anonymous.png' , name : 'Miriam', messages : messages[4]},
{img : 'Images/anonymous.png' , name : 'Shalev', messages : messages[5]}];

const contacts2=[{img : 'Images/anonymous.png', name : 'Alon', messages : messages[0]},
{img : 'Images/anonymous.png' , name : 'Amnon', messages : messages[0]},
{img : 'Images/anonymous.png' , name : 'Avi', messages : messages[0]}];

const contacts3=[{img : 'Images/anonymous.png', name : 'Bibi', messages : messages[0]},
{img : 'Images/anonymous.png' , name : 'Benet', messages : messages[0]},
{img : 'Images/anonymous.png' , name : 'Bnaya', messages : messages[0]}];

const contacts=[contacts1,contacts2,contacts3];
export default contacts;