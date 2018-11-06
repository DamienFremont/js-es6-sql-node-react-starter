/!\ WORK IN PROGRESS /!\
========================

js-sql-node-react
=========================

This technical stack is not the state-of-the-art, but a stable one (no need to wory for 3-5 years). It's usefull for long-term support apps, like Business or IT Intranet webapps.

![alt text](docs/README-tech-stack.png)

![alt text](docs/README-tech-architecture.png)

![alt text](docs/README-screenshot.png)

# Table of Contents
- [Introduction](#js-sql-node-react)
- [Stack](#stack)
- [Usage](#usage)
- [Features](#features)
- [References](#references)

---

# Stack

## Project view

|   Area   |                Product |                 Plugins or Impl |
|:--------:|-----------------------:|--------------------------------:|
| Language |             JavaScript |                                 |
|    UI    |              Bootstrap |                          JQuery |
|   App    |                ReactJS | react-router, react-intl, redux |
|   API    | HTTP-client, ExpressJS |               Swagger (OpenAPI) |
|   Data   |         Sequelize, SQL |              SQLite, PostGreSQL |
|   Secu   |               Passport |                                 |
|   Env    |                 dotenv |                                 |

## Stack view

|      Layer       |     Product |                 Plugins or Impl |
|:----------------:|------------:|--------------------------------:|
| Client (browser) |             |                                 |
|                  |   Bootstrap |                          JQuery |
|                  |     ReactJS | react-router, react-intl, redux |
|                  | HTTP-client |               Swagger (OpenAPI) |
|                  |    Passport |                                 |
| Server (NodeJS)  |             |                                 |
|                  |   ExpressJS |               Swagger (OpenAPI) |
|                  |    Passport |                                 |
|                  |   Sequelize |                                 |
|                  |      dotenv |                                 |
|  Database (dev)  |             |                                 |
|                  |      SQLite |                             SQL |
| Database (prod)  |             |                                 |
|                  |  PostGreSQL |                             SQL |

---

# Usage

Get
```
git clone https://github.com/DamienFremont/js-sql-node-react-starter.git
cd js-sql-node-react-starter
```

Execute DEV

```
npm install -g create-react-app
npm install

npm run watch
```

Execute PROD
  - linux & mac: `export NODE_ENV=production`
  - windows: `set NODE_ENV=production`
  - win powershell: `$env:NODE_ENV = "production"`
```
npm install
npm run heroku-postbuild

npm start
```

Use it
  - Go to [http://localhost:3000](http://localhost:3000)
  - Login with 'user', 'superuser' or 'admin' (login=password).

---

# Features

A list of available features divided into tech area. You'll find other posts about this starter here (WORK IN PROGRESS).

Legend
  - :x:️ - Fully implemented as intended.
  - :warning: - Partially implemented, somewhat broken or simply still not mature enough.
  - :x: - Not implemented yet or currently unusable.
  - :no_entry: ️ - Will not be implemented (see note).
  - :grey_question: - Not verified or tested.

## Table of Contents
  - [Packaging](#packaging)
  - [App](#app)
  - [Form](#form)
  - [Data-Table](#data-table)
  - [Security](#security)
  - [Workflow](#workflow)

## Packaging

![alt text](docs/README-feature-packaging.png)

|     Feature      |              State |         Note |
|:----------------:|-------------------:|-------------:|
|    build-dev     | :heavy_check_mark: |              |
|    build-prod    | :heavy_check_mark: |              |
|     conf-env     | :heavy_check_mark: | NODE-ENV=... |
|    conf-file     |                :x: |       dotenv |
| conf-placeholder | :heavy_check_mark: |       dotenv |
|      banner      | :heavy_check_mark: |   banner.txt |
|      logger      | :heavy_check_mark: | level in env |

## App

![alt text](docs/README-feature-app.png)

|         Feature         |              State |                       Note |
|:-----------------------:|-------------------:|---------------------------:|
|    project-structure    | :heavy_check_mark: | components, pages, layouts |
|  rendering-client-side  | :heavy_check_mark: |                        SPA |
|  rendering-server-side  |         :no_entry: |                        SSR |
| rendering-universal-app |         :no_entry: |                 Isomorphic |
|      local-message      | :heavy_check_mark: |                       JSON |
|    local-lang-detect    | :heavy_check_mark: |                    Browser |
|    local-lang-change    | :heavy_check_mark: |                            |
|          icons          | :heavy_check_mark: |                FontAwesome |
|       layout-grid       | :heavy_check_mark: |                            |
|      layout-navbar      | :heavy_check_mark: |                            |
|      layout-routes      | :heavy_check_mark: |                            |
|       layout-help       | :heavy_check_mark: |          general and pages |
|       layout-urls       | :heavy_check_mark: |             SSR, CSR perfs |

## Accessibility

|      Feature      |              State | Note |
|:-----------------:|-------------------:|-----:|
| access-breadcrumb | :heavy_check_mark: |      |
|    access-size    |                :x: |   em |
| access-wcag-aria  |                :x: |      |
|  access-offline   |                :x: |      |

## Security

|    Feature    | State |          Note |
|:-------------:|------:|--------------:|
|  auth-local   |   :x: |     HTML form |
|  auth-openid  |   :x: |        OpenID |
|    auth-ad    |   :x: |          SAML |
|   secu-role   |   :x: |               |
|  secu-right   |   :x: |               |
|   secu-page   |   :x: |               |
|  secu-routes  |   :x: |               |
| user-settings |   :x: | local, remote |
|  user-profil  |   :x: |        remote |

## API

|      Feature       |              State |    Note |
|:------------------:|-------------------:|--------:|
|     api-client     |                :x: |         |
|     api-server     | :heavy_check_mark: | Express |
|    api-swagger     |                :x: | OpenAPI |
|    api-version     |                :x: |         |
| api-private-public |                :x: |         |

## Service

|        Feature         | State |               Note |
|:----------------------:|------:|-------------------:|
|     service-store      |   :x: |                    |
|     server-authent     |   :x: |                    |
|    server-security     |   :x: |                    |
| server-data-validation |   :x: |                AJV |
|  server-local-message  |   :x: | server-side locale |

## Data

|      Feature      |              State |                  Note |
|:-----------------:|-------------------:|----------------------:|
|   file-download   |                :x: |                       |
|    file-upload    |                :x: | browse, drop, preview |
|    data-schema    |                :x: |                       |
|   data-dataset    |                :x: |                       |
|   data-orm-crud   | :heavy_check_mark: |                       |
| data-orm-paginate | :heavy_check_mark: |                       |
|  data-orm-search  | :heavy_check_mark: |                       |

## Entity

|    Feature     |              State |                                           Note |
|:--------------:|-------------------:|-----------------------------------------------:|
|  data-entity   | :heavy_check_mark: | entity, value-object, id, dates, deleted-by-at |
| data-reference |                :x: |                        reference (name, label) |
|  data-history  |                :x: |                        version, history, event |
|  data-domain   |                :x: |             UUID, join models by only one UUID |

## Workflow

|     Feature     | State | Note |
|:---------------:|------:|-----:|
| workflow-client |   :x: |      |
| workflow-server |   :x: |      |

## Form

|     Feature     | State | Note |
|:---------------:|------:|-----:|
|  form-edition   |   :x: |      |
|  form-toolbar   |   :x: |      |
|  form-exemple   |   :x: |      |
| form-validation |   :x: |      |
|   date-picker   |   :x: |      |
| data-validation |   :x: |  AJV |

## Data-Table  

|     Feature      | State | Note |
|:----------------:|------:|-----:|
|      table       |   :x: |      |
|   table-modal    |   :x: |      |
|    table-sort    |   :x: |      |
| table-filtering  |   :x: |      |
| table-pagination |   :x: |      |
|   table-export   |   :x: |      |
| table-expand-row |   :x: |      |

## Tests

|      Feature      | State |           Note |
|:-----------------:|------:|---------------:|
|     test-unit     |   :x: |                |
|     test-int      |   :x: |    integration |
|      test-ui      |   :x: | user-interface |
|   cucumber-edit   |   :x: |        NON-DEV |
|  cucumber-build   |   :x: |                |
| cucumber-refactor |   :x: |                |

## Charts

- charts
  - line
  - bar

## Tools

  - VSC
    - settings
    - shortcuts
    - plugins
      - TS Hero
      - TODO
      - Debugger
  - Chromium
    - REST Client
    
## Other

- templating
  - Mail

---

# References

* express https://esausilva.com/2017/11/14/how-to-use-create-react-app-with-a-node-express-backend-api/

* project structure https://reactjs.org/docs/faq-structure.html

* bootstrap https://reactstrap.github.io
* bootstrap components https://reactstrap.github.io/components/alerts/
* bootstrap layout https://reactstrap.github.io/components/layout/

* fontawesome https://fontawesome.com/how-to-use/on-the-web/using-with/react
* fontawesome config https://github.com/FortAwesome/react-fontawesome
* fontawesome icons https://fontawesome.com/icons?d=gallery&q=search

* Internationalize https://phraseapp.com/blog/posts/react-i18n-best-libraries/
* Internationalize change language

* file download

* sql dump https://stackoverflow.com/questions/36392113/import-sql-dump-within-node-environment

* express es6 https://github.com/developit/express-es6-rest-api

* sequ express https://github.com/sequelize/express-example
* sequ express generator https://github.com/tommybananas/finale
