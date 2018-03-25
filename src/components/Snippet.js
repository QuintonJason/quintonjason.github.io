import React from "react";
import styled from "styled-components";

const Li = ({ className, children }) => (
  <li className={className}>{children}</li>
);

const P = ({ className, children }) => <p className={className}>{children}</p>;

const SnippetLi = styled(Li)`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #efefef;
  margin-bottom: 1rem;
`;
const SnippetDate = styled(P)`
  font-style: italic;
  color: #999;
  margin-top: 0;
`;

const Snippet = props => {
  const { id, description, username, avatar, time } = props;
  return (
    <SnippetLi className="snippet-wrapper">
      <a
        className="snippet__link"
        data-id={props.id}
        href={`/snippets/${props.id}`}
      >
        {props.description}
      </a>
      <SnippetDate>{props.time}</SnippetDate>
    </SnippetLi>
  );
};

export default Snippet;
