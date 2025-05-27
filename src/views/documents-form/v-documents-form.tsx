//import dependencies
import { useState, useEffect } from "react";
//import components
import CFileInput from "../../components/fileInput/c-file-input";
import CButton from "../../components/button/c-button";
//api
import { createDocument } from "../../api/monicaApi";
// import css
import "./v-documents-form.css";

//type
import { PageOnChange } from "../../types/pageTypes";

const VDocumentsForm = ({ onChange }: PageOnChange) => {
  const [isFiles, setIsFiles] = useState<boolean>(false);
  const [filesName, setFilesName] = useState<string[]>([]);
  const [files, setFiles] = useState<File[]>([]);

  const contactId = Number(sessionStorage.getItem("MonicaContactId"));

  const handleFiles = (filesData: FileList) => {
    const data = Array.from(filesData);
    const names: string[] = [];
    const filesList: File[] = [];
    if (isFiles) {
      files.forEach((fs) => {
        filesList.push(fs);
        names.push(fs.name);
      });
      data.forEach((f) => {
        filesList.push(f);
        names.push(f.name);
      });
      setFiles(filesList);
      setFilesName(names);
    } else if (!isFiles) {
      data.forEach((f) => {
        names.push(f.name);
      });
      setFiles(data);
      setFilesName(names);
      setIsFiles(true);
    }
  };
  const removeFileSelected = (name: string) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== name));
    setFilesName((prevFiles) => prevFiles.filter((file) => file !== name));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    for (const itemfile of files) {
      const formData = new FormData();
      formData.append("contact_id", contactId.toString());
      formData.append("document", itemfile);

      await createDocument(formData); // esperas cada subida
    }
    onChange();
  };
  useEffect(() => {
    if (files.length === 0) {
      setIsFiles(false);
    }
    if (files.length > 10) {
      alert("You can only upload up to 10 files.");
      setFiles([]);
    }
  }, [files]);
  return (
    <form className="v-documents-form" onSubmit={handleSubmit}>
      <div className="v-documents-form__titles-container">
        <h1 className="v-documents-form__title">Upload Documents</h1>
        <p className="v-documents-form__subtitle">like your ID or passport</p>
      </div>
      <div className="v-documents-form__cards">
        <CFileInput
          onFileChange={(file) => {
            handleFiles(file);
          }}
          disabled={files.length === 10}
        />
        <div className="v-documents-form__files-group">
          <h2 className="v-documents-form__files-group__title">
            Selected files
          </h2>
          <div className="v-documents-form__files-group__list">
            {isFiles ? (
              filesName.map((item, index) => (
                <div
                  className="v-documents-form__files-group__file-box"
                  key={index}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#48c9b0"
                  >
                    <path d="M320-440h320v-80H320v80Zm0 120h320v-80H320v80Zm0 120h200v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
                  </svg>
                  <p className="v-documents-form__files-group__file-name">
                    {item.length >= 17
                      ? item.slice(0, 15).concat("...").concat(item.slice(-3))
                      : item}
                  </p>
                  <div
                    className="v-documents-form__files-group__remove-icon"
                    onClick={() => removeFileSelected(item)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#EA3323"
                    >
                      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                    </svg>
                  </div>
                </div>
              ))
            ) : (
              <p className="v-documents-form__files-group__message">
                No files yet
              </p>
            )}
          </div>
        </div>
      </div>
      <CButton type="submit" text="Create" disabled={!isFiles} />
    </form>
  );
};

export default VDocumentsForm;
