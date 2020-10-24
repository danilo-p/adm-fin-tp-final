import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formula1',
  templateUrl: './formula1.component.html',
  styleUrls: ['./formula1.component.css']
})
export class Formula1Component implements OnInit {
  csvContent: string;

  constructor() {}
  ngOnInit() {}

  onFileLoad(fileLoadedEvent) {
    const textFromFileLoaded = fileLoadedEvent.target.result;
    this.csvContent = textFromFileLoaded;
    alert(this.csvContent);
    let csvLines = this.csvContent.split("\n");
    let csv = csvLines.map(csvLine => csvLine.split(","));
    console.log(csv[0][0]);
  }

  onFileSelect(input: HTMLInputElement) {
    const files = input.files;
    var content = this.csvContent;

    if (files && files.length) {
      /*
          console.log("Filename: " + files[0].name);
          console.log("Type: " + files[0].type);
          console.log("Size: " + files[0].size + " bytes");
          */

      const fileToRead = files[0];

      const fileReader = new FileReader();
      fileReader.onload = this.onFileLoad;

      fileReader.readAsText(fileToRead, "UTF-8");
    }
  }
}
