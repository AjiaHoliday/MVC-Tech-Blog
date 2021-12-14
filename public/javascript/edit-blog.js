async function editFormHandler(event) {
    try {    
        event.preventDefault();

        const title = document.querySelector('input[name="blog-title"]').value.trim();
        const blog_content = document.querySelector('input=[name="blog-content"]').value.trim();
        const id = window.location.toString().split('/')[
            window.location.toString().split('/').length -1
        ]

        const response = await fetch(`/api/blogs/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title,
                blog_content
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

document.querySelector('.edit-post-form').addEventListener('submit',editFormHandler);