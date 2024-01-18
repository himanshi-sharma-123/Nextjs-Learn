import { NextResponse } from "next/server";

export const GET = (req, context) => {
  //   console.log("Req: ", req);
  console.log("Context: ", context);
  console.log("Context.params: ", context.params);
  console.log("Context.params.id: ", context.params.id);

  return NextResponse.json({ msg: " Success" }, { status: 200 });
};

////////// OR ///////////////

// export const GET = (req, { params }) => {
//   //   console.log("Req: ", req);
//   console.log("params.id: ", params.id);

//   return NextResponse.json({ msg: " Success" }, { status: 200 });
// };
