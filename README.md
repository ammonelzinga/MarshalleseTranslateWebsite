# first_repo
my first repo 

simon-login notes: 

This is probably the coolest part. I've been able to learn so much from the lecture with cookies and tokens! 

I will need to edit my html functions and css to include an interface for usernames and password. 

Will need to create another variable from the instance client from the MongoClient class for the user. 

A couple simple functions to get the email and token: 

function getUser(email) {
return userCollection.findOne({email: email)}; 
}
the findone function can take the 'email' typed out and find it from the database. 

We will need to have a createUser function that includes awaits, a bcrypt.hash (remember to download the bcrypt package). 

Just remember that insertOne can also automatically add new information. this is why we use it in the craetUser function. 

for index.js notes: 
This is where the cookie fun comes into play. 

The apirouter.post will be used to check for when someone is creating a new account. It needs to first check if there is an existing user. it uses res.status(409), which simply represents "conflict." Then simply call our database function by saying DB.createuser(req.body.email, req.body.password); 

We also need to now call setAuthoCookie(res, user.token); 
And then res.send({
id: user._id, 
}); 

Now for checking if a login attempt matches their username and password. We get to use the super fancy bcrypt package to do this since the passwords are encrypted. 

This is super important and I want to copy and paste it here, basically if the password matches up, then we can call the setAuthCookies function. 

This keeps the cookie safe and secure. 

apiRouter.post('/auth/login', async (req, res) => {
  const user = await DB.getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

Here's another function that I think I will need for my startup. I'm still trying to learn it so I want to paste it here as well. I do know that this makes the program more safe. 

// secureApiRouter verifies credentials for endpoints
var secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
  authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

All of this code comes into play when we use them in login.js 

An important one: 

if (response?.status === 200) {
    localStorage.setItem('userName', userName);
    window.location.href = 'play.html';
  } else {
    const modalEl = document.querySelector('#msgModal');
    modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
    const msgModal = new bootstrap.Modal(modalEl, {});
    msgModal.show();
  }
}

This will check to make sure that the cookies are all good and set and authorized (response?.status ===200). I love how we can't even look at the cookie, but we don't need to because the browser knows its good and send the 200. 

We create a logOrCreate function that will basically take the input from the username and password boxes. If they are good, then it'll go to play.html and the user will be logged in!

Remeber that we can take a look at atlas to see the usernames that have been added. This will help me as I create the startup so I can see how the data is stored. The third party resources and code packages really smooth the encrypting, data storing, and data transferring to be quite smooth. 

Simon DB notes:

Atlas login email is ammonelzinga@gmail.com
you can go to connect to get the hostname (it ends in .net). 

To update your user, password, and hostname credentials on the production environment you can use this code in the terminal or git bash: 

ssh -i ~/keys/production.pem ubuntu@myfunkychickens.click

sudo vi /etc/environment

export MONGOUSER=<yourmongodbusername>
export MONGOPASSWORD=<yourmongodbpassword>
export MONGOHOSTNAME=<yourmongodbhostname>
      
Remember the :w or :wq and the ZZ helps you get out of editing it. press i to insert. 
     
Okay to connect to the database we need to first make some functions in a file we can call database.js. We will call these functions in the index.js file which used express to globally store the scores. 
      
 The first thing you want to do is a safety feature so that only you who has the right credentials can make changes. It goes as follows: 
      
const {MongoClient} = require('mongodb');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

if (!userName) {
  throw Error('Database not configured. Set environment variables');
}

Next we can copy down the connection url from our atlas website. Remember to have the local IP address accessible. 
      
const url = `......'; 
      
We can now make an instance of the class MongoClient form that url variable. 
      
const client = new MongoClient(url); 

In addition we need to help the mongo db know where in our database we want to store the following information. We want it to be a in a database called 'simon.' so to do that we can use client.db('simon'). Further more we want to make a collection. A collection is similar to a list of tables to store information. So we can input our scores data in a collection. 
      
we do: 
      
const scoreCollection = client.db('simon').collection('score'); 

Now we can make some functions. Some functions to remember are insertone and toArray and find.  
      
insertone will allow us to update a document/table into our collections of 'score'. 
toArray helps the rest of our code process the data from the collection to display it because it's in array format. 
      
Also good to remember is the syntax for >. We do $gt: for >. (a quick google search will bring examples of further syntax). 
      
There are properties as well in mongo. We use 1) sort and 2) limit in this simon example. These help us when we use the find function because we can pass these properties in to help us filter what data we want to be in our array. 
      
At the end we need to use module.exports(pass in our functions) so that node.js knows which functions to be able to pull out from this file.  
 
      
      
      
Service notes: 

      The service code allows us to use express package and node.js which help us be able to store data into a server. This allows the scores to be seen by everybody and not just locally. I'm really excited to implement this in my start up project. 
      
      I really liked the steps given in the assignment so I wanted to list them here: 
     1)  Move all the previous deliverable code files (_.html, _.js, *.css, favicon.ico, and asserts) into a sub-directory named public. We will use the HTTP Node.js based service to host the front-end application files. This is done with the static file middleware that we will add our service index.js. 
      
      2) Within the project directory run npm init -y. This configures the directory to work with node.js.

      3) Modify or create .gitignore to ignore node_modules.
            in the .gitignore file you can literally just type node.modules/ 
      
      4)Install the Express package by running npm install express. This will write the Express package dependency in the package.json file and install all the Express code to the node_modules directory.
      
      This is nice because it does a lot of the hard work for you. I believe this is how the package.json and package-lock.json is generated. 
      
      5) Create a file named index.js in the root of the project. This is the entry point that node.js will call when you run your web service.
           I think my start up already has an index.js so I"ll need to remember to change that file name before I complete this first step in my start up. 
           
      6) Add the basic Express JavaScript code needed to host the application static content and the desired endpoints.
      
            Some of the generic code that I think will be applicable to my start up project is this: 
            
            const express = require('express');   (using express package) 
            const app = express();

            // The service port. In production the front-end code is statically hosted by the service on the same port.
            const port = process.argv.length > 2 ? process.argv[2] : 3000; (So this is checking to make sure the argv has a 2 index. I need to ask if the 2 index is code content in the whole folder? Or if it is directed to index.js or port 3000 or how that works. 

            // JSON body parsing using built-in middleware
            app.use(express.json());

            // Serve up the front-end static content hosting
            app.use(express.static('public'));  (The public folder contains all of our html and css and js code that we've done before, so I think the app.use is sort of like saying we want to have the folder 'public' in our app.) 

            // Router for service endpoints
            const apiRouter = express.Router(); 
            
            (I think this helps us access the server and the data stored there later on. I believe the '/api' will generally be             app.use(`/api`, apiRouter);            what you pass into app.use('/api', apiRouter)). 
            
            I'll have to edit my scores function just as we did with the simon. 
            
            // GetScores
            apiRouter.get('/scores', (_req, res) => {    
              res.send(scores); 
                  });  
            
            (So to access the scores already in saved we need to use apiRouter.get('/scores, (_req, res). I believe the req stands for request and the res stands for response. So when we type res.send(scores). I think the res is sort of like the return statement. So it's almost like saying return scores.)
            
                         

            // SubmitScore
            apiRouter.post('/score', (req, res) => { 
            scores = updateScores(req.body, scores); 
            res.send(scores);
             });
             
            (Here we can use apiRouter.post which will basically update the score. The updateScores function will give us the updated scores, and in later code this is called to display it on html. But I think the  res.send(scores) is sending it back to the server or port so that it is also updated globally) 
                        
          
            // Return the application's default page if the path is unknown  
            app.use((_req, res) => { 
             res.sendFile('index.html', { root: 'public' });
              });
            
            (This is super important because it basically gives the default page, for my startup I'd want that to be index.html as well.) 
           
                                  
            app.listen(port, () => {
            console.log(`Listening on port ${port}`);   
             });
            (Is this necessary? I need to ask the TA if we have to have the listening function)
                                        
      
      7) Modify the Simon application code to make service endpoint requests to our newly created HTTP service code.
            This is found in the scroes.js file. I'll write down what the new changes looks like: 
            async function loadScores() {
  const response = await fetch("/api/scores")
  const scores = await response.json()

  // Modify the DOM to display the scores
  
          So I believe the api is the place where everything is stored on the server. I need to learn more if this server is from Amazon Web Servies itself? The port 3000? Remember to ask the TA about that for clarification. 
          
          
     
Javascript notes:

You can only use onload element listener with certain elements of html with javascript. You can change the default bootstrap colors using $warning = 'orange', etc before inserting the bootstrap link (still need to attempt that successfully) 

You can use the value of an element as a toggle. 

You should only have one id per element, but you can access multiple elements at once using things getelementsbyclass feature. 

if the javascript file isn't working or has a syntax error the elements in relation to that javascript page won't show even if they are for different functions. 

You can use getelementbyid for quick changes to the values of elements. When I say value in this sense, I am meaning the innerHTML or innerTEXT. 



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
