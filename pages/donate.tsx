import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'

const Donate: NextPage = () =>
{
	return (
		<div className={styles.container}>
			<Head>
				<title>Forixaim</title>
				<meta name="description" content="There's no donate button, so get lost."/>
				<link rel="icon" href="favicon.ico"/>
			</Head>
			<header>
				<Navbar/>
			</header>
			<main className={styles.main}>
				<h1 className={styles.title}>Donate/Pledge</h1>
				<p className={styles.description}>Pledges will be happily accepted, as small pledges like these will keep the website running for longer. You can pledge with Patreon.</p>
				<div style={{display: "flex", justifyContent: "center",}}>
					<Link href="https://www.patreon.com/bePatron?u=47045722"><a data-patreon-widget-type="become-patron-button" className={styles.patreon}>Become a Patron</a></Link>
				</div>
				
				
			</main>
			<footer>
				<p>Website by Forixaim. Powered by Next.js!</p>
			</footer>
		</div>
	)
}

export default Donate