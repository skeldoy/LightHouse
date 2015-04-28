/**
* Beacons.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
	uuid: 'string',
	description: 'string',
	lat:'string',
	lon:'string',
	note:'string',
	activeHits : { collection: "Hits", via: "beacon"},
	activeRegions : { collection: "RegionHits", via: "beacon"},
	tags: { collection: "Tags", via: "associatedBeacon"}
  }
};

