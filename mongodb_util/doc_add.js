var MongoClient = require("mongodb").MongoClient;

function addObject(collection,object){
    collection.insertOne(object,function(err,result){
        if(!err){
            console.log("Inserted: ");
            console.log(result);
        }
    })
}

function addProduct(id,pName,price,supplier_id,img_path) {
    return new Promise((resolve, reject)=>{
    
        var db=new MongoClient("mongodb://127.0.0.1:27017/shreematha")
        var myDB = db.db()
        var coll = myDB.collection("products")
        resolve(addObject(coll, {
                     _id: id,                     
                     pName:pName,
                     price:price,
                     supplier_id:supplier_id,
                     img_path:img_path,
                     }))
});
};

function addSupplier(id, address, name, logo_path) {
    return new Promise((resolve, reject)=>{
 
        var db=new MongoClient("mongodb://127.0.0.1:27017/shreematha")
        var myDB = db.db()
        var coll = myDB.collection("suppliers")
        resolve(addObject(coll, {
                     _id: id,
                     sName:name,
                     sAddress:address,
                     logo_path:logo_path
                     }))
});
};

function addUser(id,user_id,firstName,lastName,email,mobile_num,password,role,dob,uAddress) {
    return new Promise((resolve, reject)=>{
    
        var db=new MongoClient("mongodb://127.0.0.1:27017/shreematha")
        var myDB = db.db()
        var coll = myDB.collection("users")
        resolve(addObject(coll, {
                     _id: id,
                     user_id:user_id,                     
                     firstName:firstName,
                     lastName:lastName,
                     email:email,
                     mobile_num:mobile_num,
                     password:password,
                     role:role,
                     dob:dob,
                     uAddress:uAddress
                     }))
});
};

function addCart(id,user_id,products_arr,count_arr,amount) {
    return new Promise((resolve, reject)=>{
    
        var db=new MongoClient("mongodb://127.0.0.1:27017/shreematha")
        var myDB = db.db()
        var coll = myDB.collection("cart")
        resolve(addObject(coll, {
            _id: id,                     
            user_id:user_id,
            products_arr:products_arr,
            count_arr:count_arr,
            amount:amount
        }))
    });
};

function addFacility(id,fName,units,img_path) {
    return new Promise((resolve, reject)=>{
    
        var db=new MongoClient("mongodb://127.0.0.1:27017/shreematha")
        var myDB = db.db()
        var coll = myDB.collection("facilities")
        resolve(addObject(coll, {
                    _id: id,
                    fName: fName,
                    units: units,
                    img_path: img_path
                     }))
});
};

function addCustomer(id,cName,cDesignation,cAddress,cWebsite,cEmail,cMobile_num) {
    return new Promise((resolve, reject)=>{
    
        var db=new MongoClient("mongodb://127.0.0.1:27017/shreematha")
        var myDB = db.db()
        var coll = myDB.collection("customers")
        resolve(addObject(coll, {
                    _id: id,
                    cName: cName,
                    cDesignation: cDesignation,
                    cAddress:cAddress,
                    cWebsite: cWebsite,
                    cEmail: cEmail,
                    cMobile_num: cMobile_num,
                    
                     }))
});
};

function addEmployee(id,eName,eaddress,esalary,erole) {
    return new Promise((resolve, reject)=>{
    
        var db=new MongoClient("mongodb://127.0.0.1:27017/shreematha")
        var myDB = db.db()
        var coll = myDB.collection("employees")
        resolve(addObject(coll, {
                     _id: id,                     
                     eName:eName,
                     eaddress:eaddress,
                     esalary:esalary,
                     erole:erole
                     
                     }))
});
};

function addManager(id,mName,mDep,eId) {
    return new Promise((resolve, reject)=>{
    
        var db=new MongoClient("mongodb://127.0.0.1:27017/shreematha")
        var myDB = db.db()
        var coll = myDB.collection("managers")
        resolve(addObject(coll, {
                     _id: id,                     
                     mName:mName,
                     mDep:mDep,
                     eId:eId,
                     
                     }))
});
};




module.exports={
    addProduct,
    addSupplier,
    addUser,
    addCart,
    addFacility,
    addCustomer,
    addEmployee,
    addManager
}