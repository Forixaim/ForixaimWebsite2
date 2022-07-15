import type { NextPage } from 'next'
import Head from 'next/head'
import NavBar from '../components/navbar'
import styles from '../styles/Home.module.css'

const Contact: NextPage = () =>
{
	return (
		<div className="inline">
			<Head>
				<title>Forixaim</title>
				<meta name = "description" content = "If you want to see me then you may contact me."/>
				<link rel="icon" href="favicon.ico"/>
			</Head>
			<header>
				<NavBar />
			</header>
			<main className="inline">
				<div className={styles.titleBG}>
					<h1 className={styles.titleText}>Contact Me</h1>
				</div>
				<div className={styles.discord}>
					<iframe src="https://discord.com/widget?id=941463674361622578&theme=dark" width="350" height="500"  frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" className={styles.discord}/>
				</div>
				<p className="text-center text-3xl font-semibold mx-5">You may contact me at Forixaim#5359 at Discord or email me at matthewcs@forixaim.net, just be aware, spam emails or spam messages will be ignored.</p>
			</main>
		</div>
	)
}

export default Contact