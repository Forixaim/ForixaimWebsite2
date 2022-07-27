import next from "next"
import React from "react"
import styles from '../styles/NavBar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import ForiIcon from '../public/Forixaim-Icon.svg'

const getServerSideProps = () =>
{

}

const NavBar = () => {
	
	return (
		<nav className="block overflow-hidden m-0 p-0 bg-slate-900 shadow-md">
			<div>
				<Link href="/"><p className={styles.NavLink}>Home</p></Link>
				<Link href="projects"><p className={styles.NavLink}>Projects</p></Link>
				<Link href="donate"><p className={styles.NavLink}>Donate</p></Link>
				<Link href="about"><p className={styles.NavLink}>About</p></Link>
				{/*<Link href="resume"><a className={styles.Login}>Résumé</a></Link> --Work in progress*/} 
			</div>
		</nav>
	)
}

export default NavBar