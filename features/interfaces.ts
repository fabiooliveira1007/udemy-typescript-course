interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `my drink has ${this.sugar} grams of sugar`;
  },
};

const printSummary = ({ summary }: Reportable): void => {
  console.log(`
    ${summary}
  `);
};

printSummary(oldCivic);
printSummary(drink);
