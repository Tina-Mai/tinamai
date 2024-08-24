"use client";
import Image from "next/image";
import Cursor from "../../../components/Global/Cursor";
import ScrambleText from "../../../components/Global/ScrambleText";
import Link from "../../../components/Global/Link";
import coverImg from "../../../assets/chaos-theory/cover.png";
import img1 from "../../../assets/chaos-theory/1.png";

export default function ChaosTheory() {
	return (
		<>
			<Cursor />
			<div className="vertical bg-light text-zinc-800">
				{/* cover */}
				<div className="vertical sm:horizontal w-full py-10 sm:py-0 gap-10 sm:gap-0 sm:h-[100dvh] center-v center-h bg-dark text-white text-center">
					{/* text */}
					<div className="vertical h-full justify-between items-center w-full sm:w-1/2 px-10 sm:px-10 sm:py-7 gap-10 sm:gap-0">
						<a href="/" className="body">
							<ScrambleText text="[ ← back to home ]" />
						</a>
						<div className="font-serif vertical gap-3 sm:gap-5">
							<h1 className="text-5xl sm:text-6xl font-monoDisplay font-medium uppercase">Chaos Theory</h1>
							<h2 className="text-2xl sm:text-3xl italic tracking-tight">Or: On Modern Serendipity, Tech Twitter, and Luck as Agency</h2>
						</div>
						<div className="body">
							Written for <Link text="Kernel Magazine" href="https://www.kernelmag.io/4/chaos" />, March 2024
						</div>
					</div>
					{/* image */}
					<div className="w-full sm:w-1/2 h-full flex items-center justify-center">
						<Image src={coverImg} alt="cover" className="max-w-72 sm:max-w-none w-full sm:h-full object-cover" />
					</div>
				</div>
				{/* <div className="vertical sm:horizontal w-full sm:h-[100dvh] px-10 gap-20 py-10 sm:px-0 sm:gap-0 sm:py-0 center-v center-h bg-dark text-white text-center">
					<div className="vertical h-full justify-between items-center sm:w-1/3 sm:mx-auto sm:py-7">
						<a href="/" className="body">
							<ScrambleText text="[ ← back to home ]" />
						</a>
						<div className="font-serif vertical gap-5">
							<h1 className="text-6xl font-monoDisplay font-medium uppercase">Chaos Theory</h1>
							<h2 className="text-3xl italic tracking-tight">Or: On Modern Serendipity, Tech Twitter, and Luck as Agency</h2>
						</div>
						<div className="body">
							Written for <Link text="Kernel Magazine" href="https://www.kernelmag.io/4/chaos" />, March 2024
						</div>
					</div>
					<Image src={coverImg} alt="cover" className="h-96 sm:h-full w-auto" />
				</div> */}

				<div className="flex center-v w-full py-16 font-serif text-lg">
					<div className="w-full max-w-prose px-4 md:px-0 space-y-5">
						<p>In another universe, sunlight drips through an open window. I am lying on the floor in a small apartment. I am five years old. Nothing bad has happened to me.</p>
						<p>
							In this version of the story, my life is still a blank slate, and I can control what happens like one of those <i>Choose Your Own Adventure</i> games. The critical events
							that will go on to change my life—the move to America, the class switch in high school, the fateful LinkedIn DM—have yet to take place. Nothing bad has happened, nothing
							good has happened, and I am still naïve enough to believe I can shape the future to my will.
						</p>
						<p>
							There’s something exciting and simultaneously terrifying about this echo of myself twelve years ago. Everyone has a version of this:{" "}
							<i>What if X never happened? What if I never met Y? What if I wasn’t at Z (an oddly specific locale that you never could’ve predicted) at this particular point in time?</i>{" "}
							We look back on our lives and consider all the possibilities of what could have been: all the alternate universes in which we were still a kid, and things happened to work
							out a little differently, and our new lives turned out to be nothing like the one we’re currently living. Whether it’s with longing (things didn’t work out the way you
							wanted them to) or gratitude (things worked out—good for you!), it’s human nature to marvel at things beyond our control.
						</p>
						<p>
							In my alternate universe, I am still five years old in my grandmother’s seventeenth-floor apartment in Guangzhou. I would have no idea that one year later, I would be on a
							one-way flight to the United States. Eight years later, I would learn what startups are for the first time. And twelve years later, I would leave Stanford to build one.
						</p>
						<p className="text-center">* * *</p>
						<p>
							When I first heard the story of Bill Gates, I was amazed at how the pieces of his story fell into place, as if fate was following an IKEA assembly manual for the modern-day
							technical founder. His childhood is portrayed as an almost mythological rise to success: he was lucky to be born to parents who put him in an elite private school; he was
							lucky that the mothers at the school piled together money to fund its computer club; then, when the money ran out, he was lucky that one of the parents worked at a local
							computer company, which gave him free programming time in exchange for testing their software; and when another company wanted specialized programmers, he was lucky that
							they invited him to spend his senior year of high school writing code for them. By the time he was 20, he had accumulated enough technical practice to drop out of Harvard
							and build Microsoft.
						</p>
						<p>
							But not all stories work out quite so neatly. Take Jonathan Larson, the writer behind the musical <i>Rent</i>, which is to this day one of the longest-running shows on
							Broadway. As an ambitious writer fresh out of college, Larson made the fabled move to New York City, into a lower Manhattan apartment where the shower was in the kitchen
							and the central heating was nonexistent. But Larson was terminally unlucky—one year turned into two years which turned into nearly a decade, and all he had to show for it
							was a minimum-wage diner job and a rejected manuscript. Even when he finally wrote <i>Rent</i>, the magnum opus that changed his career, he couldn't escape his bad luck:
							Jonathan Larson died from a fatal aortic aneurysm one day before <i>Rent</i>’s first performance. He was 35 years old. Later, a lawsuit determined that if doctors had
							properly diagnosed him when he went to the hospital with chest pains, his life could have been saved. <i>Rent</i> would go on to win four Tony Awards and a Pulitzer Prize,
							but Larson would never know it.
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
							Call me fatalistic, but that doesn’t erase the harsh reality that life can be utterly, entirely, frighteningly beyond our control. The good luck that brought Bill Gates to
							the computer club is just as enigmatic as the bad luck that brought Jonathan Larson to inattentive doctors. If there is some deep dichotomous logic that separates the two,
							we don’t know it. For centuries, philosophers have debated the subject of free will. Immanuel Kant, one of the central thinkers of the Enlightenment, asserted that our
							understanding of goodness and morality depends on our freedom to choose between right and wrong. Yet by the 1980s, neuroscientist Benjamin Libet seemed to have
							<i>scientifically</i> demonstrated that we cannot have free will, showing how electrical signals for an action build up in our brains before we ever make a conscious
							decision to take that action. If luck is so prominent, do we really have any control over our lives?
						</p>
						<p className="text-center">* * *</p>
						<p>
							Sitting at the lunch tables in eighth grade, my friend raised the quintessential childhood dilemma: <i>What superpower would you want to have?</i> Instead of the
							classics—the power to fly, the power to turn invisible—I decided that I wanted the power to manipulate probability. That way, everything would suddenly be within my
							control: <i>The probability that I could also fly? 100%. The probability that I’d fail my trigonometry test next week? 0%.</i> I had just turned thirteen and I was first
							starting to feel the pressure to succeed that would go on to dictate the rest of my life. Probability was my way of dealing with the confusion and the uncertainty—we tell
							ourselves these simple numbers are enough to capture the nuance of chance, because anything beyond that becomes too complicated for our minds to process. Even then, I was
							afraid of luck.
						</p>
						<p>
							It is easy to look at founder narratives as a sequence of lucky breaks, as Bill Gates’ story may suggest. Our brains tend to concentrate on critical events that we think
							had significant and easily-definable causal effects, a series of key incidents concatenated into a linear success story. Looking backwards, we can dissect the exact things
							that went right in Gates’ life like a historian: X led to Y led to Z (in Gates’ case, a world-changing company). Because of this bias, we conjure up goals or objectives for
							ourselves that act as checkpoints along our imaginary roadmap to success: getting into Harvard or Stanford means we gain a certain degree of societal respect, means we have
							more leverage when raising money from Andreessen Horowitz or Sequoia, means we are more likely to get the Thiel Fellowship and drop out, means we get closer to achieving a
							startup exit, means <i>I, too, can be just like the nineteen-year-old billionaire on the Forbes 30 Under 30 list!</i> The danger, then, is slipping into a demoralizing
							cycle of picking apart everything that went right in successful people’s lives, and trying to imagine how you can also catch their lucky breaks.
						</p>
						<p>
							The truth is, we feel far more reassured following blueprints than rolling the dice. We tell ourselves that by tracing these Promethean stories of rebellion and innovation,
							we can achieve the same success as those before us. In reality, success is not pieced together by methodological design, but requires one to significantly defy the odds.
							For example: if this year is anything like the last five, around 90% of startups will fail. Most founders have been warned about this statistic; even venture capitalists
							anticipate that most of their portfolio companies will fail to return value. The fascinating phenomenon, then, becomes how founders play this twisted game. Is it founder
							nature to believe you can beat the odds? Can you even be a driven, relentless founder if you don’t?
						</p>
						<p>
							To live in modern society is to be constantly fed statistics that, intentionally or unintentionally, sway our worldview. You may have been told that 97% of students get
							rejected from the most selective schools, or that 42% of long-distance relationships fail, or that there’s a 95% chance the human race will cease to exist in the next 12 to
							18,000 years (that last one was published in the journal <i>Nature</i> by the Princeton astrophysicist J. Richard Gott III; <i>The New Yorker</i> wrote a profile on him in
							1999 amusingly titled, “How to Predict Everything”). There is a fatalism to these statistics. Prediction science makes us feel as though we have little agency over what
							happens. We lose faith in our ability to beat the odds, because we have created odds for ourselves to beat in the first place.
						</p>
						<p>
							But it is dangerous to believe we don’t have control over our lives: in an article for <i>The Atlantic</i>, Stephen Cave notes that “Believing that free will is an illusion
							has been shown to make people less creative, more likely to conform, less willing to learn from their mistakes, and less grateful toward one another. In every regard, it
							seems, when we embrace determinism, we indulge our dark side.” Probability data, then, becomes a drug that causes people to underestimate their chances and lean toward
							inaction. The conviction of a startup founder survives when they don’t let this 90% failure rate dissuade them. There will always be some behind-the-scenes machinations
							that affect our lives; luck remains enduringly present. But the relentless work required to build a startup—and correspondingly, any form of ambitious work—comes when we
							don’t let probability sink us to complacency, but inspire us toward agency. We have to optimize our response to luck so we can attract more luck.
						</p>
						<p>
							In my sophomore year of high school, hoping to gloss the transcript that would fatefully end in the hands of admissions officers, I planned to enroll in AP Statistics. As
							it turns out, the class was prioritizing seniors that year, so the registrar switched me into AP Computer Science instead. At the time, I had zero interest in programming:
							I had always been conditioned to believe that I wasn’t a computer science person, and since my course load was already rigorous, I probably should have dropped it. Out of
							curiosity, I didn’t.
						</p>
						<p>
							What began as a class I was apathetic towards turned into hours after school picking up extra programming languages, turned into the commitment to build entire apps, turned
							into embarking on my software training arc at ungodly hours every night. “You can’t connect the dots looking forward,” Steve Jobs famously said at Stanford’s 2005
							commencement address. “You can only connect them looking backwards.” When I look backwards, the technical skills that brought me my future opportunities began with this
							dot. What thirteen-year-old Tina didn’t understand was that the beauty of luck is found in its lawlessness. You can’t connect the dots looking forward because you don’t
							know what the dots are. Instead, the next best thing is to maximize your chances of getting the good ones—that is to say, to maximize getting lucky.
						</p>
						<p className="text-center">* * *</p>
						<p>The message came on October 4, 2022. A popup in the “Messaging” tab on my LinkedIn showed an unread DM:</p>
					</div>
				</div>
			</div>
		</>
	);
}
