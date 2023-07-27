# Secure Data
## About
Our project aims to provide a secure data storage solution by utilizing an innovative technique called Split Shield. With this technique, we can ensure the confidentiality and integrity of users' text data while storing it in a secure manner.

Split Shield works by dividing the user's text data into two random parts and storing each part separately in different databases. Before storage, the data undergoes a robust encryption process, which further enhances its security. By splitting and distributing the data, we create an additional layer of protection, making it extremely challenging for hackers to gain access to the complete information even if they manage to breach one of the databases.

### The key features of our secure data storage project include:

* Splitting Technique: The user's text data is randomly divided into two parts, ensuring that no single database holds complete information. This splitting mechanism enhances the security of the stored data by minimizing the risk associated with a single point of failure.

* Encryption: Prior to storage, the split data is encrypted using advanced encryption algorithms. This process transforms the data into an unreadable format, making it virtually impossible for unauthorized individuals to decipher the information without the corresponding decryption key.

* Distributed Storage: The encrypted data parts are stored in two different databases, which could be physically or geographically separated. This distributed approach further enhances security as an attacker would need to compromise both databases simultaneously to gain access to the complete data.

* Hacker Resistance: Even if a hacker manages to breach one of the databases, they will only have access to a partial encrypted dataset. As the two parts are meaningless without the other, the attacker's ability to extract meaningful information from the compromised database is severely limited.

* User-Friendly Interface: Our project provides a user-friendly interface for securely storing and retrieving data. Users can input their text data through a secure channel and retrieve it whenever needed, confident in the knowledge that their information is protected.

By implementing Split Shield, our project ensures that users' text data remains confidential and safe from unauthorized access. Its innovative approach to data storage significantly reduces the risk of data breaches and offers a robust solution for safeguarding sensitive information.

### Demo:
https://github.com/yogendradevil/Secure-Data/assets/81254268/86f15a74-6c8c-4de0-ad04-f2c331906fdb

## API
The project aims to develop a Spring Boot API that provides secure data encryption and decryption services. The API allows clients to encrypt sensitive information using the AES encryption algorithm and also provides functionality to decrypt the encrypted data.

Endpoint 1: [ec2-65-1-108-65.ap-south-1.compute.amazonaws.com:8080/process-string](url)

The /process-string endpoint of the Spring Boot API accepts a string of sensitive data and performs encryption using the AES encryption algorithm. It provides a secure way to protect sensitive information by converting it into an encrypted form.

![image](https://github.com/yogendradevil/Rest-API-for-split-data-encryption-and-decryption/assets/81254268/dd889e6f-98d0-46a0-8fd9-79e866bdcfdc)

Endpoint 2: [ec2-65-1-108-65.ap-south-1.compute.amazonaws.com:8080/process-two-strings](url)

The /process-two-strings endpoint of the Spring Boot API is designed to merge and encrypt two strings of sensitive data using the AES encryption algorithm. It provides a secure way to combine and protect multiple pieces of sensitive information into a single encrypted form.

![image](https://github.com/yogendradevil/Rest-API-for-split-data-encryption-and-decryption/assets/81254268/0d4fc2fc-15b4-4a70-ac29-6a9f7e8247e1)

live demo:

Endpoint 1: /process-string

![image](https://github.com/yogendradevil/Rest-API-for-split-data-encryption-and-decryption/assets/81254268/d497e014-fde6-4254-84ff-2aa899038955)

Endpoint 2: /process-two-strings

![image](https://github.com/yogendradevil/Rest-API-for-split-data-encryption-and-decryption/assets/81254268/44272666-3a85-49b9-bc13-3fa9f953f4ad)

