class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static publisher = "Илья Кантор";

  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }

  static createTodays() {
    // помним, что this = Article
    return new this("Сегодняшний дайджест", new Date());
  }
}

// использование
let articles = [
  new Article("HTML", new Date(2019, 1, 1)),
  new Article("CSS", new Date(2019, 0, 1)),
  new Article("JavaScript", new Date(2019, 11, 1)),
];

articles.sort(Article.compare);
console.log(articles[0].title); // CSS
console.log(Object.getOwnPropertyDescriptors(articles[0]));

let today = Article.createTodays();
console.log(today.publisher);
