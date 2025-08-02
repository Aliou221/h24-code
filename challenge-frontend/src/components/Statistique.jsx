import React, { useEffect, useState } from 'react'
import Stat from './Stat'
import axios from 'axios'

export default function Statistique() {

   const [total , setTotal] = useState({
      totDoc: 0,
      totPHP: 0,
      totHTML: 0,
      totCSS: 0,
   })
   
   useEffect(() => {
      axios.get('https://h24-code-challenge.free.nf/api/stat')
      .then(res => {
         const data = res.data
         setTotal({ 
            totDoc: data.total, 
            totPHP: data.totPhp,
            totHTML: data.totHtml,
            totCSS: data.totCss,
         })            
      })
      .catch(err => console.error('Erreur : ' + err))
   }, []);

   return (
      <div className='shadow-sm p-3 rounded-md'>
         <h1 className='text-xl font-bold'>Bibliothèque de code</h1>
            <div className='flex items-center gap-3 justify-between'>
               <Stat title="Total" color="text-blue-500" total={total.totDoc}/>
               <Stat title="PHP" color="text-purple-500" total={total.totPHP}/>
               <Stat title="HTML" color="text-orange-500" total={total.totHTML}/>
               <Stat title="CSS" color="text-blue-600" total={total.totCSS}/>
            </div>
      </div>
   )
}
