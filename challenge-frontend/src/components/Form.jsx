import axios from "axios"
import { useState } from "react"

export default function Form() {

   const [title, setTitle] = useState('')
   const [description, setDescription] = useState('')
   const [content, setContent] = useState('')
   const [category, setCategory] = useState('')

   const [error , setError] = useState(false)
   const [success, setSuccess] = useState(false)

   const handleSubmit = async (e) => {
      e.preventDefault()

      if(title === "" || description === "" || content === "" || category === ""){
         setError(true)
         return
      }

      try{
         const postData = {
            title: title,
            description: description,
            content: content,
            category: category,
         }

         await axios.post('http://localhost:8000/api/posts', postData);
         setSuccess(true)

         setTitle('')
         setDescription('')
         setContent('')
         setCategory('')

      }catch(err){
         console.error(err);
         setError(false)
         setSuccess(false)
      }
   }

   return (
      <>
         {success && ( 
               <div className="bg-green-100 p-3 mt-3 flex items-center justify-between rounded border border-green-300 text-green-600 font-medium">
                  <p>Votre code a été ajouté avec succès !</p>
                  <span 
                     onClick={() => setSuccess(false)}
                     className="bg-green-300 size-[20px] flex items-center justify-center rounded-full cursor-pointer text-sm">X</span>
               </div>
         )}
         {error && ( 
               <div className={`bg-red-100 p-3 mt-3 flex items-center justify-between rounded border border-red-300 text-red-600 font-medium`}>
                  <p>Veuillez remplir tous les champs svp !</p>
                  <span 
                     onClick={() => setError(false)}
                     className="bg-red-300 size-[20px] flex items-center justify-center rounded-full cursor-pointer text-sm">X</span>
               </div>
         )}
         <form method="POST" onSubmit={handleSubmit} className="mt-5">
            <div className="flex flex-wrap gap-4">
               <div className="flex flex-col gap-1 flex-1">
                  <label htmlFor="title">Titre<sup className='text-red-400 font-bold'>*</sup></label>
                  <input 
                     value={title}
                     onChange={(e) => setTitle(e.target.value)}
                     type="text" 
                     name="title" 
                     id="title" 
                     placeholder="ex: Fonction de validation email" 
                     className="border border-gray-400 px-3 py-2 rounded-md text-sm"
                  />
               </div>

               <div className="flex flex-col gap-1 flex-1">
                  <label htmlFor="description">Description<sup className='text-red-400 font-bold'>*</sup></label>
                  <input 
                     value={description}
                     onChange={(e)=> setDescription(e.target.value)}
                     type="text" 
                     name="description" 
                     id="description" 
                     placeholder="Décrivez brièvement ce fait votre code..." 
                     className="border border-gray-400 px-3 py-2 rounded-md text-sm"/>
               </div>
            </div>

            <div className="flex flex-col gap-1 flex-1 mt-4">
               <label htmlFor="category">Catégorie<sup className='text-red-400 font-bold'>*</sup></label>
               <select
                  value={category}
                  onChange={(e)=> setCategory(e.target.value)}
                  name="category" 
                  id="category" 
                  className="border border-gray-400 px-3 py-2 rounded-md text-sm">
                     <option value="">-- Sélectionner votre catégorie -- </option>
                     <option value="PHP">PHP</option>
                     <option value="HTML">HTML</option>
                     <option value="CSS">CSS</option>
               </select>
            </div>

            <div className="flex flex-col gap-1 flex-1 mt-4">
               <label htmlFor="content">Code<sup className='text-red-400 font-bold'>*</sup></label>
               <textarea 
                  value={content}
                  onChange={(e)=> setContent(e.target.value)}
                  name="content" 
                  id="content" 
                  className="border border-gray-400 px-3 py-2 rounded-md text-sm resize-none h-60" 
                  placeholder="Coller votre code ici..."
               ></textarea>
            </div>

            <input type="submit" value="Enregistrer" className="px-3 py-2 mt-3 font-bold hover:bg-blue-600 transition-all bg-blue-500 cursor-pointer rounded-md text-white shadow-md max-w-[200px] w-full" />
         </form>
      </>
   )
}
