Meteor.publish('posts', function() {
	//return Posts.find({flagged: false, author: author});
	return Posts.find();
});

// Meteor.publish('allPosts', function() {
// 	return Posts.find({}, {fields: {
// 		date: false
// 	}});
// });