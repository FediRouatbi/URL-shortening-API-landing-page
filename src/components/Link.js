import React from "react";

const Link = () => {
  return (
    <div className="bg-linkMobile md:bg-link  bg-cover  bg-DarkViolet translate-y-1/2 flex flex-col md:flex-row gap-4 py-10 px-10 w-10/12 mx-auto rounded-md">
      <input
        type="text"
        placeholder="Shorten a link here..."
        className="outline-none text-GrayishViolet h-10 rounded-md flex-grow focus:ring-4 px-2"
      />
      <button className="   text-white bg-cyan px-6 py-2 rounded-md">
        Shorten it!
      </button>
    </div>
  );
};

export default Link;
