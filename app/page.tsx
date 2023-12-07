import Container1 from './components/Container1'
import Container2 from './components/Container2'
import Partner from './components/Partners'
import Container3 from './components/Container3'
import Container4 from './components/Container4'

export default function Home() {
  return (
    <main className="flex bg-black sm:w-full bg-cover  text-white flex-col ">
      
       <Container1/>
       <div className='flex flex-col w-3/4 m-auto'>
       
        <div className='min-h-screen text-center'>
          <Partner/>
          <Container2/>
        </div>


        <div className='min-h-screen text-center'>
        <Container3/>
        <Container4/>
        </div>
       </div>
       
    </main>
  )
}
