import { NextResponse } from "next/server";

export async function GET(req) {
  //   console.log(req);

  //Headers
  const requestHeaders = new Headers(req.headers);
  //   console.log(requestHeaders);

  // URL Query Params
  const { searchParams } = new URL(req.url);

  // or

  //   const searchParams = req.nextUrl.searchParams;

  console.log(searchParams);
  console.log(searchParams.get("search"));
  return NextResponse.json({ msg: "Hello Nextjs API" });
}
