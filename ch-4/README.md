## Creating API or API Routes

import { NextResponse } from "next/server";

export async function GET(req) {
return NextResponse.json({ msg: "Hello Nextjs API" });
}

## Request Object

console.log(req)

## Request Headers

const requestHeaders = new Headers(req.headers);
console.log(requestHeaders);

## URL Query Params

Method-1 :

http://localhost:3000/api/products?search=%22java%22

const { searchParams } = new URL(req.url);
console.log(searchParams);
console.log(searchParams.get("search"));

output:

URLSearchParams { 'search' => '"java"' }
"java"

Method-2 :

const searchParams = req.nextUrl.searchParams
console.log(searchParams.get("search"));
