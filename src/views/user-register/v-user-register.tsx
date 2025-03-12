// import dependencis
import { useState, useEffect } from 'react'
import { fetchGenders } from '../../api/monicaApi'
import { Gender } from '../../types/monicaTypes'
import { useForm, SubmitHandler } from 'react-hook-form'

//import components
import CInput from '../../components/input/c-input'
import CSelectBox from '../../components/select-box/c-select-box'

//importamos el css
import './v-user-register.css'

// declarating form data type
interface UserFormData {
    firstName: string;
    lastName: string;
    nickName?: string;
    gender: number | string;
    birthDate?: string;
}

const VUserRegister = () => {

    //definimos los estados
    const [genders, setGenders] = useState<Gender[]>([])

    //initialize the react-hook-form
    const {
        register,
        handleSubmit,
        setValue,
        formState: {errors},
        watch,
    } = useForm<UserFormData>({
        mode: "onChange",
        defaultValues:{
            gender: "",
        }
    })

    useEffect(() => {
        fetchGenders()
          .then((data) => {
            const dataClean = data.map(({id, name}) => ({id, name}))
            setGenders(dataClean);
          })
          .catch((error) => console.error("Error al obtener géneros:", error));
      }, []);

    // Form submission handler 
      const onSubmit: SubmitHandler<UserFormData> = (data) => {
        console.log("Form submitted:", data)
    }

    // Using watcher for update the selectBox value
    const genderSelected = watch("gender")

    return(
        <div className='v-user-register'>
            <h1 className='v-user-register__title'>User creation</h1>
            <div className='v-user-register__form-container'>
                <form onSubmit={handleSubmit(onSubmit)} className='v-user-register__form'>
                    <div className='v-user-register__form-inputs'>
                        <CInput 
                        label='First Name' 
                        type='text' 
                        name='first-name' 
                        required 
                        register={register("firstName", {required: "First name is required", pattern: {value: /^[A-Za-z\s]+$/, message: "Only letters and spaces are allowed"}})}
                        error={errors.firstName?.message}
                        />
                        <CInput 
                        label='Last Name' 
                        type='text'
                        name='last-name'
                        required 
                        register={register("lastName", {required: "Last name is required", pattern: {value: /^[A-Za-z\s]+$/, message: "Only letters and spaces are allowed"}})}
                        error={errors.lastName?.message}
                        />
                        <CInput 
                        label='Nickname' 
                        type='text'
                        name='nickName'
                        register={register("nickName")}
                        />
                        <CSelectBox 
                        label='Gender' 
                        options={genders} 
                        value={genderSelected} 
                        onChange={(value) => setValue("gender", value)} 
                        placeholder='Select one' 
                        register={register("gender", {required: "Gender is required"})}
                        required
                        error={errors.gender?.message}
                        />
                        <CInput label='Birthdate' required={false} name=''/>
                    </div>
                    {/* <div className='v-user-register__form-inputs'>
                        <h2>List of genders</h2>
                        <pre>{JSON.stringify(genders, null, 2)}</pre>
                    </div> */}
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default VUserRegister