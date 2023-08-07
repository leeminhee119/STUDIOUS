import React, { useState } from "react";
import styled from "styled-components";

const PhotoUploader = () => {
  const [selectedPhotos, setSelectedPhotos] = useState([]);

  const handlePhotoSelect = (e) => {
    const files = Array.from(e.target.files);
    setSelectedPhotos([...selectedPhotos, ...files]);
  };

  return (
    <PhotoUploaderWrapper>
      <SelectedPhotoCount>{selectedPhotos.length}/10</SelectedPhotoCount>
      <UploadButton>
        <input type="file" multiple onChange={handlePhotoSelect} /> +
      </UploadButton>
      <SelectedPhotosList>
        {selectedPhotos.map((photo, index) => (
          <SelectedPhoto key={index}>
            <img src={URL.createObjectURL(photo)} alt={`사진 ${index + 1}`} />
          </SelectedPhoto>
        ))}
      </SelectedPhotosList>
    </PhotoUploaderWrapper>
  );
};

const PhotoUploaderWrapper = styled.div`
  margin: 1rem 10rem;
`;

const SelectedPhotoCount = styled.div`
  ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.gray600};
  margin-top: 0.5rem;
`;

const UploadButton = styled.label`
  ${({ theme }) => theme.fonts.body2};
  background-color: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  outline: none;
`;

const SelectedPhotosList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const SelectedPhoto = styled.div`
  width: 8rem;
  height: 8rem;
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  border-radius: 0.5rem;
  margin: 0.5rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default PhotoUploader;
