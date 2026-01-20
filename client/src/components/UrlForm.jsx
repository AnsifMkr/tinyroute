import React, { useState } from 'react';

const UrlForm = () => {
    const [longUrl, setLongUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setShortUrl('');

        try {
            const res = await fetch('https://tinyroute-xi.vercel.app/api/url/shorten', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ longUrl })
            });

            const data = await res.json();

            if (res.ok) {
                setShortUrl(data.shortUrl);
            } else {
                setError(data || 'Something went wrong');
            }
        } catch (err) {
            setError('Server Error. Ensure backend is running.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="url"
                    placeholder="Enter long URL..."
                    value={longUrl}
                    onChange={(e) => setLongUrl(e.target.value)}
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit'}
                </button>
            </form>

            {error && <div className="error-message">{error}</div>}

            {shortUrl && (
                <div className="result-container">
                    <p>Your short URL:</p>
                    <a href={shortUrl} target="_blank" rel="noopener noreferrer" className="short-url">
                        {shortUrl}
                    </a>
                </div>
            )}
        </div>
    );
};

export default UrlForm;
