import Link from "next/link";
import React from "react";

const LearnLink = () => {
  const id = 1;
  return (
    <>
      <Link href="/admin/dashboard/">Go To Admin Dashboard</Link>
      <Link href={`/user/profile/${id}`}>Go To User Dashboard</Link>
    </>
  );
};

export default LearnLink;
