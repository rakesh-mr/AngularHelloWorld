# Angular Hello World Component

This is an Angular Component which is uploaded in [npmjs.com](https://www.npmjs.com/package/wfm-ng-hello-world). This will display title 'Hello World!', when when used in the angular v5 web applications.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Setup Angular Cli Project

```
ng new [project name]
```

### Installing

Install Angular Hello World Compoent


```
npm install wfm-ng-hello-world --save
```

import Hello World Module in root module

```
import { HelloWorldModule } from 'wfm-ng-hello-world';
```

In the module metadata, import the hello world module.

```
  imports: [
    HelloWorldModule
  ],
```
In the following components template, please use the following tag.

```
  <hello-world></hello-world>
```

## Deployment

Build the target application using following command and deploy live
```
ng build --prod
```

## Author

* **Rakesh M R** - [git home](https://github.com/rakesh-mr)


## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/rakesh-mr/AngularHelloWorld/blob/origin/license.md) file for details
