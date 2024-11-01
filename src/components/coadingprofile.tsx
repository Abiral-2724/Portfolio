import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

const profiles = [
  {
    name: "LeetCode",
    avatarUrl: "https://avatars.githubusercontent.com/u/41718343?s=280&v=4",
    profileLink: "https://leetcode.com/u/abiraljain2004/",
  },
  {
    name: "GeeksforGeeks",
    avatarUrl: "https://cdn.icon-icons.com/icons2/3912/PNG/512/geeksforgeeks_logo_icon_248241.png",
    profileLink: "https://www.geeksforgeeks.org/user/abiral_274/",
  },
  {
    name: "Coding Ninjas",
    avatarUrl: "https://media.licdn.com/dms/image/v2/D4D0BAQFGN6Sr_NqlUA/company-logo_200_200/company-logo_200_200/0/1688561179874?e=2147483647&v=beta&t=xvJIesZYoD6_xhHPu9aJ9eEmzRN1Wyn9KfxWq4wXINc",
    profileLink: "https://www.codingninjas.com/codestudio/profile/your-profile",
  },
  {
    name: "Codeforces",
    avatarUrl: "https://cdn-1.webcatalog.io/catalog/codeforces/codeforces-icon-filled-256.webp?v=1714773964567",
    profileLink: "https://codeforces.com/profile/abiral2004jain",
  },
];

export function CodingProfile() {
  return (
    <ul className="list-none space-y-6 p-4 max-w-md mx-auto bg-gray-50 rounded-lg shadow-md">
      {profiles.map((profile) => (
        <li key={profile.name} className="relative flex items-center bg-white rounded-lg shadow-sm transition-all duration-300 hover:shadow-md p-4">
          <Avatar className="border-2 border-gray-200 size-12 shadow-sm mr-4">
            <AvatarImage
              src={profile.avatarUrl}
              alt={`${profile.name} Avatar`}
              className="object-cover"
            />
            <AvatarFallback className="bg-blue-100 text-blue-600" >{profile.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-grow">
            <h2 className="font-semibold text-lg text-gray-800" style={{fontFamily:'serif'}}>{profile.name}</h2>
          </div>
          <Link href={profile.profileLink} target="_blank" passHref>
            <button className="text-blue-600 hover:text-blue-800 transition-colors duration-200 text-sm font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded ml-auto">
              View Profile
            </button>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default CodingProfile;