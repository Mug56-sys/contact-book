import "./index.css";
import ContactList from "./Components/ContactList";
import { useState } from "react";

export type Contact = {
  id: number;
  name: string;
  city: string;
};

function App() {
  const [name, setName] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [contactList, setContactList] = useState<Contact[]>([]);

  const handleSubmit = () => {
     let id=1;
    while(contactList.some((contact:Contact)=>contact.id===id)){
      id++
    }
    setContactList([
      ...contactList,
      { id, name, city },
    ]);
    setName("");
    setCity("");
  };

  return (
    <div className="h-100% bg-gray-300 pt-5 px-6 ">
      <h1 className="text-3xl font-semibold">Contact Book</h1>
      <span className="text-sm ">Keep track of where your friends live in</span>
      <div className="bg-white shadow-md w-7/18 min-w-65 max-w-150 py-4 mt-3 rounded-lg  px-2 ">
        <div className="flex justify-evenly items-center py-1">
          <form
            id="Add"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <input
              placeholder="Name"
              className="border p-1 pl-2 rounded-md text-sm w-1/3"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              placeholder="City"
              className="border p-1 pl-2 rounded-md text-sm w-1/3"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
            <button
              id="Add"
              className="bg-violet-600 text-nowrap text-white rounded-lg py-2 px-3 text-xs cursor-pointer "
            >
              Add Contact
            </button>
          </form>
        </div>
      </div>
      <ContactList SetContactList={setContactList} contactList={contactList} />
    </div>
  );
}

export default App;
