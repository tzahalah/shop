
const fs = require('fs');
const path = require('path');




function get(req, res) {
    fs.readFile("products.json", "utf-8", (err, data) => {
        if (err) {
            res.status(500).send("error read file student ")
        } else {
            res.send(JSON.parse(data));
        }

    })
}
//אפשרות ראשונה ליצא פונקציה מדף
exports.getById = (req, res) => {

    fs.readFile("products.json", "utf-8", (err, data) => {
        if (err) {
            res.status(500).send("error read file student ")
        } else {
            let id = req.params.id;

            data = JSON.parse(data);
            let product = data.find(st => st.id == id)

            if (product == undefined) {
                res.status(500).send("not found student by tz " + id);
            } else {
                res.send(product);
            }

        }


    })
}


// exports.post = (req, res) => {

//     fs.readFile("products.json", "utf-8", (err, data) => {
//         //המרה של טקסט למערך
//         let products = JSON.parse(data);
//         //body =  לתוכן שנשלח בפונקציה פןסט 
//          req.body.id = products[products.length-1].id + 1
//          console.log(req.body.id)
//          let product =req.body
//         // מוסיף איידי למוצר החדש 
       
//         products.push(product);
//         fs.writeFile("products.json", JSON.stringify(products), (err) => {
//             if (err) {
//                 res.status(500).send("error  in add products ");
//             } else {
//                 res.send(product);
//             }
//         })
//     })
// }

exports.put = (req, res) => {
    console.log('i arived to function update')
    const id = req.params.id;
    console.log(id)
    const updatedProduct = req.body;
    fs.readFile("products.json", "utf-8", (err, data) => {
        if (err) {
            console.log("Error reading products file.")

            return res.status(500).send("Error reading products file.");
        }
        let products = JSON.parse(data);
        let index = products.findIndex(product => product.id == id);
        if (index === -1) {
            console.log("Product not found.")

            return res.status(404).send("Product not found.");
        }
        products[index] = { ...products[index], ...updatedProduct };
        fs.writeFile("products.json", JSON.stringify(products), (err) => {
            if (err) {
                res.status(500).send("Error updating product.");
                console.log("Error updating product.")
            } else {
                res.send(products[index]);
                console.log("succeded")
            }
        });
    });
};

exports.delete = (req, res) => {

    fs.readFile("products.json", "utf-8", (err, data) => {
        let id = req.params.id
        let products = JSON.parse(data);
        let newArrProduct = products.filter(i=> i.id != id)

        fs.writeFile("products.json", JSON.stringify(newArrProduct), (err) => {
            if (err) {
                res.status(500).send("error  in add products ");
            } else {
                res.send(newArrProduct);
            }
        })
    })
}

exports.post = (req, res) => {

    fs.readFile("products.json", "utf-8", (err, data) => {
        if (err) {
            return res.status(500).send("Error reading products file.");
        }
        //המרה של טקסט למערך
        let products = JSON.parse(data);
        //body =  לתוכן שנשלח בפונקציה פןסט 
        let product =req.body

        console.log('req.file:', req.file); // Log req.file to see if the file is received

        if (req.file) {
            product.image ='/uploads/'+ req.file.filename;
        }else {
            console.log('No file uploaded.'); // Log if no file is uploaded
        }

        
        // מוסיף איידי למוצר החדש 
        const id = products[products.length - 1].id + 1
        product.id=id;
        products.push(product);
        fs.writeFile("products.json", JSON.stringify(products), (err) => {
            if (err) {
                res.status(500).send("error  in add products ");
            } else {
                res.send(product);
            }
        })
    })
}



//אפשרות שניה ליצא פונקציה מדף
exports.get = get;
