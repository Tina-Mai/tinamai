"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import ScrambleText from "@/components/Global/ScrambleText";
import Link from "@/components/Global/Link";

export default function KidsTheseDays() {
	return (
		<div className="vertical bg-light text-zinc-800">
			{/* cover */}
			<div className="vertical sm:horizontal w-full py-10 sm:py-0 gap-10 sm:gap-0 sm:h-[100dvh] center-v center-h bg-dark text-white text-center">
				{/* text */}
				<div className="vertical h-full justify-between items-center w-full sm:w-1/2 px-10 sm:px-10 sm:py-7 gap-10 sm:gap-0">
					<motion.a href="/" className="body" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
						<ScrambleText text="[ ← back to home ]" />
					</motion.a>
					<motion.div className="font-serif vertical gap-3 sm:gap-5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
						<h1 className="text-5xl sm:text-6xl font-monoDisplay font-medium uppercase">Kids These Days</h1>
						<h2 className="text-2xl sm:text-3xl italic tracking-tight">Or: On American Exceptionalism and the Phenomenon of Gifted Children</h2>
					</motion.div>
					<motion.div className="body" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
						November 2024
					</motion.div>
				</div>
				{/* image */}
				<motion.div
					className="w-full sm:w-1/2 h-full flex items-center justify-center"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.3, duration: 0.8 }}
				>
					{/* <Image src={coverImg} alt="cover" className="max-w-72 sm:max-w-none w-full sm:h-full object-cover" /> */}
				</motion.div>
			</div>

			<div className="flex center-v w-full py-16 font-serif text-lg">
				<div className="w-full max-w-prose px-4 md:px-0 space-y-5">
					<p>
						It’s 1998, and the face of American gifted education is a seven-year-old boy from the San Fernando Valley. He is reading about the Big Bang, or he is playing chess, or he is
						detailing the decimal expansion of pi. His gift is something to be cultivated, a garden tended with care and precision. His parents are quiet and circumspect about their son’s
						abilities. They are proud, of course, but they don’t push him—they resist the urge to turn his talent into fodder for advice columns and think pieces. They are grateful for his
						gift and hopeful for his exceptional future ahead.
					</p>
					<p>
						I am willing to bet this made-up child is what many Americans had in mind when picturing the gifted programs that we’ve built up in the country. Since the beginning, America
						has been a nation enamored by its own exceptionalism, infused into our media from the fictional stories published to youth in the 1800s to the guidebooks published to parents
						in the early to mid-1900s. We are the country of innovators and independents, of the self-made man and the brave entrepreneur. We romanticize the standout individual who breaks
						the mold and outpaces the crowd. Our children are no exception to this mythology. We have and continue to look to institutional programs for the gifted as a way to cultivate
						these exceptional children who will be our future leaders and innovators. But is this the best way for talented children to be raised, or is there something to be said about
						how being labeled as “gifted” as a child leads to dropping out, burning out, and growing up too fast?
					</p>
					<p className="text-center">* * *</p>
					<p>
						There’s a story that we like to tell ourselves in America. In the beginning, this story was embodied in figures like the young pioneers and inventors, individuals celebrated
						for their ingenuity and grit in shaping the nation’s future. The author Horatio Alger wrote popular young adult novels in the 1800s on how boys from humble backgrounds worked
						their way to achieving success and security. He became the godfather of a new narrative and made his career writing rags-to-riches books reflecting the American Dream. In his
						stories, these boys are always bright-eyed, innocent, and happy to help; they have names like Ragged Dick and Luck and Pluck, and by the end, they are saved from their lives of
						poverty by virtue of being good and resourceful. This narrative helped establish an enduring cultural ideal of exceptional youth—gifted children who, through their talents and
						character, rise above adversity to achieve greatness. The Horatio Alger myth grew to be emblematic of American exceptionalism and the belief in limitless opportunity.
					</p>
					<p>
						Throughout the 19th and 20th centuries, key influences continued to contribute to this romanticization of American values, from Ralph Waldo Emerson’s “Self-Reliance” to Timothy
						Leary’s “Turn on, tune in, drop out” slogan. In the 1900s, this narrative evolved with a focus on the entrepreneurial spirit of young individuals who transformed industries,
						such as Henry Ford and Thomas Edison. Today, this obsession with exceptional youth persists in the form of the young prodigy, the gifted entrepreneur, or the tech innovator. It
						is reflected in the lionization of figures like Steve Jobs, Mark Zuckerberg, and other young innovators who seem to embody boundless potential and disrupt entire industries
						before reaching middle age. We have always been proud of the exceptional figures in our country, especially when they are young—as a result, youth is romanticized as a period
						of pure potential where individuals are urged to discover their passions and talents. This, paired with the American belief in the heroism of the exceptional individual, is
						very much a part of our very national mythology.
					</p>
					<p>
						Of course, with such a fixation on stories of success and exceptionalism, at some point we begin to ask ourselves how we can cultivate as much of it as we can. The concept of
						giftedness began to take shape in the 1910s and, by the 1920s, became closely tied to a narrower understanding of intelligence and challenges in urban public education. This
						early focus on giftedness arose, in part, alongside the broader eugenics movement, which regarded certain cognitive capacities as both innate and racially inflected, and saw
						their cultivation—or neglect—as carrying grave consequences for the nation’s future heredity. Stanford psychologist Lewis Terman’s study of intellectually gifted children, for
						example, was grounded in the assumptions of the era, including eugenic ideas about intelligence as a heritable, fixed trait. Terman explicitly connected high intelligence with
						desirable heredity and saw his work as contributing to the “improvement” of the population. Over time, however, this emphasis on inherent talent gradually shifted toward the
						belief that giftedness could be developed and nurtured through proper educational and domestic environments, rather than remaining a fixed, inherited trait. The mathematician
						Robert J. Aley wrote in <i>The Journal of Education</i> at this time: “It is a fact that every child born into the world has the right to be understood and to realize his
						greatest possibility. This truth applies to the gifted child as well as the child lowest in the scale. It is high time that our schools were giving to these extraordinary
						children the attention that their work merits.” Scholarly discussions about giftedness extended beyond academic circles, gaining traction in the media and in parenting
						guidebooks. Media coverage highlighted the issue of gifted students being overlooked in schools, while guidebooks provided parents with practical advice on nurturing and
						supporting their talented children. By the 1960s, giftedness had seeped far into the school and the home for many families, with specialized curricula, individualized
						enrichment programs, and a host of extracurricular activities all geared toward honing a child’s perceived exceptional abilities, all profoundly shaping the expectations on
						many children.
					</p>
					<p>
						As the phenomenon developed over the decades, it maintained a strong tie to American values and ideals. Kimberly Probolus, in a paper on the impact of giftedness on parenting
						cultures in the United States, details this connection and explains how public media “promoted giftedness and its capacity to increase the nation’s wellbeing. …Articles
						assuaged any concerns parents might have about whether it was fair to give more resources to the brightest students, and suggested instead that good citizens should do all they
						could to raise gifted children.” Giftedness became seen as democratic, especially in the midst of the Cold War, when more and more Americans became invested in seeing their
						country’s exceptional win on the global stage. This pursuit of excellence shaped not just individual parenting practices, but broader educational and cultural policies,
						transforming childhood into a proving ground for potential greatness. Programs for identifying and nurturing gifted students proliferated, while schools adopted testing systems
						to single out and develop the next generation of leaders and thinkers. The idea of raising gifted children became not just a personal ambition for families, but a patriotic
						duty. We broadcast stories of greatness and we scan for it in our children. We have turned exceptionalism into a national project, a collective effort to birth and raise and
						teach a generation of amazing people.
					</p>
					<p className="text-center">* * *</p>
					<p>
						In 2013, I was invited to take a test. Third graders at my elementary school all sat at desks in a small room with a number two pencil. We’re handed a packet of multiple-choice
						questions, after which we’ll be scored against other students in the state and sorted into percentiles of how well we did. This was the entrance to California’s Gifted and
						Talented Education (GATE) program, which sought to identify advanced students by providing more challenging classwork and separate advanced course placement. Many states around
						the nation provided educational funds to their public school districts to facilitate programs like this. Throughout the years, I’ll talk to friends who casually mention their
						own experiences in such programs as a passing thought at a party or a random comment during a long car ride. There are many promises that a program like GATE offers you: it
						tells you that your potential is infinite; it tells your parents that they’ve won. But what does “winning” come at the cost of? What are the real implications on the children
						labeled as “gifted” from an early age?
					</p>
					<p>
						To start, if institutional gifted programs are created on the noble basis of helping children further their education and reach their full potential, it is worth looking into
						why so many of them been shutting down. The pushback against these programs begins with the newfound attention on the well-being of children from these programs years into the
						future. Joan Freeman, author of the book <i>Gifted Lives</i> and a researcher who ran one of the most extensive studies on the subject, conducted interviews with 210 people who
						scored in the top 0.2 percent in intelligence. One of her interviewees, Jeremy, told her: “My being seen as gifted has produced awful deficiencies in me. I was emotionally
						scarred by being made to perform. All the time it was, ‘Look what Jeremy can do.’ I could do almost anything on demand, but I used to feel like a performing penguin.” This is
						further fueled by viral TikTok videos on the relatable burnout by the “former gifted kid”, and even a <i>New Yorker</i> humor piece listing “Eleven Signs That You’re a Former
						Gifted Kid!”
					</p>
					<p>
						Furthermore, there has been increasing hesitation on whether these institutional labels of “gifted” are actually making a difference towards their goal in the first place. In a
						piece called “Be Wary of Calling Kids ‘Gifted’” in <i>The Atlantic</i>, journalist Erik Hayden cited Freeman’s study and writes: “By her measures, Freeman found that only three
						percent of the "gifteds" fulfilled "early promise" and became conventionally successful. Young prodigies cited in this group include young math geniuses who wound up working at
						McDonalds and exceptional scholars who ended up dropping out of prestigious universities.” By these outcomes, the word “gifted” starts to feel hollow—it becomes more of a
						burden of pressure and expectation than a ticket toward success. It suggests that the glittering promise held up to kids and parents alike might be no more than a mirage, a
						label that, for most, leads to confusion and self-doubt rather than the confident stride toward greatness it claims to offer. Such statistics introduce a deep cynicism into the
						discourse: perhaps the significance placed on giftedness is more about maintaining prestige and feeding an institution’s narrative of producing “elite” minds than it is about
						cultivating genuine long-term achievement.
					</p>
					<p>
						A few months ago, the well-known writer and commentator David Brooks wrote an opinion piece for the <i>New York Times</i> titled “What Happens to Gifted Children.” In it, he
						argues against the popular benefits of gifted programs cited by social science and decides to take a more personal and subjective look into individuals in the phenomenon. We
						create programs for the gifted to churn out innovators and prolific geniuses, but when we look at the results from studies on gifted children years into their adulthood, a
						slight disappointment always lingers from the lack of transformational thinkers and world changers. Brook explains,
					</p>
					<blockquote className="pl-4 border-l-4 border-slate-300 italic">
						When you take a more granular, personal view of the lives of the gifted, you see that while intelligence matters, other things also matter a lot. Some brilliant people lack
						ambition. Some brilliant people don't want to spend their lives at work, slaving away for eminence. …[Meanwhile,] when you look at who really achieves great things, you notice
						that most of them were not prodigies. They didn't wow people at age 18, but over the course of their adulthood they found some deep interest in something, and they achieved
						mastery.
					</blockquote>
					<p>
						The promise of the gifted child is seductive and cruel because it’s most often too good to be true. Many people realize this when they’re chasing the ghost of a person they
						never wanted to become. It’s not about just the promise of these programs: it is about what happens to the “gifted child” when they grow up. It is about trying to become a
						person in a country obsessed with amazing people. When we believe that American democracy is the most perfect democracy, that the American economy is the most powerful economy,
						that American society is the most advanced society, it is not much of a leap to believe that American children are the most gifted children. We love the idea of the gifted
						child because we love the idea that we are gifted people. But raising children on this ideal is often harmful, and teaching children how to be gifted is probably not the best
						way of cultivating exceptional people in the first place.
					</p>
					<p className="text-center">* * *</p>
					<p>
						Another inherent flaw of these programs is how they push the notion that giftedness is not just something to be identified, but to be <i>taught</i>. Perhaps in trying to figure
						out a way to optimize the cultivation of more and more exceptional people, we’re drawn to the idea that giftedness can fit snugly into a curriculum or a syllabus, which is then
						marketed to parents who see these institutional programs as an easy way to outsource raising successful kids. However, the problem with trying to teach exceptionalism is that
						it’s simply against the nature of the word: to be exceptional is to be unique, not to be molded by a cookie-cutter recipe on a conveyor belt to try to manufacture as many
						gifted people as we can. What results is not an army of talented and successful citizens, but a lot of unintended consequences, from burnout to lingering mental health
						struggles going forward.
					</p>
					<p>
						One such program with a curriculum like this is called The Knowledge Society, or TKS. One of my friends, Laura Gao, recently wrote a personal essay titled “I Was Half Myself
						Without You, Now I Feel So Complete” that details a lot of her personal experience during the program that many of us share. Laura introduces TKS by writing, “I was that
						worked-up kid with big dreams and no direction, and TKS was the first place that gave me an outlet for my drive. It was what I needed at the time—reasons to work hard, mentors
						to encourage my ambition, and social systems to support my self-driven projects, unrestricted by my age. TKS was the first time I was so effectively convinced that each and
						every day of my life was meaningful, to the point of supposed self-actualization.” It’s easy for impressionable children to be convinced that they need a type of gifted program
						to push them forward or help them realize their potential, that they wouldn’t be able to achieve on their own. Especially for children who are already naturally ambitious,
						having institutional validation of your exceptionality is an affirming reason to believe you can achieve the American ideal of greatness. We’re taught to write cold emails to
						find grander and grander opportunities, to submit to international competitions for recognition, to use our age as a metric of impressiveness. But it is in participating in
						this rat race of doing programs to bring out one’s greatness that the allure begins to fall apart, and many realize that there can be more harm than pros when it comes to
						trying to “teach” giftedness to impressionable children.
					</p>
					<p>
						TKS is a good example of this because it is filled with young people who self-select into the program. Unlike gifted programs in schools, in which you are simply handed a test
						at school one day (or even led by parents to prepare ahead of time ), the students in TKS tend to be there because they chose to be. But even in an environment like this,
						mental health issues arise out of the pressure not necessarily induced by the program, but that the program teaches you to induce onto yourself. “…TKS also left me with a load
						of psychological issues that I am still learning to heal from,” Laura writes. “Over that year, I maniacally obsessed over a doctrine of faux self-improvement. I treated every
						aspect of my life as a lever to be optimized. I became elitist and judgmental, shunning anyone who was not deemed ‘interesting’ and ‘unconventional.’ TKS was the first time I
						was so effectively convinced to live each and every day in part by someone else’s idea of meaningfulness, to the point of destructive self-deception.” If “meaninglessness” and
						“destructive self-deception” are the endpoints that these children are driven to in gifted programs, surely we should rethink not only how these programs are designed, but
						whether we should be shoving young minds into them in the first place. After all, did the exceptional people throughout history go through programs that taught them how to be
						exceptional, or is there any path?
					</p>
					<p className="text-center">* * *</p>
					<p>
						Back in 2023, the essayist Henrik Karlsson wrote down a list of twenty names—von Neumann, Tolstoy, Curie, Pascal, etc.—and embarked on a journey to figure out what made the
						people who bore these names “exceptional”. Around 42 biographies later, he discovered some fascinating patterns behind the childhoods of exceptional people that led to the
						incredible impact they made on the world. To start, they didn’t always excel in school; in fact, a good fraction of exceptional people (⅔ of Karlsson’s sample) were
						home-schooled. Instead, they “had time to roam about and relied heavily on self-directed learning” —exploring niche interests until they found something to be obsessive about,
						and got incredibly good at it. The renowned scientist Carl Sagan, in his book on the evolution of human intelligence, said that the “development of such gifted individuals
						required a childhood period in which there was little or no pressure for conformity, a time in which the child could develop and pursue his or her own interests no matter how
						unusual or bizarre” . The problem with the students in gifted programs is that they are taught to conform—you are validated if you get good test scores, if you excel in
						classes. And to do so often means to study exactly what you are assigned in school, leaving time for nothing else. The very existence of these institutional programs is an
						oxymoron. People produce truly exceptional work derived from personal intellectual obsession, not societal shoving.
					</p>
					<p>
						It's dangerous, often counter-productive, to force exceptionalism at a young age. Although trying to generalize “giftedness” into a replicable program that can be taught across
						the country is scalable, we end up putting less care into actually cultivating the minds of talented and ambitious youth, and instead risk their mental health and
						unintentionally create burnout that lasts well into adulthood. Time and time again, external pressure ends up depriving children of happiness when they’re young, when being
						young is one of the most important times to be happy. Furthermore, not only could gifted programs (and the ideals behind them) hurt kids, they may do the opposite of what’s
						intended and make kids less ambitious and less motivated by approaching developing exceptional people the wrong way: they use test scores and other external metrics to drive
						kids to some sort of exemplary goal, often being at the top of the class or getting into higher level classes or performing well at tests. As a result, they get little time to
						figure things out on their own and peruse subjects in a stress-free environment before finding something they’re truly passionate about. True ambition blossoms with curiosity
						and internal drive, which can never be contained within a gifted children’s program.
					</p>
					<p>
						It is so easy to unintentionally dilute and flatten the complex traits that make up talent and ambition into a stiff program meant to be generalized to millions of children
						across states. But identifying children as “gifted” doesn’t always help them become exceptional. If you look the other way and analyze the childhoods of people who did turn out
						to be exceptional, they reached their potential through natural childhood curiosity, personal ambition and determination, and even freedom from their parents and institutional
						pressures. In other words, internal pressure as opposed to external pressure. At the end of his essay, Karlsson proposes that the solution to this is simple: “It is just a way
						of viewing children: as capable of competence, as craving meaningful work, as worthy to be included in serious discussions. We can learn to view them like that, but it is a
						subtle and profound shift in perception, a shift away from the way we are taught to view children.” American will continue to chase exceptionalism, and children will continue
						to be the source we look towards for the next generational of it. But as simple as it is to simply outsource the development of our children to general programs created for the
						sake of scalability and ideology, we should think about cultivating talent as a careful, purposeful act of listening and guidance—one that honors each child’s capacity to
						wonder, to create, and to redefine success on their own terms.
					</p>
				</div>
			</div>

			<a className="horizontal center-v pb-20 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
				<ScrambleText text="[↑ back to top]" />
			</a>
		</div>
	);
}
