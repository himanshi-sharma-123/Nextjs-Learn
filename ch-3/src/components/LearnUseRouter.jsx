"use client"; // Now this whole component is not server component instead of server, it is now client component

// import { useRouter } from "next/router";    // error in this
import { useRouter } from "next/navigation";

import React from "react";

const LearnUseRouter = () => {
  const router = useRouter();
  console.log("Router", router);
  return (
    <>
      <h1>Use Router</h1>
      <button type="button" onClick={() => router.push("/admin/dashboard")}>
        Go to Admin Dashboard
      </button>
    </>
  );
};

export default LearnUseRouter;
