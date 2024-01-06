import React from 'react'
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faThumbsUp,
  faCircleInfo
} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';


const Info = () => {
  return (
    <div className="pt-20 flex flex-col gap-5">
      <div className="info flex flex-col gap-5">
        <div className="product-breadcrumb flex flex-row-reverse gap-2 text-sm font-yekanbbold">
          <Link href="/" className="font-bold text-cyan-500">
            ریلمی
          </Link>
          <span className="text-gray-400">/</span>
          <Link href="/" className="font-bold text-cyan-500">
            گوشی موبایل ریلمی
          </Link>
        </div>

        <div>
          <h3 className="product-description text-lg font-yekanbbold flex flex-row-reverse">
            <span>گوشی موبایل ریلمی مدل</span>
            <span>Pro Plus 5G 11</span>
            <span>دو سیم کارت ظرفیت 512 گیگابایت و</span>
            <span> رم 12 گیگابایت</span>
          </h3>
        </div>

        <div className="product-en-description text-sm text-gray-500 flex flex-row-reverse justify-between w-full items-center">
          <span>
            Realme 11 Pro Plus 5G Dual SIM 512GB And 12GB RAM Mobile Phone
          </span>
          <hr className="h-px w-48 border-0 bg-gray-300"></hr>
        </div>

        <div className="product-reviews flex flex-row-reverse gap-3 items-center text-sm">
          <div className="product-rating flex gap-1 flex-row-reverse items-center">
            <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />
            <span className="font-yekanbbold">4.3</span>
            <span className="text-gray-400">(17)</span>
          </div>

          <div className="flex flex-row-reverse gap-3">
            <span className="text-gray-400">&#8226;</span>

            <Link
              href="/"
              className="flex flex-row-reverse gap-1 font-yekanbbold text-cyan-500"
            >
              <span>70</span>
              <span>دیدگاه</span>
            </Link>

            <span className="text-gray-400">&#8226;</span>

            <Link
              href="/"
              className="flex flex-row-reverse gap-1 font-yekanbbold text-cyan-500"
            >
              <span>85</span>
              <span>پرسش</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-row-reverse gap-1 items-center text-sm font-yekanbbold">
        <FontAwesomeIcon icon={faThumbsUp} className="text-green-600" />
        <span className="text-gray-600">96%</span>
        <span className="text-gray-600">(20 نفر)</span>
        <span className="text-gray-600">
          از خریداران، این کالا را پیشنهاد کرده اند
        </span>
        <Image
          src="/352432_info_icon (2).png"
          alt="info"
          width={20}
          height={20}
          className="opacity-40"
        />
      </div>
    </div>
  );
}

export default Info