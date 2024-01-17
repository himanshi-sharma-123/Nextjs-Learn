import { NextResponse } from "next/server";
import { cookies } from "next/headers";
export async function GET(req) {
  //   console.log(req);

  //Headers
  const requestHeaders = new Headers(req.headers);
  //   console.log(requestHeaders);

  // URL Query Params
  const { searchParams } = new URL(req.url);

  // or

  //   const searchParams = req.nextUrl.searchParams;

  //   console.log(searchParams);
  //   console.log(searchParams.get("search"));

  //Cookies

  const cook1 = req.cookies;
  console.log("Cookie1:", cook1);

  const cook2 = cookies();
  console.log("Cookie2:", cook2);
  return NextResponse.json({ msg: "Hello Nextjs API" });
}
