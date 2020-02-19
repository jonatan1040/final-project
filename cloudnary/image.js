var cloudinary = require('cloudinary').v2;

cloudinary.config({
	cloudName: 'cloudofjo',
	api_key: '328928377589138',
	api_secret: 'Ua5x1UoduDfIh3Dm6JbKQ_rxpFA'
});

cloudinary.v2.uploader.upload('../images/Pilot.jpg', function(error, result) {
	console.log(result, error);
});

cloudinary.v2.uploader.upload(
	'../images/Pilot.jpg',
	{
		public_id: 'pilot',
		background_removal: 'cloudinary_ai:person',
		notification_url: 'https://mysite.example.com/hooks'
	},
	function(error, result) {
		console.log(result);
	}
);
