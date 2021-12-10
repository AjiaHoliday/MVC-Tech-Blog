const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');
const { post } = require('../controllers');

User.hasMany(Blog, {
    foreignKey: 'user_id'
});

Blog.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports= { User, Blog, Comment };