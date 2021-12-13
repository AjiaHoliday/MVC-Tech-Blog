const router = require('express').Router();
const sequelize = require('../config/connection');
const {Blog, User, Comment} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
    Blog.findAll({
        where: {
            // use session for user id
            user_id: req.session.user_id
        },
        attributes: ['id', 'title', 'blog_content', 'created_at'],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: Comment,
                attributes:['id','comment_text', 'blog_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbBlogData => {
            const blogs = dbBlogData.map(blog => blog.get({ plain: true }));
            res.render('dashboard', {blogs, loggedIn: true});        
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/create/', withAuth, (req,res) =>{
    res.render('create-blog', {loggedIn: true})
});

router.get('/edit/:id', withAuth, (req, res) => {
    const blog = dbBlogData.get({plain:true});
    
    res.render('edit-blog', {
        blog,
        loggedIn: true})
});

module.exports = router;