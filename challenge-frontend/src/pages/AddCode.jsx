import Form from '../components/Form'
import Layout from '../Layout'

export default function AddCode() {
   return (
      <Layout>
         <div className='mx-auto container p-3 mt-5 min-h-screen'>
            <div>
               <h1 className='text-xl font-bold'>Ajouter un bout de code</h1>
               <p className='text-sm text-gray-500'>Partagez votre code avec la communauté</p>
            </div>

            <Form/>
         </div>
      </Layout>
   )
}
