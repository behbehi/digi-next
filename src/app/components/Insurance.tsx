"use client"
import React, { useContext, useState } from "react";
import { Context } from "../layout";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";


const Insurance = () => {

  const [show, setShow] = useContext(Context);

  return (
    <div className="flex flex-col items-end gap-5 w-full font-yekanbbold">
      
      <div>
        <h4>بیمه</h4>
      </div>
      <div className="w-full h-full border-2 border-gray-200 rounded-md flex flex-row-reverse">
        <div className="border-l-2 border-gray-200 h-full px-4 pt-8">
          <input
            type="checkbox"
            className="border-2 border-gray-500 rounded-md w-5 h-5"
            onClick={() => setShow(!show)}
          />
        </div>
        <div className="w-full h-full p-5">
          <div className="flex flex-row-reverse">
            <span className="text-sm">بیمه تجهیزات دیجیتال - بیمه پارسیان</span>
          </div>

          <div className="flex flex-row-reverse justify-between text-sm">
            <div className="flex flex-row-reverse pt-3 gap-2">
              <span className="bg-red-500 text-white px-2 rounded-lg">20%</span>
              <span className="text-gray-300 line-through">457,800</span>
              <div className="flex flex-row-reverse gap-1">
                <span>366,240</span>
                <span>تومان</span>
              </div>
            </div>

            <Link href="/" className="flex items-center gap-1">
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="text-cyan-500"
                size="xs"
              />
              <span className="text-sm text-cyan-500">جزییات</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insurance;
