// import dependencis
import { useEffect } from 'react'
import { getGendersAxios } from '../../api/monicaApi'
import { Contact } from '../../types/monicaTypes'
import { useGenders} from '../../hooks/useGenders'
import { useForm, SubmitHandler } from 'react-hook-form'

//import components
import CInput from '../../components/input/c-input'
import CSelectBox from '../../components/select-box/c-select-box'
import CDatePicker from '../../components/birthdatePicker/c-date-picker'
import CButton from '../../components/button/c-button'

//import css
import './v-user-register.css'

//declarate types for props
type VUserRegisterProps = {
    onChange: (data: Contact) => void
}

const VUserRegister = ({onChange}: VUserRegisterProps) => {

    //load genders from API
    const genders = useGenders();

    //initialize the react-hook-form
    const {
        register,
        handleSubmit,
        setValue,
        formState: {errors, isValid},
        watch,
        control,
    } = useForm<Contact>({
        mode: "onChange",
        defaultValues:{
            gender: "",
            birthDate: null,
            nickName: "",
        }
        
    })

    // Form submission handler 
      const onSubmit: SubmitHandler<Contact> = (data) => {
        console.log("Form submitted:", data)
        onChange(data)
    }
    // Using watcher for update the selectBox value
    const genderSelected = watch("gender")

      useEffect(() => {
          getGendersAxios()
      })

    return(
        <div className='v-user-register'>
            <h1 className='v-user-register__title'>User creation</h1>
            <div className='v-user-register__form-container'>
                <form onSubmit={handleSubmit(onSubmit)} className='v-user-register__form'>
                    <>
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
                            <CDatePicker 
                            label='Birthdate' 
                            name='birthDate' 
                            required 
                            error={errors.birthDate?.message}
                            control={control}
                            />
                        </div>
                        {/* <div className='v-user-register__form-inputs'>
                        </div> */}
                    </>
                    <CButton type='submit' text='Create' disabled={!isValid}/>
                </form>
            </div>
        </div>
    )
}

export default VUserRegister