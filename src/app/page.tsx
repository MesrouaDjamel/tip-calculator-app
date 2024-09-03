import TipCalculator from "@/components/TipCalculator";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 bg-lightGrayishCyan">
      <Image
        src={"/logo.svg"}
        alt=""
        width={87}
        height={54}
        className="pt-12 pb-6 "
      />

      <TipCalculator />
    </main>
  );
}
