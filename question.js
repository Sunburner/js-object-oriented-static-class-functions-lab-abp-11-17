'use strict';

class Question {
 constructor(content) {
  this.content = content
  }

  save(){
    this.constructor.All().push(this)
  }

  static All() {
    return this._All;
  }
  

  
}

Question._All =[]