if (Posts.find().count() === 0) {
	Posts.insert({
		title: 'An Ordinary Wizard',
		author: 'Bae Fox',
		url: 'http://baefox.wordpress.com'
	});

	Posts.insert({
		title: 'The Administrator',
		author: 'Bae Fox',
		url: 'http://baefox.wordpress.com'
	});

	Posts.insert({
		title: 'Imaginator',
		author: 'Bae Fox',
		url: 'http://baefox.wordpress.com'
	});
}