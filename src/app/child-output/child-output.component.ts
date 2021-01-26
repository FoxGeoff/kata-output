import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child-output",
  templateUrl: "./child-output.component.html",
  styleUrls: ["./child-output.component.css"]
})
export class ChildOutputComponent implements OnInit {
  @Output() demo = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
    this.demo.emit("This is the child component");
  }
}
