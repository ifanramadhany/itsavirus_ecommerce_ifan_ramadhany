import React, { useState } from "react";

export default function SelecSize({item}) {
  const [selectSize, setSelectSize] = useState(false);

  return (
    <button
      onClick={() => setSelectSize(!selectSize)}
      className={`${
        selectSize
          ? "h-10 w-10 mr-4 mb-2 bg-gray-800 text-white border border-gray-800"
          : "h-10 w-10 mr-4 mb-2 bg-white border border-gray-800"
      }`}
    >
      <span>{item}</span>
    </button>
  );
}
