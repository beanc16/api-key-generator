# @beanc16/api-key-generator

Makes api key handling simpler.



## Table of Contents
- [@beanc16/api-key-generator](#beanc16api-key-generator)
  - [Table of Contents](#table-of-contents)
  - [Install](#install)
  - [Usage](#usage)
    - [Get an API key](#get-an-api-key)
    - [Validate API key](#validate-api-key)
  - [License](#license)


## Install
This is a [Node.js](https://nodejs.org/en/) module available through the github registry.

```bash
$ npm install @beanc16/api-key-generator
```



## Usage

### Get an API key

```js
const { ApiKeyGenerator } = require("@beanc16/api-key-generator");

const expirationTimeInSeconds = 31_536_000; // 31,536,000 seconds (1 year)
const apiKey = ApiKeyGenerator.get(expirationTime);
```

### Validate API key

```js
const { ApiKeyGenerator } = require("@beanc16/api-key-generator");

if(!ApiKeyGenerator.isValid("someApiKey"))
{
  throw new Error("Api key is invalid");
}
```



## License
[MIT](https://choosealicense.com/licenses/mit/)
