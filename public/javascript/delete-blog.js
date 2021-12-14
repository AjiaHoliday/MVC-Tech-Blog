async function deleteFormHandler(event) {  
    event.preventDefault();

    const blog_id = window.location.toString().split('/')[
        window.location.toString().split('/').length -1
    ]

    const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({
            blog_id: blog_id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText)
    }
}

document.querySelector('.delete-blog-btn').addEventListener('click',deleteFormHandler);