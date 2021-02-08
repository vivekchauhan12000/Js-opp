const book={
  title:"Just do it",
  author:"EP",
  year:"2019",
  summary:function(){
  return `${this.title} was written by ${this.author} in year ${this.year}`;
  }

}
console.log(book.summary());