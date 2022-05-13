build-all: 
	docker-compose build

build-app: 
	docker-compose build app

build-api: 
	docker-compose build api

start-app:
	docker-compose up app 

start-api:
	docker-compose up api

test-app:
	docker-compose run --rm app npm run test $(ARGS)

test-api:
	docker-compose run --rm api npm run test $(ARGS) -- --runInBand

test:
	docker-compose run --rm app npm run test
	docker-compose run --rm app npm run integration
	docker-compose run --rm api npm run test -- --runInBand

before-commit:
	docker-compose run --rm app npm run test
	docker-compose run --rm api npm run test -- --runInBand
	docker-compose run --rm app npm run integration

down:
	docker-compose down

integration:
	docker-compose run --rm app npm run integration $(ARGS)
