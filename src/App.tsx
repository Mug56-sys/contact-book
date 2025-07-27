import "./index.css";
import ContactList from "./Components/ContactList";
import { useEffect, useState } from "react";

export type Contact={
 id:number;
 name:string;
 city:string;
}

function App() {
  
const devList:Contact[]=[
    { id: 1, name: "Alice Johnson", city: "New York" },
    { id: 2, name: "Bob Smith", city: "Los Angeles" },
    { id: 3, name: "Charlie Brown", city: "Chicago" },
    { id: 4, name: "David Williams", city: "Houston" },
   
]

  const [name,SetName]=useState<string>('')
  const [city,SetCity]=useState<string>('')
  const [contactList,SetContactList]=useState<Contact[]>([])
 
  const idLength=contactList.length;
  console.log(idLength) 

useEffect(()=>{
  SetContactList(devList)
  
  },[])
  
  const handleSubmit=()=>{
    let id=1;
    while(contactList.some((contact:Contact)=>contact.id===id)){
      id++
    }
    SetContactList([...contactList,{id,name,city}])
    SetName('');
    SetCity('');
  }

  return (
    <div className="h-100% bg-gray-300 pt-5 px-6 ">
      <h1 className="text-3xl font-semibold">Contact Book</h1>
      <span className="text-sm ">Keep track of where your friends live in</span>
      <div className="bg-white shadow-md w-7/18 min-w-65 max-w-150 py-4 mt-3 rounded-lg  px-2 ">
      <div className="flex justify-evenly items-center py-1">
        <form id="Add" onSubmit={(e)=>{
          e.preventDefault()
          handleSubmit();
        }}>
        <input placeholder="Name" className="border p-1 pl-2 rounded-md text-sm w-1/3" value={name} onChange={(e)=>SetName(e.target.value)} required/>
        <input placeholder="City" className="border p-1 pl-2 rounded-md text-sm w-1/3" value={city} onChange={(e)=>SetCity(e.target.value)} required/>
        <button id="Add" className="bg-violet-600 text-nowrap text-white rounded-lg py-2 px-3 text-xs cursor-pointer ">Add Contact</button>
        </form>
        </div>
      </div>
      <ContactList SetContactList={SetContactList} contactList={contactList} setName={SetName} setCity={SetCity}/>
    </div>
  );
}

export default App;
