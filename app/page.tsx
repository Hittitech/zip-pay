import Container1 from './components/Container1'
import Container2 from './components/Container2'
import Partner from './components/Partners'
import Container3 from './components/Container3'
import Container4 from './components/Container4'

export default function Home() {
  return (
    <main className=" bg-black  overflow-hidden   text-white  ">
      <div className='flex flex-col w-3/4 m-auto'>
      <Container1/>
       <Partner/>
       <Container2/>

        <Container3/>
        <Container4/>
      </div>
      
       
    </main>
  )
}
