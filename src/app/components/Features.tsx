import React from 'react'

const Features = () => {
  return (
    <div className="flex flex-col items-end gap-5 font-yekanbbold">
      <div className="font-bold">
        <h4>ویژگی ها</h4>
      </div>
      <ul className="flex flex-col items-end gap-3 text-sm">
        <li>
          <span>AMOLED :</span>
          <span className="text-gray-500">فناوری صفحه نمایش</span>
          <span className="text-gray-500 pl-2">&#8226;</span>
        </li>
        <li>
          <span className="text-gray-500">رزولوشن عکس:</span>
          <span> 200 مگاپیکسل</span>
          <span className="text-gray-500 pl-2">&#8226;</span>
        </li>
        <li>
          <span>Android 13 :</span>
          <span className="text-gray-500">نسخه سیستم عامل</span>
          <span className="text-gray-500 pl-2">&#8226;</span>
        </li>
        <li>
          <span className="text-gray-500">اندازه:</span>
          <span> 6.7</span>
          <span className="text-gray-500 pl-2">&#8226;</span>
        </li>
        <li>
          <span className="text-gray-500">اقلام همراه: </span>
          <span>دفترچه راهنما، شارژر</span>
          <span className="text-gray-500 pl-2">&#8226;</span>
        </li>
      </ul>
    </div>
  );
}

export default Features