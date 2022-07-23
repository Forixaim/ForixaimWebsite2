import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import FooterMessage from '../components/footermessage'
import NavBar from '../components/navbar'
import styles from '../styles/Home.module.css'
import DonateImg from '../public/Donate.svg'
import Image from 'next/image'

const Donate: NextPage = () =>
{
	return (
		<div className="inline">
			<Head>
				<title>Forixaim</title>
				<meta name="description" content="There's no donate button, so get lost."/>
				<link rel="icon" href="favicon.ico"/>
			</Head>
			<header>
				<NavBar/>
			</header>
			<main className="inline">
				<div className={styles.titleBG}>
					<Image src={DonateImg} width={1000}/>
				</div>
				<p className="text-center text-3xl font-semibold mx-5">Pledges will be happily accepted, as small pledges like these will keep the website running for longer. You can pledge with Patreon.</p>
				<div className="m-4 flex items-center justify-center">
					<Link href="https://www.patreon.com/bePatron?u=47045722"><a data-patreon-widget-type="become-patron-button" className={styles.patreon}>Become a Patron</a></Link>
				</div>
				<p className="text-center text-3xl font-semibold mx-5">Additionally, you can donate with Ko-Fi if you are more interested in one-time donations.</p>
				<div className="m-4 flex items-center justify-center">
					<Link href="https://ko-fi.com/forixaimcs"><a className={styles.patreon}>Donate via Ko-Fi</a></Link>
				</div>
			</main>
			<footer>
				<FooterMessage/>
			</footer>
		</div>
	)
}

export default Donate