include .make/Makefile.inc

NS		?= default
VERSION ?= $(shell git rev-parse HEAD)
APP     ?= notist-platform-ui
IMAGE   ?= gcr.io/matthewdavis-devqa/$(APP):$(VERSION)
PORT    ?= 80

.PHONY: build

all:    kubeme build push
deploy:	kubeme build push install

build: 		; docker build -t $(IMAGE) .
run: 		; docker run -p 81:80 $(IMAGE)
push:		; docker push $(IMAGE)

kubeme:

	kubectl config use-context vmware
