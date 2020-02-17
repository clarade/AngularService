import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CocktailService {
  constructor() {}

  getCocktail = [
    {
      name: "Mojito",
      price: "8",
      img:
        "https://www.papillesetpupilles.fr/wp-content/uploads/2006/07/Mojito-%C2%A9sanneberg-shutterstock.jpg"
    },
    {
      name: "Piña Colada",
      price: "7",
      img:
        "https://static.cuisineaz.com/610x610/i131486-pina-colada-au-thermomix.jpeg"
    },
    {
      name: "Cosmopolitan",
      price: "9",
      img:
        "https://assets.afcdn.com/recipe/20180705/80274_w1024h768c1cx2378cy1278.jpg"
    }
  ];

  getCocktails() {
    return this.getCocktail;
  }
}
