import styled from "styled-components";

export const TextAreaGreyRound = ({
  readOnly = false,
  placeholder = "",
  onChange = () => {},
  width,
  height,
  ...props
}) => {
  return (
    <TextArea
      readOnly={readOnly}
      placeholder={placeholder}
      onChange={onchange}
      width={width || "100%"}
      height={height || "100%"}
      style={{ ...props.style }}
    />
  );
};

const TextArea = styled.textarea`
  resize: none;
  width: ${({ width }) => (typeof width === "number" ? `${width}rem` : width)};
  height: ${({ height }) =>
    typeof height === "number" ? `${height}rem` : height};
  border: none;
  background-color: ${({ theme }) => theme.colors.mostLight};
  border-radius: 2.5rem;
  padding: 3rem;
`;
