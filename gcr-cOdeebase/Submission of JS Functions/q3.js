// Q3: Arrow function vs normal function and the value of `this`

const user = {
    name: "Shishant",

    showNameArrow: () => {
        console.log("Arrow function name:", this.name);
    },

    showName: function () {
        console.log("Normal function name:", this.name);
    }
};

user.showNameArrow(); 
user.showName();     
