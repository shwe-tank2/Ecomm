const mongoutil = require('./doc_find.js')
const mongoutiladd = require('./doc_add.js')
const mongoutilupdate = require('./doc_update.js')
const mongoutildelete=require('./doc_delete.js')
const port = 3000
const express=require('express')
const app=express()
const cors = require("cors");
const util=require("./utility/util.js")
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get('/products',(req,res)=>{
//     // res.header('Access-Control-Allow-Origin','*')
//     var allProducts=mongoutil.findProductAll().then(
//         function(items){
//             // const objArr = items
//             // objArr.forEach((obj)=>{
//             //     util.renamekey(obj,'_id','id')
//             // })
//             // const updateItems = JSON.stringify(objArr)   
//             res.send(items)
//         },
//         function(err){
//             console.log(err);
//         }
//     )
// })

app.get('/products', (req, res) => {
    mongoutil.findProductAll()
        .then(
            function (items) {
                const objArr = items
                objArr.forEach(o => {
                    util.renamekey(o, '_id', 'id')
                });
                res.send(items)
            },
            function (err) {
                console.log(err);
            }
        )
})

app.get('/suppliers', (req, res) => {
    mongoutil.findSupplierAll()
        .then(
            function (items) {
                const objArr = items
                objArr.forEach(o => {
                    util.renamekey(o, '_id', 'id')
                });
                res.send(items)
            },
            function (err) {
                console.log(err);
            }
        )
})

app.get('/customers', (req, res) => {
    mongoutil.findCustomerAll()
        .then(
            function (items) {
                const objArr = items
                objArr.forEach(o => {
                    util.renamekey(o, '_id', 'id')
                });
                res.send(items)
            },
            function (err) {
                console.log(err);
            }
        )
})

app.get('/users', (req, res) => {
    mongoutil.findUserAll()
        .then(
            function (items) {
                const objArr = items
                objArr.forEach(o => {
                    util.renamekey(o, '_id', 'id')
                });
                res.send(items)
            },
            function (err) {
                console.log(err);
            }
        )
})

app.get('/cart', (req, res) => {
    mongoutil.findCartAll()
        .then(
            function (items) {
                const objArr = items
                objArr.forEach(o => {
                    util.renamekey(o, '_id', 'id')
                });
                res.send(items)
            },
            function (err) {
                console.log(err);
            }
        )
})

app.get('/facilities', (req, res) => {
    mongoutil.findFacilitiesAll()
        .then(
            function (items) {
                const objArr = items
                objArr.forEach(o => {
                    util.renamekey(o, '_id', 'id')
                });
                res.send(items)
            },
            function (err) {
                console.log(err);
            }
        )
})

app.get('/employees', (req, res) => {
    mongoutil.findEmployeeAll()
        .then(
            function (items) {
                const objArr = items
                objArr.forEach(o => {
                    util.renamekey(o, '_id', 'id')
                });
                res.send(items)
            },
            function (err) {
                console.log(err);
            }
        )
})

app.get('/managers', (req, res) => {
    mongoutil.findManagerAll()
        .then(
            function (items) {
                const objArr = items
                objArr.forEach(o => {
                    util.renamekey(o, '_id', 'id')
                });
                res.send(items)
            },
            function (err) {
                console.log(err);
            }
        )
})

app.get("/products/:id",(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    productid=req.params.id;
    if(productid !=="favicon.ico"){
        mongoutil.findProduct(productid).then(
            function(item){
                const obj1=item;
                util.renamekey(obj1,"_id","id");
                const updateItem=JSON.stringify(obj1);
                res.send(updateItem)
            },
            function(err){
                console.log("error at promise");
            }
        );
    }
});

app.get("/facilities/:id",(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    facilityid=req.params.id;
    if(facilityid !=="favicon.ico"){
        mongoutil.findFacility (facilityid).then(
            function(item){
                const obj1=item;
                util.renamekey(obj1,"_id","id");
                const updateItem=JSON.stringify(obj1);
                res.send(updateItem)
            },
            function(err){
                console.log("error at promise");
            }
        );
    }
});


app.get("/cart/:id",(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    cartid=req.params.id;
    if(cartid !=="favicon.ico"){
        mongoutil.findCart(cartid).then(
            function(item){
                const obj1=item;
                util.renamekey(obj1,"_id","id");
                const updateItem=JSON.stringify(obj1);
                res.send(updateItem)
            },
            function(err){
                console.log("error at promise");
            }
        );
    }
});





//////////****POST*****//////////

app.post("/products",function (req,res){
    res.header("Access-Control-Allow-Origin","*");
    console.log("method called");
    var id=req.body.id;   
    var pName=req.body.pName;
    var price=req.body.price;
    var supplier_id=req.body.supplier_id;
    var img_path=req.body.img_path;

    mongoutiladd.addProduct(id,pName,price,supplier_id,img_path);
    res.send(
        "Data submitted: "+
        id+
        ","+
        pName+
        ","+
        price+
        ","+
        supplier_id+
        ","+
       img_path
    );
    console.log(req.body);
});


app.post("/suppliers",function (req,res){
    res.header("Access-Control-Allow-Origin","*");
    console.log("method called");
    var id=req.body.id;
    var sName=req.body.sName;
    var sAddress=req.body.sAddress;    
    var logo_path=req.body.logo_path;

    mongoutiladd.addSupplier(id,sAddress,sName,logo_path);
    res.send(
        "Data submitted: "+
        id+
        ","+
        sName+
        ","+
        sAddress+
        ","+
       logo_path
    );
    console.log(req.body);
});

app.post("/users",function (req,res){
    res.header("Access-Control-Allow-Origin","*");
    console.log("method called");
    var id = req.body.id
    var user_id=req.body.user_id
    var firstName = req.body.firstName
    var lastName = req.body.lastName
    var email = req.body.email
    var mobile_num=req.body.mobile_num
    var password = req.body.password
    var role = req.body.role
    var dob = req.body.dob
    var uAddress = req.body.uAddress
    mongoutiladd.addUser(id,user_id,firstName,lastName,email,mobile_num,password,role,dob,uAddress);
    res.send(
        "Data submitted: "+
        id+
        ","+
        user_id+
        ","+
        firstName+
        ","+
        lastName+
        ","+
        email+
        ","+
        mobile_num+
        ","+
        password+
        ","+
        role+
        ","+
        dob+
        ","+
        uAddress
    );
    console.log(req.body);
});

app.post("/cart",function(req,res){
    console.log("method called");
    var id=req.body.id
    var user_id=req.body.user_id
    var products_arr=req.body.products_arr
    var count_arr=req.body.count_arr
    var amount=req.body.amount
    
    mongoutiladd.addCart(id,user_id,products_arr,count_arr,amount)
    res.send(
        "data submitted:"+
        id+
        ","+
        user_id+
        ","+
        products_arr+
        ","+
        count_arr+
        ","+
        amount
    )
})

app.post("/facilities",function (req,res){
    res.header("Access-Control-Allow-Origin","*");
    console.log("method called");
    var id = req.body.id
    var fName = req.body.fName
    var units = req.body.units
    var img_path = req.body.img_path

    mongoutiladd.addFacility(id,fName,units,img_path);
    res.send(
        "Data submitted: "+
        id+
        ","+
        fName+
        ","+
        units+
        ","+
       img_path
    );
    console.log(req.body);
});

app.post("/customers",function (req,res){
    res.header("Access-Control-Allow-Origin","*");
    console.log("method called");
    var id = req.body.id
    var cName = req.body.cName
    var cDesignation = req.body.cDesignation
    var cWebsite = req.body.cWebsite
    var cEmail = req.body.cEmail
    var cMobile_num = req.body.cMobile_num
    var cAddress = req.body.cAddress

    mongoutiladd.addCustomer(id,cName,cDesignation,cAddress,cWebsite,cEmail,cMobile_num);
    res.send(
        "Data submitted: "+
        id+
        ","+
        cName+
        ","+
        cDesignation+
        ","+
        cAddress+
        ","+
        cWebsite+
        ","+
        cEmail+
        ","+
        cMobile_num
       
    );
    console.log(req.body);
});

app.post("/employees",function (req,res){
    res.header("Access-Control-Allow-Origin","*");
    console.log("method called");
    var id = req.body.id
    var eName = req.body.eName
    var eaddress = req.body.eaddress
    var esalary = req.body.esalary
    var erole = req.body.erole
   

    mongoutiladd.addEmployee(id,eName,eaddress,esalary,erole);
    res.send(
        "Data submitted: "+
        id+
        ","+
        eName+
        ","+
        eaddress+
        ","+
        esalary+
        ","+
        erole
    );
    console.log(req.body);
});

app.post("/managers",function (req,res){
    res.header("Access-Control-Allow-Origin","*");
    console.log("method called");
    var id = req.body.id
    var mName = req.body.mName
    var mDep = req.body.mDep
    var eId=req.body.eId

    mongoutiladd.addManager(id,mName,mDep,eId);
    res.send(
        "Data submitted: "+
        id+
        ","+
        mName+
        ","+
        mDep+
        ","+
        eId
        
    );
    console.log(req.body);
});


/////////////*********PUT***********///////////












app.put('/products/:id', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*")
    var id = parseInt(req.params.id)
    var pName = req.body.pName
    var supplier_id = req.body.supplier_id
    var price = req.body.price
    var img_path = req.body.img_path
    mongoutilupdate.updateProduct(id, pName, supplier_id, price, img_path)
    res.send(JSON.stringify({data_submitted:id}))})

app.put('/suppliers/:id', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*")
    var id=parseInt(req.body.id);
    var sName=req.body.sName;
    var sAddress=req.body.sAddress;    
    var logo_path=req.body.logo_path;
    mongoutilupdate.updateSupplier(id,sAddress,sName,logo_path)
    res.send(JSON.stringify({data_submitted:id}))})

app.put('/users/:id', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*")
    var id = parseInt(req.params.id)
    var user_id=req.body.user_id
    var firstName = req.body.firstName
    var lastName = req.body.lastName
    var email = req.body.email
    var mobile_num=req.body.mobile_num
    var password = req.body.password
    var role = req.body.role
    var dob = req.body.dob
    var uAddress = req.body.uAddress
    mongoutilupdate.updateUser(id,user_id,firstName,lastName,email,mobile_num,password,role,dob,uAddress)
    res.send(JSON.stringify({data_submitted:id}))})

app.put('/cart/:id', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*")
    var id = parseInt(req.params.id)
    var user_id = req.body.user_id
    var products_arr = req.body.products_arr
    var count_arr = req.body.count_arr
    var amount = req.body.amount
    mongoutilupdate.updateCart(id,user_id,products_arr,count_arr,amount)
    res.send(JSON.stringify({data_submitted:id}))
})

app.put('/facilities/:id', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*")
    var id = parseInt(req.params.id)
    var fName = req.body.fName
    var units = req.body.units
    var img_path = req.body.img_path
    mongoutilupdate.updateFacility(id, fName, units,img_path)
    res.send(JSON.stringify({data_submitted:id}))})

app.put('/customers/:id', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*")
    var id = parseInt(req.params.id)
    var cName = req.body.cName
    var cDesignation = req.body.cDesignation
    var cWebsite = req.body.cWebsite
    var cEmail = req.body.cEmail
    var cMobile_num = req.body.cMobile_num
    var cAddress = req.body.cAddress
    mongoutilupdate.updateCustomer(id,cName,cDesignation,cAddress,cWebsite,cEmail,cMobile_num)
    
    res.send(JSON.stringify({data_submitted:id}))
    
})

app.put('/employees/:id', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*")
    var id=parseInt(req.params.id);
    var eName=req.body.eName;
    var eaddress=req.body.eaddress;    
    var esalary=req.body.esalary;
    var erole=req.body.erole;
    mongoutilupdate.updateEmployee(id,eaddress,eName,esalary,erole)
    res.send("data updated")
})



app.put('/managers/:id', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*")
    var id = parseInt(req.params.id)
    var mName = req.body.mName
    var mDep = req.body.mDep
    var eId=req.body.eId
    mongoutilupdate.updateManager(id,mName,mDep,eId)
    res.send("data updated")
})

//////////////////warehouse/////

app.put('/warehouse/:id', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*")
    var id = parseInt(req.params.id)
    var wName = req.body.wName
    
    mongoutilupdate.updateWarehouse(id, wName)
    res.send("data updated")
})


//////////////***********DELETE*******///////////////

app.delete("/products/:id", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*")
    var id = parseInt(req.params.id)
    mongoutildelete.deleteProduct(id)
    res.send("data deleted:")
})
app.delete("/suppliers/:id", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*")
    var id = parseInt(req.params.id)
    mongoutildelete.deleteSupplier(id)
    res.send(JSON.stringify({data_submitted:id}))
})
app.delete("/users/:id", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*")
    var id = parseInt(req.params.id)
    mongoutildelete.deleteUser(id)
    res.send(JSON.stringify({data_submitted:id}))
})
app.delete("/cart/:id", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*")
    var id = parseInt(req.params.id)
    mongoutildelete.deleteCart(id)
    res.send(JSON.stringify({data_submitted:id}))
})
app.delete("/customers/:id", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*")
    var id = parseInt(req.params.id)
    mongoutildelete.deleteCustomer(id)
    res.send(JSON.stringify({data_submitted:id}))
})
app.delete("/employees/:id", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*")
    var id = parseInt(req.params.id)
    mongoutildelete.deleteEmployee(id)
    res.send(JSON.stringify({data_submitted:id}))
})
app.delete("/managers/:id", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*")
    var id = parseInt(req.params.id)
    mongoutildelete.deleteManager(id)
    res.send(JSON.stringify({data_submitted:id}))
})
app.delete("/facilities/:id", function (req, res) {
    res.header("Access-Control-Allow-Origin", "*")
    var id = parseInt(req.params.id)
    mongoutildelete.deleteFacility(id)
    res.send(JSON.stringify({data_submitted:id}))
})


const server=app.listen(port,()=>
    console.log(
        `Server listening on port ${port}`

)
)