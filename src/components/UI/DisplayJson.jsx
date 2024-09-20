import React from "react";

const DisplayJson = ({ data }) => {
  console.log(data)
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <h2 className="text-white font-bold mb-2">JSON Data:</h2>
      <pre className="bg-gray-900 text-white p-3 rounded-md overflow-x-auto">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};

export default DisplayJson;