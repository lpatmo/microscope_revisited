###Notes about https://book.discovermeteor.com
- "A Meteor Method is a server-side function that is called client-side...Collection's insert, update and remove functions are all Methods."
- "Meteor method callbacks always have two arguments, error and result."
- "As soon as you start needing to do things that should be outside the user's control (such as timestamping a new post or assigning it to the correct user), it's probably better to use a Method."
- TODO: Read https://www.discovermeteor.com/blog/meteor-methods-client-side-operations/
- Oh wow, I finally understand why people use underscore: http://underscorejs.org/#first. Helpful JS functions!
- Local collection: the errors will exist *only in the browser*.
- Be sure to capitalize the "Collection" in ```Errors = new Mongo.Collection(null);```, haha.
- Template.templateName.helpers, Template.templateName.events, and Template.templateName.created...
- ```meteor create --package USERNAME:errors``` creates a package

###Questions
- What's the difference between Meteor.method and Meteor.publish?
- So... functions placed in the /collections folder will be available to *both* the server and the client and run at the same time, right? If I'm building on top of Telescope, do I continue to develop here, or do I need to put my code in a separate package?

