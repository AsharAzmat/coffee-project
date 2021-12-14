import { Component, Input, OnInit } from '@angular/core';
import { Coffee } from '../Models/coffee';
import { CoffeeState } from '../Store/Reducers/coffee.reducers';
import { select, Store } from '@ngrx/store';
import { DataService } from '../Service/data.service';
import { coffeeSelector } from '../Store/Selector/coffee.selector';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css'],
})
export class CoffeeListComponent implements OnInit {

  coffees$ = this.store.pipe(select(coffeeSelector))

  page : number = 1;
  maxSize: number = 5;
  directionLink: boolean = true;
  totalCoffees = 50;

  constructor(private dataService: DataService, private store: Store<CoffeeState>) {}

  ngOnInit(): void {}
}
