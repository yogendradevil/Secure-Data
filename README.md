# Secure Data


The "Secure Data" project is a web application designed to provide secure data storage and retrieval. It utilizes various technologies and frameworks such as Node.js, Express.js, MongoDB Atlas, and HTML/CSS.

The main features of the project include:

- User Signup: Users can sign up for an account by providing their name, email, and password. The user data is stored securely in the MongoDB Atlas database using Mongoose.

- User Login: Registered users can log in to their accounts using their email and password. The login process verifies the user's credentials against the stored data in the database.

- Data Storage: Authenticated users can store sensitive data securely. The data is encrypted before being stored in the database to ensure confidentiality.

- Data Retrieval: Users can retrieve their stored data by providing the necessary authentication. The application decrypts the stored data and presents it to the user.

- Error Handling: The application handles errors during signup, login, data storage, and retrieval, providing appropriate error messages to the users.

- User Interface: The project includes HTML/CSS templates for the user interface, allowing users to interact with the application easily.

### The project utilizes RESTful API endpoints for handling user requests and integrating with external services as needed.

---
## Requirements

For development, you will only need Node.js and a node global package installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###

## Install

    $ git clone https://github.com/yogendradevil/Secure-Data
    $ cd Secure-Data
    $ nmp i


## Running the project

    $ nodemon app.js
