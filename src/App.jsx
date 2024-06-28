import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("black");
  const [text, setText] = useState("Car Brand And Car Color");
  const addCount = () => setCount(count + 1);
  const SubCount = () => setCount(count - 1);

  const handleRed = () => {
    setColor("red");
    setText("The Brand of Car is Audi and Car of Color is Red");
  };
  const handleorange = () => {
    setColor("#f97316");
    setText("The Brand of Car is Tesla and Car of Color is Orange");
  };
  const handlePink = () => {
    setColor("pink");
    setText("The Brand of Car is Infinite and Car of Color is Pink");
  };
  const handleAmber = () => {
    setColor("#f59e0b");
    setText("The Brand of Car is VolksWagen and Car of Color is Amber");
  };
  const handleLime = () => {
    setColor("#a3e635");
    setText("The Brand of Car is Ferrari and Car of Color is Lime");
  };
  const handleGreen = () => {
    setColor("#22c55e");
    setText("The Brand of Car is Lamborghini and Car of Color is Green");
  };
  const handleEmerald = () => {
    setColor("#6ee7b7");
    setText("The Brand of Car is Jaguar and Car of Color is Emerald");
  };
  const handleTeal = () => {
    setColor("#2dd4bf");
    setText("The Brand of Car is Toyota and Car of Color is Teal");
  };
  const handleViolet = () => {
    setColor("#7c3aed");
    setText("The Brand of Car is Maruti Suzuki and Car of Color is Violet");
  };
  const handlePurple = () => {
    setColor("#9333ea");
    setText("The Brand of Car is Honda and Car of Color is Purple");
  };
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <h1 className=" text-white text-center underline m-5 text-xl font-bold">
          Welcome to React Platform
        </h1>
        <div className="flex gap-4 justify-center m-4">
          <button
            className="border border-gray-800 rounded-md shadow-sm text-sm text-gray-100  bg-gray-700 p-2 "
            onClick={addCount}
          >
            AddCount : {count}
          </button>
          <button
            className="border rounded-md border-gray-800 shadow-sm text-sm text-gray-100 bg-gray-700 p-2"
            onClick={SubCount}
          >
            SubCount : {count}
          </button>
        </div>
        <div className="font-bold text-xl text-center mt-10 text-gray-100">
          {text}
        </div>
        <div className="fixed bottom-8 flex flex-wrap p-2 inset-x-0 justify-center">
          <div className="bg-white rounded-3xl p-2 flex gap-3 ">
            <button
              className="text-white px-2 py-1 rounded-2xl bg-red-600 "
              onClick={handleRed}
            >
              Red
            </button>
            <button
              className="text-white p-2 rounded-2xl bg-orange-500 "
              onClick={handleorange}
            >
              Orange
            </button>
            <button
              className="text-white p-2 rounded-2xl bg-pink-500 "
              onClick={handlePink}
            >
              Pink
            </button>
            <button
              className="text-white p-2 rounded-2xl bg-amber-500 "
              onClick={handleAmber}
            >
              Amber
            </button>
            <button
              className="text-white p-2 rounded-2xl bg-lime-400 "
              onClick={handleLime}
            >
              Lime
            </button>
            <button
              className="text-white p-2 rounded-2xl bg-green-500 "
              onClick={handleGreen}
            >
              Green
            </button>
            <button
              className="text-white p-2 rounded-2xl bg-emerald-300 "
              onClick={handleEmerald}
            >
              Emerald
            </button>
            <button
              className="text-white p-2 rounded-2xl bg-teal-400 "
              onClick={handleTeal}
            >
              Teal
            </button>
            <button
              className="text-white p-2 rounded-2xl bg-violet-600 "
              onClick={handleViolet}
            >
              Violet
            </button>
            <button
              className="text-white p-2 rounded-2xl bg-purple-600 "
              onClick={handlePurple}
            >
              Purple
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
