'use client'
import TablaAula from "@/app/components/TablaAula"
import Dropdown from "@/app/components/DropDown"
import GenerarButton from "@/app/components/GenerarButton"
import { useState, useEffect } from 'react';
import { getCookie } from "cookies-next";

export default function Home() {
  const headers = ['CLAVE', 'SEC', 'AULA', 'CRED', 'ASIGNATURA', 'DOCENTE', 'Lun', 'Mar', 'Mier', 'Jue', 'Vie', 'Sab'];
  const optionsYear = [
    { value: 2020, label: '2020' },
    { value: 2021, label: '2021' },
    { value: 2022, label: '2022' },
    { value: 2023, label: '2023' },
  ];
  
  const optionsPeriods = [
    { value: 1, label: 'Feb-Abr' },
    { value: 2, label: "May-Jul" },
    { value: 3, label: "Ago-Oct" },
    { value: 4, label: "Nov-Ene" },
  ];
  const [data, setData] = useState([]);
  const [selectedYear, setSelectedYear] = useState(2023);
  const [selectedPeriod, setSelectedPeriod] = useState(1);
  const currentUserId = getCookie("userId");

    const handleYearChange = (event) => {
      setSelectedYear(event.target.value);
 
    };
  
    const handlePeriodChange =  (event) => {
      setSelectedPeriod(event.target.value);
    
    };
  
    useEffect(() => {
      console.log("Selected Year:", selectedYear);
    }, [selectedYear]);
    
    useEffect(() => {
      console.log("Selected Period:", selectedPeriod);
    }, [selectedPeriod]);
    
    return (
      <div className="mx-20">
          <div id="ParteArriba" className=" w-full h-20 mb-8 flex flex-col justify-between ">
            <h1 className="text-5xl font-bold mb-6" style={{}}>Volante de selección</h1>
            <div className=" flex justify-between mb-2 ">
              <div id="izq" className="w-1/3 h-full bg-gray-100 p-2 rounded-lg"> 
                <h3> <strong>ID:</strong> 1000000</h3>
                <h3> <strong>Nombre:</strong> Huan Hao Wu</h3>
                <h3> <strong>Programa:</strong> IDS</h3>
              </div>
              <div id="der" className="flex justify-around items-center">
                <div id="ano" className="mx-4 flex items-center ">
                  <h3 className="mr-8"> <strong> Año:</strong></h3>
                  <Dropdown options={optionsYear} onChanges={handleYearChange} selectedOption={selectedYear}/>
                </div>
                <div id="periodo" className="mx-4 flex items-center ">
                  <h3> <strong> Periodo:</strong></h3>
                  <Dropdown options={optionsPeriods} onChanges={handlePeriodChange} selectedOption={selectedPeriod}/>
                </div>
                <div id="boton" className="">
                  <GenerarButton year={selectedYear} period={selectedPeriod} id={currentUserId} setData={setData}/>
                </div>
              </div>
            </div>
          </div>
        <div className={`mt-24 bg-blue-600 w-full h-2 transform flex justify-center items-center rounded-xl`} ></div>
          <div id="ParteTablas" className=" w-full h-2/3 flex justify-center items-center pt-20">
          <TablaAula headers={headers} data={data}/>
          </div>
      </div>
      
      
    )
  }
  