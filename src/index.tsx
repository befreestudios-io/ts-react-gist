import * as React from "react";

export type TS_REACT_GIST = {
  url: string;
  filename?: string;
};

const DefaultTSReactGistProps = {
  filename: undefined,
};

const TSReactGist: React.FC<TS_REACT_GIST> = ({
  url,
  filename = DefaultTSReactGistProps.filename,
}) => {
  const iframeNode = React.createRef<React.LegacyRef<HTMLIFrameElement>>();

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
    const iframe: React.LegacyRef<HTMLIFrameElement> | any = iframeNode.current;
    let doc = iframe.document;

    if (iframe.contentDocument) doc = iframe.contentDocument;
    else if (iframe.contentWindow) doc = iframe.contentWindow.document;

    const gistLink = buildUrl();
    const gistScript = `<script type="text/javascript" src="${gistLink}"></script>`;
    const styles = "<style>*{font-size:12px;}</style>";
    const elementId = filename ? `gist-${url}-${filename}` : `gist-${url}`;
    const resizeScript = `onload="parent.document.getElementById('${elementId}').style.height=document.body.scrollHeight + 'px'"`;
    const iframeHtml = `<html><head><base target="_parent">${styles}</head><body ${resizeScript}>${gistScript}</body></html>`;

    doc.open();
    doc.writeln(iframeHtml);
    doc.close();
  };

  React.useEffect(() => {
    updateIframeContent();
  });

  return (
    <iframe
      title={filename ? `gist-${url}-${filename}` : `gist-${url}`}
      ref={iframeNode as any}
      width="100%"
      frameBorder={0}
      id={filename ? `gist-${url}-${filename}` : `gist-${url}`}
    />
  );
};

TSReactGist.defaultProps = DefaultTSReactGistProps;
export default TSReactGist;
