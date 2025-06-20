const quizzes = [
  // HTML Questions
  {
    question: "What is the correct HTML element for the largest heading?",
    options: ["<heading>", "<h6>", "<h1>", "<head>"],
    answer: "<h1>",
  },
  {
    question: "Which HTML attribute specifies an alternate text for an image?",
    options: ["alt", "src", "title", "text"],
    answer: "alt",
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    options: ["<break>", "<br>", "<lb>", "<hr>"],
    answer: "<br>",
  },
  {
    question: "Which of these tags is used to create a numbered list?",
    options: ["<ul>", "<ol>", "<li>", "<dl>"],
    answer: "<ol>",
  },
  {
    question: "What is the correct way to comment in HTML?",
    options: [
      "// This is a comment",
      "<!-- This is a comment -->",
      "/* This is a comment */",
      "`This is a comment`",
    ],
    answer: "<!-- This is a comment -->",
  },
  {
    question: "What does the <a> tag do in HTML?",
    options: [
      "Defines a hyperlink",
      "Adds an image",
      "Creates a button",
      "Styles text",
    ],
    answer: "Defines a hyperlink",
  },
  {
    question: "Which of these elements is used for bold text?",
    options: ["<b>", "<bold>", "<strong>", "<em>"],
    answer: "<b>",
  },
  {
    question: "Which HTML element is used to specify a footer for a document?",
    options: ["<foot>", "<bottom>", "<footer>", "<end>"],
    answer: "<footer>",
  },
  {
    question: "Which attribute is used to open a link in a new tab?",
    options: ["rel='_blank'", "target='_new'", "target='_blank'", "rel='tab'"],
    answer: "target='_blank'",
  },
  {
    question: "What is the correct way to add a background color in HTML?",
    options: [
      "Use the style attribute",
      "Use the bgcolor attribute",
      "Use the background attribute",
      "All of the above",
    ],
    answer: "Use the style attribute",
  },
  // CSS Questions
  {
    question: "Which property is used to change the background color?",
    options: ["color", "bgcolor", "background-color", "background"],
    answer: "background-color",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "Which property is used to set the text color?",
    options: ["font-color", "color", "text-color", "color-text"],
    answer: "color",
  },
  {
    question: "Which CSS property controls the text size?",
    options: ["font-size", "text-size", "size", "font"],
    answer: "font-size",
  },
  {
    question: "How do you center a block element in CSS?",
    options: [
      "margin: auto;",
      "text-align: center;",
      "float: center;",
      "position: center;",
    ],
    answer: "margin: auto;",
  },
  {
    question: "Which property is used to change the font of an element?",
    options: ["font-family", "font-style", "font-weight", "font"],
    answer: "font-family",
  },
  {
    question: "What does the z-index property do?",
    options: [
      "Sets the stacking order of elements",
      "Sets the opacity of elements",
      "Controls zoom level",
      "Sets the index of an element",
    ],
    answer: "Sets the stacking order of elements",
  },
  {
    question: "Which of these is a CSS pseudo-class?",
    options: [":hover", ":class", "::before", "pseudo-class"],
    answer: ":hover",
  },
  {
    question: "Which property is used to make text bold in CSS?",
    options: ["font-weight", "font-bold", "bold", "font-style"],
    answer: "font-weight",
  },
  {
    question: "How do you apply styles to multiple selectors?",
    options: [
      "Separate selectors with commas",
      "Use the 'and' keyword",
      "Separate selectors with semicolons",
      "None of the above",
    ],
    answer: "Separate selectors with commas",
  },
  // JavaScript Questions
  {
    question: "What is the correct syntax for referring to an external script?",
    options: [
      "<script src='script.js'>",
      "<script href='script.js'>",
      "<script ref='script.js'>",
      "<script name='script.js'>",
    ],
    answer: "<script src='script.js'>",
  },
  {
    question: "Which method is used to write to the browser console?",
    options: [
      "console.write",
      "console.log",
      "console.output",
      "console.print",
    ],
    answer: "console.log",
  },
  {
    question: "How do you declare a JavaScript variable?",
    options: ["variable x", "let x", "declare x", "var x"],
    answer: "let x",
  },
  {
    question: "What is the correct way to write a JavaScript array?",
    options: [
      "let colors = (1:'red', 2:'blue')",
      "let colors = ['red', 'blue']",
      "let colors = {'red', 'blue'}",
      "let colors = (red, blue)",
    ],
    answer: "let colors = ['red', 'blue']",
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    options: ["Number", "Boolean", "String", "Character"],
    answer: "Character",
  },
  {
    question: "How can you add a comment in JavaScript?",
    options: [
      "// This is a comment",
      "/* This is a comment */",
      "`This is a comment`",
      "# This is a comment",
    ],
    answer: "// This is a comment",
  },
  {
    question: "Which method is used to remove the last element from an array?",
    options: ["pop()", "push()", "remove()", "slice()"],
    answer: "pop()",
  },
  {
    question: "What will `typeof null` return?",
    options: ["null", "undefined", "object", "string"],
    answer: "object",
  },
  {
    question: "How do you define a function in JavaScript?",
    options: [
      "function myFunction() {}",
      "def myFunction() {}",
      "func myFunction() {}",
      "myFunction() {}",
    ],
    answer: "function myFunction() {}",
  },
  {
    question: "What is the use of the 'this' keyword?",
    options: [
      "Refers to the current object",
      "Refers to the global object",
      "Refers to the parent object",
      "None of the above",
    ],
    answer: "Refers to the current object",
  }, // HTML Questions
  {
    question: "Which HTML element is used to define important text?",
    options: ["<strong>", "<b>", "<em>", "<mark>"],
    answer: "<strong>",
  },
  {
    question: "What is the purpose of the <meta> tag?",
    options: [
      "To include metadata about the document",
      "To link external stylesheets",
      "To define JavaScript functions",
      "To add images",
    ],
    answer: "To include metadata about the document",
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: ["style", "class", "id", "css"],
    answer: "style",
  },
  {
    question: "What does the <hr> tag represent?",
    options: [
      "A horizontal line",
      "A heading rule",
      "A hyperlink",
      "A highlighted text",
    ],
    answer: "A horizontal line",
  },
  {
    question: "Which HTML element is used to create a dropdown list?",
    options: ["<list>", "<select>", "<dropdown>", "<options>"],
    answer: "<select>",
  },
  {
    question: "How do you create a checkbox in HTML?",
    options: [
      '<input type="checkbox">',
      '<input type="check">',
      "<checkbox>",
      "<check>",
    ],
    answer: '<input type="checkbox">',
  },
  {
    question: "Which element is used to group block elements in HTML?",
    options: ["<div>", "<section>", "<span>", "<group>"],
    answer: "<div>",
  },
  {
    question: "What is the correct HTML for creating a hyperlink?",
    options: [
      '<a href="url">Link</a>',
      '<a url="url">Link</a>',
      '<link href="url">Link</link>',
      '<href url="url">Link</href>',
    ],
    answer: '<a href="url">Link</a>',
  },
  {
    question: "Which attribute is used to define the source of an iframe?",
    options: ["src", "href", "data", "link"],
    answer: "src",
  },
  {
    question: "What does the <caption> tag do in HTML?",
    options: [
      "Defines a title for a table",
      "Adds a subtitle to a page",
      "Styles an image",
      "Displays tooltips",
    ],
    answer: "Defines a title for a table",
  },
  // CSS Questions
  {
    question: "Which CSS property is used to change the font size?",
    options: ["font-size", "text-size", "size", "font"],
    answer: "font-size",
  },
  {
    question: "How do you select an element with a specific id in CSS?",
    options: ["#id", ".id", "id", ":id"],
    answer: "#id",
  },
  {
    question: "What is the default value of the position property in CSS?",
    options: ["static", "relative", "absolute", "fixed"],
    answer: "static",
  },
  {
    question: "Which property is used to change the width of a border?",
    options: ["border-width", "width", "border-style", "border-size"],
    answer: "border-width",
  },
  {
    question: "How do you make a list without bullets in CSS?",
    options: [
      "list-style: none;",
      "list-type: none;",
      "list-style: no-bullets;",
      "list-decoration: none;",
    ],
    answer: "list-style: none;",
  },
  {
    question: "Which CSS property is used to set the space between lines?",
    options: ["line-spacing", "line-height", "spacing", "line-width"],
    answer: "line-height",
  },
  {
    question: "What is the CSS property used to set the shadow of an element?",
    options: ["box-shadow", "shadow", "element-shadow", "drop-shadow"],
    answer: "box-shadow",
  },
  {
    question:
      "Which CSS unit is relative to the font-size of the root element?",
    options: ["rem", "em", "px", "%"],
    answer: "rem",
  },
  {
    question: "How do you apply a transition in CSS?",
    options: [
      "transition: property duration;",
      "transition: duration property;",
      "animate: property duration;",
      "transform: property duration;",
    ],
    answer: "transition: property duration;",
  },
  {
    question: "Which CSS property is used to control the overflow of content?",
    options: ["overflow", "clip", "hidden", "scroll"],
    answer: "overflow",
  },
  // JavaScript Questions
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: ["//", "/*", "#", "--"],
    answer: "//",
  },
  {
    question:
      "What is the correct way to check the type of a variable in JavaScript?",
    options: [
      "typeof variable",
      "typeOf(variable)",
      "getType(variable)",
      "type(variable)",
    ],
    answer: "typeof variable",
  },
  {
    question: "How do you call a function named 'myFunction' in JavaScript?",
    options: [
      "call myFunction",
      "myFunction()",
      "myFunction",
      "call myFunction()",
    ],
    answer: "myFunction()",
  },
  {
    question:
      "Which JavaScript method is used to round a number down to the nearest integer?",
    options: ["Math.floor()", "Math.ceil()", "Math.round()", "Math.trunc()"],
    answer: "Math.floor()",
  },
  {
    question:
      "Which object in JavaScript allows you to work with dates and times?",
    options: ["Date", "Time", "Calendar", "Clock"],
    answer: "Date",
  },
  {
    question: "What does the JavaScript method 'push()' do?",
    options: [
      "Adds an element to the end of an array",
      "Removes an element from the end of an array",
      "Adds an element to the start of an array",
      "Removes an element from the start of an array",
    ],
    answer: "Adds an element to the end of an array",
  },
  {
    question:
      "Which operator is used to compare both value and type in JavaScript?",
    options: ["==", "===", "=", "!="],
    answer: "===",
  },
  {
    question: "Which keyword is used to declare a constant in JavaScript?",
    options: ["let", "var", "const", "constant"],
    answer: "const",
  },
  {
    question: "What is the purpose of the 'return' statement in JavaScript?",
    options: [
      "Stops the function execution and returns a value",
      "Starts a new function",
      "Declares a new variable",
      "Ends a loop",
    ],
    answer: "Stops the function execution and returns a value",
  },
  {
    question:
      "Which JavaScript method is used to convert a string to uppercase?",
    options: ["toUpperCase()", "toUpper()", "toCaps()", "toUpperCaseText()"],
    answer: "toUpperCase()",
  },
];

