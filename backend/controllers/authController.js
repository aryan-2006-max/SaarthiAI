import User from '../models/User.js';
import Wallet from '../models/Wallet.js';
import Card from '../models/Card.js';

export const register = async (req, res, next) => {
  try {
    const { name, email, password, city, role } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    const user = await User.create({ name, email, password, city, role });
    
    // Auto-create wallet and card
    const wallet = await Wallet.create({ user: user._id });
    await Card.create({ 
      user: user._id, 
      cardNumber: Math.floor(1000000000000000 + Math.random() * 9000000000000000).toString(),
      maskedNumber: 'XXXX-XXXX-XXXX-' + Math.floor(1000 + Math.random() * 9000),
      wallet: wallet._id,
      expiresAt: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
    });

    const token = user.generateToken();
    res.status(201).json({ user, token });
  } catch (error) { next(error); }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      res.json({ user, token: user.generateToken() });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) { next(error); }
};

export const forgotPassword = async (req, res, next) => { res.json({ message: 'Mock link sent' }); };
export const resetPassword = async (req, res, next) => { res.json({ message: 'Mock reset successful' }); };
