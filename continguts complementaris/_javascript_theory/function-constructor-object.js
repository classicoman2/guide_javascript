//`function-constructor-object.js`

// Initialize a constructor function for a new Hero
function Hero(name, level) {
    this.name = name;
    this.level = level;

    this.showMessage = () => { console.log('My Hero is called ' + this.name + ' in level ' + this.level)}
  }

  let hero1 = new Hero('Bjorn', 1);

  console.log(hero1);
  console.log(hero1.showMessage() )