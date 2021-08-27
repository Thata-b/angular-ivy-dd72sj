import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent implements OnInit {
    n =  Math.floor((Math.random() * 10)+1);
   
    constructor() { }

  ngOnInit() {
  }
 
  
getAleatorio() { 
  let tabela: number[] = [];
    for (let i = 1; i<=10; i++) {
      let n = Math.floor(Math.random());
      tabela.push(n); 

    }

 
      return tabela;
  }


}




