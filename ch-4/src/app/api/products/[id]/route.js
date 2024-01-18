import { NextResponse } from "next/server";

export const GET = (req) => {
  console.log("Req: ", req);
  return NextResponse.json({ msg: " Success" }, { status: 200 });
};
