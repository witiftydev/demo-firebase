import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      Demo Project to check deploy opn firebase <br />
      <Link href="/about" className="text-blue-500 hover:underline">
        About Us
      </Link>
      <br />
      <Link href="/contact" className="text-blue-500 hover:underline">
        Contact Us
      </Link>
    </div>
  );
};

export default page;
