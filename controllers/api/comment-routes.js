const router = require('express').Router();
const {User, Blog, Comment} = require('../../models');
const withAuth = require('../../utils/auth');
const sequelize = require('../../config/connection');

// GET /api/user5s
router.get('/', (req, res)=> {

});

// Get specific user
router.get('/:id', (req, res) => {

});

// POST users
router.post('/',(req, res) => {
    
});

// update user
router.put('/:id', (req, res) => {

});

// delete user
router.delete('/:id', (req, res) => {

});

module.exports = router;