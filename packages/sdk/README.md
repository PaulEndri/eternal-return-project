# Eternal Return: Black Survival Project
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
- [Eternal Return: Black Survival Project](#eternal-return-black-survival-project)
  - [Introduction](#introduction)
  - [Packages](#packages)
    - [Wikidata](#wikidata)
    - [Client](#client)
  - [Sections](#sections)
    - [SDK](#sdk)
    - [UI](#ui)
    - [Playground](#playground)

## Introduction
This project is my attempt at working with monorepo principles to create a usable UI, SDK, backend APi (Eventually) and any needed utilities. Each project has it's own directory and any dependencies are treated as local NPM Dependencies

## Packages
### Wikidata
Simple package that uses the generic public ER:BS api in combination with the official ER:BS Wiki to allow fetching some data.

[*Source Code*](/packages/wikidata)
[Readme](/packages/wikidata/README.md)

### Client
Node/TS wrapper around the official ER:BS Api

[*Source Code](/packages/client)
[Readme](/packages/client/README.md)

## Sections
### SDK
Where all interfaces, constants, and general class constructs are housed

### UI
React based UI

### Playground
Misc. playground for testing and more