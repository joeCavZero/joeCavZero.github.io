const script = document.currentScript;
const pageTitle = script.getAttribute('page-title') || 'No Title';

const head = `
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{title}}</title>
    <link rel="stylesheet" href="public/styles/main.css">
    <link rel="stylesheet" href="public/styles/header.css">
</head>
`.replace('{{title}}', pageTitle);

const header = `
<header>
    <a href="/"><h1>JoeCavZero</h1></a>
    <nav>
        <a href="/index">Home</a>
        <a href="/projects">Projects</a>
        <a href="/posts">Posts</a>
        <a href="/about">About</a>
    </nav>
</header>
`;


function buildPage() {
    document.head.innerHTML = head;
    document.body.innerHTML = header;
}

buildPage();