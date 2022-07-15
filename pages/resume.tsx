import type { NextPage } from 'next'
import Head from 'next/head'
import NavBar from '../components/navbar'
import styles from '../styles/Home.module.css'

const Resume: NextPage = () =>
{
	return (
		<div className={styles.container}>
			<Head>
				<title>Forixaim</title>
				<meta name = "description" content = "If you want to see me then you may contact me."/>
				<link rel="icon" href="favicon.ico"/>
			</Head>
			<header>
				<NavBar />
			</header>
			<main className={styles.main}>
				<div className={styles.discord}>
					<iframe src="https://discord.com/widget?id=941463674361622578&theme=dark" width="350" height="500"  frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" className={styles.discord}/>
				</div>
				<div className={styles.content}>
					<h1 className={styles.title}>Contact Me</h1>
					<p className={styles.description}>You may contact me at Forixaim#5359 at Discord or email me at matthewcs@forixaim.net, just be aware, spam emails or spam messages will be ignored.</p>
				</div>
			</main>
			<footer>
				<p>Website by Forixaim. Powered by Next.js!</p>
			</footer>
		</div>
	)
}

export default Resume