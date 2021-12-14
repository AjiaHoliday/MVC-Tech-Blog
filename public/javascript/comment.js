async function commentFormHandler(event) {
    try {    
        event.preventDefault();

        const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();

        const blog_id = window.location.toString().split('/')[
            window.location.toString().split('/').length -1
        ]

        if(comment_text) {
            const response = await fetch('/api/comments', {
                method: 'POST',
                body: JSON.stringify({
                    blog_id,
                    comment_text
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if(response.ok) {
                document.location.reload();
            } else {
                alert(response.statusText);
            }
        }
    } catch(err) {
        console.error(err);
    }
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);