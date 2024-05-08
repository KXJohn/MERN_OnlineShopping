const { ObjectId } = require('mongodb');
const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

class User {
  constructor(username, email, cart, id){
    this.name = username;
    this.email = email;
    this.cart = cart;
    this._id = id;
  }

  save(){
    const db = getDb();
    return db.collection('user').insertOne(this);
  }

  addToCart(product){
    const cartProductIndex = this.cart.items.findIndex(cp => {
      return cp.productId === product._id;
    });
    let newQuantity = 1;
    const updatedCartItems = [...this.cart.items];

    if(cartProductIndex >=0 ){
      newQuantity = this.cart.items[cartProductIndex].quantity + 1;
      updatedCartItems[cartProductIndex].quantity = newQuantity;
    } else {
      updatedCartItems.push({productId: new ObjectId(product.id), quantity: newQuantity});
    }

    const updatedCart = { items: updatedCartItems };

    const db = getDb();
    return db
    .collection('user')
    .updateOne({_id: new Object(this._id)}, { $set: {cart: updatedCart} });
  }

  static fetchById(userId){
    const db = getDb();
    return db.collection('user')
    .findOne({_id: new ObjectId(userId)})
    .then(user => {
      console.log(user);
      return user;
    })
    .catch(err => {
      console.log(err);
    });
  }
}

module.exports = User;
