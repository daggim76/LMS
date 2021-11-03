/* eslint-disable no-console */
const mongoose = require('mongoose');
// const slugify = require('slugify');
// const validator = require('validator');

// const Schema = mongoose.Schema();

const bookSchema = new mongoose.Schema({
  name: String,
  ISBN: String,
  quantity: Number,
  year: Number,
  department: String,
  author: String
});
//   name: {
//     type: String
//     // required: [true, 'A book must have a name'],
//     // trim: true,
//     // maxlength: [40, 'A book name must have less or equal then 40 characters'],
//     // minlength: [2, 'A book name must have more or equal then 2 characters']
//     // validate: [validator.isAlpha, 'Book name must only contain characters']
//   },

//   department: {
//     type: String
//     // required: [true, 'A book must have a department'],
//     // enum: {
//     //   values: ['Computer Science', 'Marketing', 'Accounting', 'Managment'],
//     //   message:
//     //     'Department is either: Computer Science, Marketing, Accounting, Managment'
//     // }
//   },
//   ISBN: {
//     type: String
//     // max: [15, 'Rating must be below 5.0']
//   },
//   quantity: {
//     type: Number
//     // default: 1
//   },

//   year: {
//     type: Number
//     // min: [4, 'Please Enter a year in a correct fromat, at list 4 characters']
//   },

//   author: {
//     type: String
//     // trim: true
//   }
// });

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
// bookSchema.pre('save', function(next) {
//   this.slug = slugify(this.name, { lower: true });
//   next();
// });

// bookSchema.pre('save', function(next) {
//   console.log('Will save document...');
//   next();
// });

// bookSchema.post('save', function(doc, next) {
//   console.log(doc);
//   next();
// });

// QUERY MIDDLEWARE
// bookSchema.pre('find', function(next) {
// bookSchema.pre(/^find/, function (next) {
//   this.find({ secretBook: { $ne: true } });

//   this.start = Date.now();
//   next();
// });

// bookSchema.post(/^find/, function(docs, next) {
//   console.log(`Query took ${Date.now() - this.start} milliseconds!`);
//   next();
// });

// // AGGREGATION MIDDLEWARE
// bookSchema.pre('aggregate', function(next) {
//   this.pipeline().unshift();

//   console.log(this.pipeline());
//   next();
// });

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
