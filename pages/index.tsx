import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/navbar'
import Forixaim from '../public/Forixaim.svg'
import FooterMessage from '../components/footermessage'

const Home: NextPage = () => {
	return (
		<div className="inline">
			<Head>
				<title>Forixaim</title>
				<meta name="description" content="Forixaim's new webpage."/>
				<link rel="icon" href="favicon.ico"/>
			</Head>
			<header>
				<NavBar/>
			</header>
			<main className="inline">
				<div className="overflow-hidden h-screen">
					<div>
						<div className={styles.titleImage}>
							<Image src={Forixaim} width={1000}/>
						</div>
					</div>
					<div className="m-4 align-middle flex justify-center">
						<p className="text-center text-3xl font-semibold">Hey, I&apos;m Matthew. I&apos;m a gamer and a up and coming game developer who wants to make his story come to life!</p>
						<p className="text-center text-3xl font-semibold">This is the homepage for the new website and there are a lot of new features I plan to add. This will be a fun journey throughout.</p>
					</div>
					
				</div>
			</main>
			<footer>
				<FooterMessage/>
			</footer>
		</div>
	)
}



export default Home