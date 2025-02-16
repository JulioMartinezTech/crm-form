// importamos dependencias
import { useState, useEffect } from 'react'
import { fetchGenders } from '../../api/monicaApi'
import { Gender } from '../../types/monicaTypes'
//importamos los componenetes
import CInput from '../../components/input/c-input'

//importamos el css
import './v-user-register.css'

const VUserRegister = () => {
    //definimos los estados
    // const [name, setName] = useState<string>('')
    const [genders, setGenders] = useState<Gender[]>([])

    useEffect(() => {
        fetchGenders()
          .then((data) => {
            console.log("Datos de la API:", data); // 📌 Verifica la respuesta en la consola
            setGenders(data);
          })
          .catch((error) => console.error("Error al obtener géneros:", error));
      }, []);

    return(
        <div className='v-user-register'>
            <h1 className='v-user-register__title'>Register</h1>
            <div className='v-user-register__form-container'>
                <form action="" className='v-user-register__form'>
                    {/* <input type="text" value={name} /> */}
                    <div className='v-user-register__form-inputs'>
                        <CInput label='First Name'/>
                        <CInput label='Last Name'/>
                        <CInput label='Nickname'/>
                        <CInput label='Gender'/>
                        <CInput label='Name'/>
                        <CInput label='Name'/>
                        <CInput label='Name'/>
                    </div>
                    <div className='v-user-register__form-inputs'>
                        {/* <CInput label='Name'/>
                        <CInput label='Name'/>
                        <CInput label='Name'/>
                        <CInput label='Name'/>
                        <CInput label='Name'/>
                        <CInput label='Name'/>
                        <CInput label='Name'/> */}
                    <h2>Lista de Géneros</h2>
                    <pre>{JSON.stringify(genders, null, 2)}</pre>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default VUserRegister