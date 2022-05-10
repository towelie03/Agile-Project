import mongoose from "mongoose";
import router from '..index.js';
import { config } from "dotenv";
config({ path: process.ENV })
import { User, validate } from '../models/userModel.js';

const uri = process.env.atlas_uri;
mongoose.connect(uri,
	{
		usenewurlparser:true
	}).then(() => console.log("connected to db successfully")
	).catch(err => console.log(err));

//vaildates the request
router.post('/signup', async (req, res) => {
	const { error } = validate(req.body);
	if (error) {
		return res.status(400).send(error.details[0].message);
	}

	//check if the user already exists
	let user = await user.findone({ username: req.body.email });
	if (user) {
		return res.status(400).send('the user already exists');
	} else {
		//insert new user into db if they dont exist
		user = new user({
			username: req.body.username
		});
		await user.save();
        res.send(user);
	}
});



