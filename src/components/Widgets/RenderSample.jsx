import React from "react";
import RowView from "../UI/ViewRow";
import { SnippetCode } from "../Snippets/CodeSnippet";
export const RenderSample = ({ data }) => {
  if (!data) return null;

  const { title, description, propsList = [], codesample } = data;

  const rows = propsList.map((prop) => {
    const lines = [
      <div key="name">
        {prop.name} ({prop.type})
      </div>,
      prop.default !== undefined && <div key="default">Default: {String(prop.default)}</div>,
      <div key="desc">{prop.description}</div>,
    ].filter(Boolean);

    return {
      label: prop.name,
      component: <div>{lines}</div>,
    };
  });

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>

      <h2>Props</h2>
      <RowView rows={rows} />

      {codesample && (
        <>
          <h2>Code Sample</h2>
          <SnippetCode content={codesample} language="jsx" />
        </>
      )}
    </div>
  );
};
