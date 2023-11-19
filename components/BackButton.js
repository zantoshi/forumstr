import React from "react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  const handleGoBack = () => {
    // Go back to the previous page
    router.back();
  };

  return (
    <>
      <button
        type="button"
        className="inline-flex items-center rounded-md border-2 text-black border-indigo-600 px-3 py-2 text-sm font-semibold hover:text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-48"
        onClick={handleGoBack}
      >
        Back
      </button>
    </>
  );
};

export default BackButton;
