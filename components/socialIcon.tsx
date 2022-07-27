import Image from 'next/image'
import Link from 'next/link';
import React from 'react'


const SocialIcon = (props: any) => {
    return (
        <div className="rounded-2xl bg-gradient-to-tr via-slate-600 from-cyan-900 to-cyan-900 p-2 m-4 w-16 h-16 cursor-pointer">
            <a href={props.url} target="_blank"><Image src={props.imgurl} width={100} height={100} alt={props.altText}/></a>
        </div>
    )
}

export default SocialIcon;