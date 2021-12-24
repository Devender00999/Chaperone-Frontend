import styled from "styled-components";

export const BlogPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;

export const BlogPageImage = styled.div`
  background: url(${(props) => props.src});
  width: 100%;
  height: 250px;
`;
export const BlogContent = styled.div`
  margin: 20px;
  border-radius: 20px 20px 0px 0px;
  transform: translateY(-75px);
  padding: 30px 40px;
  background: white;
`;

export const BlogText = styled.p`
  font-size: 13px;
  color: #666666;
  margin-top: 20px;
  line-height: 20px;
`;
