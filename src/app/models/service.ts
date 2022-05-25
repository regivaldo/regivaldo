export class Service {
  title: string = '';
  text: string = '';
  image: string = '';
  url: string = '';

  constructor(title: string, text: string, image: string, url: string) {
    this.title = title;
    this.text = text;
    this.image = image;
    this.url = url;
  }
}
