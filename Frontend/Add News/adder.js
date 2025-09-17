async function addNews() {
    const title = document.getElementById('newNews').value;
    const content = document.getElementById('subTitle').value;
    const category = document.getElementById('category').value;
    const author = document.getElementById('author').value;
    const coverImageInput = document.getElementById('coverImage');
    const coverImageFile = coverImageInput.files[0];

    if (!title || !content || !author) {
        alert('Please fill in the required fields: Title, Subtitle, and Author.');
        return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('category', category);
    formData.append('author', author);
    if (coverImageFile) {
        formData.append('image', coverImageFile);
    }

    try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:8000/api/v0.1/addNews', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
        });

        if (response.ok) {
            const data = await response.json();
            alert('News added successfully!');
            // Optionally clear the form
            document.getElementById('newNews').value = '';
            document.getElementById('subTitle').value = '';
            document.getElementById('category').value = '';
            document.getElementById('author').value = '';
            document.getElementById('coverImage').value = '';
        } else {
            const errorData = await response.json();
            alert('Failed to add news: ' + JSON.stringify(errorData));
        }
    } catch (error) {
        alert('Error adding news: ' + error.message);
    }
}
