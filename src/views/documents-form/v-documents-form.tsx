// importamos el css
import './v-documents-form.css'

//importamos assets
import UploadIcon from '../../assets/img/upload_file_icon.svg'

//declaramos la funcion principal
const VDocumentsForm = () => {
    return (
        <div className='v-documents-form'>
            <div className='v-documents-form__titles-container'>
                <h1 className='v-documents-form__title'>Upload Documents</h1>
                <p className='v-documents-form__subtitle'>Please upload one or more documents such as a passport.</p>
            </div>
            <div className='v-documents-form__form-container'>
                <img src={UploadIcon} alt="upload-icon" className='v-documents-form__upload-icon'/>
            </div>
        </div>
    )
}

export default VDocumentsForm