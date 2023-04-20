import { expect, describe, it } from "vitest";
import {
  Item,
  items,
  updateQuality,
  Basic,
  Cheese,
  Legendary,
  Ticket,
  Conjured,
} from "./gilded-rose.js";

describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    const testItem = new Basic("basic", 5, 3);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(2);
    expect(testItem.sellIn).toBe(4);
  });
});

//Once the sellIn days is less then zero, quality degrades twice as fast.

describe("updateQuality", () => {
  it("Once the sellIn days is less then zero, quality degrades twice as fast.", () => {
    const testItem = new Basic("Burrito", -5, 10);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(8);
    expect(testItem.sellIn).toBe(-6);
  });
});

//The quality of an item is never negative.

describe("updateQuality", () => {
  it("The quality of an item is never negative.", () => {
    const testItem = new Basic("Orcish Boar Mutton", 5, 0);
    items.push(testItem);

    updateQuality();

    expect(testItem.sellIn).toBe(4);
    expect(testItem.quality).toBe(0);
  });
});

// "Aged Brie" actually increases in quality the older it gets.

describe("updateQuality", () => {
  it("Aged Brie actually increases in quality the older it gets.", () => {
    const testItem = new Cheese("Aged Brie", 4, 15);
    items.push(testItem);

    updateQuality();

    expect(testItem.sellIn).toBe(3);
    expect(testItem.quality).toBe(16);
  });
});

// The quality of an item is never more than 50.

describe("updateQuality", () => {
  it("The quality of an item is never more than 50.", () => {
    const testItem = new Cheese("Aged Brie", 5, 50);
    items.push(testItem);

    updateQuality();

    expect(testItem.sellIn).toBe(4);
    expect(testItem.quality).toBe(50);
  });
});

// "Sulfuras, Hand of Ragnaros," being a legendary item, never has to be sold nor does it decrease in quality.

describe("updateQuality", () => {
  it("Sulfuras, Hand of Ragnaros,being a legendary item, never has to be sold nor does it decrease in quality.", () => {
    const testItem = new Legendary("Sulfuras, Hand of Ragnaros", 0, 80);
    items.push(testItem);

    updateQuality();

    expect(testItem.sellIn).toBe(0);
    expect(testItem.quality).toBe(80);
  });
});

// "Backstage passes to a TAFKAL80ETC concert", increase in quality as it's sellIn value decreases:
// quality increases by 2 when there are 10 days or less left before the concert.
// quality increases by 3 when there are 5 days or less left before the concert.
// quality drops to 0 after the concert

describe("updateQuality", () => {
  it("Backstage passes to a TAFKAL80ETC concert", () => {
    const testItem = new Ticket(
      "Backstage passes to a TAFKAL80ETC concert",
      -1,
      0
    );
    items.push(testItem);

    updateQuality();

    expect(testItem.sellIn).toBe(-2);
    expect(testItem.quality).toBe(0);
  });
});

describe("updateQuality", () => {
  it("Conjured lose double", () => {
    const testItem = new Conjured("Conjured Milk Toast", 6, 10);
    items.push(testItem);

    updateQuality();

    expect(testItem.sellIn).toBe(5);
    expect(testItem.quality).toBe(8);
  });
});
