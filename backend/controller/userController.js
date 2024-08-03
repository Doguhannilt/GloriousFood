import bcrypt from 'bcryptjs'
import User from '../models/userModel.js'
import implementToken from '../utils/implementToken.js'

// Create
const createUser = async (req, res) => {
    const { name, email, nickname, password } = req.body;

    if (!name || !email || !password || !nickname) {
        return res.status(400).send('Please fill all the inputs');
    }

    try {
        // Check if user already exists
        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).send("User already exists");

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password, salt);

        // Create a new user
        const newUser = new User({
            name,
            email,
            nickname,
            password: hashedPass
        });

        // Save the user
        await newUser.save();

        // Generate and set the token
        const token = implementToken(res, newUser._id);
        console.log('JWT Token:', token); // Log the token

        // Respond with user info
        res.status(201).json({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            nickname: newUser.nickname
        });

    } catch (err) {
        console.error(err); // Log the error for debugging
        res.status(400).send('Invalid User Data');
    }
};

// Login 
const loginUser = async (req, res) => {
    const {
        email,
        password
    } = req.body

    const existingUser = await User.findOne({ email })

    if (existingUser) {
        const isPasswordValid = await bcrypt.compare(password, existingUser.password)

        if (isPasswordValid) {
            implementToken(res, existingUser._id)
            res.status(201).json({
                _id: existingUser._id,
                username: existingUser.username,
                password: existingUser.password,
                email: existingUser.email,
                isAdmin: existingUser.isAdmin
            })
            return
        }
    }


}

// Logout
const logoutUser = async (req, res) => {
    res
        .cookie('jwt', '', {
            httpOnly: true,
            expires: new Date(0)
        })

    res
        .status(200)
        .json({ message: "Removed" })
}

// Update the user that has jwt token
const updateCurrentUserProfile = async (req, res) => {
    const user = await User
        .findById(req.user._id)

    if (user) {
        user.username = req.body.username || user.username
        user.email = req.body.email || user.email

        if (req.body.password) {
            const salt = await bcrypt
                .genSalt(10)
            const hashedPass = await bcrypt
                .hash(req.body.password, salt)

            user.password = hashedPass
        }


        const updatedUser = await user.save()

        res.json({
            _id: updatedUser._id,
            username: updatedUser.username,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin
        })
    } else {
        res
            .status(404)
        throw new Error("User not found")
    }
}

// Delete a user with the help of ID
const deleteUserById = async (req, res) => {
    const user = await User
        .findById(req.params.id)

    if (user) {
        if (user.isAdmin) {
            res
                .status(400)
            throw new Error("Cannot delete an admin user")
        }

        await User.deleteOne({ _id: user._id })
        res
            .json({ message: "User removed" })

    } else {
        res
            .status(404)
        throw new Error("User is not deleted")
    }
}

export {
    createUser,
    loginUser,
    logoutUser,
    updateCurrentUserProfile,
    deleteUserById
}