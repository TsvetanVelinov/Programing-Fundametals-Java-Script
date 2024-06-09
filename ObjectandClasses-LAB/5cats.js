function cats (input) {
    
    class Cat {
        constructor(name, age){
            this.name = name;
            this.age = age;
        }

        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }

    }

    for (let command of input) {
        let commands = command.split(' ');

        let name = commands[0];
        let age = Number(commands[1]);

        let cat = new Cat(name, age)

        cat.meow();
    }

}


cats(['Candy 1', 'Poppy 3', 'Nyx 2'])

cats(['Mellow 2', 'Tom 5'])