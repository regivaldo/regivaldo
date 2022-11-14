export class Item {
  name: string = '';
  url: string = '';
  image: string = '';
  visible: boolean = true;

  constructor(name: string, url: string, image: string, visible: boolean) {
    this.name = name;
    this.url = url;
    this.image = image;
    this.visible = visible;
  }
}
