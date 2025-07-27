import { useState } from "react";
import { type Contact } from "../App";
import Card from "./Card";
import EditCard from './EditCard'

export default function ContactList({
  SetContactList,
  contactList,
}: {
  SetContactList: React.Dispatch<React.SetStateAction<Contact[]>>;
  contactList: Contact[];
}) {
  const [editing, SetEditing] = useState<number | null>(null);
  const [newName, setNewName] = useState<string>("");
  const [newCity, setNewCity] = useState<string>("");

  const handleClick = (id: number) => {
    SetEditing(id);
  };
  const handleDelete = (id: number) => {
    SetEditing(null);
    const UpdatedList: Contact[] = contactList.filter(
      (contact) => contact.id !== id
    );
    SetContactList(UpdatedList);
  };
  const handleSave = () => {
    const Edited: Contact[] = contactList.map((c) => {
      return c.id === editing ? { ...c, name: newName, city: newCity } : c;
    });
    SetContactList(Edited);
    setNewCity("");
    setNewName("");
    SetEditing(null);
  };
  const handleCancel = () => {
    SetEditing(null);
    console.log(`canceling`);
  };
  return (
    <div className=" h-screen grid grid-cols-3 auto-rows-[200px] gap-3 mt-3 pb-5 ">
      {contactList
        ? contactList.map((contact: Contact) => (
            <div className=" rounded-xl bg-white shadow-lg " key={contact.id}>
              {!(editing === contact.id) ? (
                <Card contact={contact} handleClick={handleClick}/>
              ) : (
               <EditCard contact={contact} newName={newName} setNewName={setNewName} newCity={newCity} setNewCity={setNewCity} handleDelete={handleDelete} handleSave={handleSave} handleCancel={handleCancel}/>
              )}
            </div>
          ))
        : null}
    </div>
  );
}
