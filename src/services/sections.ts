const sectionData:sectionDataType = {
  world: ["AFRICA", "AMERICAS", "ASIA", "AUSTRALIA", "EUROPE", "MIDDLE EAST"],
  canada: ["Alberta", "British Columbia", "Ontario"],
  food: ["Restaurants", "Cafes", "Bars"],
  beauty: ["Hair Care", "Skin Care", "Fitness"],
  realty: ["Residential", "Commercial", "Sales", "Rent"],
  promotion: ["Dining Festival", "Groceries Deals", "Electronics Discount"],
  opinion: ["Trending", "Essays", "Columnists"],
};

type sectionDataType = {
  [world:string]:string[],
  canada:string[],
  food:string[],
  beauty:string[],
  realty:string[],
  promotion:string[],
  opinion:string[]
}

export function getSectionData(section: string): string[] {
  return sectionData[section];
}
