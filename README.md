# first_repo
my first repo 

another change

This is super cool! I learned a lot! This is the first time I have pushed and pulled from my very own repository on github! I like how you can commit changes and push them and even request to push them on other peoples repos as well! 

START UP ELEVATOR PITCH/KEY FEATURES

Google translate knows over 120 languages. But you know what language it doesn't know? Marshallese!
Never fear, with this new web application, you'll be ready to fly off on a plane and enjoy your next bestest paradise dream vacation in the Marshall Islands. Who knows, maybe flexing your new marshallese vocab around the beach will get you a free meal or two. 

Key Features: 
Secure login over HTTPS
Ability to select flashcards and choose to review or move past them. 
Ability to use a basic translation feature for some common phrases/words
Ability to select the 'friends' page to see other users progress
The progress of the flashcards will be save with their account. 

![325044014_2159605524248028_3713388484677014945_n](https://user-images.githubusercontent.com/123523238/215225773-5a045152-cf2d-4abc-ac01-76427fd74635.jpg)

![325508842_2848545385275725_4877397579029870135_n](https://user-images.githubusercontent.com/123523238/215225785-6a714c9c-06b2-467d-8ab3-248f3c1e2f45.jpg)

![324763463_544165247680560_7013730422290124581_n](https://user-images.githubusercontent.com/123523238/215225790-713bf980-885d-4e40-b7ef-8d293a74b4b6.jpg)


AWS: IP Address: http://18.119.120.226/
Git Bash console instructions: ssh -i (then insert key pair file name located in downloads of user ammon) ubuntu@18.119.120.226

the new ip is 18.189.65.19

This code particularly the first one is important to connect to bootstrap. It might not be as applicalble once bootstrap is downloaded to my computer. 
href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
      crossorigin="anonymous"
      
In the main.css file you can edit the different selectors/sections (headers, footers, main, body, etc) and then in the html files, you can connect to bootstrap buttons and such using class "". 

Remember to get the up to date bootstrap links, and use the proper ones to get the right features. Make sure to have an index.html to allow for the deployfile to work properly. 


HTML:

Attributes: 
<p id="hello" class="greeting">Hello world</p>

svg	Scalable vector graphic content
iframe	Inline frame of another HTML page

&	&amp;
<	&lt;
>	&gt;
"	&quot;
'	&apos;
😀	&#128512;


form	Input container and submission	<form action="form.html" method="post">
fieldset	Labeled input grouping	<fieldset> ... </fieldset>
input	Multiple types of user input	<input type="" />
select	Selection dropdown	<select><option>1</option></select>
optgroup	Grouped selection dropdown	<optgroup><option>1</option></optgroup>
option	Selection option	<option selected>option2</option>
textarea	Multiline text input	<textarea></textarea>
label	Individual input label	<label for="range">Range: </label>
output	Output of input	<output for="range">0</output>
meter	Display value with a known range	<meter min="0" max="100" value="50"></meter>
      
 radio	Exclusive selection
      
name	The name of the input. This is submitted as the name of the input if used in a form
disabled	Disables the ability for the user to interact with the input
value	The initial value of the input
required	Signifies that a value is required in order to be valid
      
@media (max-height: 700px) {
  header {
    display: none;
  }
  footer {
    display: none;
  }
      
 Null	The type of a variable that has not been assigned a value.
Undefined	The type of a variable that has not been defined.
    
 Object	A collection of properties represented by name value pairs. Values can be of any type.	{a:3, b:'fish'}
  
 JSON	A lightweight data-interchange format used to share information across programs.	{"a":3, "b":"fish"}
 
 2 + '3';
// OUTPUT: '23'
2 * '3';
// OUTPUT: 6
[2] + [3];
// OUTPUT: '23'
true + null;
// OUTPUT: 1
true + undefined;
// OUTPUT: NaN
      
      
const a = [1, 2, 3, 4];

// standard function syntax
a.sort(function (v1, v2) {
  return v1 - v2;
});

// arrow function syntax
a.sort((v1, v2) => v1 - v2);
      
function makeClosure(a) {
  a = 'a2';
  const b = 'b2';
  return () => [a, b];
}

const a = 'a';
const b = 'b';

const closure = makeClosure(a);
      
console.log(closure());
// OUTPUT: ['a2', 'b2']

console.log(a, b);
// OUTPUT: 'a' 'b'

some	Run a function to test if any items match	a.some(i => 1 < 1)
                                                                  
values	Creates an iterator for use with a for of loop	for (i of a.values()) {...}
                                                                  
entries	Returns an array of key value pairs
keys	Returns an array of keys
values	Returns an array of values
                                                                  
const obj = {
  a: 3,
  b: 'fish',
};

console.log(Object.entries(obj));
// OUTPUT: [['a', 3], ['b', 'fish']]
console.log(Object.keys(obj));
// OUTPUT: ['a', 'b']
console.log(Object.values(obj));
// OUTPUT: [3, 'fish']
                                                                  
function Person(name) {
  return {
    name: name,
    log: function () {
      console.log('My name is ' + this.name);
    },
  };
}

const p = new Person('Eich');
p.log();
// OUTPUT: My name is Eich    
                                                                  
Any function that returns an object is considered a constructor and can be invoked with the new operator.
                                                                  
class Person {
  constructor(name) {
    this.name = name;
  }

  log() {
    console.log('My name is ' + this.name);
  }
}

const p = new Person('Eich');
p.log();
// OUTPUT: My name is Eich
You can make properties and functions of classes private by prefixing them with a #.
                                                                  
                                                                  
class Employee extends Person {
  constructor(name, position) {
    super(name);
    this.position = position;
  }

  print() {
    return super.print() + '. I am a ' + this.position;
  }
}

JSON
                                                                  
string	"crockford"
number	42
boolean	true
array	[null,42,"crockford"]
object	{"a":1,"b":"crockford"}
null	null
                                                                  
 {
  "class": {
    "title": "web programming",
    "description": "Amazing"
  },
  "enrollment": ["Marco", "Jana", "فَاطِمَة"],
  "start": "2025-02-01",
  "end": null
}
 
JSON is always encoded with UTF-8. This allows for the representation of global data.

Converting to JavaScript
You can convert JSON to, and from, JavaScript using the JSON.parse and JSON.stringify functions.

const obj = { a: 2, b: 'crockford', c: undefined };
const json = JSON.stringify(obj);
const objFromJson = JSON.parse(json);

console.log(obj, json, objFromJson);

// OUTPUT:
// {a: 2, b: 'crockford', c: undefined}
// {"a":2, "b":"crockford"}
// {a: 2, b: 'crockford'}
Note that in this example, JSON cannot represent the JavaScript undefined object and so it gets dropped when converting from JavaScript to JSON.
                                                                  
  
 REGULAR EXPRESSIONS
                                                                  
 const objRegex = new RegExp('ab*', 'i');
const literalRegex = /ab*/i;
The string class has several functions that accept regular expressions. This includes match, replace, search, and split. For a quick test to see if there is a match you can use the regular expression object's test function.

const petRegex = /(dog)|(cat)|(bird)/gim;
const text = 'Both cats and dogs are pets, but not rocks.';

text.match(petRegex);
// RETURNS: ['cat', 'dog']

text.replace(petRegex, 'animal');
// RETURNS: Both animals and animals are pets, but not rocks.

petRegex.test(text);
// RETURNS: true
      
REST
function hasNumber(test, ...numbers) {
  return numbers.some((i) => i === test);
}

hasNumber(2, 1, 2, 3);
// RETURNS: true
      
SPREAD
function person(firstName, lastName) {
  return { first: firstName, last: lastName };
}

const p = person(...['Ryan', 'Dahl']);
console.log(p);
// OUTPUT: {first: 'Ryan', last: 'Dahl'}      
      
DESTRUCTURING
      
const a = [1, 2, 4, 5];

// destructure the first two items from a, into the new variables b and c
const [b, c] = a;

console.log(b, c);
// OUTPUT: 1, 2
      
const [b, c, ...others] = a;

console.log(b, c, others);
// OUTPUT: 1, 2, [4,5]
      
const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };

const { a, c } = o;

console.log(a, c);
// OUTPUT 1, ['fish', 'cats']
      
const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };

const { a: count, b: type } = o;

console.log(count, type);
// OUTPUT 1, animals      
      
const { a, b = 22 } = {};
const [c = 44] = [];

console.log(a, b, c);
// OUTPUT: undefined, 22, 44                                                                  
                                                                  
 EXCEPTIONS
      
function connectDatabase() {
  throw new Error('connection error');
}

try {
  connectDatabase();
  console.log('never executed');
} catch (err) {
  console.log(err);
} finally {
  console.log('always executed');
}

// OUTPUT: Error: connection error
//         always executed   
      
      
DOM
      
function displayElement(el) {
  console.log(el.tagName);
  for (const child of el.children) {
    displayElement(child);
  }
}

displayElement(document); 
      
      
const listElements = document.querySelectorAll('p');
for (const el of listElements) {
  console.log(el.textContent);
}
      
      
 function insertChild(parentSelector, text) {
  const newChild = document.createElement('div');
  newChild.textContent = text;

  const parentElement = document.querySelector(parentSelector);
  parentElement.appendChild(newChild);
}

insertChild('#courses', 'new course');
      
      
const submitDataEl = document.querySelector('#submitData');
submitDataEl.addEventListener('click', function (event) {
  console.log(event.type);
});
      
      
<button onclick='alert("clicked")'>click me</button>      
      
promises
      
const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.1) {
      resolve(Math.random() > 0.5 ? 'heads' : 'tails');
    } else {
      reject('fell off table');
    }
  }, 10000);
});
      
coinToss
  .then((result) => console.log(`Coin toss result: ${result}`))
  .catch((err) => console.log(`Error: ${err}`))
  .finally(() => console.log('Toss completed'));

// OUTPUT:
//    Coin toss result: tails
//    Toss completed      
      
async function cow() {
  return new Promise((resolve) => {
    resolve('moo');
  });
}
console.log(cow());
// OUTPUT: Promise {<pending>}
      
      
console.log(cow());
// OUTPUT: Promise {<pending>}

console.log(await cow());
// OUTPUT: moo 
      
      
chmod +x deploy.sh (console command that makes script executable) 
      
sudo - Execute a command as a super user (admin)
ssh - Create a secure shell on a remote computer
scp - Securely copy files to a remote computer
      
ls - List files      
