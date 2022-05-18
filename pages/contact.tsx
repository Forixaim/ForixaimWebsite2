import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'

const Contact: NextPage = () =>
{
	return (
		<div className={styles.container}>
		<Head>
			<title>Forixaim</title>
			<meta name = "description" content = "If you want to see me then you may contact me."/>
			<link rel="icon" href="favicon.ico"/>
		</Head>
		<header>
			<Navbar/>
		</header>
		<main className={styles.main}>
			<h1 className={styles.title}>Contact Me</h1>
			<p className={styles.description}>You may contact me at Forixaim#5359 at Discord or email me at matthewcs@forixaim.net, just be aware, spam emails or spam messages will be ignored.</p>
		</main>
		<footer>
			<p>Website by Forixaim. Powered by Next.js!</p>
		</footer>
		</div>
	)
}

export default Contact