export class Item {
  name: string = '';
  url: string = '';
  image: string = '';

  constructor(name: string, url: string, image: string) {
    this.name = name;
    this.url = url;
    this.image = image;
  }
}
