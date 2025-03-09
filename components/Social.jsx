import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaHackerrank } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/lamahewageDulani" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/dulani-lamahewage/" },
  // { icon: <FaYoutube />, path: "" },
  { icon: <FaHackerrank />, path: "https://www.hackerrank.com/profile/dulaniruwanthik1" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
