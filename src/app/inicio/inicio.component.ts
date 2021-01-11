import { Component, OnInit } from '@angular/core';
import {FormsModule}from '@angular/forms'
import {NgModule}from '@angular/core'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  dolarBs = 1250000;
  dolarM = 0.37;
  totalBs;
  oro: any;

 calcular(Moro:HTMLInputElement)
 {
   this.oro = Moro;
   
   this.totalBs= (this.oro.value) * (this.dolarM) * (this.dolarBs) + " Bs";
   console.log(this.oro.value);
   console.log(this.totalBs);
   return false;

 }

}
