'use client'
import Image from "next/image"
const adminRegister = require('@/public/adminRegister.png')
import FormComponent from '@/app/components/formComponent.js'

const { useMediaQuery } = require('@/app/components/useMediaHook.jsx')

const fields = {
  CLAVE: 'text',
  CAPACIDAD: 'number',
}

export default function Home() {
  const isSmallScreen = useMediaQuery('(max-width: 640px)')

  const action = 'asignatura';

  return (
    <div className="flex flex-row justify-center items-center h-screen w-screen">
      <div className="flex flex-col justify-center items-center p-10 h-4/5 relative lg:w-full md:w-full">
        <div className=" relative flex flex-col mt-20 h-full w-5/6 justify-center items-center">
          <div className="relative flex flex-col justify-center items-center mb-4 space-y-5">
            <h1 className=" text-center lg:text-6xl md:text-5xl sm:text-5xl max-sm:text-4xl font-bold">Registrar aulas</h1>
          </div>
          
          <div className="relative flex p-10  w-full h-full rounded-xl bg-[#F8F8F8]" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}>
            <FormComponent action={action} fields={fields} showPlaceholder={isSmallScreen ? true : false} style={'short:p-1 short:m-1 p-2 m-3 w-1/2 drop-shadow-xl rounded-xl bg-white'} buttonText='Guardar' buttonStyle={' rounded-full bg-[#4B63FD] p-4 m-4 ml-[65%] px-10 text-white '} showFieldTitles={isSmallScreen ? false : true} h2={'md:min-w-fill sm:min-w-[200px] xl:ml-20 lg:ml-10 md:ml-14 sm:ml-10 text-sm'} />
          </div>
        </div>
      </div>
      <div className="relative h-full xl:w-11/12 lg:w-1/2 md:w-0 sm:w-0">
        <Image src={adminRegister} alt="adminRegister" layout="fill" objectFit="cover" objectPosition="center bottom" />
      </div>
    </div>

  )
}