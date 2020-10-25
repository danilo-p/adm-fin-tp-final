import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-replicante',
  templateUrl: './portfolio-replicante.component.html',
  styleUrls: ['./portfolio-replicante.component.css']
})
export class PortfolioReplicanteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onCsvLoad(csv) {
    console.log(csv);
  }
}
