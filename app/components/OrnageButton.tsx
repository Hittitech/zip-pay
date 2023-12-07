import React from 'react'

interface Props{
    text:string
    orange:boolean

}
const OrnageButton = ({text,orange}:Props) => {
  return (
    <div className={`${orange?  "bg-orange-400" : " bg-transparent   border border-slate-400 px-10" } rounded-full py-1 px-4 font-medium `}
    >{text}</div>
  )
}

export default OrnageButton