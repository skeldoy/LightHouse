/**
 * BeaconsController
 *
 * @description :: Server-side logic for managing beacons
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	 hit: function(req,res){
	Beacons.findOne({uuid:req.query.hit}).exec(function(err,data) {
		if (err) console.log("error: " + err); //return res.json(err, 400);
		Beacons.update({uuid:req.query.hit},{hits:"1"}).exec(function(uerr,udata) {
			if (uerr) console.log("error: " + uerr);
			return res.json(udata);
		});
//		return res.json(data);
	});
  }	
};

