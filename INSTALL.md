# Installation instructions for Truth Goggles

This document is a constant work in progress. If you are a new user trying to
setup the project and face issues with the installation, we strongly encourage
that you submit a Pull Request offering suggested improvements.

## Installation Instructions

1. Run `node -v` and ensure that you have Node 8.11 or above.  If not, please
install a more recent version of [Node](https://nodejs.org/en/).

2. Ensure that [yarn](https://yarnpkg.com/lang/en/docs/install/) is installed as well; these instructions use yarn.

3. Set up your config

```
$> cp .env.template .env
$> vi .env
```

4. Install packages:

```
$> yarn install
```

5. Start the server

```
$> yarn install
```

Congratulations you are all set!


## Dev Utilities

We recommend you install the sequelize command line interface to get magical functions for things like new models and migrations:

```
$> yarn global add sequelize-cli
```

You can see a list of commands by typing 

```
$> sequelize
```

Which will render something that looks like...

```
Commands:
  db:migrate                        Run pending migrations
  db:migrate:schema:timestamps:add  Update migration table to have timestamps
  db:migrate:status                 List the status of all migrations
  db:migrate:undo                   Reverts a migration
  db:migrate:undo:all               Revert all migrations ran
  db:seed                           Run specified seeder
  db:seed:undo                      Deletes data from the database
  db:seed:all                       Run every seeder
  db:seed:undo:all                  Deletes data from the database
  db:create                         Create database specified by configuration
  db:drop                           Drop database specified by configuration
  init                              Initializes project
  init:config                       Initializes configuration
  init:migrations                   Initializes migrations
  init:models                       Initializes models
  init:seeders                      Initializes seeders
  migration:generate                Generates a new migration file                                                  [aliases: migration:create]
  model:generate                    Generates a model and its migration                                                 [aliases: model:create]
  seed:generate                     Generates a new seed file                                                            [aliases: seed:create]

Options:
  --version  Show version number                                                                                                      [boolean]
  --help     Show help                                                                                                                [boolean]

Unknown arguments: config, models-path, seeders-path, migrations-path
```
