export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class Basic extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }
  update() {
    this.sellIn--;
    this.quality--;
    if (this.sellIn < 0) {
      this.quality--;
    }
    if (this.quality < 0) {
      this.quality = 0;
    }
    if (this.quality > 50) {
      this.quality = 50;
    }
  }
}

export class Cheese extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }
  update() {
    this.sellIn--;
    this.quality++;
    if (this.quality < 0) {
      this.quality = 0;
    }
    if (this.quality > 50) {
      this.quality = 50;
    }
  }
}

export class Legendary extends Item {
  constructor(name, sellIn, quality) {
    super(name, 0, 80);
  }
  update() {}
}

export class Ticket extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }
  update() {
    if (this.sellIn <= 0) {
      this.quality = 0;
    } else if (this.sellIn <= 5) {
      this.quality += 3;
    } else if (this.sellIn <= 10) {
      this.quality += 3;
    } else {
      this.quality++;
    }
    this.sellIn--;
  }
}

export class Conjured extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }
  update() {
    this.sellIn--;
    this.quality -= 2;
    if (this.sellIn < 0) {
      this.quality -= 4;
    }
    if (this.quality < 0) {
      this.quality = 0;
    }
    if (this.quality > 50) {
      this.quality = 50;
    }
  }
}

// export class Conjured extends Item {}

export let items = [];

items.push(new Basic("+5 Dexterity Vest", 10, 20));
// items.push(new Cheese("Aged Brie", 2, 0));
// items.push(new Basic("Elixir of the Mongoose", 5, 7));
// items.push(new Legendary("Sulfuras, Hand of Ragnaros", 0, 80));
// items.push(new Ticket("Backstage passes to a TAFKAL80ETC concert", 15, 20));
// items.push(new Conjured("Conjured Mana Cake", 3, 6));

// subclasses, basic, brie cheese, legendary, concert ticket, conjured items
export const updateQuality = () => {
  for (let item of items) {
    item.update();
  }
};
