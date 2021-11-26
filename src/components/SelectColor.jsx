import React, { useState } from "react";

export default function SelectColor({item}) {
  const [selectColor, setSelectColor] = useState(false);

  return (
    <button
      onClick={() => setSelectColor(!selectColor)}
      style={{ backgroundColor: item.color_hash }}
      className={`${
        selectColor
          ? `h-10 w-10 mr-4 mb-2 border-4 border-blue-500 rounded-full`
          : `h-10 w-10 mr-4 mb-2 rounded-full`
      }`}
    ></button>
  );
}
