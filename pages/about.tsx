import type { NextPage } from 'next'
import Head from 'next/head'
import NavBar from '../components/navbar'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import tsLogo from '../public/tslogo.svg'
import jsLogo from '../public/jslogo.svg'
import clogo from '../public/c-logo.svg'
import cpplogo from '../public/cpp-logo.svg'
import uelogo from '../public/unreal-logo.svg'
import FooterMessage from '../components/footermessage'
import AboutMe from '../public/AboutMe.svg'

const About: NextPage = () =>
{
	return (
		<div className="inline">
			<Head>
				<title>Forixaim</title>
				<meta name="description" content="Who's Forixaim? Feat. Noya and gayane"/>
				<link rel="icon" href="favicon.ico"/>
				</Head>
			<header><NavBar /></header>
			<main className="inline">
				<div className={styles.titleBG}>
					<Image src={AboutMe} width={1000}/>
				</div>
				<p className="text-center text-4xl font-semibold mx-5">Hey! I am Matthew, a C++ programmer, I am the CTO of 2022-2023 Newport High School Programming Club. Fresh out of the pandemic, I was thrown into some hard times, but perserverd and broke free.</p>
				<p className="text-center text-4xl font-semibold mx-5">Here&apos;s my overall experience with some languages:</p>
				<div className="my-4">
					<p className="text-center text-3xl font-semibold mx-5">
						<div className="p-1 m-1">
							<Image src={tsLogo} width={40} height={40} alt={"TypeScript Icon"} />
							<Image src={jsLogo} width={40} height={40} alt={"JavaScript Icon"}/>
						</div>
						I know basic JavaScript and TypeScript, but I often use React with Next.js so it&apos;s back to basic HTML and me being garbage with both scripts.
					</p>
				</div>
				<div className="my-4">
					<p className="text-center text-3xl font-semibold mx-5">
						<div className="p-1 m-1">
							<Image src={clogo} width={40} height={40} alt={"C Icon"}/>
							<Image src={cpplogo} width={40} height={40} alt={"C++ Icon"}/>
						</div>
						I have 1.7 years in experience with C++ and I know how to use pointers and manual memory management. I&apos;ve been starting to walk into C++ Standard Library and use third party frameworks as well.
					</p>
				</div>
				<div className="my-4">
					<p className="text-center text-3xl font-semibold mx-5">
						<div className="p-1 m-1">
							<Image src={uelogo} width={40} height={40} alt={"Unreal Icon"}/>
							<Image src={cpplogo} width={40} height={40} alt={"C++ Icon"}/>
						</div>
						My main framework of learning, I love to learn how to make video games so I use the hottest of the hot technologies and create awesome games. However, I lack skill in modeling so most of my characters are bland stick figures.</p>
				</div>
				
			</main>
			<footer>
				<FooterMessage/>
			</footer>
		</div>
	)
}

export default About