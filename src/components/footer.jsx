function Footer() {
  const isLoggedIn = true;
  return (
    <div className="container">
      <h1>Welcome</h1>
      <p>{isLoggedIn ? 'Logged In' : 'Guest User'} </p>
    </div>
  );
}

export default Footer;
