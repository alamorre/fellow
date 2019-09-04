# Fellow
Front-end web GUI for the Fellow interview game!

### Implementation Notes
As requested, the client does not store game data such that it the can be exploited or cheated.

For this reason, the client DOES NOT store any mine locations - unless the mine is already flipped.

However, the client DOES store block locations, and the number of neighbouring mines, like the original game.

### Before Starting
Make sure you have the server running so there is something to connect with.

Go to [fellow-core](https://github.com/alamorre/fellow-core) and follow the README.md file.

### Getting Started
Assuming fellow-core is up and running (locally) on http://127.0.0.1:8000, you can now start fellow.

```
git clone https://github.com/alamorre/fellow.git
cd fellow
yarn install
yarn start
```

You can expect the project to be running on http://localhost:8080 locally.

### Running Automation Tests
Once you have the project running, you can run the automation tests.

```
yarn test
```

Note: the tests run on chrome driver.
