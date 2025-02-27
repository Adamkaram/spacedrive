import {
	Clock,
	CurrencyDollar,
	Desktop,
	Heart,
	House,
	LightningSlash,
	Smiley,
	Star,
	TrendUp
} from '@phosphor-icons/react';
import Head from 'next/head';
import { useRef } from 'react';
import { Button } from '@sd/ui';
import PageWrapper from '~/components/PageWrapper';

interface PositionPosting {
	name: string;
	type: string;
	salary: string;
	description: string;
}

export const positions: PositionPosting[] = [];

const values = [
	{
		title: 'Async',
		desc: 'To accommodate our international team and community, we work and communicate asynchronously.',
		icon: Clock
	},
	{
		title: 'Quality',
		desc: 'From our interface design to our code, we strive to build software that will last.',
		icon: Star
	},
	{
		title: 'Speed',
		desc: 'We get things done quickly, through small iteration cycles and frequent updates.',
		icon: LightningSlash
	},
	{
		title: 'Transparency',
		desc: 'We are human beings that make mistakes, but through total transparency we can solve them faster.',
		icon: Heart
	}
];

const perks = [
	{
		title: 'Competitive Salary',
		desc: `We want the best, and will pay for the best. If you shine through we'll make sure you're paid what you're worth.`,
		icon: CurrencyDollar,
		color: '#0DD153'
	},
	{
		title: 'Stock Options',
		desc: `As an early employee, you deserve to own a piece of our company. Stock options will be offered as part of your onboarding process.`,
		icon: TrendUp,
		color: '#BD0DD1'
	},
	{
		title: 'Paid Time Off',
		desc: `Rest is important, you deliver your best work when you've had your downtime. We offer 4 weeks paid time off per year, and if you need more, we'll give you more.`,
		icon: Smiley,
		color: '#9210FF'
	},
	{
		title: 'Work From Home',
		desc: `As an open source project, we're remote first and intend to keep it that way. Sorry Elon.`,
		icon: House,
		color: '#D1A20D'
	},
	{
		title: 'Desk Budget',
		desc: `Need an M1 MacBook Pro? We've got you covered. (You'll probably need one with Rust compile times)`,
		icon: Desktop,
		color: '#0DC5D1'
	},
	{
		title: 'Health Care',
		desc: `We use Deel for hiring and payroll, all your health care needs are covered.`,
		icon: Heart,
		color: '#D10D7F'
	}
];

export default function CareersPage() {
	const openPositionsRef = useRef<HTMLHRElement>(null);
	const scrollToPositions = () =>
		openPositionsRef.current?.scrollIntoView({ behavior: 'smooth' });

	return (
		<PageWrapper>
			<Head>
				<title>Careers - Spacedrive</title>
				<meta
					name="description"
					content="Work with us to build the future of file management."
				/>
			</Head>
			<div className="prose prose-invert container relative m-auto mb-20 min-h-screen max-w-4xl p-4 pt-32 text-white">
				<div
					className="bloom subtle egg-bloom-two -top-60 right-[-400px]"
					style={{ transform: 'scale(2)' }}
				/>
				<h1 className="fade-in-heading mb-3 px-2 text-center text-4xl font-black leading-tight text-white md:text-5xl">
					Build the future of files.
				</h1>
				<div className="animation-delay-1 z-30 flex flex-col items-center fade-in">
					<p className="z-40 text-center text-lg text-gray-350">
						Spacedrive is redefining the way we think about our personal data, building
						a open ecosystem to help preserve your digital legacy and make
						cross-platform file management a breeze.
					</p>
					<Button
						onClick={scrollToPositions}
						className="z-30 cursor-pointer border-0"
						variant="accent"
					>
						See Open Positions
					</Button>
					<hr className="border-1 my-24 w-full border-gray-200 opacity-10" />
					<h2 className="mb-0 px-2 text-center text-4xl font-black leading-tight">
						Our Values
					</h2>
					<p className="mb-4 mt-2">What drives us daily.</p>
					<div className="mt-5 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
						{values.map((value, index) => (
							<div
								key={value.title + index}
								className="flex flex-col rounded-md border border-gray-500 bg-gray-550/50 p-10"
							>
								<value.icon className="text-[32px]" weight="bold" />
								<h3 className="mb-1 mt-4 text-2xl font-bold leading-snug">
									{value.title}
								</h3>
								<p className="mb-0 mt-1 text-gray-350">{value.desc}</p>
							</div>
						))}
					</div>
					<hr className="border-1 my-24 w-full border-gray-200 opacity-10" />
					<h2 className="mb-0 px-2 text-center text-4xl font-black leading-tight text-white">
						Perks and Benefits
					</h2>
					<p className="mb-4 mt-2">We're behind you 100%.</p>
					<div className="mt-5 grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
						{perks.map((value, index) => (
							<div
								key={value.title + index}
								style={{
									backgroundColor: value.color + '10',
									borderColor: value.color + '30'
								}}
								className="flex flex-col rounded-md border bg-gray-550/30 p-8"
							>
								<value.icon
									className="text-[32px]"
									weight="bold"
									color={value.color}
								/>
								<h3 className="mb-1 mt-4">{value.title}</h3>
								<p className="mb-0 mt-1 text-sm text-white opacity-60">
									{value.desc}
								</p>
							</div>
						))}
					</div>
					<hr
						className="border-1 my-24 w-full border-gray-200 opacity-10"
						ref={openPositionsRef}
					/>
					<h2 className="mb-0 px-2 text-center text-4xl font-black leading-tight text-white">
						Open Positions
					</h2>
					{positions.length === 0 ? (
						<p className="mt-2 text-center text-gray-350">
							There are no positions open at this time. Please check back later!
						</p>
					) : (
						<>
							<p className="mb-4 mt-2">If any open positions suit you, apply now!</p>
							<div className="mt-5 grid w-full grid-cols-1 gap-4">
								{positions.map((value, index) => (
									<div
										key={value.name + index}
										className="flex flex-col rounded-md border border-gray-500 bg-gray-550/50 p-10"
									>
										<div className="flex flex-col sm:flex-row">
											<h3 className="m-0 text-2xl leading-tight">
												{value.name}
											</h3>
											<div className="mt-3 sm:mt-0.5">
												<span className="text-sm font-semibold text-gray-300 sm:ml-4">
													<CurrencyDollar className="-mt-1 mr-1 inline w-4" />
													{value.salary}
												</span>
												<span className="ml-4 text-sm font-semibold text-gray-300">
													<Clock className="-mt-1 mr-1 inline w-4" />
													{value.type}
												</span>
											</div>
										</div>
										<p className="mb-0 mt-3 text-gray-350">
											{value.description}
										</p>
									</div>
								))}
							</div>
						</>
					)}

					<hr className="border-1 my-24 w-full border-gray-200 opacity-10" />
					<h2 className="mb-0 px-2 text-center text-3xl font-black text-white">
						How to apply?
					</h2>
					<p className="mt-2">
						Send your cover letter and resume to{' '}
						<strong>careers at spacedrive dot com</strong> and we'll get back to you
						shortly!
					</p>
				</div>
			</div>
		</PageWrapper>
	);
}
