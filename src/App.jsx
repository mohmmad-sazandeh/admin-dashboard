function Sidebar() {
  return (
    <div className="sidebar">
      <h2>داشبورد</h2>
      <div className="menu-item">🏠 خانه</div>
      <div className="menu-item">📊 گزارشات</div>
      <div className="menu-item">⚙️ تنظیمات</div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="main">
      <h1>خوش آمدی محمد 👋</h1>
      <p>این بخش محتوای اصلی داشبورد است.</p>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
