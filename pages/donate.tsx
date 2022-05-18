import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'

const Donate: NextPage = () =>
{
	return (
		<div className={styles.container}>
		<Head>
			<title>Forixaim</title>
		<meta name = "description" content = "Theres no donate button, so get lost."/>
		<link rel="icon" href = "/favicon.ico"/>
		</Head>
			<header>
				<Navbar/>
		</header>
		<main className={styles.main}>
				<h1 className={styles.title}>Donate</h1>
				<p className={styles.description}>There is still no donate button. New website, no donate.</p>
		</main>
		<footer>
			<p>Website by Forixaim. Powered by Next.js!</p>
		</footer>
		</div>
	)
}

export default Donate