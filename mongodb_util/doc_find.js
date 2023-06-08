var MongoClient = require("mongodb").MongoClient

var findProductAll = function () {
  console.log("")
  return new Promise((resolve, reject) => {
    var conn = new MongoClient("mongodb://127.0.0.1:27017/shreematha")
    console.log("connected to mongoDB");
    var myDB = conn.db();
    var coll = myDB.collection('products')

    var items = coll.find().toArray();
    console.log(items);
    resolve(items);
  });

};

var findSupplierAll = function () {

  return new Promise((resolve, reject) => {
    var conn = new MongoClient("mongodb://127.0.0.1:27017/shreematha")
    console.log("connected to mongoDB");
    var myDB = conn.db();
    var coll = myDB.collection('suppliers')

    var items = coll.find().toArray();
    console.log(items);
    resolve(items);
  });

};

var findCustomerAll = function () {
  console.log("")
  return new Promise((resolve, reject) => {
    var conn = new MongoClient("mongodb://127.0.0.1:27017/shreematha")
    console.log("connected to mongoDB");
    var myDB = conn.db();
    var coll = myDB.collection('customers')

    var items = coll.find().toArray();
    console.log(items);
    resolve(items);
  });

};

var findUserAll = function () {
  console.log("")
  return new Promise((resolve, reject) => {
    var conn = new MongoClient("mongodb://127.0.0.1:27017/shreematha")
    console.log("connected to mongoDB");
    var myDB = conn.db();
    var coll = myDB.collection('users')

    var items = coll.find().toArray();
    console.log(items);
    resolve(items);
  });

};

var findCartAll = function () {
  console.log("")
  return new Promise((resolve, reject) => {
    var conn = new MongoClient("mongodb://127.0.0.1:27017/shreematha")
    console.log("connected to mongoDB");
    var myDB = conn.db();
    var coll = myDB.collection('carts')

    var items = coll.find().toArray();
    console.log(items);
    resolve(items);
  });

};

var findFacilitiesAll = function () {
  console.log("")
  return new Promise((resolve, reject) => {
    var conn = new MongoClient("mongodb://127.0.0.1:27017/shreematha")
    console.log("connected to mongoDB");
    var myDB = conn.db();
    var coll = myDB.collection('facilities')

    var items = coll.find().toArray();
    console.log(items);
    resolve(items);
  });

};

var findEmployeeAll = function () {
  console.log("")
  return new Promise((resolve, reject) => {
    var conn = new MongoClient("mongodb://127.0.0.1:27017/shreematha")
    console.log("connected to mongoDB");
    var myDB = conn.db();
    var coll = myDB.collection('employees')

    var items = coll.find().toArray();
    console.log(items);
    resolve(items);
  });

};

var findManagerAll = function () {
  console.log("")
  return new Promise((resolve, reject) => {
    var conn = new MongoClient("mongodb://127.0.0.1:27017/shreematha")
    console.log("connected to mongoDB");
    var myDB = conn.db();
    var coll = myDB.collection('managers')

    var items = coll.find().toArray();
    console.log(items);
    resolve(items);
  });

};


var findProduct = function (pId) {
  return new Promise((resolve, reject) => {
   
    var conn=new MongoClient("mongodb://127.0.0.1:27017/shreematha")
   
    console.log("connected to mongoDB");
    var myDB = conn.db();
    var coll=myDB.collection('products')      

      console.log("calling with pId value: " + pId);

      var item = coll.findOne({ _id: parseInt(pId) });
      resolve(item);
    });
  
};

var findFacility = function (pId) {
  return new Promise((resolve, reject) => {
   
    var conn=new MongoClient("mongodb://127.0.0.1:27017/shreematha")
   
    console.log("connected to mongoDB");
    var myDB = conn.db();
    var coll=myDB.collection('facilities')      

      console.log("calling with pId value: " + pId);

      var item = coll.findOne({ _id: parseInt(pId) });
      resolve(item);
    });
  
};

var findCart = function (pId) {
  return new Promise((resolve, reject) => {
   
    var conn=new MongoClient("mongodb://127.0.0.1:27017/shreematha")
   
    console.log("connected to mongoDB");
    var myDB = conn.db();
    var coll=myDB.collection('carts')      

      console.log("calling with pId value: " + pId);

      var item = coll.findOne({ _id: parseInt(pId) });
      resolve(item);
    });
  
};






module.exports = {
  findProduct,
  findFacility,
  findProductAll,
  findSupplierAll,
  findUserAll,
  findCartAll,
  findCustomerAll,
  findEmployeeAll,
  findFacilitiesAll,
  findManagerAll,
  findCart
  // findEmployee
  
  
  // findSuppliers,
  // findSupplier,
  // findUsers,
  // findUser,
  // gerCart
}