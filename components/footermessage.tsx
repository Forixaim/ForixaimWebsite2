import next from "next"
import React from "react"
import styles from '../styles/NavBar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Discord from '../public/discord.svg'
import SocialIcon from "./socialIcon"
import RedditIcon from "../public/reddit-icon.svg"
import YouTube from '../public/yt.svg'

const FooterMessage = () => {
	return (
		<nav className="block overflow-hidden mt-auto p-0 bg-slate-900 shadow-md h-1/2">
			<div>
				<div className="align-bottom mx-8 justify-center flex float-right">
					<div className="w-1/3 my-4">
						<SocialIcon url="https://discord.gg/tjkZsX963H" imgurl={Discord} altText="Discord Icon"/>
						<SocialIcon url="https://www.reddit.com/user/ForixaimCS" imgurl={RedditIcon} altText="Reddit Icon"/>
						<SocialIcon url="https://www.youtube.com/channel/UCXbUFr3SjxuLUDUty7UCiwA" imgurl={YouTube} altText="Reddit Icon"/>
					</div>
				</div>
			</div>
		</nav>
	)
}
export default FooterMessage