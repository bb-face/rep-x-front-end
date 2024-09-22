import React from 'react';

const DisplayJson = ({ data }) => {
  return (
    <div className="bg-yellow-500 p-4 shadow-lg w-full">
      <h2 className="font-bold mb-2">JSON Data:</h2>
      <div className="bg-yellow-300 p-3 overflow-x-auto">
        <pre className="whitespace-pre-wrap break-words max-w-md max-h-32">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default DisplayJson;
