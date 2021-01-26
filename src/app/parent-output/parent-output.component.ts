import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-parent-output",
  templateUrl: "./parent-output.component.html",
  styleUrls: ["./parent-output.component.css"]
})
export class ParentOutputComponent implements OnInit {
  msgFromChild;
  constructor() {}

  ngOnInit() {}
  acceptData(data) {
    console.log(
      "this is the child data displaying in parent component: ",
      data
    );

    this.msgFromChild = data;
  }
}
