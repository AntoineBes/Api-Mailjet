# REST API 
## Rest API Using MongoDB and NodeJS
## Installation

NodeJS version 16.16.0.
npm version 8.11.0

Install the dependencies and devDependencies and start the server.

```sh
npm i
npm start
```

## Dependencies 

| Dependencies | version | package |
| ------ | ------ | ------ |
| cors | 2.8.5 | https://www.npmjs.com/package/cors |
| express | ^4.18.1 | https://www.npmjs.com/package/express |
| nodemon | ^2.0.19 | https://www.npmjs.com/package/nodemon |
| node-mailjet | ^5.1.1 | https://www.npmjs.com/package/node-mailjet |
## Accessibility

Find the server port or set new port on `server.js` file.
```sh
const PORT = process.env.PORT || 3307;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
```
```sh
http://localhost:3307
```

## License

MIT

