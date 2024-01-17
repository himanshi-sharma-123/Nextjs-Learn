import LearnClientComponent from "@/components/LearnClientComponent";
import LearnCssModule from "@/components/LearnCssModule";
import LearnLink from "@/components/LearnLink";
import LearnServerComponent from "@/components/LearnServerComponent";
import LearnUseGlobalCss from "@/components/LearnUseGlobalCss";
import LearnUseImage from "@/components/LearnUseImage";
import LearnUseRouter from "@/components/LearnUseRouter";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <LearnLink /> */}
      {/* <LearnUseRouter /> */}
      {/* <LearnServerComponent /> */}
      {/* <LearnClientComponent /> */}
      {/* <LearnUseGlobalCss /> */}
      {/* <LearnCssModule /> */}
      <LearnUseImage />
      {/* <h1>hello nextjs</h1> */}
    </main>
  );
}
