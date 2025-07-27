import { useEffect, useState } from "react";
import { type Contact } from "../App";



export default function ContactList({SetContactList,contactList,setName,setCity}:{SetContactList:React.Dispatch<React.SetStateAction<Contact[]>>;contactList:Contact[];setName:React.Dispatch<React.SetStateAction<string>>;setCity:React.Dispatch<React.SetStateAction<string>>;}) {
 
 
  const [editing,SetEditing]=useState<number | null>(null)
  const [editObj,setEditObj]=useState()
  
  const handleClick=(id:number)=>{
    SetEditing(id)
      console.log(`click`)
  }
  const handleDelete=(id:number)=>{
    
    SetEditing(null)
    const UpdatedList:Contact[]=contactList.filter(contact=>contact.id!==(id))
    SetContactList(UpdatedList)
   
    console.log(`deleting`)
  } 
  const handleSave=()=>{
    //SetContactList({id,})
    SetEditing(null)
    console.log(`Saving`)
  }
  const handleCancel=()=>{
    SetEditing(null)
     console.log(`canceling`)
  }
  return (
    <div className=" h-screen grid grid-cols-3 auto-rows-[200px] gap-3 mt-3 pb-5 ">
      {contactList ? contactList.map((contact:Contact)=>(
        <div className=" rounded-xl bg-white shadow-lg " key={contact.id}>
        {!(editing===contact.id) ?
        <div className="p-3 relative  size-full  ">
          <h1 className="text-xl font-semibold">Name:{contact.name}</h1>
          <p className="pt-1 text-sm">City:{contact.city}</p>
          <button onClick={()=>handleClick(contact.id)} className=" px-5 py-1 rounded-lg bg-gray-300 cursor-pointer absolute right-5 bottom-5">
            Edit
          </button>
        </div>
      :
      
        <div className="pt-5 px-4  size-full relative  size-full flex-row">
          <input
            placeholder="Name"
            name="Full-name"
            className="border p-1 pl-2 rounded-md text-sm w-full"
            value={contact.name}
            onChange={(e)=>{}}
          />
          <input
            placeholder="City"
            name="City"
            className="border p-1 pl-2 rounded-md text-sm w-full  mt-2"
            value={contact.city}
            onChange={(e)=>{}}
          />
          <button onClick={()=>handleDelete(contact.id)} className=" px-2 py-1 rounded-lg bg-red-400 text-white cursor-pointer absolute left-4 bottom-5">
            Delete
          </button>
          <button onClick={handleSave} className=" px-2 py-1 rounded-sm bg-violet-600 text-white cursor-pointer absolute right-5 bottom-5">
            Save
          </button>
          <button onClick={handleCancel} className=" px-2 py-1 rounded-sm bg-gray-200 text-black cursor-pointer absolute right-18 bottom-5">
            Cancel
          </button>
        </div>
     }
        </div>
      )):null}
      

      
    </div>
  );
}
