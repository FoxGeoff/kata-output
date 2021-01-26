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

### Further reading (Angular Guides)

1. @input() directive <https://app.pluralsight.com/guides/passing-data-to-nested-component-@input>
2. Using Template Reference Variables to Interact with Nested Components @ViewChild() directive, template reference <https://app.pluralsight.com/guides/using-template-reference-variables-to-interact-with-nested-components>
3. Querying the DOM with @ViewChild and @ViewChildren <https://app.pluralsight.com/guides/querying-the-dom-with-@viewchild-and-@viewchildren>
4. Difference between Template-Driven and Reactive Forms in Angular <https://app.pluralsight.com/guides/difference-between-template-driven-and-reactive-forms-angular>
5. Using the Ahead-of-Time (AOT) Compiler <https://app.pluralsight.com/guides/using-the-ahead-of-time-(aot)-compiler>
6. UI State Management with Redux in Angular 4 <https://app.pluralsight.com/guides/ui-state-management-with-redux-in-angular-4>
7. Understanding the Purpose of Nested Components <https://app.pluralsight.com/guides/understanding-the-purpose-nested-components>
8. One-way and Two-way Data Binding in Angular <https://app.pluralsight.com/guides/one-and-two-way-data-binding-angular>
9. Angular Data Binding Overview <https://app.pluralsight.com/guides/angular-data-binding-overview>
10. How to Submit Form Data Using Angular <https://app.pluralsight.com/guides/how-to-submit-form-data-using-angular>
11. Understanding the Basics of HTTP <https://app.pluralsight.com/guides/understanding-the-basics-http>
