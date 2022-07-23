import next from "next"
import React from "react"
import styles from '../styles/NavBar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import ForiIcon from '../public/discord.svg'

const FooterMessage = () => {
	return (
		<nav className="block overflow-hidden mt-auto p-0 h-44 bg-slate-900 shadow-md ">
			<div>
				<div className="align-bottom mx-8 justify-center flex">
					<Link href="https://discord.gg/tjkZsX963H"><a><Image src={ForiIcon}/></a></Link>
				</div>
			</div>
		</nav>
	)
}
export default FooterMessage