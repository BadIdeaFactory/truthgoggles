# Installation instructions for Truth Goggles

This document is a constant work in progress. If you are a new user trying to
setup the project and face issues with the installation, we strongly encourage
that you submit a Pull Request offering suggested improvements.

## Installation Instructions

1. Run `node -v` and ensure that you have Node 8.11 or above.  If not, please
install a more recent version of [Node](https://nodejs.org/en/).

2. Ensure that [yarn](https://yarnpkg.com/lang/en/docs/install/) is installed as well; these instructions use yarn.

3. Install packages:

```
$> yarn install
```

4. Start the server

```
$> yarn install
```


## Database setup

0. Make sure you have sequelize CLI since that will be useful

```
yarn global add sequelize-cli
```

1. Create the database (we're using postgres)

```
createdb truthgoggles
```

Congratulations you are all set!
