class ქონ {
    constructor(main, balnce = 0) {
        this.main = main;
        this.balnce = balnce;
    }
}
let account = new ქონ("aleksi", 1000);
account.balnce += 500;
console.log(`balance': ${account.balnce}`);
if (account.balnce >= 200) {
    account.balnce -= 200;
    console.log(`balnce: ${account.balnce}`);
} else {
    console.log("no money");
}

