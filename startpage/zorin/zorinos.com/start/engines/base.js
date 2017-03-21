var apiUrl = "http://go.infinise.com/api/2.5/";


/*	GOOGLE
	----------------------------------------------------- */

eng.google = {
	pageTitle: "Google",
	logo: "google.png",
	places: {
		'Web'    : ["http://www.google.com/search?q=%query%&hl=en",		apiUrl+"?eng=google&timestamp=%time%&q=%query%"],
		'Images' : ["http://images.google.com/images?q=%query%&hl=en",	apiUrl+"?eng=google&timestamp=%time%&q=%query%"],
		'Maps'   : ["http://maps.google.com/maps?q=%query%",			false]
	}
};


/*	WIKIPEDIA
	----------------------------------------------------- */
	
eng.wikipedia = {
	pageTitle: "Wikipedia",
	logo: "wikipedia.png",
	places: {
		'Search'        : ["http://%lang%.wikipedia.org/wiki/Special:Search?search=%query%&fulltext=Search",	apiUrl+"?eng=wikipedia&timestamp=%time%&q=%query%&hl=%lang%"],
		'Go to Article' : ["http://%lang%.wikipedia.org/wiki/Special:Search?search=%query%&go=Go",				apiUrl+"?eng=wikipedia&timestamp=%time%&q=%query%&hl=%lang%"],
	},
	languages: {
		'': 'en'

	}
};


/*	YOUTUBE
	----------------------------------------------------- */

eng.youtube = {
	pageTitle: "YouTube",
	logo: "youtube.png",
	places: {
		'Videos' : ["http://www.youtube.com/results?search_query=%query%", apiUrl+"?eng=youtube&timestamp=%time%&q=%query%"]
	},
};


/*	TWITTER
	----------------------------------------------------- */

eng.twitter = {
	pageTitle: "Twitter",
	logo: "twitter.png",
	places: {
		'Search Twitter' : ["http://twitter.com/search?q=%query%", false]
	}
};
