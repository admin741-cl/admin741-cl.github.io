var posts=["posts/3eeb.html","posts/ae65.html","posts/99be.html","posts/923a.html","posts/cdc4.html","posts/f0ec.html","posts/d238.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};