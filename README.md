# Seed
This project is a seed of [Angular CLI](https://github.com/angular/angular-cli) version 12.1.4, it has unit tests with jest and the testing Library for e2e. In the back use node and test, too, with jest.

## Documentation

---

## Angular with jest
[Tutorial to test with Jest instead of Karma](https://www.amadousall.com/how-to-set-up-angular-unit-testing-with-jest/)

## E2E with Testing Library
[Testing Library tutorial](https://timdeschryver.dev/blog/good-testing-practices-with-angular-testing-library#the-angular-testing-library)

## Development

---

### Development dependencies

`Docker version 20.10.7` or higher.

### Running the application for the first time (building the docker image)

You only need to run the following command in the project folder's root:
`docker-compose up --build`

> Remember to shutdown the docker container with 
> `docker-compose down` when you are done with your work.

## Tests
### Running all the tests

To run **unit test** of **app and api** you don't need to start the application, just execute the following command:
`make unit-all`

> This command executes all the test commands explained below

### Running unit tests

If you only want to run the unitary component tests don't need to start the application, only execute:

- To **app unit-test**:
`docker-compose run --rm app npm run test` or `make unit-app`

- To **api unit-test**:
`docker-compose run --rm api npm run test`or `make unit-api`

> If you need to pass arguments you must execute `make unit-app ARGS="write_here"` and `make unit-api ARGS="write_here"`

## Further help
You can also have access to the services bash
- To **app service** execute:
`docker-compose run --rm app bash` or `make bash-app`
- To **api service** execute:
`docker-compose run --rm api bash` or `make bash-api`