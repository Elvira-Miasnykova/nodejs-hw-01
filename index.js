//console.log("first project");

const { listContacts } = require("./contacts");
const contactsOperations = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case "listContacts":
            const contacts = await contactsOperations.listContacts();
            console.table(contacts);
            break;
        
        case "getContactById":
            const contact = await contactsOperations.getContactById(id);
            if (!contact) {
                throw new Error(`Contact with id=${id} not found`);
            }
            console.table(contact);
            break;
        
        case "addNewContact":
            const newContact = await contactsOperations.addContact(name, email, phone);
            console.table(newContact);
            break;
        
        case "removeContactById":
            const removeContact = await contactsOperations.removeContact(id);
            console.table(removeContact);
            break;
    }
}
//invokeAction({ action: "listContacts" })
//const id ="1"
//invokeAction({action: "getContactById", id:"3"})
//invokeAction({action: "addNewContact", name: "Ryan Tedder", email:"mail@mail.com", phone:"78789565"})
invokeAction({action: "removeContactById", id:"c9cb2153-322c-4112-b866-32384df988e7"})
// const { Command } = require("commander");
// const program = new Command();
// program
//   .option("-a, --action <type>", "choose action")
//   .option("-i, --id <type>", "user id")
//   .option("-n, --name <type>", "user name")
//   .option("-e, --email <type>", "user email")
//   .option("-p, --phone <type>", "user phone");

// program.parse(process.argv);

// const argv = program.opts();

// // TODO: рефакторить
// function invokeAction({ action, id, name, email, phone }) {
//   switch (action) {
//     case "list":
//       // ...
//       break;

//     case "get":
//       // ... id
//       break;

//     case "add":
//       // ... name email phone
//       break;

//     case "remove":
//       // ... id
//       break;

//     default:
//       console.warn("\x1B[31m Unknown action type!");
//   }
// }

// invokeAction(argv);