import React from 'react'
import { TbAccessPoint, TbBrandGithub, TbBrandGmail, TbBrandTwitch, TbBrandVk, TbBrandYoutube, TbMail } from 'react-icons/tb'
import { SiYoutubestudio } from 'react-icons/si'

const LinkButton = ( {text = 'link', link, type = ""} ) => {
    const cl = " group active:scale-[80%] border-2 border-gray-800 rounded-xl bg-gray-950 hover:bg-gray-800 hover:cursor-pointer transition-all duration-200 shadow-xl"
    const btnCl = " h-[90%] w-[90%] m-auto p-[6px] text-white transition-all duration-200 "

    return (
        <div className='text-center'>
            {
                (type == "small") ? 
                    (text == "Youtube") ? <a className='rounded-xl' href='https://youtube.com/'><button className={'w-12 h-12 hover:shadow-red-800/40 ' + cl}><TbBrandYoutube className={' group-hover:text-red-400 ' + btnCl}/></button></a> : 
                    (text == "YoutubeStudio") ? <a className='rounded-xl' href='https://studio.youtube.com'><button className={'w-12 h-12 p-1 hover:shadow-red-800/40 ' + cl}><SiYoutubestudio className={' group-hover:text-red-400 ' + btnCl}/></button></a> : 
                    (text == "Twitch") ? <a className='rounded-xl' href='https://twitch.tv/'><button className={'w-12 h-12 hover:shadow-purple-800/40 ' + cl}><TbBrandTwitch className={' group-hover:text-purple-400 ' + btnCl}/></button></a> :  
                    (text == "TwitchStudio") ? <a className='rounded-xl' href='https://dashboard.twitch.tv'><button className={'w-12 h-12 hover:shadow-purple-800/40 ' + cl}><TbAccessPoint className={' group-hover:text-purple-400 ' + btnCl}/></button></a> :  
                    (text == "VK") ? <a className='rounded-xl' href='https://vk.com/'><button className={'w-12 h-12  hover:shadow-blue-300/20' + cl}><TbBrandVk className={' group-hover:text-blue-400 ' + btnCl}/></button></a> : 
                    (text == "GitHub") ? <a className='rounded-xl' href='https://github.com/'><button className={'w-12 h-12 hover:shadow-gray-500/40' + cl}><TbBrandGithub className={' group-hover:text-gray-500 ' + btnCl}/></button></a> :
                    (text == "GMail") ? <a className='rounded-xl' href='https://gmail.com/'><button className={'w-12 h-12 hover:shadow-yellow-800/40' + cl}><TbBrandGmail className={' group-hover:text-yellow-300 ' + btnCl}/></button></a> :
                    (text == "Mail") ? <a className='rounded-xl' href='https://mail.ru/'><button className={'w-12 h-12 hover:shadow-blue-700/40 ' + cl}><TbMail className={' group-hover:text-blue-700 ' + btnCl}/></button></a> :
                    null
                :
                <a href={"https://" + link}>
                    <button className={'w-44 h-14 my-1 hover:shadow-cyan-800/40' + cl}>
                        <div className="text-left px-3 transition-all duration-200 flex flex-col justify-around">
                            <div className='text-white text-sm'>{text}</div>
                            <div className='text-gray-700 text-[12px]'>{link}</div>
                        </div>
                    </button>
                </a> 
            }
        </div>
    )
}

export default LinkButton