## Creating API or API Routes

import { NextResponse } from "next/server";

export async function GET(req) {
return NextResponse.json({ msg: "Hello Nextjs API" });
}

## Request Object

console.log(req)
