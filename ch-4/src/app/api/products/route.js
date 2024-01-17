import { NextResponse } from "next/server";

export async function GET(req) {
  //   console.log(req);
  const requestHeaders = new Headers(req.headers);
  console.log(requestHeaders);
  return NextResponse.json({ msg: "Hello Nextjs API" });
}
