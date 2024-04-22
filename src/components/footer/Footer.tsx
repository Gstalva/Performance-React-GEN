import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

export function Footer() {

  return (
    <div className="flex justify-center shadow-lg border-t-[1px] border-t-black">
      <div className="container flex flex-col items-center py-4">
        <p className='text-xl font-bold text-black'>FarmaBrasil | Copyright: </p>
        <p className='text-lg text-black'>Mais sobre nós atraves de nossas Redes!</p>
        <div className='flex gap-2'>
          <LinkedinLogo size={52} weight='bold' className='text-blue' />
          <InstagramLogo size={52} weight='bold' className='text-blue' />
          <FacebookLogo size={52} weight='bold' className='text-blue' />
        </div>
      </div>
    </div>
  )