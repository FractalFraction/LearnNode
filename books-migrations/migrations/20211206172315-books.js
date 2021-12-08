module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
    await db.collection('books').insertMany([{title: "Jane Eyre", author: "Charlotte Brontë", price: 9.99, amount: 10}, 
                                             {title: "Oliver Twist", author: "Charles Dickens", price: 8.99, amount: 3},
                                             {title: "Alice in Wonderland", author: "Lewis Caroll", price: 20.00, amount: 20},
                                             {title: "Fahrenheit 451", author: "Ray Bradbury", price: 16.50, amount: 1},
                                             {title: "1984", author: "George Orwell", price: 7.59, amount: 100},
                                             {title: "Catcher in the Rye", author: "J.D Salinger", price: 24.99, amount: 0},
                                             {title: "Moby Dick", author: "Herman Melville", price: 13.49, amount: 15}
                                            ])
  
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});

    await db.collection('books').deleteMany({"title": {$nin: ["To Kill a Mockingbird"]}})
  }
};
