import './App.css'
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [data, setData] = useState([])
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true);
        setError(null);
        
        axios.all([
            axios.get('https://jsonplaceholder.typicode.com/posts'),
            axios.get('https://jsonplaceholder.typicode.com/users')
        ])
            .then(axios.spread((posts, usersResponse) => {
                setData(posts.data);
                setUsers(usersResponse.data);
                setLoading(false);
            }))
            .catch((error) => {
                console.error(`Error fetching data ${error}`);
                setError('Failed to fetch data. Please try again later.');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="app-container">
                <div className="loading-container">
                    <div className="loading-spinner"></div>
                    <div className="loading-text">Loading amazing content...</div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="app-container">
                <div className="error-container">
                    <div className="error-message">
                        <strong>Oops!</strong> {error}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="app-container">
            <header className="header">
                <h1>API Posts Explorer</h1>
                <p>Discover amazing content from our community</p>
            </header>

            <div className="stats-container">
                <div className="stat-item">
                    <span className="stat-number">{data.length}</span>
                    <span className="stat-label">Total Posts</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">{users.length}</span>
                    <span className="stat-label">Active Users</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">{Math.round(data.length / users.length)}</span>
                    <span className="stat-label">Avg Posts/User</span>
                </div>
            </div>

            <div className="posts-grid">
                {data.map((post) => (
                    <article key={post.id} className="post-card">
                        <div className="post-header">
                            <span className="post-id">Post #{post.id}</span>
                            <h2 className="post-title">{post.title}</h2>
                        </div>
                        <div className="post-body">
                            {post.body}
                        </div>
                        <div className="post-footer">
                            <div className="post-meta">
                                <span>💬</span>
                                <span>By User {post.userId}</span>
                            </div>
                            <a href="#" className="read-more">Read more →</a>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default App
