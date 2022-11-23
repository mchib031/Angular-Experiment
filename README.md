# Angular Experiment

This branch is part of an angular experimen. Here I will display how we use angular pipes for data formating
## Pipes options
* The "|" is the operator for pipes, use the pipe name followed by ": name-option" to include options.
* Use it followed by the pipe name to apply a pipe on your data you can either use pipes pre-defined by angular or generate a new pipe.

## Generating a pipe
* "ng g p pipe-name" This creates a .pipe.spec.ts and .pipe.ts in /src/app you can customize the pipe there.
* You must implement a PipeTransform interface that includes a transform method in order to use the pipe on your data.

## References
* List of all pipes https://angular.io/guide/pipes
* https://www.youtube.com/watch?v=AAu8bjj6-UI
