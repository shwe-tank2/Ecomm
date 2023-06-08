var MongoClient = require("mongodb").MongoClient



function updateObject(collection,object){
   console.log(object);
    collection.updateOne({_id:object._id},{$set:object},function(err,res){
        if(err){
            console.log("Updated:");
            console.log("Result");
        }
    });
}

function updateProduct(id,pName,supplier_id,price,img_path) {
    return new Promise ((resolve,reject)=>{
        var db= new MongoClient("mongodb://127.0.0.1:27017/shreematha")
        var myDB = db.db()
        var products = myDB.collection("products")
        resolve(updateObject(products, {
            _id: id,
            pName:pName,
            supplier_id: supplier_id,
            price:price,
            img_path:img_path
        }))
        
    });
}

function updateSupplier(id,sAddress,sName,logo_path) {
    return new Promise ((resolve,reject)=>{
        var db= new MongoClient("mongodb://127.0.0.1:27017/shreematha")
        var myDB = db.db()
        var suppliers = myDB.collection("suppliers")
        resolve(updateObject(suppliers, {
            _id: id,
            sName:sName,
            sAddress:sAddress,
            logo_path:logo_path
        }))
        
    });
}

function updateUser(id,user_id,firstName,lastName,email,mobile_num,password,role,dob,uAddress) {
    return new Promise ((resolve,reject)=>{
        var db= new MongoClient("mongodb://127.0.0.1:27017/shreematha")
        var myDB = db.db()
        var products = myDB.collection("users")
        resolve(updateObject(products, {
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
}

function updateCart(id,user_id,products_arr,count_arr,amount) {
    return new Promise ((resolve,reject)=>{
        var db= new MongoClient("mongodb://127.0.0.1:27017/shreematha")
        var myDB = db.db()
        var cart = myDB.collection("carts")
        resolve(updateObject(cart, {
            _id: id,                     
            user_id:user_id,
            products_arr:products_arr,
            count_arr:count_arr,
            amount:amount
        }))
        
    });
}

function updateFacility(id, name, units, img_path) {
    return new Promise ((resolve,reject)=>{
        var db= new MongoClient("mongodb://127.0.0.1:27017/shreematha")
        var myDB = db.db()
        var facilities = myDB.collection("facilities")
        resolve(updateObject(facilities, {
            _id: id,
            fName:name,
            units:units,
            img_path:img_path
        }))
        
    });
}

function updateCustomer(id,cName,cDesignation,cAddress,cWebsite,cEmail,cMobile_num) {
    return new Promise ((resolve,reject)=>{
        var db= new MongoClient("mongodb://127.0.0.1:27017/shreematha")
        var myDB = db.db()
        var collection = myDB.collection("customers")
        resolve(updateObject(collection, {
                    _id: id,
                    cName: cName,
                    cDesignation: cDesignation,
                    cAddress:cAddress,
                    cWebsite: cWebsite,
                    cEmail: cEmail,
                    cMobile_num: cMobile_num
        }))        
    })
}              

                   
function updateEmployee(id,eaddress,eName,esalary,erole) {
    return new Promise ((resolve,reject)=>{
        var db= new MongoClient("mongodb://127.0.0.1:27017/shreematha")
        var myDB = db.db()
        var suppliers = myDB.collection("employees")
        resolve(updateObject(suppliers, {
            _id: id,
            eName:eName,
            eaddress:eaddress,
            esalary:esalary,
            erole:erole
        }))
        
    });
}


// function updateEmployee(id,eName,eaddress,esalary,erole) {
//     return new Promise ((resolve,reject)=>{
//         var db= new MongoClient("mongodb://127.0.0.1:27017/shreematha")
//         var myDB = db.db()
//         var products = myDB.collection("employees")
//         resolve(updateObject(products, {
//                     _id: id,                     
//                     eName:eName,
//                     eaddress:eaddress,
//                     esalary:esalary,
//                     erole:erole
//         }))
        
//     });
// }

function updateManager(id,mName,mDep,eId) {
    return new Promise ((resolve,reject)=>{
        var db= new MongoClient("mongodb://127.0.0.1:27017/shreematha")
        var myDB = db.db()
        var collection = myDB.collection("managers")
        resolve(updateObject(collection, {
            _id: id,                     
            mName:mName,
            mDep:mDep,
            eId:eId,
        }))
        
    });
}

/////////warehouse////
function updateWarehouse(id,wName){
    return new Promise ((resolve,reject)=>{
        var db= new MongoClient("mongodb://127.0.0.1:27017/shreematha")
        var myDB = db.db()
        var collection = myDB.collection("warehouse")
        resolve(updateObject(collection, {
            _id: id,                     
            wName:wName

        }))
        
    });
}


module.exports={
    updateProduct,
    updateSupplier,
    updateCart,
    updateUser,
    updateCustomer,
    updateFacility,
    updateEmployee,
    updateManager,
    updateWarehouse
}