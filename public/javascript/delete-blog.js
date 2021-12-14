async function deleteFormHandler(event) {
    try {    
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
        });

        if (response.ok) {
            document.location.replace('/dashboard/');
        } else {
            alert(response.statusText)
        }
    } catch(err) {
        console.error(err);
    }
}

document.querySelector('.delete-blog-btn').addEventListener('click',deleteFormHandler);