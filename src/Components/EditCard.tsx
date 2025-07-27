import { type Contact } from "../App";
type CardProps={
  contact:Contact;
  newName:string;
  setNewName:React.Dispatch<React.SetStateAction<string>>;
  newCity:string;
  setNewCity:React.Dispatch<React.SetStateAction<string>>;
  handleDelete:(id: number) => void;
  handleSave:() => void;
  handleCancel:() => void;
  
}


export default function Card({contact,newName,setNewName,newCity,setNewCity,handleDelete,handleSave,handleCancel}:CardProps) {
  return (
    <div className="pt-5 px-4  size-full relative  size-full flex-row">
                  <input
                    placeholder={contact.name}
                    name="Full-name"
                    className="border p-1 pl-2 rounded-md text-sm w-full"
                    value={newName}
                    onChange={(e) => {
                      setNewName(e.target.value);
                    }}
                  />
                  <input
                    placeholder={contact.city}
                    name="City"
                    className="border p-1 pl-2 rounded-md text-sm w-full  mt-2"
                    value={newCity}
                    onChange={(e) => {
                      setNewCity(e.target.value);
                    }}
                  />
                  <button
                    onClick={() => handleDelete(contact.id)}
                    className=" px-2 py-1 rounded-lg bg-red-400 text-white cursor-pointer absolute left-4 bottom-5"
                  >
                    Delete
                  </button>
                  <button
                    onClick={handleSave}
                    className=" px-2 py-1 rounded-sm bg-violet-600 text-white cursor-pointer absolute right-5 bottom-5"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className=" px-2 py-1 rounded-sm bg-gray-200 text-black cursor-pointer absolute right-18 bottom-5"
                  >
                    Cancel
                  </button>
                </div>
  )
}
