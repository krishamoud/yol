Meteor.publish("questions", function() {
  return Questions.find()
})

Meteor.publish("userFriends", function(){
  return Meteor.users.find({_id:this.userId}, {friends:1});
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
  var users = Meteor.users.find().fetch();
  users.forEach(function(user){
    if(!user.friends){
      Meteor.users.update({_id:user._id}, {$set:{friends:[]}});
    }
  })

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
