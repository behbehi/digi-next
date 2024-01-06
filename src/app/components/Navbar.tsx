import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faShoppingCart,
  faCaretDown,
  faBars,
  faPercent,
  faBasketShopping,
  faGift,
  faFire,
  faTag,
  faLocationDot
} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
import Image from 'next/image';
import Searchbar from './Searchbar';

const Navbar = () => {
  return (
    <nav className="shadow-lg px-20 py-10 font-yekanbbold ">
      <div className="primary-nav flex justify-between flex-row-reverse items-center">
        <div className="searchbar-logo flex flex-row-reverse items-center gap-5">
          <Link href="/">
            <Image src="/digi logo.png" alt="logo" width={150} height={150} />
          </Link>
          <Searchbar />
        </div>

        <div className="profile-icons flex gap-5">
          <Link href="/">
            <FontAwesomeIcon
              icon={faShoppingCart}
              style={{ color: "gray" }}
              size="lg"
              className="border-r-2 pr-5"
            />
          </Link>
          <div>
            <Link href="/">
              <FontAwesomeIcon
                icon={faCaretDown}
                style={{ color: "gray" }}
                size="sm"
                className="pr-2"
              />
            </Link>
            <Link href="/">
              <FontAwesomeIcon
                icon={faUser}
                style={{ color: "gray" }}
                size="lg"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="secondary-nav pt-5 flex justify-between items-center flex-row-reverse">
        <div className="secondary-right flex flex-row-reverse gap-5 items-center">
          <Link href="/">
            <span className="pr-1 text-gray-700">دسته بندی کالاها</span>
            <FontAwesomeIcon
              icon={faBars}
              size="lg"
              className="text-gray-700"
            />
          </Link>

          <Link href="/" className="border-r-2">
            <span className="text-gray-500 text-sm pr-1">
              شگفت انگیزها
            </span>
            <FontAwesomeIcon
              icon={faPercent}
              style={{ color: "gray" }}
              size="sm"
              className="pr-5"
            />
          </Link>

          <Link href="/">
            <span className="text-gray-500 text-sm pr-1">
              سوپرمارکت
            </span>
            <FontAwesomeIcon
              icon={faBasketShopping}
              style={{ color: "gray" }}
              size="sm"
            />
          </Link>

          <Link href="/">
            <span className="text-gray-500 text-sm pr-1">
              کارت هدیه
            </span>
            <FontAwesomeIcon
              icon={faGift}
              style={{ color: "gray" }}
              size="sm"
            />
          </Link>

          <Link href="/">
            <span className="text-gray-500 text-sm pr-1">
              پرفروش ترین ها
            </span>
            <FontAwesomeIcon
              icon={faFire}
              style={{ color: "gray" }}
              size="sm"
            />
          </Link>

          <Link href="/">
            <span className="text-gray-500 text-sm pr-1">
              تخفیف ها و پیشنهادها
            </span>
            <FontAwesomeIcon icon={faTag} style={{ color: "gray" }} size="sm" />
          </Link>

          <Link href="/" className="border-r-2">
            <span className="text-gray-500 text-sm pr-5">
              سوالی دارید؟
            </span>
          </Link>

          <Link href="/">
            <span className="text-gray-500 text-sm">
              <span>!</span>
              در دیجی کالا بفروشید
            </span>
          </Link>
        </div>

        <div className="secondary-left">
          <Link href="/">
            <span className="text-gray-500 text-sm pr-2">
              ارسال به تهران، تهران
            </span>
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ color: "gray" }}
              size="sm"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar