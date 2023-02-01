# projeto-DMGuide

Um projeto typescript criado para gerenciar jogos de RPG.
A Typescript designed project to manage RPG games.

<p align="center">
  <img height="150" src="https://i.pinimg.com/originals/ba/81/7d/ba817d7865a92d9233a197ca35156517.png">
</p>
<h1 align="center">
  DMGuide
</h1>
<div align="center">

  <h3>Built With</h3>

  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" height="30px"/>
  <!-- Badges source: https://dev.to/envoy_/150-badges-for-github-pnk -->
</div>

<br/>

# Description//Descrição

DMGuide é feito para ajudar mestres a gerenciar seus próprios jogos de RPG e melhorá-los.

DMGuides is made to help DMs manage their RPG games and improve it.

</br>

## Features

- Create your games
- Create characters to your story
- Save images and musics
- Create and describe locations

</br>

<!-- ## API Reference

### Get card balance

```http
GET /card/balance/:cardId
```

#### Request:

| Params   | Type      | Description           |
| :------- | :-------- | :-------------------- |
| `cardId` | `integer` | **Required**. card Id |

#

### Create a card

```http
POST /card/create
```

#### Request:

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `x-api-key` | `string` | **Required**. api key |

####

| Body         | Type      | Description                        |
| :----------- | :-------- | :--------------------------------- |
| `employeeId` | `integer` | **Required**. user Id              |
| `type`       | `string`  | **Required**. type of card benefit |

`Valid types: [groceries, restaurant, transport, education, health]`

</br>

#### Response:

```json
{
  "number": "1111 1111 1111 1111",
  "name": "NAME N NAME",
  "CVC": "111",
  "expiration": "01/27",
  "type": "card type"
}
```

`number has no defined format`

#

### Activate a card

```http
PUT /card/activate/:cardId
```

#### Request:

| Params   | Type      | Description           |
| :------- | :-------- | :-------------------- |
| `cardId` | `integer` | **Required**. card Id |

####

| Body           | Type     | Description                 |
| :------------- | :------- | :-------------------------- |
| `securityCode` | `string` | **Required**. card cvv      |
| `password`     | `string` | **Required**. card password |

`Password length: 4`

`Password pattern: only numbers`

`Cvc max length: 3`

#

### Block a card

```http
PUT /card/block/:cardId
```

#### Request:

| Params   | Type      | Description           |
| :------- | :-------- | :-------------------- |
| `cardId` | `integer` | **Required**. card Id |

####

| Body       | Type     | Description                 |
| :--------- | :------- | :-------------------------- |
| `password` | `string` | **Required**. card password |

#

### Unlock a card

```http
PUT /card/unlock/:cardId
```

#### Request:

| Params   | Type      | Description           |
| :------- | :-------- | :-------------------- |
| `cardId` | `integer` | **Required**. card Id |

| Body       | Type     | Description                 |
| :--------- | :------- | :-------------------------- |
| `password` | `string` | **Required**. card password |

#

### Recharge a card

```http
POST /card/recharge/:cardId
```

#### Request:

| Headers     | Type     | Description           |
| :---------- | :------- | :-------------------- |
| `x-api-key` | `string` | **Required**. api key |

####

| Params   | Type      | Description           |
| :------- | :-------- | :-------------------- |
| `cardId` | `integer` | **Required**. card Id |

####

| Body     | Type      | Description                   |
| :------- | :-------- | :---------------------------- |
| `amount` | `integer` | **Required**. recharge amount |

#

### Card payments

```http
POST /card/payment/:cardId/:businessId
```

#### Request:

| Params       | Type      | Description               |
| :----------- | :-------- | :------------------------ |
| `cardId`     | `integer` | **Required**. card Id     |
| `businessId` | `integer` | **Required**. business Id |

####

| Body       | Type      | Description                  |
| :--------- | :-------- | :--------------------------- |
| `password` | `string`  | **Required**. card password  |
| `amount`   | `integer` | **Required**. payment amount |

#

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL = postgres://UserName:Password@Hostname:5432/DatabaseName`

`PORT = number #recommended:5000`

`CRYPTR_SECRET_KEY = any string`

</br>

## Run Locally

Clone the project

```bash
  git clone https://github.com/tutuezin/projeto18-valex
```

Go to the project directory

```bash
  cd projeto18-valex/
```

Install dependencies

```bash
  npm install
```

Create database

```bash
  cd database
```

```bash
  bash ./create-database
```

```bash
  cd ../
```

Start the server

```bash
  npm start
``` -->

</br>

## Lessons Learned

Por enquanto muita coisa.

</br>

## Acknowledgements

- [Awesome Badges](https://github.com/Envoy-VC/awesome-badges)

</br>

## Authors

- Rogério Alves is a junior full stack developer and student of Information Systems at UFRPE and Driven Education.
  <br/>

#
