var keystone = require('keystone');
var Types = keystone.Field.Types;

var Homepage = new keystone.List('Homepage', {
    map: {name: 'title'},
    autoKey: { path: 'slug', from: 'title', unique: true }
});

Homepage.add({
	title: { type: String, required: true },
    headingTitle: { type: String },
    content: { type: Types.Html, wysiwyg: true, height: 400 }
});

Homepage.defaultColumns = 'title';

Homepage.register();
