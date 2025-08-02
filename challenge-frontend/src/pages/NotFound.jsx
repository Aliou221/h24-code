import { useNavigate } from 'react-router-dom'

export default function NotFound() {
   const navigate = useNavigate()

   const handleBack = () => {
      navigate('/')
   }

   return (
      <div className='flex items-center justify-center h-screen flex-col gap-4'>
         <h1 className='uppercase text-3xl font-bold'>Oups, 404</h1>
         <p className="text-gray-500">La page que vous cherchez n'existe pas.</p>
         <button 
            onClick={handleBack}
            className='px-3 py-2 bg-blue-400 rounded-md shadow-sm cursor-pointer hover:bg-blue-500 text-white text-sm'>
            Retour à la page d’accueil
         </button>
      </div>
   )
}
