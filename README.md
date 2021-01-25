# KataOutput

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Project ref: <https://app.pluralsight.com/guides/passing-data-from-nested-component-output>

### Introduction to @Output()

A decorator emits an event up to a parent component using event binding. The parent component should have a function that accepts the data emitted from the child component. It gets the data before calling the ```ngOnInit()``` method.
```ngOnInit()``` is one of the lifecycle hooks in Angular, and it's called after the ```constructor()``` and ```ngOnChanges()``` methods.

There are various ways we can make one component interact with another component. Two of these include:

    * Using services
    * Using @viewChild()

However, ```@Output()``` is used if the hierarchy level between parent and child is smaller. If there is a large hierarchy, I suggest you use services.
