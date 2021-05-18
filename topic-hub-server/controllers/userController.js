const GetUsersService = require('../services/user/getUsersService');
const GetUserByIdService = require('../services/user/getUserByIdService');
const EditUserByIdService = require('../services/user/editUserByIdService');
exports.getUsers = (req, res) => GetUsersService(req, res);
exports.getUserById = (req, res) => GetUserByIdService(req, res);
exports.editUserById = (req, res) => EditUserByIdService(req, res);
