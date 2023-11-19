import React from "react";
import Link from "next/link";

const PrimaryButton = ({ copy, link }) => {
  return (
    <button
      type="button"
      className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-48"
    >
      <Link href={link}>{copy}</Link>
    </button>
  );
};

export default PrimaryButton;
