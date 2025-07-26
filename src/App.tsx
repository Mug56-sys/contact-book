import "./index.css";

function App() {
  return (
    <div className="h-screen bg-gray-300 pt-5 pl-6">
      <h1 className="text-3xl font-semibold">Contact Book</h1>
      <span className="text-sm ">Keep track of where your friends live in</span>
      <div className="bg-white w-7/18 min-w-65 max-w-150 py-4 mt-4 rounded-lg flex justify-evenly items-center px-2 ">
        <input placeholder="Name" className="border p-1 pl-2 rounded-md text-sm w-1/3"/>
        <input placeholder="City" className="border p-1 pl-2 rounded-md text-sm w-1/3"/>
        <button className="bg-violet-600 text-nowrap text-white rounded-lg py-2 px-3 text-xs cursor-pointer ">Add Contact</button>
      </div>
    </div>
  );
}

export default App;
