const { User } = require('../models');


// GET user details by user_id
async function getUserDetails(req, res) {
  const { user_id } = req.params;

  try {
    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.json(user);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}


// PUT update user details
async function updateUser(req, res) {
  const { new_details_of_user } = req.body;

  try {
    // Assuming you have authentication middleware to get the user_id of the authenticated user
    const user_id = req.user.user_id;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

   
    // Update user details
    user.set(new_details_of_user);
    await user.save();

    return res.json({ message: 'User details updated successfully' });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}


// GET user image by user_id
async function getUserImage(req, res) {
  const { user_id } = req.params;

  try {
    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.json({ user_image: user.user_image });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}


// POST insert a new user
async function insertUser(req, res) {
  const { user_details } = req.body;

  try {
    // Assuming you have authentication middleware to ensure proper authentication
    const newUser = await User.create(user_details);

    return res.json({ message: 'User inserted successfully', user: newUser });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}


// DELETE user by user_id
async function deleteUser(req, res) {
  const { user_id } = req.params;

  try {
    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Delete the user
    await user.destroy();

    return res.json({ message: 'User deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  getUserDetails,
  updateUser,
  getUserImage,
  insertUser,
  deleteUser,
};
