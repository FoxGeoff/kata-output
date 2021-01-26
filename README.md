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

### child-output.component

```EventEmitter``` is a class which is used to emit custom events and is used only with the ```@Output()``` decorator. It extends the ```Subject``` class, which is used to apply the provider-subscriber kind of communication. ```Subject``` is a part of ```Observable```, and you can read more about it here. <https://rxjs-dev.firebaseapp.com/guide/subject>

Our child component is ready to emit the event, so we call the ```emit``` method, which is a method of ```EventEmitter``` class.

### parent-output.component

In the parent component, we've just called the child component. To access the data from the child component, we have to do event binding. ```Event name``` must be our variable name, and it is instantiated by the ```EventEmitter``` class.

```<app-child-output (demo)="acceptData($event)"></app-child-output>```

```$event``` is mandatory to use as it gets the data from the child and passes it to the parent function.

### Further reading

1. @input() directive <https://app.pluralsight.com/guides/passing-data-to-nested-component-@input>
2. @ViewChild() directive, template reference <https://app.pluralsight.com/guides/using-template-reference-variables-to-interact-with-nested-components>
