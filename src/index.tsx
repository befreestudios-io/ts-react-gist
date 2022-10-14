import * as React from "react";

export type TS_REACT_GIST = {
  url: string;
  filename?: string;
};

interface TC_IFRAME extends HTMLIFrameElement {
  document?: Document;
}

const DefaultTSReactGistProps = {
  filename: undefined,
};

/**
 * TSReactGist
 * @param {TS_REACT_GIST} {
 *   url,
 *   filename = DefaultTSReactGistProps.filename,
 * }
 * @return {JSX.Element}
 */
const TSReactGist: React.FC<TS_REACT_GIST> = ({
  url,
  filename = DefaultTSReactGistProps.filename,
}: TS_REACT_GIST): JSX.Element => {
  const iframeNode = React.createRef<TC_IFRAME>();

  /**
   * buildUrl
   * @return {string}
   */
  const buildUrl = () => {
    const fileArg = filename ? `?file=${filename}` : "";
    return `https://gist.github.com/${url}.js${fileArg}`;
  };

  /**
   * updateIframeContent
   */
  const updateIframeContent = () => {
    const iframe: TC_IFRAME | null = iframeNode?.current;
    if (iframe) {
      const gistLink = buildUrl();
      const gistScript = `<script type="text/javascript" src="${gistLink}"></script>`;
      const styles = "<style>*{font-size:12px;}</style>";
      const elementId = filename ? `gist-${url}-${filename}` : `gist-${url}`;
      const resizeScript = `onload="parent.document.getElementById('${elementId}').style.height=document.body.scrollHeight + 'px'"`;
      const iframeHtml = `<html><head><base target="_parent">${styles}</head><body ${resizeScript}>${gistScript}</body></html>`;

      let doc = iframe.document;

      if (iframe.contentDocument) {
        doc = iframe.contentDocument;
      } else if (iframe.contentWindow) {
        doc = iframe.contentWindow.document;
      }

      if (doc) {
        doc.open();
        doc.writeln(iframeHtml);
        doc.close();
      }
    }
  };

  React.useEffect(() => {
    updateIframeContent();
  });

  const iFrameID = filename ? `gist-${url}-${filename}` : `gist-${url}`;
  return (
    <iframe
      title={iFrameID}
      ref={iframeNode}
      data-testid={iFrameID}
      width="100%"
      frameBorder={0}
      id={iFrameID}
    />
  );
};

TSReactGist.defaultProps = DefaultTSReactGistProps;
export default TSReactGist;
