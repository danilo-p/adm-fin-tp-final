import { Component } from '@angular/core';
import { inv, multiply } from 'mathjs/';

@Component({
  selector: 'app-portfolio-replicante',
  templateUrl: './portfolio-replicante.component.html',
  styleUrls: ['./portfolio-replicante.component.css']
})
export class PortfolioReplicanteComponent {

  portfolioReplicante = [];

  subtraiVetores(vetor1, vetor2) {
    let resultado = [];
    for (let i = 0; i < vetor1.length; i++) {
      resultado[i] = vetor1[i] - vetor2[i];
    }
    return resultado;
  }

  calculaDiferenca(matriz) {
    let resultado = [];
    // Começa com 1, por que a diferença vai ser sempre do atual com o anterior
    for (let i = 1; i < matriz.length; i++) {
      let anterior = matriz[i - 1];
      let atual = matriz[i];
      resultado.push(this.subtraiVetores(atual, anterior));
    }
    return resultado;
  }

  divideVetor(vetor) {
    let resultado = [];
    for (let i = 0; i < vetor.length; i++) {
      resultado[i] = vetor[i] / vetor[0];
    }
    return resultado;
  }

  calculaDivisoes(matriz) {
    return matriz.map((vetor) => this.divideVetor(vetor));
  }

  calculaMediasDasColunas(matriz) {
    let medias = [];

    // Começa do 1 para excluir o ativo alvo
    for (let i = 1; i < matriz[0].length; i++) { // colunas
      medias.push(0);

      // Loop das linhas
      for (let j = 0; j < matriz.length; j++) { // linhas
        medias[i - 1] += matriz[j][i];
      }
      medias[i - 1] /= matriz.length;
    }

    return medias;
  }

  geraVetorUnitario(n) {
    let resultado = [];

    for (let i = 0; i < n; i++) {
      resultado.push(1);
    }

    return resultado;
  }

  onCsvLoad(csv) {
    console.log("csv", csv);

    let derivada1 = this.calculaDiferenca(csv);
    console.log("derivada1", derivada1);

    let delta = this.calculaDivisoes(derivada1)
    console.log("delta", delta);

    let derivada2 = this.calculaDiferenca(derivada1);
    console.log("derivada2", derivada2);

    let gama = this.calculaDivisoes(derivada2)
    console.log("gama", gama);

    let matrizMedia = [
      this.calculaMediasDasColunas(delta),
      this.calculaMediasDasColunas(gama),
    ];
    matrizMedia.push(this.geraVetorUnitario(matrizMedia[0].length));

    let matrizMediaInv = inv(matrizMedia);

    // Intencionalmente colunar
    let sensibilidades = [
      [0], // sensibilidade do delta
      [0], // sensibilidade do gama
      [1] // sempre 1
    ];

    this.portfolioReplicante = multiply(matrizMediaInv, sensibilidades);
  }
}
