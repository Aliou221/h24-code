import React from 'react'

export default function Stat({ total , title , color}) {
   return (
      <div className='flex flex-col p-3 my-3 flex-1 items-center justify-center'>
         <span className={`text-xl font-semibold ${color}`}>
            {total}
         </span>
         <p className='text-sm text-gray-500'>
            { title }
         </p>
      </div>
   )
}
