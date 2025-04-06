//import dependencies
import React, { useRef, useCallback } from "react";

//import css
import "./c-file-input.css";

//import assets
import UploadIcon from "../../assets/img/upload_file_icon.svg";

interface FileInputProps {
  onFileChange: (files: FileList) => void;
}

const CFileInput: React.FC<FileInputProps> = ({ onFileChange }) => {
  // const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      // setIsDragging(false);

      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        onFileChange(e.dataTransfer.files);
      }
    },
    [onFileChange]
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        onFileChange(e.target.files);
      }
    },
    [onFileChange]
  );

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="c-file-input__form-container"
      // style={{
      //   backgroundColor: isDragging ? "#f0f0f0" : "transparent",
      // }}
      onClick={handleClick}
    >
      <img
        src={UploadIcon}
        alt="upload-icon"
        className="c-file-input__upload-icon"
      />
      <p>Drag & drop files here, or click to select files</p>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleInputChange}
        multiple
      />
    </div>
  );
};

export default CFileInput;
