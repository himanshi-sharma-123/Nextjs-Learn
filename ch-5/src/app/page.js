import GetData1 from "@/components/GetData1";
import PostData1 from "@/components/PostData1";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PostData1 />
      <GetData1 />
    </main>
  );
}
