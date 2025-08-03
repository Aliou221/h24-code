import Layout from '../Layout'
import Statistique from '../components/Statistique'
import Card from '../components/Card'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Search from '../components/Search'

export default function Home() {

   const [cards, setCards] = useState([])

   const getValue = (value) => {
      let cards = document?.querySelectorAll('.my-card')

      cards.forEach((card) => {
         let category = card?.querySelector('.category')
         if (!category) return;

         if (value === '' || value === category.textContent.trim()) {
            card.style.display = ''
         } else {
            card.style.display = 'none'
         }
      })
   }

   // useEffect(() => {
   //    axios.get('https://h24-code-challenge.free.nf/api/posts')
   //    .then(res =>  setCards(res.data))
   //    .catch(err => console.error('Erreur : ' + err))
   // }, [])

   const NoteCode = () => {
      return (
         <div className='mt-5 p-3 shadow-sm flex flex-col items-center justify-center'>
            <h1 className='text-2xl font-bold'>Aucun code n'est encore disponible !</h1>
            <p>Veuillez ajouter votre premier bout de code</p>
            <Link to='/ajouter' className='bg-blue-100 px-3 py-2 rounded-md mt-3 text-sm font-medium shadow-sm border border-transparent hover:border-blue-600 transition-all hover:bg-blue-200'>Ajouter</Link>
         </div>
      )
   }
   
   return (
      <>
         <Layout>
            <div className='mx-auto container p-3 mt-5 min-h-screen'>
               <Statistique/>
               <Search  getValue={getValue}/>
               <div className='block'>
                  {
                     cards.length > 0 ? 
                        cards.map((card, index) => (
                           <div key={index} className='my-card'>
                              <Card 
                                 title={card.title} 
                                 category={card.category} 
                                 code={card.content} 
                                 description={card.description} 
                                 date={new Date(card.created_at).toLocaleDateString('fr-FR', {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric',
                                    hour: 'numeric',
                                    minute: 'numeric',
                                 })}
                              />
                           </div>
                        )) 
                     : <NoteCode/>
                  }
               </div>
            </div>
         </Layout>
      </>
   )
}
