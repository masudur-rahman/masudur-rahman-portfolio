import { marked } from "marked";

export const renderMarkdown = (md: string | null | undefined) => {
  if (!md) {
    return "";
  }
  const rawHTML = marked.parse(md);
  // force all <a> to open in new tab
  return rawHTML.replace(/<a ([^>]+)>/g, '<a $1 target="_blank" rel="noopener noreferrer">');
};
