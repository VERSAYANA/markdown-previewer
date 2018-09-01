const input = `# Markdown Previewer 
----
## What is Markdown?

![markdownlogo](https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg)

see [Wikipedia](http://en.wikipedia.org/wiki/Markdown)

> Markdown is a lightweight markup language, originally created by John Gruber and Aaron Swartz allowing people "to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid XHTML (or HTML)".

----

## Markdown Quick Reference
# headers

*emphasis*

**strong**

~~crossing text~~

* list

\`<p>Inline Code</p>\`

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

[links](http://wikipedia.org)

>block quote
`;

export default input;
