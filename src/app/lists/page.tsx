import { lists } from "@/constants/lists";
import Link from "@/components/Global/Link";

export default function Lists() {
	return (
		<div className="flex min-h-screen flex-col items-start justify-start xs:p-8 p-20 font-mono text-sm">
			<div className="uppercase pb-10">things i've collected through 19 years of living</div>
			<div className="grid grid-cols-[65px_1fr] gap-x-10 gap-y-10">
				{lists.map((section, index) => (
					<>
						<p key={`title-${index}`} className="text-slate-500 italic">
							{section.title}
						</p>
						<div key={`items-${index}`} className="flex flex-col">
							{section.items.map((item, itemIndex) => (
								<p key={itemIndex}>{item.link ? <Link text={item.text} href={item.link} /> : item.text}</p>
							))}
						</div>
					</>
				))}
			</div>
		</div>
	);
}
