## <img height="30" title="AWS" src="https://raw.githubusercontent.com/github/explore/fbceb94436312b6dacde68d122a5b9c7d11f9524/topics/aws/aws.png" /> Koa GraphQL server deployed on AWS Lambda <img align="right" title="Maintenance Status" src="https://img.shields.io/badge/status-maintained-brightgreen.svg?style=flat-square" />
- <img width="40" title="Babel" src="https://raw.githubusercontent.com/babel/logo/master/babel.png" /> to enable the latest JavaScript ES6 language features and simplification of code with the class syntax
- <img width="40" title="Webpack" src="https://camo.githubusercontent.com/d18f4a7a64244f703efcb322bf298dcb4ca38856/68747470733a2f2f7765627061636b2e6a732e6f72672f6173736574732f69636f6e2d7371756172652d6269672e737667" /> Webpack to bundle only production dependencies to a single file, watch for changes and eliminate dead code
- <img width="40" title="AWS Sam Local" src="https://github.com/buildbreakdo/aws-sam-local/blob/develop/media/sam-local-banner.png" /> AWS Sam Local to emulate API Gateway locally so you can test your Lambda functions without deploying to AWS
- <img width="40" title="AWS Sam Local" src="https://github.com/buildbreakdo/jest/raw/master/website/static/img/jest-readme-headline.png" /> Jest to test and confirm code works during development and before deploying to production

## Installation
```
git@github.com:renanmav/koa-graphql-lambda.git
yarn
```

## Run Scripts

### Build
Use webpack to build/index.js:

`yarn graphql:build`

### Deploy
Build and update your Lambda function with the latest code:

`yarn workspace @aws-graphql/graphql aws`

#### License
MIT
