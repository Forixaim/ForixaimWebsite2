import next from "next"
import React from "react"
import styles from '../styles/NavBar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import ForiIcon from '../public/Forixaim-Icon.svg'

const NavBar = () => {
	return (
		<nav className="block overflow-hidden m-0 p-0 bg-slate-900 shadow-md ">
			<div>
				<Link href="/"><a className={styles.NavLink}>Home</a></Link>
				<Link href="projects"><a className={styles.NavLink}>Projects</a></Link>
				<Link href="donate"><a className={styles.NavLink}>Donate</a></Link>
				<Link href="about"><a className={styles.NavLink}>About</a></Link>
				<Link href="resume"><a className={styles.Login}>Résumé</a></Link>
			</div>
		</nav>
	)
}
export default NavBar