Meteor.publish("questions", function() {
  return Questions.find()
})

populate = function() {
  while (Questions.find().count() < 10) {
    Questions.insert({
      name: faker.name.findName(),
      image: faker.image.people() + "?" + Random.hexString(24),
      details: faker.lorem.sentence()
    })
  }
}

Meteor.startup(function() {
  populate()
})

Meteor.methods({
  repopulate: function() {
    Questions.insert({
      name: faker.name.findName(),
      image: faker.image.people() + "?" + Random.hexString(24),
      details: faker.lorem.sentence()
    })
  },
  reset: function() {
    Questions.remove({affirmative: true});
  }
})
