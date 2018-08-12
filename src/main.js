import App from './App.html';

// https://www.youtube.com/watch?v=

var app = new App({
	target: document.body,
	data: {
		selected: null,
		cats: [
			{
				name: "Keyboard Cat",
				id: "J---aiyznGQ",
				thumbnail: 'keyboard-cat.jpg'
			},
			{
				name: "Maru",
				id: "z_AbfPXTKms",
				thumbnail: 'maru.jpg'
			},
			{
				name: "Henri",
				id: "OUtn3pvWmpg",
				thumbnail: 'henri.jpg'
			}
		]
	}
});

export default app;