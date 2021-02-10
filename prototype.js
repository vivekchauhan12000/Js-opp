function createbook(title,author,year){
  this.title=title;
  this.author=author;
  this.year=year;

}

//prototype
createbook.prototype.getSummary=function(){
  return `${this.title} was written by ${this.author} in year ${this.year}`;
}


//instaciate new object
const book1=new createbook('Fifty Shades of Grey','E. L. James','2011');
console.log(book1);