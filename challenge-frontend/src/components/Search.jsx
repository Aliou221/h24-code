
export default function Search({ getValue }) {

   const handleChange = (e) => {
      getValue(e.target.value)      
   }

   return (
      <div className="mt-4 flex gap-3">
         <h1 className="py-2 text-sm">Filtrer par catégorie</h1>
         <select 
            onChange={handleChange}
            name="category" 
            id="category" 
            className="border flex-1 border-gray-400 px-3 py-2 rounded-md text-sm"
         >
            <option value="">Tous les catégories</option>
            <option value="PHP">PHP</option>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
         </select>
      </div>
   )
}
