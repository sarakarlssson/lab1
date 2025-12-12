const db = require('./dbConnection.js');
const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function question(q) {
    return new Promise(resolve => rl.question(q, resolve));
}

async function menu() {
    console.log('----- SELECT A OPTION -----');
    console.log("1: Create product");
    console.log('2: Show all products');
    console.log('3: Show one product');
    console.log('------------------------');

    const choice = await question("YOUR CHOICE: ");

    if (choice === "1") {
        const name = await question("ProductName: ");
        const price = await question("Price: ");
        const quantity = await question("Amount: ");
        const supplierId = await question("Supplier ID: ");

        await db.execute(
            'INSERT INTO products (productName, price, quantity, supplierId) VALUES (?, ?, ?, ?)',
            [name, Number(price), Number(quantity), Number(supplierId)]
        );

        console.log(`Product "${name}" was created!`);

    } else if (choice === "2") {
        const [rows] = await db.execute('SELECT * FROM products');
        console.table(rows);

    } else if (choice === "3") {
        const productId = await question("Product ID: ");
        const [rows] = await db.execute('SELECT * FROM products WHERE productId = ?', [productId]);
        console.table(rows);

    }

    rl.close();
    process.exit();
}

menu(); 