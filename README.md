<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Food Delivery Website</title>
  <style>
   
   .body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }


  .header {
      background-color: #333;
      color: #fff;
      padding: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

   . nav ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
    }

  .nav li {
      margin-left: 20px;
    }

  .nav a {
      color: #fff;
      text-decoration: none;
    }

    /* Main Content Styles */
  .main {
      max-width: 1200px;
      margin: 0 auto;
      padding: 40px;
    }

  .section-title {
      font-size: 24px;
      margin-bottom: 20px;
    }

    /* Project Structure Styles */
  .project-structure {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

  .project-structure > div {
      flex-basis: 48%;
      margin-bottom: 40px;
    }

  .project-structure h3 {
      font-size: 18px;
      margin-bottom: 10px;
    }

  .project-structure pre {
      background-color: #f5f5f5;
      padding: 20px;
      border-radius: 5px;
      overflow-x: auto;
    }

    /* Footer Styles */
  .footer {
      background-color: #333;
      color: #fff;
      text-align: center;
      padding: 20px;
    }
  </style>
</head>
<body>
  <header>
    <h1>Food Delivery Website</h1>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Orders</a></li>
        <li><a href="#">Admin</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section>
      <h2 class="section-title">Project Structure</h2>
      <div class="project-structure">
        <div>
          <h3>Backend</h3>
          <pre>
cd ../frontend
npm run dev
          </pre>
        </div>
        <div>
          <h3>Environment Variables</h3>
          <pre>
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
          </pre>
        </div>
        <div>
          <h3>Usage</h3>
          <pre>
Visit http://localhost:3000 to view the application.
Register and log in to start browsing and ordering food items.
Admin users can access the admin panel to manage orders, users, and food items.
          </pre>
        </div>
        <div>
          <h3>Project Structure</h3>
          <pre>
food-delivery-website/
├── backend/
├── frontend/
├── .gitignore
└── README.md
          </pre>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <p>&copy; 2024 Food Delivery Website. All rights reserved.</p>
  </footer>
</body>
</html>
