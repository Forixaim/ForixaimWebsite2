import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import tsLogo from '../public/tslogo.svg'
import jsLogo from '../public/jslogo.svg'

const About: NextPage = () =>
{
	return (
		<div className={styles.container}>
			<Head>
				<title>Forixaim</title>
				<meta name="description" content="Who's Forixaim? Feat. Noya and gayane"/>
				<link rel="icon" href="favicon.ico"/>
				</Head>
			<header><Navbar /></header>
			<main className={styles.main}>
				<h1 className={styles.title}>About Forixaim</h1>
				<p className={styles.description}>Hey! I am Matthew, a C++ programmer, I am the CTO of 2022-2023 Newport High School Programming Club. Fresh out of the pandemic, I was thrown into some hard times, but perserverd and broke free.</p>
				<p className={styles.description}><Image src={tsLogo} width={40} height={40} /><Image src={jsLogo} width={40} height={40} />  I know basic JavaScript and TypeScript, but I often use react with Next.js</p>
			</main>
			<footer>
				<p>Website by Forixaim. Powered by Next.js!</p>
			</footer>
		</div>
	)
}

export default About