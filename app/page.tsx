import BecomeAgent from "@/components/BecomeAgent";
import Landing from "@/components/Landing";
import SectionThree from "@/components/SectionThree";
import SectionTwo from "@/components/SectionTwo";
import Image from "next/image";

export default function Home() {
  return (
		<div>
			<Landing />
			<div className="mx-auto">
        <SectionTwo />
        <SectionThree />
        <BecomeAgent />
			</div>
		</div>
	);
}
