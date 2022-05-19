import next from "next"
import React from "react"
import styles from '../styles/NavBar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/charlesmall.png'

const Navbar = () => {
	return (
		<nav className={styles.NavBarColor}>
			<div>
				<Link href="/"><a className={styles.NavIcon}><Image src={logo} width={50} height={50}/></a></Link>
				<Link href="projects"><a className={styles.NavLink}>Projects</a></Link>
				<Link href="contact"><a className={styles.NavLink}>Contact</a></Link>
				<Link href="donate"><a className={styles.NavLink}>Donate</a></Link>
				<Link href="about"><a className={styles.NavLink}>About</a></Link>
			</div>
		</nav>
	)
}
export default Navbar