/**
 * RegionHitsController
 *
 * @description :: Server-side logic for managing Regionhits
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	log: function (req, res) {
	var ip = req.ip; // headers['x-real-ip'];
	var uuid = req.query.uuid;
	var status = req.query.status;
	RegionHits.create({ip:ip, uuid:uuid, status:status},  function (err, data) {
	if(err) res.send(500,err);
	res.send(200);
	});
	}
};

