# ts-react-gist

A simple React component that embeds a github.com gist. Built with modern functional components and typescript.

## Available types and props

NOTE: Url is a combination of your github username and gist ID.

```
url {string} // required ({your_name}/{id})
filename {string} // optional Name of a specific file in a multi-file gist
```

```
type TS_REACT_GIST = {
  url: string;
  filename?: string;
};
```

# Usage

```
<TSReactGist url={string} filename={?string}/>
```

## Example Usage (single-file gist)

```
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

## Example Usage (multi-file gist)

```
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
