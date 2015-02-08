var postsData = [
	{
		title: 'Introducing Telescope',
		url: 'http://google.com'
	},
	{
		title: 'Meteor',
		url: 'http://meteor.com'
	},
	{
		title: 'The Meteor Book',
		url: 'http://google.com'
	}
];

Template.postsList.helpers({
	posts: function() {
		return Posts.find({}, {sort: {submitted: -1}});
	}
})