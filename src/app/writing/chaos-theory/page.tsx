"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import ScrambleText from "../../../components/Global/ScrambleText";
import Link from "../../../components/Global/Link";
import coverImg from "../../../assets/chaos-theory/cover.png";
import img1 from "../../../assets/chaos-theory/1.png";
import img2 from "../../../assets/chaos-theory/2.png";

export default function ChaosTheory() {
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
						<h1 className="text-5xl sm:text-6xl font-monoDisplay font-medium uppercase">Chaos Theory</h1>
						<h2 className="text-2xl sm:text-3xl italic tracking-tight">Or: On Modern Serendipity, Tech Twitter, and Luck as Agency</h2>
					</motion.div>
					<motion.div className="body" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
						Written for <Link text="Kernel Magazine" href="https://www.kernelmag.io/4/chaos" />, March 2024
					</motion.div>
				</div>
				{/* image */}
				<motion.div
					className="w-full sm:w-1/2 h-full flex items-center justify-center"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.3, duration: 0.8 }}
				>
					<Image src={coverImg} alt="cover" className="max-w-72 sm:max-w-none w-full sm:h-full object-cover" />
				</motion.div>
			</div>

			<div className="flex center-v w-full py-16 font-serif text-lg">
				<div className="w-full max-w-prose px-4 md:px-0 space-y-5">
					<p>In another universe, sunlight drips through an open window. I am lying on the floor in a small apartment. I am five years old. Nothing bad has happened to me.</p>
					<p>
						In this version of the story, my life is still a blank slate, and I can control what happens like one of those <i>Choose Your Own Adventure</i> games. The critical events that
						will go on to change my life—the move to America, the class switch in high school, the fateful LinkedIn DM—have yet to take place. Nothing bad has happened, nothing good has
						happened, and I am still naïve enough to believe I can shape the future to my will.
					</p>
					<p>
						There’s something exciting and simultaneously terrifying about this echo of myself twelve years ago. Everyone has a version of this:{" "}
						<i>What if X never happened? What if I never met Y? What if I wasn’t at Z (an oddly specific locale that you never could’ve predicted) at this particular point in time?</i> We
						look back on our lives and consider all the possibilities of what could have been: all the alternate universes in which we were still a kid, and things happened to work out a
						little differently, and our new lives turned out to be nothing like the one we’re currently living. Whether it’s with longing (things didn’t work out the way you wanted them
						to) or gratitude (things worked out—good for you!), it’s human nature to marvel at things beyond our control.
					</p>
					<p>
						In my alternate universe, I am still five years old in my grandmother’s seventeenth-floor apartment in Guangzhou. I would have no idea that one year later, I would be on a
						one-way flight to the United States. Eight years later, I would learn what startups are for the first time. And twelve years later, I would leave Stanford to build one.
					</p>
					<p className="text-center">* * *</p>
					<p>
						When I first heard the story of Bill Gates, I was amazed at how the pieces of his story fell into place, as if fate was following an IKEA assembly manual for the modern-day
						technical founder. His childhood is portrayed as an almost mythological rise to success: he was lucky to be born to parents who put him in an elite private school; he was lucky
						that the mothers at the school piled together money to fund its computer club; then, when the money ran out, he was lucky that one of the parents worked at a local computer
						company, which gave him free programming time in exchange for testing their software; and when another company wanted specialized programmers, he was lucky that they invited
						him to spend his senior year of high school writing code for them. By the time he was 20, he had accumulated enough technical practice to drop out of Harvard and build
						Microsoft.
					</p>
					<p>
						But not all stories work out quite so neatly. Take Jonathan Larson, the writer behind the musical <i>Rent</i>, which is to this day one of the longest-running shows on
						Broadway. As an ambitious writer fresh out of college, Larson made the fabled move to New York City, into a lower Manhattan apartment where the shower was in the kitchen and
						the central heating was nonexistent. But Larson was terminally unlucky—one year turned into two years which turned into nearly a decade, and all he had to show for it was a
						minimum-wage diner job and a rejected manuscript. Even when he finally wrote <i>Rent</i>, the magnum opus that changed his career, he couldn't escape his bad luck: Jonathan
						Larson died from a fatal aortic aneurysm one day before <i>Rent</i>’s first performance. He was 35 years old. Later, a lawsuit determined that if doctors had properly diagnosed
						him when he went to the hospital with chest pains, his life could have been saved. <i>Rent</i> would go on to win four Tony Awards and a Pulitzer Prize, but Larson would never
						know it.
					</p>
					<Image src={img1} alt="img1" className="w-full" />
					<p>
						Would I become a Larson or a Gates? The determinism behind luck haunted me. <i>I could build a successful career</i>, I would think.{" "}
						<i>
							I could achieve the Gatsbyesque American dream. I could buy that house next to the beach. I could meet “the one.” I could write my magnum opus. I could satisfy all the
							investors. I could find a fabulous work-life balance. I could become a good mother. I could earn enough to retire my dad. I could get my big break.
						</i>
					</p>
					<p>
						<i>And still, the next day, I could die in a car crash.</i>
					</p>
					<p>
						Call me fatalistic, but that doesn’t erase the harsh reality that life can be utterly, entirely, frighteningly beyond our control. The good luck that brought Bill Gates to the
						computer club is just as enigmatic as the bad luck that brought Jonathan Larson to inattentive doctors. If there is some deep dichotomous logic that separates the two, we don’t
						know it. For centuries, philosophers have debated the subject of free will. Immanuel Kant, one of the central thinkers of the Enlightenment, asserted that our understanding of
						goodness and morality depends on our freedom to choose between right and wrong. Yet by the 1980s, neuroscientist Benjamin Libet seemed to have
						<i>scientifically</i> demonstrated that we cannot have free will, showing how electrical signals for an action build up in our brains before we ever make a conscious decision
						to take that action. If luck is so prominent, do we really have any control over our lives?
					</p>
					<p className="text-center">* * *</p>
					<p>
						Sitting at the lunch tables in eighth grade, my friend raised the quintessential childhood dilemma: <i>What superpower would you want to have?</i> Instead of the classics—the
						power to fly, the power to turn invisible—I decided that I wanted the power to manipulate probability. That way, everything would suddenly be within my control:{" "}
						<i>The probability that I could also fly? 100%. The probability that I’d fail my trigonometry test next week? 0%.</i> I had just turned thirteen and I was first starting to
						feel the pressure to succeed that would go on to dictate the rest of my life. Probability was my way of dealing with the confusion and the uncertainty—we tell ourselves these
						simple numbers are enough to capture the nuance of chance, because anything beyond that becomes too complicated for our minds to process. Even then, I was afraid of luck.
					</p>
					<p>
						It is easy to look at founder narratives as a sequence of lucky breaks, as Bill Gates’ story may suggest. Our brains tend to concentrate on critical events that we think had
						significant and easily-definable causal effects, a series of key incidents concatenated into a linear success story. Looking backwards, we can dissect the exact things that
						went right in Gates’ life like a historian: X led to Y led to Z (in Gates’ case, a world-changing company). Because of this bias, we conjure up goals or objectives for
						ourselves that act as checkpoints along our imaginary roadmap to success: getting into Harvard or Stanford means we gain a certain degree of societal respect, means we have
						more leverage when raising money from Andreessen Horowitz or Sequoia, means we are more likely to get the Thiel Fellowship and drop out, means we get closer to achieving a
						startup exit, means <i>I, too, can be just like the nineteen-year-old billionaire on the Forbes 30 Under 30 list!</i> The danger, then, is slipping into a demoralizing cycle of
						picking apart everything that went right in successful people’s lives, and trying to imagine how you can also catch their lucky breaks.
					</p>
					<p>
						The truth is, we feel far more reassured following blueprints than rolling the dice. We tell ourselves that by tracing these Promethean stories of rebellion and innovation, we
						can achieve the same success as those before us. In reality, success is not pieced together by methodological design, but requires one to significantly defy the odds. For
						example: if this year is anything like the last five, around 90% of startups will fail. Most founders have been warned about this statistic; even venture capitalists anticipate
						that most of their portfolio companies will fail to return value. The fascinating phenomenon, then, becomes how founders play this twisted game. Is it founder nature to believe
						you can beat the odds? Can you even be a driven, relentless founder if you don’t?
					</p>
					<p>
						To live in modern society is to be constantly fed statistics that, intentionally or unintentionally, sway our worldview. You may have been told that 97% of students get
						rejected from the most selective schools, or that 42% of long-distance relationships fail, or that there’s a 95% chance the human race will cease to exist in the next 12 to
						18,000 years (that last one was published in the journal <i>Nature</i> by the Princeton astrophysicist J. Richard Gott III; <i>The New Yorker</i> wrote a profile on him in 1999
						amusingly titled, “How to Predict Everything”). There is a fatalism to these statistics. Prediction science makes us feel as though we have little agency over what happens. We
						lose faith in our ability to beat the odds, because we have created odds for ourselves to beat in the first place.
					</p>
					<p>
						But it is dangerous to believe we don’t have control over our lives: in an article for <i>The Atlantic</i>, Stephen Cave notes that “Believing that free will is an illusion has
						been shown to make people less creative, more likely to conform, less willing to learn from their mistakes, and less grateful toward one another. In every regard, it seems,
						when we embrace determinism, we indulge our dark side.” Probability data, then, becomes a drug that causes people to underestimate their chances and lean toward inaction. The
						conviction of a startup founder survives when they don’t let this 90% failure rate dissuade them. There will always be some behind-the-scenes machinations that affect our
						lives; luck remains enduringly present. But the relentless work required to build a startup—and correspondingly, any form of ambitious work—comes when we don’t let probability
						sink us to complacency, but inspire us toward agency. We have to optimize our response to luck so we can attract more luck.
					</p>
					<p>
						In my sophomore year of high school, hoping to gloss the transcript that would fatefully end in the hands of admissions officers, I planned to enroll in AP Statistics. As it
						turns out, the class was prioritizing seniors that year, so the registrar switched me into AP Computer Science instead. At the time, I had zero interest in programming: I had
						always been conditioned to believe that I wasn’t a computer science person, and since my course load was already rigorous, I probably should have dropped it. Out of curiosity,
						I didn’t.
					</p>
					<p>
						What began as a class I was apathetic towards turned into hours after school picking up extra programming languages, turned into the commitment to build entire apps, turned
						into embarking on my software training arc at ungodly hours every night. “You can’t connect the dots looking forward,” Steve Jobs famously said at Stanford’s 2005 commencement
						address. “You can only connect them looking backwards.” When I look backwards, the technical skills that brought me my future opportunities began with this dot. What
						thirteen-year-old Tina didn’t understand was that the beauty of luck is found in its lawlessness. You can’t connect the dots looking forward because you don’t know what the
						dots are. Instead, the next best thing is to maximize your chances of getting the good ones—that is to say, to maximize getting lucky.
					</p>
					<p className="text-center">* * *</p>
					<p>The message came on October 4, 2022. A popup in the “Messaging” tab on my LinkedIn showed an unread DM:</p>
					<div>
						<p>
							<b>To:</b> Tina Mai
						</p>
						<p>
							<b>From:</b> Isabella Epstein
						</p>
						<p>
							<b>Date:</b> Oct 4, 2022 at 9:22 PM
						</p>
						<p>
							<b>Subject:</b> Loomis Chaffee Alum &gt; Startup
						</p>
					</div>
					<p>
						I was just starting my senior year of high school—AP Physics had a test on Monday, my friends were blasting the group chat with potential homecoming dresses, and I spent my
						nights concocting my Common App college application essay. The message that reached me was completely unexpected; in it, my now-cofounder Isabella, who graduated seven years
						earlier from the high school I went to, mentioned how she stumbled across my profile in the student directory and was hooked by the projects I had built. What was supposed to
						be a 30-minute call turned into a 3-hour-long ideating session for a new startup idea. A year later, this became the company that I left college to build—but it all began as
						what one might consider a lucky cold outreach.
					</p>
					<Image src={img2} alt="img2" className="w-full" />
					<p>
						Back in 2007, Marc Andreessen—the billionaire tech venture capitalist famous for his bets on Facebook, Twitter, and other Silicon Valley legends (as well as what{" "}
						<i>The New Yorker</i> describes to be “a cranium so large, bald, and oblong that you can’t help but think of words like ‘jumbo’ and ‘Grade A’”)—wrote a blog post where he
						discusses the four types of luck. Originally introduced in Dr. James Austin’s 1978 book <i>Chase, Chance, and Creativity</i>, these are called Chance I, Chance II, Chance III,
						and Chance IV. Chance I is blind luck, or the force that’s entirely out of our control. In Chance II, luck is attracted based on hard work and persistence. In Chance III, luck
						comes to those who are really good at spotting it. Chance IV, however, is the kind of luck that can be engineered from individual action. Dr. Austin writes: “Chance IV comes to
						you, unsought, because of who you are and how you behave.” Every entrepreneur knows that luck plays a huge role in success vs. failure: but Andreessen concludes that if there’s
						a roadmap to getting lucky, this is it.
					</p>
					<p>
						There is an argument that the rise of the internet has undercut serendipity. As Gen Z, we spend our days aided by consumer software to make us more efficient (Spotify for
						online music, Zoom for online meetings, Instacart for online groceries), and as a result find ourselves less and less in environments where we might unexpectedly stumble across
						something new to love. After all, looking up an exact title on Amazon.com is not the same as browsing a bookstore and walking past a novel that catches your eye. In an archived
						piece for <i>The New York Times</i> from 2006, William McKeen observes how “We have become such a <i>directed</i> people. We can target what we want, thanks to the Internet.
						Put a couple of key words into a search engine and you find—with an irritating hit or miss here and there—exactly what you're looking for.”
					</p>
					<p>
						But this is only one way to use the internet. It’s true that what it looks like to get lucky now differs vastly from what it did twenty years ago, but that doesn’t mean
						serendipity was more existent “back in the day” when the kids browsed bookstores and bought groceries from the local supermarket. Instead, particularly for young founders, the
						emergence of the social internet has enabled an entirely new way of finding luck, especially Chance IV luck. On Twitter, a 15-year-old from the suburbs of Indiana raised $20
						million after posting about taking meetings in the stalls of his high school bathroom. A 19-year-old programmer without a college degree grew an AI startup backed by Sam Altman
						after sharing exceptional product demos. A 27-year-old dropout who got fired by his hedge fund amassed 62,000 members (and $19.2 million) to build a futuristic city in the
						Mediterranean after posting his utopian vision that included “muscular warriors, very thin priests, and portly merchants.” (Then, a personal tweet that I posted about leaving
						school to build in New York City got me invited to his city’s office in SoHo.) Tech Twitter has enabled the next generation of founders to be “luckier”: what was previously a
						game of warm intros and predetermined privilege has become more of a free-for-all for who can send the best cold DMs or write the most provocative tweets.
					</p>
					<p>
						There’s a phenomenon within the circle of young builders that exemplifies this idea of manufactured luck: called “building in public,” it encapsulates programmers, writers, and
						other creators posting progress on their work as they are making it (mistakes and obstacles included). 16-year-olds on LinkedIn post screenshots of their code with captions
						like “Day 3 of building a galaxy collision simulation, can’t seem to figure out the error in line 57” or “6 weeks into building my hand-gesture-controlled robot. This is
						probably the most frustrating project I’ve ever worked on.” A startup called Buildspace (self-described on Twitter as “the place where people build cool shit”) invites people
						to take an idea they’re excited about and bring it to life, led by a practice of sharing your progress and getting feedback. Prominent funds like Andreessen Horowitz and Y
						Combinator back them for their prolific culture where tens of thousands of people build in public, whether it’s a web game about fighting ninjas or spices that make any food
						taste like meat.
					</p>
					<p>Getting found is about being findable.</p>
					<p>
						When that message found me on October 4, it wasn’t because I could control where my life went, just as how Bill Gates and Jonathan Larson couldn’t control theirs. I can only
						connect the dots looking back: the unintentional placement in AP Computer Science led to me building my own apps, led to me publishing my projects, led to my work getting
						noticed by Isabella, led to her becoming my cofounder, led to this company. Our generation hasn’t diminished serendipity; it has simply found (and multiplied) it in other ways.
						Cold emails, captivating tweets, and viral TikToks have one thing in common: they originated from action. This is what parallels them to Chance IV luck. Young people today have
						gotten good at increasing the surface area through which luck can enter their lives—in the age of the internet, it is an act of self-invention and hopeful intervention. It is a
						chance to reclaim agency.
					</p>
					<p className="text-center">* * *</p>
					<p>
						Chaos theory is a branch of mathematics and physics that studies the unpredictable. It looks at systems that are non-linear and highly sensitive to initial conditions, where
						one small change to an input leads to unimaginable changes in result: the science of surprises. There are phenomena in our existence—the weather, the stock market, the story of
						our lives—that can never be predicted, because one tiny change makes all the difference.
					</p>
					<p>
						In another universe, I am lying on the floor in a small apartment. I am five years old, and nothing has happened to me. I am a blank slate of initial conditions on which the
						rest of my life will be built. How many branches, how many alternate universes, will spawn if one thing happened differently? How many things can go wrong? We can try to guess,
						or we can embrace the chaos. In his <i>Principal Doctrines</i>, the Greek philosopher Epicurus writes: “Bad luck strikes the sophisticated man in a few cases, but reason has
						directed the big, essential things, and for the duration of life it is and will be the guide.”
					</p>
					<p>
						In the aftermath of luck, we have agency. Chaos teaches us to expect the unexpected, but what happens after that is up to us. Proactive people don’t wait for life to happen to
						them; they make their own luck. Serendipity finds its way into your life when you are always learning, always building, always sharing your work. On my deathbed, I will spend
						time connecting all the dots in my life, but they will be dots I never could have predicted. The beauty of luck is its lawlessness; we can live in fear of this lawlessness, or
						we can minimize the impact of its external, uncontrollable factors and maximize how well we respond to them.
					</p>
					<p>
						In this current universe, I am eighteen years old, standing on the rooftop of Stanford’s Aeronautics and Astronautics building on one of my last nights of being a student
						there. It’s late enough that the remaining restless students have either retreated to their dorms or committed to their all-nighters in Huang basement. I’m about to leave and
						move across the country. Like Jonathan Larson, this is my fabled move to New York City, where our one-bedroom apartment in the West Village has a kitchen which is ten feet from
						the bed which is two feet from the desk. I have feared luck my whole life—now, I don’t see it as a threat, but more so the gentle machinery of life. Chaos theory teaches me
						that life is nonlinear and unpredictable. There is no point in trying to guess different endings.
					</p>
					<p>So here’s to this one.</p>
					<p className="text-zinc-500 text-center italic">
						This essay was originally written for and published in{" "}
						<a href="https://www.kernelmag.io/issues/4" target="_blank" className="decoration-zinc-500 hover:decoration-solid hover:decoration-1 transition-all link">
							Kernel Magazine, Issue 4
						</a>
						. Thank you to Jasmine Sun for editing and to Phuc-Thanh Mai Vo for illustrating :)
					</p>
				</div>
			</div>

			<a className="horizontal center-v pb-20 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
				<ScrambleText text="[↑ back to top]" />
			</a>
		</div>
	);
}
