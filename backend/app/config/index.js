const config = {
	app: {
		port: process.env.PORT || 3000,
	},
	db: {
		uri: process.env.MONGODB_URI || "mongodb://0.0.0.0:27017/note",
	},
	jwt: {
		secret: process.env.JWT_SECRET || "note-secret-key",
	},
};

module.exports = config;
