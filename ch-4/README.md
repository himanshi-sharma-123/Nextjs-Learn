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

## Request Cookies

const cook1 = req.cookies;
console.log("Cookie1:", cook1);

const cook2 = cookies();
console.log("Cookie2:", cook2);

## Post Request

//Request Body
const res = await req.json();
console.log("ResJSON", res);

//Form Data
const formData = await req.formData();
console.log("Form Data: ", formData);

output:

Form Data: FormData {
[Symbol(state)]: [
{ name: 'title', value: 'First Title' },
{ name: 'body', value: 'First Blog' }
]
}

console.log("Form Data: ", formData.get("title"));
console.log("Form Data: ", formData.get("body"));

output:

Form Data: First Title
Form Data: First Blog

return NextResponse.json({ msg: "Post Success" });

## Dynamic API Route

products -> [id] -> route.js

export const GET = (req) => {
console.log("Req: ", req);
return NextResponse.json({ msg: " Success" }, { status: 200 });
};

## Params

Method 1 : using context

export const GET = (req, context) => {
// console.log("Req: ", req);
console.log("Context: ", context);
console.log("Context.params: ", context.params);
console.log("Context.params.id: ", context.params.id);

return NextResponse.json({ msg: " Success" }, { status: 200 });
};

Output:

Context: { params: { id: '3' } }
Context.params: { id: '3' }
Context.params.id: 3

Method 2 : using Params

export const GET = (req, { params }) => {
// console.log("Req: ", req);
console.log("params.id: ", params.id);

return NextResponse.json({ msg: " Success" }, { status: 200 });
};

Output:

params.id: 3
