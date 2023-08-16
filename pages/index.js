import Image from 'next/image'
import topimg from "../public/images/topimg.jpg"
import { Inter } from 'next/font/google'
import { TbArrowUpRight, TbPlayerPlay, TbSearch, TbPhotoSearch } from 'react-icons/tb'
import { useState } from 'react'
import LinkButton from '@/components/LinkButton'




export default function Home() {
  const [icon, setIcon] = useState(0)
  const [search, setSearch] = useState("")
  const [bar, setBar] = useState("focus:shadow-gray-500/40")
  const [cl, setCl] = useState(["", "translate-y-9 opacity-0", "translate-y-9 opacity-0", "translate-y-9 opacity-0"])

  const sendSearch = () => {
    if (search[0] == "!"){
      window.location.href = "https://" + search.substring(1)
    }
    else if (search[0] == "@"){
      window.location.href = "https://www.youtube.com/results?search_query=" + search.substring(1)
    }
    else if (search[0] == "#"){
      window.location.href = "https://yandex.ru/images/search?text=" + search.substring(1)
    }
    else {
      window.location.href = "https://yandex.ru/search/?text=" + search
    }
  }

  const check = (e) => {
    if (e.target.value[0] != ' ') {
      setSearch(e.target.value)
      if (e.target.value[0] == "!"){
        changeIcon(1)
      }
      else if (e.target.value[0] == "@"){
        changeIcon(2)
      }
      else if (e.target.value[0] == "#"){
        changeIcon(3)
      }
      else {
        changeIcon(0)
      }
    }
  }

  const input = (event) => {
    if(event.key === 'Enter'){
      sendSearch()
      console.log('enter press here! ')
    }
    else if(event.key === 'Escape'){
      setBar("focus:shadow-red-900/40")
      setTimeout(() => {
        setBar("focus:shadow-gray-500/40")
      }, 500);
      setSearch("")
    }
  }

  const changeIcon = (key) => {
    if (key != icon){
      var cArray = ["translate-y-9 opacity-0", "translate-y-9 opacity-0", "translate-y-9 opacity-0", "translate-y-9 opacity-0"]
      cArray[key] = " "
      cArray[icon] = "-translate-y-9 opacity-0"
      setCl(cArray)
      setTimeout(() => {
        cArray[icon] = "translate-y-9 opacity-0"
        setCl(cArray)
        setIcon(key)
      }, 500);
    }
  }  

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-around p-20`}
    >
      <div className='flex flex-col justify-between min-h-full'>
        <div className='w-[700px]'>
          <div className='relative h-44 mb-5'>
            <text className='absolute bottom-[2px] left-1 text-[14px] text-gray-600 italic'>{"Валаамский монастырь. Никольский скит. 9 августа 2022"}</text>
            <Image alt='' src={topimg} className='absolute h-44 object-cover rounded-xl duration-500 hover:-translate-y-6 transition-all'/>
          </div>
          <div className='flex space-x-1'>
            <input
              onKeyDown={input}
              onChange={check}
              value={search}
              autoComplete="off"
              placeholder='найди что-нибудь!'
              className={bar + ' w-full bg-gray-800 rounded-xl py-2 px-4 placeholder:text-gray-600 focus:outline-none hover:shadow-lg hover:shadow-gray-600/50 focus:shadow-xl transition-shadow'}/>
            <button onClick={sendSearch} className='overflow-hidden flex items-center justify-center bg-cyan-950 hover:bg-cyan-800 rounded-xl p-2 hover:shadow-lg hover:shadow-cyan-500/40 transition-all group duration-500'>
              <div className='flex items-center justify-center relative h-7 w-7'>
                <TbSearch className={cl[0] + " absolute h-7 w-7 group-hover:-rotate-12 transition-all duration-500 "}/>
                <TbArrowUpRight className={cl[1] + " absolute h-7 w-7 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-all duration-500 "}/>
                <TbPlayerPlay className={cl[2] + " absolute h-7 w-7 group-hover:translate-x-[2px] transition-all duration-500 "}/>
                <TbPhotoSearch className={cl[3] + " absolute h-7 w-7 group-hover:scale-110 transition-all duration-500 "}/>
              </div>
            </button>
          </div>
        </div>
        <div className='text-center text'>
          <div className='text-sm text-cyan-700 pt-4 pb-1'>Начни поиск с символа...</div>
          <div className='text-[14px] text-gray-500 flex justify-around'>
            <button className='hover:text-gray-400' onClick={() => {setSearch("!" + search); changeIcon(1);}}><text className='text-gray-200'>!</text>{" открыть ссылку"}</button>
            <button className='hover:text-gray-400' onClick={() => {setSearch("#" + search); changeIcon(3);}}><text className='text-gray-200'>#</text>{" искать в Яндекс.Картинки"}</button>
            <button className='hover:text-gray-400' onClick={() => {setSearch("@" + search); changeIcon(2);}}><text className='text-gray-200'>@</text>{" искать в Youtube"}</button>
          </div>
        </div>
        {/* <button onClick={() => {changeIcon(0)}} className='w-12 h-12 bg-cyan-950 hover:bg-cyan-800 rounded-xl p-2 hover:shadow-lg hover:shadow-cyan-500/40 transition-all group duration-300'>{"0"}</button>
        <button onClick={() => {changeIcon(1)}} className='w-12 h-12 bg-cyan-950 hover:bg-cyan-800 rounded-xl p-2 hover:shadow-lg hover:shadow-cyan-500/40 transition-all group duration-300'>{"1"}</button>
        <button onClick={() => {changeIcon(2)}} className='w-12 h-12 bg-cyan-950 hover:bg-cyan-800 rounded-xl p-2 hover:shadow-lg hover:shadow-cyan-500/40 transition-all group duration-300'>{"2"}</button>
      <button onClick={() => {changeIcon(3)}} className='w-12 h-12 bg-cyan-950 hover:bg-cyan-800 rounded-xl p-2 hover:shadow-lg hover:shadow-cyan-500/40 transition-all group duration-300'>{"3"}</button> */}
      </div>
      <div className=' flex flex-col justify-center items-center'>
        <div className='flex justify-around w-[900px] mb-4'>
          <LinkButton text='Youtube' type='small'/>
          <LinkButton text='YoutubeStudio' type='small'/>
          <LinkButton text='Twitch' type='small'/>
          <LinkButton text='TwitchStudio' type='small'/>
          <LinkButton text='VK' type='small'/>
          <LinkButton text='GitHub' type='small'/>
          <LinkButton text='GMail' type='small'/>
          <LinkButton text='Mail' type='small'/>
        </div>
        <div>
          <div className='flex justify-around w-[700px]'>
            <LinkButton text='Modrinth' link="modrinth.com/"/>
            <LinkButton text='WolframAlpha' link="wolframalpha.com/"/>
            <LinkButton text='Tailwind' link="tailwindcss.com/"/>
          </div>
          <div className='flex justify-around w-[700px]'>
            <LinkButton text='nn-of.ru' link="nn-of.ru/"/>
            <LinkButton text='RuTracker' link="rutracker.org/"/>
            <LinkButton text='Lichess' link="lichess.org/"/>
          </div>
        </div>
      </div>
    </main>
  )
}
