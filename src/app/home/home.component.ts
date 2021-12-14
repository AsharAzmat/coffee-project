import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Coffee } from '../Models/coffee';
import { DataService } from '../Service/data.service';
import { getCoffees } from '../Store/Actions/coffee.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  coffees: Coffee[] = [];
  // coffees: any = [];
  title = 'coffee-project';
  constructor(private dataService: DataService, private store: Store) {
    console.log(this.getAllCoffees());
    console.log("this is real coffee:", this.coffees);
  }

  ngOnInit(): void {
    this.getAllCoffees();
  }

  getAllCoffees(): void {
    this.store.dispatch(getCoffees());
    // this.dataService.getCoffees().subscribe((coffees: Coffee[]) => {
    //   this.coffees = coffees;
    //   console.log("coffee", this.coffees);
    // });
  }
}
