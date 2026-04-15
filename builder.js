class HTMLBuilder {
  constructor() {
    this.card = {};
  }

  setTitle(title) {
    this.card.title = title;
    return this;
  }

  setImage(image) {
    this.card.image = image;
    return this;
  }

  setDescription(description) {
    this.card.description = description;
    return this;
  }

  build() {
    return this.card;
  }
}
const card = new HTMLBuilder()
  .setTitle("My Card")
  .setImage("url.jpg")
  .setDescription("This is a card.")
  .build();

console.log(card);