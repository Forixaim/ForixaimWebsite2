import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import "bootstrap/dist/css/bootstrap.min.css"
import Link from 'next/link'

const Projects: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Forixaim</title>
				<meta name="description" content="Forixaim's Projects, see my favorite projects here."/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			<header>
				<Navbar/>
			</header>
			<main className={styles.main}>
				<h1 className={styles.title}>Projects</h1>
				<h2>Project: Omneria</h2>
				<p>Project: Omneria is my game being under development, the game is an open world RPG with one of the most ambitious combat systems ever in game development industry, with everything from Parries, Shields, Temperature, Dark Souls esque boss AI, and much, much more! Project: Omneria is the Founder&apos;s Magnum Opus.</p>
				<Link href="https://omneria.forixaim.net/"><button className={styles.button}>Project: Omneria&apos;s Official Website (Under Development)</button></Link>
				<h2>Tetra</h2>
				<p>Tetra is a discord bot created to test my own mettle in C++ programming and is the only few discord bots programmed in C++ compared to the majority in Python or JavaScript.</p>
				<Link href="https://discord.com/api/oauth2/authorize?client_id=957411479668260884&permissions=8&scope=bot%20applications.commands"><button>Invite the Bot</button></Link>
			</main>
			<footer>
				<p>Website by Forixaim. Powered by Next.js and React!</p>
			</footer>
		</div>
	)
}

export default Projects