import connectDB from "@/lib/connectDB";
import { NextResponse } from "next/server";
import postModel from "@/model/Post";

export async function GET(req) {
  try {
    await connectDB();
    const result = await postModel.find();
    return NextResponse.json({ result: result }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "something went wrong" }, { status: 400 });
  }
}

export async function POST(req) {
  const body = await req.json();
  try {
    await connectDB();
    const result = await postModel.create(body);
    return NextResponse.json({ result: result }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "something went wrong" }, { status: 400 });
  }
}
