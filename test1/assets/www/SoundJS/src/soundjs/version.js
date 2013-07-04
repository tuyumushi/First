/**
 * @module SoundJS
 */

(function () {

	/**
	 * Static class holding library specific information such as the version and buildDate of the library.
	 * The SoundJS class has been renamed {{#crossLink "Sound"}}{{/crossLink}}.  Please see {{#crossLink "Sound"}}{{/crossLink}}
	 * for information on using sound.
	 * @class SoundJS
	 **/
	var o = this.createjs = this.createjs || {};
	o = (o.SoundJS = o.SoundJS || {});

	/**
	 * The version string for this release.
	 * @property version
	 * @type String
	 * @static
	 **/
	o.version = /*version*/"NEXT"; // injected by build process

	/**
	 * The build date for this release in UTC format.
	 * @property buildDate
	 * @type String
	 * @static
	 **/
	o.buildDate = /*date*/"Tue, 11 Jun 2013 16:05:24 GMT"; // injected by build process

})();