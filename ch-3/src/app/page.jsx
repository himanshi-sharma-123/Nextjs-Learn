import LearnLink from "@/components/LearnLink";
import LearnUseRouter from "@/components/LearnUseRouter";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <LearnLink /> */}
      <LearnUseRouter />
      {/* <h1>hello nextjs</h1> */}
    </main>
  );
}
