# Welcome

First off, I would recommend viewing this in preview mode.
To view in preview mode, navigate to the explorer menu on the left,
then right click the .md file and click **Open preview**.

## HTML

HTML stands for Hyper Text Markup Language and it alone allows you to create the most simple form of a webpage.
As the name implies, HTML is a markup language. Markup languages are designed to format text in a document as well as
how they relate and interact with each other.

### Basics

HTML is instantiated using an *element* with an opening and most of the time, a closing *tag*.
*Tags* are instantiated with greater than and less than symbols like so:
 \<div> meaning that it is the most basic way of seperating segments of a page with no special properties applied.

All HTML documents must start with a <!DOCTYPE> declaration.
The declaration is not an HTML tag. It is "information" to the browser about what document type to expect.
We'll go into more detail on documents later. For now suffice to say ALL webpages are a type of document.

For the minimum requirements for a page, go to index.html eg.1

### For a more practical example, see index.html

## CSS

CSS stands for Cascading Style Sheet and allows you to change how the HTML will display on a webpage.

### Basics

There are 3 ways to instantiate CSS into an HTML document: Inline, Internal, and External.
Inline CSS means you are adding CSS directly to an HTML element via a property
Go to appEG.js eg.1 for an example

Internal means you are adding styles to properties or tags.
Go to appEG.js eg.2 for an example


External means you are referancing a seperate file to add styles to properties or tags.
see Style.css for an example
To use style is a CSS file you have to import the file using the \<link> tag.
see index.html for an example

### For a more practical example, see Style.css and index.html

## Javascript

Javascript is the first and only *Functional* type of language you will interact with in this tutorial.
Javascript instantiates its syntax much differently than the other two. It is similar to many other languages in that it uses programming logic via *Data Types*.
First thing we need to cover is the difference between *Data Types* and functions.
All types except *Object* define *Immutable* values represented directly at the lowest level of the language. We refer to values of these types as *Primitive Values* or *Primitive Data Types*.
Primitve values include: *Null, Undefined, Boolean, Number, BigInt, String, and Symbol*.
Sometimes, it can bedifficult to know what data type you are dealing with. This is where the *TypeOf* operator comes in. All primitive types, except null, can be tested by the typeof operator. typeof null returns "object", so one has to use *===* null to test for null.

## Definitions

- Data Types
: Data Type are pieces of information in functional languages whos type cannot be changed.***

- Numbers
: Numbers are defined as a number character - **1, 2, 3**

- Strings
: Any block of text that are enclosed by quotes, apostrophies or backticks, Strings can include any character and it's not considered code as long as it is enclosed by the afore mentioned - **"Hello World", 'Hello World', \`Hello World\`**.

- Variables
: A Variable is assigned properties and can be instantiated in three ways - **var, let, const**. var is the first iteration on variable instantiation in Javascript and are no longer used as it can create problems with *Scope* as it allows you to edit it's value anywhere in the code. let has strict rules when it lets you edit it's value. const never lets you edit it's value and as such it along with let are the most commonly used - **var x = 1, let x = 1, const x = 1**

- Arrays
: Arrays are a list of *Values* ordered by *Index* starting from 0. Arrays are enclosed with brackets [] and each *Value* is seperated by comma - **[1, HelloWorld, "Hello World"...]**

- Objects
: An Object instantiated similarly to variables but are is *Key:Value/Property* pairs. Objects are unique in that they technally exist as in memory as *Arrays*. Both *Arrays* and Objects can contain the other when they are it's called *Nesting* - **const xObject = {xValue}, const yObject = {yValue: yProperty}**

- Value
: A Value is a property that is assigned to various data types.

- Property
: Properties assign information to HTML tags and have various uses.
To see an example go to Examples.html html eg.2

- Key:Value/property pair

- Nesting

- Operator

- Functions

- Execution Context

- Scope

- If Statements

- Hyperlink

### For basics see appAbstracted.js

https://prod.liveshare.vsengsaas.visualstudio.com/join?0C575E9016AA8AFEA1A1D855F4874336ACD6
