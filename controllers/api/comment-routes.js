const router = require('express').Router();
const {User, Blog, Comment} = require('../../models');
const withAuth = require('../../utils/auth');
const sequelize = require('../../config/connection');
const { returnStatement } = require('@babel/types');

// GET all comments
router.get('/', (req, res)=> {
    Comment.findAll({
        attributes: ['id','comment_text','blog_id','created_at'],
        order: [['created_at', 'DESC']],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// POST new Comment
router.post('/',(req, res) => {
    if(req.session) {
        Comment.create({
            comment_text: req.body.comment_text,
            user_id: req.session.user_id,
            blog_id: req.body.blog_id
        })
            .then(dbCommentData=> res.json(dbCommentData))
            .catch(err =>{
                console.log(err);
                res.status(400).json(err);
            });
    }
});

// delete Comment
router.delete('/:id', (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbCommentData=> {
            if(!dbCommentData) {
                res.status(404).json({message: 'no comment found with this id'});
                return;
            }
            res.json(dbCommentData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;