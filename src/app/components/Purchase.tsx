"use client";
import { useState, useContext } from 'react';
import { Context } from '../layout';
import Image from 'next/image';
import React from 'react'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHardDrive,
  faTruck,
  faTruckFast,
  faChevronLeft,
  faUmbrella
} from "@fortawesome/free-solid-svg-icons";


const Purchase = () => {
  const [show, setShow] = useContext(Context);
  return (
    <div className="container w-1/2 h-1/2 bg-gray-200 border-2 border-gray-300 rounded-lg p-5 mx-20 mt-20 font-yekanbbold">
      <div className="purchase-title flex flex-row-reverse justify-between pb-10">
        <h4 className="text-md">فروشنده</h4>

        <div className="flex flex-row-reverse gap-1 text-sm text-cyan-500">
          <span>3</span>
          <Link href="/">فروشنده دیگر</Link>
        </div>
      </div>

      <div className="provider-info flex flex-row-reverse gap-3 border-b-2 border-gray-300 pb-5">
        <div className="digikala-logo">
          <Image src="/Site-Icon.png" alt="logo" width={25} height={25} />
        </div>

        <div className="flex flex-col items-end gap-2">
          <div>
            <span>دیجی کالا</span>
          </div>
          <div className="text-sm flex flex-row-reverse gap-2">
            <span className="text-green-600">86.6%</span>
            <span className="text-gray-500">رضایت از کالا</span>
            <span className="text-gray-500 border-r-2 border-gray-300 pr-2">
              عملکرد
            </span>
            <span className="text-green-600">عالی</span>
          </div>
        </div>
      </div>

      <div className="guarantee flex flex-row-reverse gap-3 py-5 border-b-2 border-gray-300 text-gray-700 text-sm items-center">
        <Image
          src="/bx+check+shield-1325051854507277842 (4).png"
          alt="guarantee"
          width={25}
          height={25}
        />
        <span>گارانتی 18 ماهه لیان همراه پارسیان</span>
      </div>

      <div className="shipping border-b-2 border-gray-300">
        <div className="flex flex-row-reverse justify-between items-center py-5">
          <div className="flex flex-row-reverse items-center gap-3">
            <FontAwesomeIcon
              icon={faHardDrive}
              size="lg"
              className="text-cyan-500"
            />
            <h5 className="text-md">موجود در انبار دیجی کالا</h5>
          </div>
          <Link href="/">
            <FontAwesomeIcon
              icon={faChevronLeft}
              size="sm"
              className="text-gray-400"
            />
          </Link>
        </div>

        <div className="flex flex-row-reverse items-center gap-5 pr-2">
          <div className="text-cyan-500">&#8226;</div>
          <div className="flex flex-row-reverse gap-3 items-center">
            <FontAwesomeIcon
              icon={faTruck}
              size="sm"
              className="text-red-600"
            />
            <span className="text-sm text-gray-500">ارسال دیجی کالا</span>
          </div>
        </div>

        <div className="flex flex-row-reverse items-center gap-5 pr-2 pb-5">
          <div className="text-cyan-500">&#8226;</div>
          <div className="flex flex-row-reverse gap-3 items-center">
            <FontAwesomeIcon
              icon={faTruckFast}
              size="sm"
              className="text-blue-600"
            />
            <span className="text-sm text-gray-500">
              ارسال امروز (فعلا در شهر تهران و کرج)
            </span>
          </div>
        </div>
      </div>

      <div className="scores flex flex-row-reverse gap-3 py-5 border-b-2 border-gray-300">
        <div>
          <Image
            src="/Star-Clipart-PNG_nvsofi.png"
            alt="badge"
            width={25}
            height={25}
          />
        </div>
        <div className="flex flex-row-reverse gap-1 items-center">
          <div className="flex flex-row-reverse text-sm text-gray-700">
            <span>150</span>
            <span>امتیاز دیجی کلاب</span>
          </div>
          <div>
            <Image
              src="/352432_info_icon (2).png"
              alt="info"
              width={20}
              height={20}
              className="opacity-40"
            />
          </div>
        </div>
      </div>

      <div className="best-price flex flex-row-reverse gap-3 py-5">
        <Image
          src="/352432_info_icon (3).png"
          alt="info"
          width={20}
          height={20}
        />
        <span className="text-green-700 text-sm">
          بهترین قیمت در 30 روز گذشته
        </span>
      </div>

      {show ? (
        <div className="with-insurance text-sm flex flex-row-reverse justify-between bg-blue-100 p-2 rounded-md">
          <div className="flex flex-row-reverse gap-3 items-center">
            <FontAwesomeIcon icon={faUmbrella} className="text-blue-600" />
            <span>بیمه تجهیزات دیجیتال - بیمه پارسیان</span>
          </div>
          <div>
            <span>264,870</span>
            <span>تومان</span>
          </div>
        </div>
      ) : null}

      <div className="CTA">
        <div className="py-3 flex items-center gap-2">
          <span className="text-sm">تومان</span>
          <span className="text-lg">16,769,000</span>
        </div>
        <div>
          <button className="bg-red-500 py-3 text-sm text-white rounded-lg w-full">
            افزودن به سبد
          </button>
        </div>
      </div>
    </div>
  );
}

export default Purchase