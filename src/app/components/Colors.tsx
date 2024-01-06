"use client"
import React, { useState } from 'react'

const Colors = () => {

  const [color, setColor] = useState('مشکی');


  return (
    <div className="flex flex-col items-end gap-5">
      <div>
        <h4 className="font-yekanbbold">رنگ: {color}</h4>
      </div>
      <div className="flex gap-2">
        <input
          type="radio"
          className="form-radio text-yellow-500 bg-yellow-500 w-7 h-7 border-none"
          name="radio-colors"
          value="زرد"
          onChange={(e) => setColor(e.target.value)}
        />

        <input
          type="radio"
          className="form-radio text-green-500 bg-green-500 w-7 h-7 border-none"
          name="radio-colors"
          value="سبز"
          onChange={(e) => setColor(e.target.value)}
        />

        <input
          type="radio"
          className="form-radio text-black bg-black w-7 h-7 border-none"
          name="radio-colors"
          value="مشکی"
          onChange={(e) => setColor(e.target.value)}
          defaultChecked
        />
      </div>
    </div>
  );
}

export default Colors