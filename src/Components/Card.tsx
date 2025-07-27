import { type Contact } from "../App";

export default function Card({contact,handleClick}:{contact:Contact;handleClick:(id: number) => void;}) {
  return (
    <div className="p-3 relative  size-full  ">
      <h1 className="text-xl font-semibold">Name:{contact.name}</h1>
      <p className="pt-1 text-sm">City:{contact.city}</p>
      <button
        onClick={() => handleClick(contact.id)}
        className=" px-5 py-1 rounded-lg bg-gray-300 cursor-pointer absolute right-5 bottom-5"
      >
        Edit
      </button>
    </div>
  );
}
