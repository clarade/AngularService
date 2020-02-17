import { Component, OnInit } from "@angular/core";
import { CocktailService } from "../cocktail.service";

@Component({
  selector: "app-cocktail-list",
  templateUrl: "./cocktail-list.component.html",
  styleUrls: ["./cocktail-list.component.css"]
})
export class CocktailListComponent implements OnInit {
  public cocktails: any;
  constructor(public CocktailService: CocktailService) {}

  ngOnInit() {
    this.cocktails = this.CocktailService.getCocktails();
    return this.cocktails;
  }
}
