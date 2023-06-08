var MongoClient = require("mongodb").MongoClient

function deleteObject(collection, id) {
    collection.deleteOne({ _id: id }, function (err, res) {
        if (!err) { console.log("deleted"); }
    })
}
function deleteProduct(id){
    return new Promise((resolve, reject) => {
        var db = new MongoClient("mongodb://127.0.0.1:27017/shreematha")
        var myDB = db.db()
        var collection = myDB.collection("products")
        resolve(deleteObject(collection, id))
    })
}
function deleteSupplier(id){
    return new Promise((resolve, reject) => {
        var db = new MongoClient("mongodb://127.0.0.1:27017/shreematha")
        var myDB = db.db()
        var collection = myDB.collection("suppliers")
        resolve(deleteObject(collection, id))
    })
}
function deleteUser(id){
    return new Promise((resolve, reject) => {
        var db = new MongoClient("mongodb://127.0.0.1:27017/shreematha")
        var myDB = db.db()
        var collection = myDB.collection("users")
        resolve(deleteObject(collection, id))
    })
}
function deleteCart(id){
    return new Promise((resolve, reject) => {
        var db = new MongoClient("mongodb://127.0.0.1:27017/shreematha")
        var myDB = db.db()
        var collection = myDB.collection("cart")
        resolve(deleteObject(collection, id))
    })
}
function deleteCustomer(id){
    return new Promise((resolve, reject) => {
        var db = new MongoClient("mongodb://127.0.0.1:27017/shreematha")
        var myDB = db.db()
        var collection = myDB.collection("customers")
        resolve(deleteObject(collection, id))
    })
}
function deleteEmployee(id){
    return new Promise((resolve, reject) => {
        var db = new MongoClient("mongodb://127.0.0.1:27017/shreematha")
        var myDB = db.db()
        var collection = myDB.collection("employees")
        resolve(deleteObject(collection, id))
    })
}
function deleteManager(id){
    return new Promise((resolve, reject) => {
        var db = new MongoClient("mongodb://127.0.0.1:27017/shreematha")
        var myDB = db.db()
        var collection = myDB.collection("managers")
        resolve(deleteObject(collection, id))
    })
}
function deleteFacility(id){
    return new Promise((resolve, reject) => {
        var db = new MongoClient("mongodb://127.0.0.1:27017/shreematha")
        var myDB = db.db()
        var collection = myDB.collection("facilities")
        resolve(deleteObject(collection, id))
    })
}

module.exports={
    deleteProduct,
    deleteFacility,
    deleteCart,
    deleteCustomer,
    deleteManager,
    deleteSupplier,
    deleteEmployee,
    deleteUser
}