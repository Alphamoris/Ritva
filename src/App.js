import { useState, useEffect } from 'react';
import './App.css';


const SearchIcon = () => (
  <svg className="icon search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
  </svg>
);

const EmailIcon = () => (
  <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
  </svg>
);

const CompanyIcon = () => (
  <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
    <path d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112z"/>
  </svg>
);

const WebsiteIcon = () => (
  <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"/>
  </svg>
);

// Empty state illustration
const EmptyStateIllustration = () => (
  <div className="empty-state-illustration">
    <svg width="200" height="200" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(300,300)">
        <path d="M125.6,-88.7C153.2,-49.8,158.4,9.4,139,56.5C119.7,103.7,75.7,138.8,28.2,148.8C-19.3,158.8,-70.2,143.8,-108.9,109.4C-147.6,75,-174.1,21.2,-165.3,-22.9C-156.6,-67,-112.6,-101.4,-68.6,-135C-24.5,-168.6,19.7,-201.3,52.6,-184.6C85.6,-167.9,107.3,-101.8,125.6,-88.7Z" fill="#a78bfa" />
      </g>
    </svg>
  </div>
);

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeUserCard, setActiveUserCard] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        
        const data = await response.json();
        // Simulate a longer loading time to show the loading animation
        setTimeout(() => {
          setUsers(data);
          setFilteredUsers(data);
          setError(null);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError(err.message || 'Failed to fetch users');
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const results = users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(results);
  }, [searchTerm, users]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const getRandomGradient = (id) => {
    const gradients = [
      'linear-gradient(135deg, #6d28d9, #ec4899)',
      'linear-gradient(135deg, #0ea5e9, #06b6d4)',
      'linear-gradient(135deg, #f97316, #f59e0b)',
      'linear-gradient(135deg, #4f46e5, #4338ca)',
      'linear-gradient(135deg, #be123c, #e11d48)',
      'linear-gradient(135deg, #059669, #10b981)',
      'linear-gradient(135deg, #7c3aed, #8b5cf6)',
      'linear-gradient(135deg, #db2777, #ec4899)',
    ];
    
    return gradients[id % gradients.length];
  };
  
  const handleUserCardClick = (id) => {
    setActiveUserCard(activeUserCard === id ? null : id);
  };

  const UserCard = ({ user }) => {
    const isActive = activeUserCard === user.id;
    
    return (
      <div 
        className={`user-card ${isActive ? 'user-card-active' : ''}`}
        onClick={() => handleUserCardClick(user.id)}
      >
        <div className="user-avatar" style={{ background: getRandomGradient(user.id) }}>
          {user.name.charAt(0)}
        </div>
        <div className="user-info">
          <h2>{user.name}</h2>
          <p>
            <span className="field-label">
              <EmailIcon /> Email:
            </span> 
            <a href={`mailto:${user.email}`}>{user.email}</a>
          </p>
          <p>
            <span className="field-label">
              <PhoneIcon /> Phone:
            </span> 
            <a href={`tel:${user.phone}`}>{user.phone}</a>
          </p>
          <p>
            <span className="field-label">
              <CompanyIcon /> Company:
            </span> 
            {user.company.name}
          </p>
          <p>
            <span className="field-label">
              <WebsiteIcon /> Website:
            </span> 
            <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">
              {user.website}
            </a>
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>User Directory</h1>
        <p className="brand">by Alphamoris</p>
        <div className="search-container">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
        </div>
      </header>
      
      <main className="app-content">
        {loading ? (
          <div className="loading-container">
            <div className="loading-spinner">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <p>Loading users...</p>
          </div>
        ) : error ? (
          <div className="error-container">
            <h2>Oops! Something went wrong</h2>
            <p>{error}</p>
            <button onClick={() => window.location.reload()}>Try Again</button>
          </div>
        ) : (
          <div className="user-grid">
            {filteredUsers.length > 0 ? (
              filteredUsers.map(user => (
                <UserCard key={user.id} user={user} />
              ))
            ) : (
              <div className="no-results">
                <EmptyStateIllustration />
                <h2>No users found</h2>
                <p>Try a different search term</p>
              </div>
            )}
          </div>
        )}
      </main>
      
      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} Alphamoris - User Directory</p>
      </footer>
    </div>
  );
}

export default App;
