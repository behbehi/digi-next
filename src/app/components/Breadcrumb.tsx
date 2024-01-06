import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVolumeOff,
  faHouse
} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

const Breadcrumb = () => {
  return (
    <div className="px-20 pt-5 flex flex-row-reverse justify-between font-yekanbbold">
      <div className="breadright flex flex-row-reverse gap-3 text-gray-400 text-sm">
        <Link href="/">دیجی کالا</Link>
        <span>/</span>
        <Link href="/">موبایل</Link>
        <span>/</span>
        <Link href="/">گوشی موبایل</Link>
      </div>
      <div className="breadleft flex flex-row-reverse items-center gap-5">
        <Link href="/">
          <FontAwesomeIcon icon={faVolumeOff} className="pr-2 text-gray-400" />
          <span className="text-gray-400 text-sm">
            ثبت آگهی در پیندو
          </span>
        </Link>
        <Link href="/">
          <FontAwesomeIcon icon={faHouse} className="pr-2 text-gray-400" />
          <span className="text-gray-400 text-sm">
            فروش در دیجی کالا
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Breadcrumb