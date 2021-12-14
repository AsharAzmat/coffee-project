import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Coffee } from './Models/coffee';
import { DataService } from './Service/data.service';
import { getCoffees } from './Store/Actions/coffee.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  coffees: Coffee[] = [];
  // coffees: any = [];
  title = 'coffee-project';
  constructor(private dataService: DataService, private store: Store) {
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
