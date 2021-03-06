const router = require('express').Router();
const {User, Blog, Comment} = require('../../models');
const withAuth = require('../../utils/auth');

// GET all blogs
router.get('/', (req, res)=> {
    Blog.findAll({
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
            res.render('homepage', {blogs});        
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Get specific blog
router.get('/:id', (req, res) => {
    Blog.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'title', 'blog_content', 'created_at'],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'blog_id', 'user_id', 'created_at'],
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
            if(!dbBlogData) {
                res.status(404).json({ message: 'No blog found with this id'});
                return;
            }
            res.json(dbBlogData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// POST new blog
router.post('/', withAuth, (req, res) => {
    Blog.create({
        title: req.body.title,
        blog_content: req.body.blog_content,
        user_id: req.session.user_id
    })
        .then(dbBlogData => res.json(dbBlogData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        });
});

// update blog
router.put('/:id', withAuth, (req, res) => {
    Blog.update(
        {
            title: req.body.title,
            blog_content: req.body.blog_content
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbBlogData => {
            if(!dbBlogData){
                res.status(404).json({message: "no blog found with this id"});
                return;
            }
            res.json(dbBlogData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// delete blog
router.delete('/:id', withAuth, (req, res) => {
    Blog.destroy({
        where:{
            id: req.params.id
        }
    })
    .then(dbBlogData => {
        if(!dbBlogData){
            res.status(404).json({message: 'No blog found with this id'});
            return;
        }
        res.json(dbBlogData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;