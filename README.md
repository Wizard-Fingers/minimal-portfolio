**What is this?

This is a minimal template for the students in the Joy of Coding to take modify and use.

**How do I run it?

1) N.B. You will need to have node installed on your machine.

2) Clone the repo to your local machine. Or download the zip file and extract it to your local machine.
   
3) Open the project in your code editor.
   
4) Open a terminal and cd into the project directory.

5) Run the command 'npm install' to install the dependencies. Personally I prefer to use Yarn but you can use npm if you want seeing as you might be more familiar with that.
   
6) Run the command 'npm run dev' to start the development server. Or 'yarn dev' if you are using yarn.

**How do I set up the email?

1) Go to https://getform.io/ sign up for a free account and create a form once you have authenticated it and then click the '+ create' icon and you'll be given a unique url for your form.
   
2) Create a .env file in the root of the project and add the following line to it: VITE_FORM_URL=your-form-url make sure you don't have any spaces in the url and that your-form-url is wrapped in a string.
   
3) I added a gitignore file to the project so that the .env file is not pushed to github. If you want to push it to github you will need to remove the .env file from the .gitignore file.
   
4) You will see I already added the import.meta.env.VITE_APP_FORM_URL to the contact.js file. This is how you access the environment variable in the code and you should receive an email when you submit the form.

5) I added validation already and I added a message to indicate that the form was submitted successfully. You can change the message in the contact.js file. along with styling the form if you want.

**How do I put my CV on the download button?

1) Replace the cv.pdf file in the assets folder with your own cv.
   
2) When you replace the cv.pdf file make sure you update the import statement and change the necessary parts of the path to the file in the App.jsx file.

**How do I change the favicon?

- Replace the favicon.ico file in the public folder with your own favicon.

**How do I change the title of the page?

- Open the index.html file in the public folder and change the title tag to whatever you want.

**Please Note that the only way you can use images is if its in the Public folder. If you want to use images in the src folder you will need to import them and then use them as a component.