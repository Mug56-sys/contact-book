import { useState } from "react";

export default function ContactList() {
  const [editing,SetEditing]=useState(false)

  const handleClick=()=>{
      console.log(`click`)
  }
  const handleDelete=()=>{
    console.log(`deleting`)
  } 
  const handleSave=()=>{
    console.log(`Saving`)
  }
  const handleCancel=()=>{
     console.log(`canceling`)
  }
  return (
    <div className=" h-screen grid grid-cols-3 auto-rows-[200px] gap-3 mt-3 pb-5">
      {!editing ?<div className=" rounded-xl bg-white shadow-lg">
        <div className="p-3 relative  size-full  ">
          <h1 className="text-xl font-semibold">Name:</h1>
          <p className="pt-1 text-sm">City:</p>
          <button onClick={handleClick} className=" px-5 py-1 rounded-lg bg-gray-300 cursor-pointer absolute right-5 bottom-5">
            Edit
          </button>
        </div>
      </div>:<div className=" rounded-xl bg-white shadow-lg ">
        <div className="pt-5 px-4  size-full relative  size-full flex-row">
          <input
            placeholder="Name"
            name="Full-name"
            className="border p-1 pl-2 rounded-md text-sm w-full"
          />
          <input
            placeholder="City"
            name="City"
            className="border p-1 pl-2 rounded-md text-sm w-full  mt-2"
          />
          <button onClick={handleDelete} className=" px-2 py-1 rounded-lg bg-red-400 text-white cursor-pointer absolute left-4 bottom-5">
            Delete
          </button>
          <button onClick={handleSave} className=" px-2 py-1 rounded-sm bg-violet-600 text-white cursor-pointer absolute right-5 bottom-5">
            Save
          </button>
          <button onClick={handleCancel} className=" px-2 py-1 rounded-sm bg-gray-200 text-black cursor-pointer absolute right-18 bottom-5">
            Cancel
          </button>
        </div>
      </div>}

      {!editing ?<div className=" rounded-xl bg-white shadow-lg">
        <div className="p-3 relative  size-full  ">
          <h1 className="text-xl font-semibold">Name:</h1>
          <p className="pt-1 text-sm">City:</p>
          <button onClick={handleClick} className=" px-5 py-1 rounded-lg bg-gray-300 cursor-pointer absolute right-5 bottom-5">
            Edit
          </button>
        </div>
      </div>:<div className=" rounded-xl bg-white shadow-lg ">
        <div className="pt-5 px-4  size-full relative  size-full flex-row">
          <input
            placeholder="Name"
            name="Full-name"
            className="border p-1 pl-2 rounded-md text-sm w-full"
          />
          <input
            placeholder="City"
            name="City"
            className="border p-1 pl-2 rounded-md text-sm w-full  mt-2"
          />
          <button onClick={handleDelete} className=" px-2 py-1 rounded-lg bg-red-400 text-white cursor-pointer absolute left-4 bottom-5">
            Delete
          </button>
          <button onClick={handleSave} className=" px-2 py-1 rounded-sm bg-violet-600 text-white cursor-pointer absolute right-5 bottom-5">
            Save
          </button>
          <button onClick={handleCancel} className=" px-2 py-1 rounded-sm bg-gray-200 text-black cursor-pointer absolute right-18 bottom-5">
            Cancel
          </button>
        </div>
      </div>}

      {!editing ?<div className=" rounded-xl bg-white shadow-lg">
        <div className="p-3 relative  size-full  ">
          <h1 className="text-xl font-semibold">Name:</h1>
          <p className="pt-1 text-sm">City:</p>
          <button onClick={handleClick} className=" px-5 py-1 rounded-lg bg-gray-300 cursor-pointer absolute right-5 bottom-5">
            Edit
          </button>
        </div>
      </div>:<div className=" rounded-xl bg-white shadow-lg ">
        <div className="pt-5 px-4  size-full relative  size-full flex-row">
          <input
            placeholder="Name"
            name="Full-name"
            className="border p-1 pl-2 rounded-md text-sm w-full"
          />
          <input
            placeholder="City"
            name="City"
            className="border p-1 pl-2 rounded-md text-sm w-full  mt-2"
          />
          <button onClick={handleDelete} className=" px-2 py-1 rounded-lg bg-red-400 text-white cursor-pointer absolute left-4 bottom-5">
            Delete
          </button>
          <button onClick={handleSave} className=" px-2 py-1 rounded-sm bg-violet-600 text-white cursor-pointer absolute right-5 bottom-5">
            Save
          </button>
          <button onClick={handleCancel} className=" px-2 py-1 rounded-sm bg-gray-200 text-black cursor-pointer absolute right-18 bottom-5">
            Cancel
          </button>
        </div>
      </div>}
      
    </div>
  );
}
