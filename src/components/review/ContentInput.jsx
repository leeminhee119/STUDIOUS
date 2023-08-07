import React, { useState } from "react";
import styled from "styled-components";

const ContentInput = () => {
  const [content, setContent] = useState("");

  const handleChange = (e) => {
    const inputContent = e.target.value;
    if (inputContent.length <= 200) {
      setContent(inputContent);
    }
  };

  return (
    <ContentInputWrapper>
      <StyledInput
        placeholder={`지나친 비방과 욕설은 자제해주세요.\n최대 200자까지 작성 가능합니다.`}
        value={content}
        onChange={handleChange}
        maxLength={200}
      />
      <CharacterCount>{content.length}/200</CharacterCount>
    </ContentInputWrapper>
  );
};

const ContentInputWrapper = styled.div`
  margin: 1rem 10rem;
`;

const StyledInput = styled.textarea`
  ${({ theme }) => theme.fonts.body2};
  width: 100%;
  height: 10rem;
  resize: none;
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  border-radius: 0.5rem;
  padding: 1rem;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray300};
  }
`;

const CharacterCount = styled.div`
  ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.gray600};
  margin-top: 0.5rem;
  text-align: right;
`;

export default ContentInput;
