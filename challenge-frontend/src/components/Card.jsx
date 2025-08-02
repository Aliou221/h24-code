import { useEffect } from 'react'
import { FaCalendarDays, FaCopy } from 'react-icons/fa6'

export default function Card({title, category, description, code, date}) {
   var color = ""
   switch(category){
      case 'HTML': 
         color += "text-orange-700 bg-orange-200 border-orange-400"
         break
      case 'PHP': 
         color += "text-purple-700 bg-purple-200 border-purple-400"
         break
      case 'CSS': 
         color += "text-blue-700 bg-blue-200 border-blue-400"
         break
   }

   useEffect(()=>{
      document.querySelectorAll('.fade-up').forEach((ele,index) => {
         ele.style.animationDelay = `${index * 0.1}s`
      });
   },[])

   const handleCopy = (e) => {
      navigator.clipboard.writeText(code)
      .then(() => {
         let parent = e.target.parentElement.parentElement
         let copy = parent.querySelector('.copy')

         copy.classList.add('fade-up')
         
         setTimeout(() => {
            copy.classList.remove('fade-up')
         }, 1000);
         
      })
      .catch(err => {
         console.error('Erreur de copie :', err)
      })
   }


   return (
      <div className='my-5 shadow-sm rounded-md p-3 fade-up flex-1'>
         <div className='flex items-center justify-between mb-2'>
            <h1>{title}</h1>
            <span className={`text-[.8rem] block px-2 ${color} category font-medium border rounded-2xl`}>
               {category}
            </span>
         </div>
         <p className='py-2 text-sm text-gray-500'>{description}</p>
         <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            <code>
               {code}
            </code>
         </pre>
         <div className='flex items-center justify-between px-2 relative'>
            <div className='flex pt-3 items-center gap-1'>
               <FaCalendarDays className='size-3 text-gray-500'/>
               <p className='text-[.8rem] text-gray-500'> {date} </p>
            </div>
            <div className='absolute copy right-0 bottom-8 bg-green-100 px-2 py-1 rounded-md border-green-300 border text-[.7rem]'>
               <p>copié !</p>
            </div>
            <button 
               onClick={handleCopy}
               className='text-sm px-2 cursor-copy flex items-center gap-1 bg-blue-100 text-blue-800 font-medium py-1 mt-2 rounded-md border border-transparent hover:border-blue-600 transition-all hover:bg-blue-200'>
               <FaCopy/>
               Copier
            </button>
         </div>
      </div>
   )
}
