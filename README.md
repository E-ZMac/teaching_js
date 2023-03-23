# Welcome
First off, I would recommend viewing this in preview mode.
To view in preview mode, right clock the .md file and click **Open preview**.

## HTML
HTML stands for Hyper Text Markup Language and it alone allows you to create the most simple form of a webpage.

### Basics
HTML is instantiated using an *element* with an opening *tag* <> and closing tag </>.
This element has the same tag as <div></div> meaning that it is the most basic way of seperating blocks of code with no special properties applied.

The simplist way of setting up a webpage looks like this.
<!DOCTYPE html>
<html>
    <div>
    </div>
</html>

All HTML documents must start with a <!DOCTYPE> declaration.
The declaration is not an HTML tag. It is an "information" to the browser about what document type to expect. We'll go into more detail on documents later. For now suffice to say ALL webpages are a type of document.

## CSS
CSS stands for Cascading Style Sheet and allows you to change how the HTML will display on a webpage.

### Basics
There are 3 ways to instantiate CSS into an HTML document: Inline, Internal, and External.
Inline CSS means you are adding CSS directly to an HTML element via a property
Here's and example; <h1 style="color: blue">A Blue Heading</h1>

Interanl means you are adding styles to properties or tags.
Here's and example; 
 <!DOCTYPE html>
<html>
    <head>
        <style>
            body {background-color: powderblue;}
            h1   {color: blue;}
            p    {color: red;}
        </style>
    </head>
    <body>

    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>

    </body>
</html> 

External means you are referancing a seperate file to add styles to properties or tags.
see Style.css for an example
To use style is a CSS file you have to import the file using the <link> tag.
see index.html for an example
## Javascript
Javascript is the first and only *functional* type language you will interact with in this tutorial.
Javascript instantiates its syntax much differently than the other two. It is similar to many other languages in that it uses programming logic via *functions*.
First thing we need to cover is the difference between *data types* and functions.
All types except *Object* define *immutable* values represented directly at the lowest level of the language. We refer to values of these types as *primitive values* or *primitive data types*.
Primitve values include *null, undefined, boolean, number, bigint, string, and symbol*.
Sometimes, it can bedifficult to know what data type you are dealing. This is where the *typeof* operator comes in. All primitive types, except null, can be tested by the typeof operator. typeof null returns "object", so one has to use === null to test for null.

### Basics

https://prod.liveshare.vsengsaas.visualstudio.com/join?0C575E9016AA8AFEA1A1D855F4874336ACD6
