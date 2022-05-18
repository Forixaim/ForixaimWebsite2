import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import "bootstrap/dist/css/bootstrap.min.css"
import charlemagne from '../public/charlemagne.png'

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Forixaim</title>
				<meta name="description" content="Forixaim's new webpage."/>
				<link rel="icon" href="favicon.ico"/>
			</Head>
			<header>
				<Navbar/>
			</header>
			<main className={styles.main}>
				<h1 className={styles.title}>Forixaim</h1>
				<Image alt="Charlemagne" src={charlemagne} width={235} height={365} className={styles.runningCharle} />
				<p className={styles.description}>Hello there I am Forixaim, the C++ guy. This new website will replace my old website. I don&apos;t know how to use TypeScript, so help would be awesome! Alright, use the navigation bar above to navigate to other aspects of the page, there we can have some fun.</p>
			</main>
			<footer>
				<p>Website by Forixaim. Powered by Next.js and React!</p>
			</footer>
		</div>
	)
}

export default Home