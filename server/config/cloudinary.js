/**
 * Cloudinary SDK configuration.
 *
 * This module centralizes Cloudinary initialization for the app.
 * Call `cloudinaryConnect()` once during server  before performing
 * any upload/delete operations.
 */

const cloudinary = require("cloudinary").v2;
exports.cloudinaryConnect = () => {
	try {
		cloudinary.config({
			// Cloudinary account identifier
			cloud_name: process.env.CLOUD_NAME,

			// API key used to authenticate requests.
			api_key: process.env.API_KEY,

			// API secret used to sign requests (keep private).
			api_secret: process.env.API_SECRET,
		});
	} catch (error) {
		// Provide context; avoid printing any sensitive configuration.
		console.error("Failed to configure Cloudinary:", error);
	}
};
