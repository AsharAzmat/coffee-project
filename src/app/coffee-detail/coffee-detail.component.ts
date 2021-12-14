import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Coffee } from '../Models/coffee';
import { CoffeeState } from '../Store/Reducers/coffee.reducers';
import { coffee } from '../Store/Selector/coffee.selector';

@Component({
  selector: 'app-coffee-detail',
  templateUrl: './coffee-detail.component.html',
  styleUrls: ['./coffee-detail.component.css']
})
export class CoffeeDetailComponent implements OnInit {

  coffees$ = this.store.pipe(select(coffee));
  constructor(private store: Store<CoffeeState>) {}

  ngOnInit(): void {
  }

}
