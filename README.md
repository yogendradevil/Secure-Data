# Secure Data
Our project aims to provide a secure data storage solution by utilizing an innovative technique called Split Shield. With this technique, we can ensure the confidentiality and integrity of users' text data while storing it in a secure manner.

Split Shield works by dividing the user's text data into two random parts and storing each part separately in different databases. Before storage, the data undergoes a robust encryption process, which further enhances its security. By splitting and distributing the data, we create an additional layer of protection, making it extremely challenging for hackers to gain access to the complete information even if they manage to breach one of the databases.

The key features of our secure data storage project include:

- Splitting Technique: The user's text data is randomly divided into two parts, ensuring that no single database holds complete information. This splitting mechanism enhances the security of the stored data by minimizing the risk associated with a single point of failure.

- Encryption: Prior to storage, the split data is encrypted using advanced encryption algorithms. This process transforms the data into an unreadable format, making it virtually impossible for unauthorized individuals to decipher the information without the corresponding decryption key.

- Distributed Storage: The encrypted data parts are stored in two different databases, which could be physically or geographically separated. This distributed approach further enhances security as an attacker would need to compromise both databases simultaneously to gain access to the complete data.

- Hacker Resistance: Even if a hacker manages to breach one of the databases, they will only have access to a partial encrypted dataset. As the two parts are meaningless without the other, the attacker's ability to extract meaningful information from the compromised database is severely limited.

- User-Friendly Interface: Our project provides a user-friendly interface for securely storing and retrieving data. Users can input their text data through a secure channel and retrieve it whenever needed, confident in the knowledge that their information is protected.

### By implementing Split Shield, our project ensures that users' text data remains confidential and safe from unauthorized access. Its innovative approach to data storage significantly reduces the risk of data breaches and offers a robust solution for safeguarding sensitive information.

[screen-capture.webm](https://github.com/yogendradevil/Secure-Data/assets/81254268/8cd2bc18-6bfa-42f0-ac4f-fb7102c9944f)

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
