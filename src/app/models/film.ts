export class Film{
    id?: number;
    url: String;
    embed: String;
    thumbnail?: String;
    title?: String;
    description?: string;
    watched?: number;
    categories?: Array<String>;
  
    constructor(url) {
        this.url = ('https://www.youtube.com/watch?v=' + url);
        this.embed = ('https://www.youtube.com/embed/' + url);
    }
  }