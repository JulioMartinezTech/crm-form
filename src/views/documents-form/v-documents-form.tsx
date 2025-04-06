//import dependencies
import { useState } from "react";
//import components
import CFileInput from "../../components/fileInput/c-file-input";

// import css
import "./v-documents-form.css";

const VDocumentsForm = () => {
  const [files, setFiles] = useState({});
  return (
    <div className="v-documents-form">
      <div className="v-documents-form__titles-container">
        <h1 className="v-documents-form__title">Upload Documents</h1>
        <p className="v-documents-form__subtitle">
          Please upload one documents like a passport.
        </p>
      </div>
      <CFileInput onFileChange={(file) => console.log(file)} />
      {/* <CButton type="submit" text="Create" disabled={!isValid} /> */}
    </div>
  );
};

export default VDocumentsForm;
