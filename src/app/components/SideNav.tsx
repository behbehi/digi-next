import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShareNodes,
  faBell,
  faChartLine,
  faSliders,
  faList
} from "@fortawesome/free-solid-svg-icons";

const SideNav = () => {
  return (
    <div className="flex flex-col pr-20 pt-20 items-center gap-5">
      <Link href="/">
        <FontAwesomeIcon
          icon={faHeart}
          size="lg"
          className="text-gray-700"
        />
      </Link>
      <Link href="/">
        <FontAwesomeIcon
          icon={faShareNodes}
          size="lg"
          className="text-gray-700"
        />
      </Link>
      <Link href="/">
        <FontAwesomeIcon
          icon={faBell}
          size="lg"
          className="text-gray-700"
        />
      </Link>
      <Link href="/">
        <FontAwesomeIcon
          icon={faChartLine}
          size="lg"
          className="text-gray-700"
        />
      </Link>
      <Link href="/">
        <FontAwesomeIcon
          icon={faSliders}
          size="lg"
          className="text-gray-700"
        />
      </Link>
      <Link href="/">
        <FontAwesomeIcon icon={faList}
          size="lg"
          className="text-gray-700"
        />
      </Link>
    </div>
  );
}

export default SideNav