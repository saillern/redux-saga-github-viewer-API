import styled from "styled-components";

const Card = styled.li`
  padding: 0px;
  font-size: 1.2rem;
  width: 100%;
  text-align: center;
  border-radius: 6px 6px 0px 0px;
  border-top: ${(props) =>
    props.$isActive ? "1px solid rgb(225, 228, 232)" : "0px"};
  border-left: ${(props) =>
    props.$isActive ? "1px solid rgb(225, 228, 232)" : "0px"};
  border-right: ${(props) =>
    props.$isActive ? "1px solid rgb(225, 228, 232)" : "0px"};
  border-bottom: ${(props) =>
    !props.$isActive ? "1px solid rgb(225, 228, 232)" : "0px"};
`;

const Text = styled.div`
  cursor: pointer;
  color: rgb(88, 96, 105);
  padding: 16px;
  display: block;
  width: 100%;
`;

export default function TabSection({ isActive, tabClick, children }) {
  return (
    <Card $isActive={isActive} onClick={tabClick}>
      <Text>{children}</Text>
    </Card>
  );
}
