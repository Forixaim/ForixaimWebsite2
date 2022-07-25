import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/navbar'
import Link from 'next/link'
import FooterMessage from '../components/footermessage'
import Project from '../public/Projects.svg'

const Projects: NextPage = () => {
	return (
		<div className="inline">
			<Head>
				<title>Forixaim</title>
				<meta name="description" content="Forixaim's Projects, see my favorite projects here."/>
				<link rel="icon" href="favicon.ico"/>
			</Head>
			<header>
				<NavBar/>
			</header>
			<main className="inline">
				<div className={styles.titleBG}>
					<Image src={Project} width={1000}/>
				</div>
				<div className="overflow-hidden h-screen">
					<article className="mx-4">
						<h1 className="text-6xl text-center font-semibold mb-4">Project: Omneria</h1>
						<p className="text-3xl text-center font-semibold">Project: Omneria is my game being under development, the game is an open world RPG with one of the most ambitious combat systems ever in game development industry, with everything from Parries, Shields, Temperature, Dark Souls esque boss AI, and much, much more! Project: Omneria is the Founder&apos;s Magnum Opus.</p>
						<div className="flex items-center justify-center">
							<Link href="https://omneria.forixaim.net/"><button className="m-7 text-3xl font-semibold bg-teal-700 p-1 rounded py-3 border-2 border-black">Project: Omneria&apos;s Official Website (Under Development)</button></Link>
						</div>
					</article>
					<div className="border-b-2 shadow-md border-black my-8"/>
					<article>
						<h1 className="text-6xl text-center font-semibold mb-4">Tetra</h1>
					<p className="text-3xl text-center font-semibold">Tetra is a discord bot created to test my own mettle in C++ programming and is the only few discord bots programmed in C++ compared to the majority in Python or JavaScript.</p>
					<div className="flex items-center justify-center">
						<Link href="https://discord.com/api/oauth2/authorize?client_id=957411479668260884&permissions=8&scope=bot%20applications.commands"><button className="m-7 text-3xl font-semibold bg-teal-700 p-1 rounded py-3 border-2 border-black">Invite the Bot</button></Link>
					</div>
					</article>
				</div>
				
				
			</main>
			<footer>
				<FooterMessage/>
			</footer>
		</div>
	)
}

export default Projects