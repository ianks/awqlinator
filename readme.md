[![npm version](https://badge.fury.io/js/awqlinator.svg)](https://badge.fury.io/js/awqlinator)
[![Build Status](https://travis-ci.org/ianks/awqlinator.svg?branch=master)](https://travis-ci.org/ianks/awqlinator)

# AWQLinator

A package for Javascript which makes dealing with AWQL more friendly than
string interpolation. It offers a simple interface for querying Google AdWords.

## How does it look?

```js
import { AWQLinator } from ''

const awql = new AWQLinator("ACCOUNT_PERFORMANCE_REPORT");

const report = awql
  .select("Clicks", "Impressions")
  .where("Clicks", ">", "20")
  .during("TODAY")
  .toAwql();

// => SELECT Clicks,Impressions FROM ACCOUNT_PERFORMANCE_REPORT WHERE Clicks > 20
```

## What it does not offer

- The ability to actually send the queries to AdWords.

Since this is very simple to do with any request library (`fetch`, `axios`,
etc.), I have decided to leave this as an exercise to the user.

## Installation

`$ npm install --save awqlinator`
