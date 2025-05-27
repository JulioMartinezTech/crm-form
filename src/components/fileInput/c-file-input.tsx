//import dependencies
import React, { useRef, useCallback } from "react";

//import css
import "./c-file-input.css";

interface FileInputProps {
  onFileChange: (files: FileList) => void;
  disabled?: boolean;
}

const CFileInput: React.FC<FileInputProps> = ({ onFileChange, disabled }) => {
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
      className={
        disabled
          ? "c-file-input__form-container__disabled"
          : "c-file-input__form-container"
      }
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        className={
          disabled
            ? "c-file-input__upload-icon__disabled"
            : "c-file-input__upload-icon"
        }
      >
        <path d="M440-200h80v-167l64 64 56-57-160-160-160 160 57 56 63-63v167ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
      </svg>
      {!disabled ? (
        <p className="c-file-input__text">
          Drag & drop files here, or click to select files
        </p>
      ) : (
        <p
          className={
            disabled ? "c-file-input__text__disabled" : "c-file-input__text"
          }
        >
          You have reached the limit of files you can upload.
        </p>
      )}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleInputChange}
        multiple
        disabled={disabled}
      />
    </div>
  );
};

export default CFileInput;
