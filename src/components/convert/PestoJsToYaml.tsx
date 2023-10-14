import { load } from 'js-yaml';
import { render } from 'react-dom';
import { Component } from "preact"
import React from "preact/compat"

export default function PestoJsToYaml() {
  const [text, setText] = React.useState('');
  const [output, setOutput] = React.useState('');
  React.useEffect(() => {
    const value = localStorage.getItem('text');
    setText(value||`edit your yaml here`);
    log({ target: { value } });
  }, []);
  const log = ({ target: { value: text } }: any) =>
    Promise.resolve(text)
      .then(load)
      .then((t) => JSON.stringify(t, null, 2))
      .then(setOutput)
      .then(() => localStorage.setItem('text', text));

  return (
    <>
      <textarea
        rows={25}
        onChange={log}
        defaultValue={text || `notext`}
        style={{ width: '100%' }}
      ></textarea>
      <pre>
        <code>{output}</code>
      </pre>
    </>
  );
}