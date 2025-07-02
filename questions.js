const htmlQuestions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Home Tool Markup Language",
            "Hyperlink and Text Markup Language",
        ],
        correct: 0,
        explanation:
            "HTML stands for Hyper Text Markup Language, which is the standard markup language for creating web pages.",
    },
    {
        question: "Which HTML tag is used to define the largest heading?",
        options: ["<h6>", "<heading>", "<h1>", "<header>"],
        correct: 2,
        explanation: "The <h1> tag defines the largest heading in HTML, with <h6> being the smallest.",
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        options: ["<break>", "<br>", "<lb>", "<newline>"],
        correct: 1,
        explanation: "The <br> tag is used to insert a single line break in HTML.",
    },
    {
        question: "Which attribute is used to specify a unique identifier for an HTML element?",
        options: ["class", "name", "id", "key"],
        correct: 2,
        explanation: "The 'id' attribute specifies a unique identifier for an HTML element.",
    },
    {
        question: "What is the correct HTML for creating a hyperlink?",
        options: [
            '<a url="http://example.com">Example</a>',
            '<a href="http://example.com">Example</a>',
            '<a link="http://example.com">Example</a>',
            '<a src="http://example.com">Example</a>',
        ],
        correct: 1,
        explanation: "The 'href' attribute in the <a> tag specifies the URL of the page the link goes to.",
    },
    {
        question: "Which HTML element is used to specify a footer for a document or section?",
        options: ["<bottom>", "<section>", "<footer>", "<end>"],
        correct: 2,
        explanation:
            "The <footer> element represents a footer for its nearest sectioning content or sectioning root element.",
    },
    {
        question: "What is the correct HTML for making a checkbox?",
        options: ['<input type="check">', '<input type="checkbox">', "<checkbox>", "<check>"],
        correct: 1,
        explanation: "The correct syntax is <input type='checkbox'> to create a checkbox input.",
    },
    {
        question: "Which HTML attribute specifies an alternate text for an image?",
        options: ["title", "src", "alt", "longdesc"],
        correct: 2,
        explanation: "The 'alt' attribute provides alternative text for an image if it cannot be displayed.",
    },
    {
        question: "What is the correct HTML element for playing video files?",
        options: ["<movie>", "<video>", "<media>", "<film>"],
        correct: 1,
        explanation: "The <video> element is used to embed video content in HTML5.",
    },
    {
        question: "Which HTML element defines navigation links?",
        options: ["<navigate>", "<navigation>", "<nav>", "<menu>"],
        correct: 2,
        explanation: "The <nav> element defines a set of navigation links.",
    },
    {
        question: "What is the correct HTML for making a drop-down list?",
        options: ["<input type='dropdown'>", "<list>", "<select>", "<dropdown>"],
        correct: 2,
        explanation: "The <select> element is used to create a drop-down list.",
    },
    {
        question: "Which HTML element is used to display a scalar value within a range?",
        options: ["<gauge>", "<meter>", "<measure>", "<range>"],
        correct: 1,
        explanation: "The <meter> element represents a scalar value within a known range or a fractional value.",
    },
    {
        question: "What is the correct HTML for inserting an image?",
        options: [
            '<img href="image.gif" alt="MyImage">',
            '<img src="image.gif" alt="MyImage">',
            '<image src="image.gif" alt="MyImage">',
            '<img link="image.gif" alt="MyImage">',
        ],
        correct: 1,
        explanation: "The <img> tag uses the 'src' attribute to specify the path to the image.",
    },
    {
        question: "Which HTML element defines the title of a document?",
        options: ["<meta>", "<title>", "<head>", "<header>"],
        correct: 1,
        explanation: "The <title> element defines the title of the document shown in browser's title bar or tab.",
    },
    {
        question: "What is the correct HTML for making text bold?",
        options: ["<bold>", "<b>", "<strong>", "Both <b> and <strong>"],
        correct: 3,
        explanation: "Both <b> and <strong> can make text bold, though <strong> has semantic meaning for importance.",
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        options: ["class", "style", "styles", "font"],
        correct: 1,
        explanation: "The 'style' attribute is used to add inline CSS styles to HTML elements.",
    },
    {
        question: "What is the correct HTML element for the largest heading?",
        options: ["<head>", "<h6>", "<heading>", "<h1>"],
        correct: 3,
        explanation: "The <h1> element represents the highest level heading.",
    },
    {
        question: "Which HTML element is used to group related form elements?",
        options: ["<group>", "<fieldset>", "<form-group>", "<section>"],
        correct: 1,
        explanation: "The <fieldset> element is used to group related elements in a form.",
    },
    {
        question: "What is the correct HTML for creating a text input field?",
        options: ['<input type="textfield">', '<textinput type="text">', '<input type="text">', "<textfield>"],
        correct: 2,
        explanation: "The correct syntax is <input type='text'> to create a text input field.",
    },
    {
        question: "Which HTML element represents the main content of the document?",
        options: ["<content>", "<main>", "<primary>", "<body>"],
        correct: 1,
        explanation: "The <main> element represents the dominant content of the <body> of a document.",
    },
]

const cssQuestions = [
    {
        question: "What does CSS stand for?",
        options: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
        correct: 2,
        explanation: "CSS stands for Cascading Style Sheets, used for describing the presentation of HTML documents.",
    },
    {
        question: "Which CSS property is used to change the text color?",
        options: ["font-color", "text-color", "color", "foreground-color"],
        correct: 2,
        explanation: "The 'color' property sets the color of text content.",
    },
    {
        question: "How do you select an element with id 'header' in CSS?",
        options: [".header", "#header", "*header", "header"],
        correct: 1,
        explanation: "The # symbol is used to select elements by their ID in CSS.",
    },
    {
        question: "Which CSS property controls the text size?",
        options: ["font-style", "text-size", "font-size", "text-style"],
        correct: 2,
        explanation: "The 'font-size' property sets the size of the font.",
    },
    {
        question: "How do you make text bold in CSS?",
        options: ["font-weight: bold;", "text-style: bold;", "font-style: bold;", "text-weight: bold;"],
        correct: 0,
        explanation: "The 'font-weight: bold;' property makes text bold.",
    },
    {
        question: "Which CSS property is used to change the background color?",
        options: ["bgcolor", "background-color", "color", "bg-color"],
        correct: 1,
        explanation: "The 'background-color' property sets the background color of an element.",
    },
    {
        question: "How do you select all <p> elements in CSS?",
        options: [".p", "#p", "p", "*p"],
        correct: 2,
        explanation: "To select all elements of a specific type, use the element name directly.",
    },
    {
        question: "Which CSS property is used to create space around elements?",
        options: ["spacing", "margin", "padding", "border"],
        correct: 1,
        explanation: "The 'margin' property creates space around elements, outside of any defined borders.",
    },
    {
        question: "What is the correct CSS syntax for making all <h1> elements red?",
        options: ["h1 {color: red;}", "<h1 style='color: red;'>", "h1.color = red;", ".h1 {color: red;}"],
        correct: 0,
        explanation: "The correct syntax is 'h1 {color: red;}' to select all h1 elements and make them red.",
    },
    {
        question: "Which CSS property controls the space between lines of text?",
        options: ["line-spacing", "text-spacing", "line-height", "text-height"],
        correct: 2,
        explanation: "The 'line-height' property controls the space between lines of text.",
    },
    {
        question: "How do you make a list that lists items with squares?",
        options: ["list-style-type: square;", "list-type: square;", "list-style: square;", "list: square;"],
        correct: 0,
        explanation: "The 'list-style-type: square;' property creates square bullet points.",
    },
    {
        question: "Which CSS property is used to control the layout method of elements?",
        options: ["layout", "display", "position", "float"],
        correct: 1,
        explanation: "The 'display' property specifies the display behavior of an element.",
    },
    {
        question: "What is the default value of the position property?",
        options: ["relative", "absolute", "static", "fixed"],
        correct: 2,
        explanation: "The default value of the position property is 'static'.",
    },
    {
        question: "Which CSS property is used to make text italic?",
        options: ["font-style: italic;", "text-style: italic;", "font-italic: true;", "text-italic: yes;"],
        correct: 0,
        explanation: "The 'font-style: italic;' property makes text italic.",
    },
    {
        question: "How do you center a block element horizontally?",
        options: ["text-align: center;", "margin: 0 auto;", "align: center;", "center: true;"],
        correct: 1,
        explanation: "Using 'margin: 0 auto;' centers a block element horizontally.",
    },
    {
        question: "Which CSS property is used to create rounded corners?",
        options: ["corner-radius", "border-radius", "round-corner", "border-round"],
        correct: 1,
        explanation: "The 'border-radius' property creates rounded corners.",
    },
    {
        question: "What is the CSS Box Model?",
        options: [
            "Content, Padding, Border, Margin",
            "Content, Border, Padding, Margin",
            "Margin, Border, Padding, Content",
            "Padding, Content, Border, Margin",
        ],
        correct: 0,
        explanation: "The CSS Box Model consists of Content, Padding, Border, and Margin (from inside to outside).",
    },
    {
        question: "Which CSS property is used to control the transparency of an element?",
        options: ["transparency", "opacity", "alpha", "visibility"],
        correct: 1,
        explanation: "The 'opacity' property controls the transparency level of an element.",
    },
    {
        question: "How do you apply CSS to multiple selectors?",
        options: [
            "h1, h2, h3 {color: red;}",
            "h1 h2 h3 {color: red;}",
            "h1 + h2 + h3 {color: red;}",
            "h1 > h2 > h3 {color: red;}",
        ],
        correct: 0,
        explanation: "Use commas to separate multiple selectors: 'h1, h2, h3 {color: red;}'.",
    },
    {
        question: "Which CSS property is used to create a flexible layout?",
        options: ["flex", "flexbox", "display: flex;", "layout: flex;"],
        correct: 2,
        explanation: "The 'display: flex;' property creates a flexible layout container.",
    },
]

window.htmlQuestions = htmlQuestions
window.cssQuestions = cssQuestions
