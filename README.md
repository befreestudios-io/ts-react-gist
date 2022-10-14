# ts-react-gist ![CI](https://github.com/github/docs/actions/workflows/node.yml/badge.svg) | ![CodeQL](https://github.com/github/docs/actions/workflows/codeql.yml/badge.svg)

A simple React component that embeds a github.com gist. Built with modern functional components and typescript.

<br/>

## Install Package
[![NPM](https://nodei.co/npm/@befreestudios/ts-react-gist.png)](https://www.npmjs.com/package/@befreestudios/ts-react-gist)
```
npm install @befreestudios/ts-react-gist
```
<br/>
<br/>

## Component Propertieis

| Name | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `url` | *string* |✅ | The URL of the Gist repository or the permalink of an individual gist file. |
| `filename` | *string* | | Optional filename to include. |

<br/>
<br/>

## Example Usage (single-file gist)

```typescript
import React from 'react';
import TSReactGist from 'ts-react-gist';

function CODE_COMPONENT({ url }:TS_REACT_GIST): JSX.Element {
  return url ? (
    <div>
      <TSReactGist url={url} />
    </div>
  ) : null;
}

export default CODE_COMPONENT;
```

<br/>
<br/>

## Example Usage (multi-file gist)

```typescript
import React from 'react';
import TSReactGist from 'ts-react-gist';

function CODE_COMPONENT({ url, filename }:TS_REACT_GIST): JSX.Element {
  return url ? (
    <div>
      <TSReactGist url={url} filename={filename} />
    </div>
  ) : null;
}

export default CODE_COMPONENT;
```
