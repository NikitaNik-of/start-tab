import React from 'react'
import { TbBrandGithub, TbBrandGmail, TbBrandTwitch, TbBrandVk, TbBrandYoutube, TbMail } from 'react-icons/tb'

const LinkButton = ( {text = 'link', link, type = ""} ) => {
    const cl = " border-2 border-gray-800 p-1 rounded-xl bg-gray-950 hover:bg-gray-800 hover:cursor-pointer transition-all duration-300 shadow-xl hover:shadow-cyan-800/50"

    return (
        <div className='text-center'>
            {
                (type == "small") ? 
                <button className={'w-14 h-14 group ' + cl}>
                    {
                        (text == "Youtube") ? <a href='https://youtube.com/'><TbBrandYoutube className='h-full w-full p-1 text-white group-hover:text-red-400 transition-all duration-300 '/></a> : 
                        (text == "Twitch") ? <a href='https://twitch.tv/'><TbBrandTwitch className='h-full w-full p-1 text-white group-hover:text-purple-400 transition-all duration-300 '/></a> :  
                        (text == "VK") ? <a href='https://vk.com/'><TbBrandVk className='h-full w-full p-1 text-white group-hover:text-blue-400 transition-all duration-300 '/></a> : 
                        (text == "GitHub") ? <a href='https://github.com/'><TbBrandGithub className='h-full w-full p-1 text-white group-hover:text-gray-500 transition-all duration-300 '/></a> :
                        (text == "GMail") ? <a href='https://gmail.com/'><TbBrandGmail className='h-full w-full p-1 text-white group-hover:text-yellow-400 transition-all duration-300 '/></a> :
                        (text == "Mail") ? <a href='https://mail.ru/'><TbMail className='h-full w-full p-1 text-white group-hover:text-blue-800 transition-all duration-300 '/></a> :
                        null
                    }
                </button>:
                <button className={'w-14 h-14 ' + cl}>
                    {text}
                </button> 
            }
        </div>
    )
}

export default LinkButton