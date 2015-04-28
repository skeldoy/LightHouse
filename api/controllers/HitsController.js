/**
 * HitsController
 *
 * @description :: Server-side logic for managing Hits
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
        log: function (req, res) {
        //var ip = req.headers['x-real-ip'];
	var ip= req.ip; // headers['x-forwarded-for'] 
	var uuid=req.query.uuid;
	var rssi=req.query.rssi;
        Hits.create({ip:ip, uuid:uuid, rssi:rssi}, function (err, data) {
        if(err) res.send(500,err);
        res.send(200);
        });
        }	
};

