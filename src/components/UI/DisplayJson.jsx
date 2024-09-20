import React from "react";

const DisplayJson = ({ data }) => {
  console.log(data)
  return (
    <div className="bg-yellow-500 p-4 shadow-lg">
      <h2 className="font-bold mb-2">JSON Data:</h2>
      <pre className="bg-yellow-300 p-3 overflow-x-auto">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};

export default DisplayJson;