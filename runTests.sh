#!/bin/bash

for file in */*/runTests.html ; do
	open -a Safari "$file"
	open -a Firefox "$file"
done
