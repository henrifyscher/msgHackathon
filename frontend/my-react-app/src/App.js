import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>Dashboard - NiceAdmin Bootstrap Template</title>
  <meta content="" name="description" />
  <meta content="" name="keywords" />
  {/* Favicons */}
  <link href="assets/img/favicon.png" rel="icon" />
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
  {/* Google Fonts */}
  <link href="https://fonts.gstatic.com" rel="preconnect" />
  <link
    href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
    rel="stylesheet"
  />
  {/* Vendor CSS Files */}
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
  <link
    href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
    rel="stylesheet"
  />
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
  <link href="assets/vendor/quill/quill.snow.css" rel="stylesheet" />
  <link href="assets/vendor/quill/quill.bubble.css" rel="stylesheet" />
  <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
  <link href="assets/vendor/simple-datatables/style.css" rel="stylesheet" />
  {/* Template Main CSS File */}
  <link href="assets/css/style.css" rel="stylesheet" />
  {/* =======================================================
  * Template Name: NiceAdmin
  * Template URL: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/
  * Updated: Apr 20 2024 with Bootstrap v5.3.3
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== */}
  {/* ======= Header ======= */}
  <header id="header" className="header fixed-top d-flex align-items-center">
    <div className="d-flex align-items-center justify-content-between">
      <a href="index.html" className="logo d-flex align-items-center">
        <img src="assets/img/logo.png" alt="" />
        <span className="d-none d-lg-block">NiceAdmin</span>
      </a>
      <i className="bi bi-list toggle-sidebar-btn" />
    </div>
    {/* End Logo */}
    <div className="search-bar">
      <form
        className="search-form d-flex align-items-center"
        method="POST"
        action="#"
      >
        <input
          type="text"
          name="query"
          placeholder="Search"
          title="Enter search keyword"
        />
        <button type="submit" title="Search">
          <i className="bi bi-search" />
        </button>
      </form>
    </div>
    {/* End Search Bar */}
    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">
        <li className="nav-item d-block d-lg-none">
          <a className="nav-link nav-icon search-bar-toggle " href="#">
            <i className="bi bi-search" />
          </a>
        </li>
        {/* End Search Icon*/}
        <li className="nav-item dropdown">
          <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
            <i className="bi bi-bell" />
            <span className="badge bg-primary badge-number">4</span>
          </a>
          {/* End Notification Icon */}
          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
            <li className="dropdown-header">
              You have 4 new notifications
              <a href="#">
                <span className="badge rounded-pill bg-primary p-2 ms-2">
                  View all
                </span>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="notification-item">
              <i className="bi bi-exclamation-circle text-warning" />
              <div>
                <h4>Lorem Ipsum</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>30 min. ago</p>
              </div>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="notification-item">
              <i className="bi bi-x-circle text-danger" />
              <div>
                <h4>Atque rerum nesciunt</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>1 hr. ago</p>
              </div>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="notification-item">
              <i className="bi bi-check-circle text-success" />
              <div>
                <h4>Sit rerum fuga</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>2 hrs. ago</p>
              </div>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="notification-item">
              <i className="bi bi-info-circle text-primary" />
              <div>
                <h4>Dicta reprehenderit</h4>
                <p>Quae dolorem earum veritatis oditseno</p>
                <p>4 hrs. ago</p>
              </div>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="dropdown-footer">
              <a href="#">Show all notifications</a>
            </li>
          </ul>
          {/* End Notification Dropdown Items */}
        </li>
        {/* End Notification Nav */}
        <li className="nav-item dropdown">
          <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
            <i className="bi bi-chat-left-text" />
            <span className="badge bg-success badge-number">3</span>
          </a>
          {/* End Messages Icon */}
          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
            <li className="dropdown-header">
              You have 3 new messages
              <a href="#">
                <span className="badge rounded-pill bg-primary p-2 ms-2">
                  View all
                </span>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="message-item">
              <a href="#">
                <img
                  src="assets/img/messages-1.jpg"
                  alt=""
                  className="rounded-circle"
                />
                <div>
                  <h4>Maria Hudson</h4>
                  <p>
                    Velit asperiores et ducimus soluta repudiandae labore
                    officia est ut...
                  </p>
                  <p>4 hrs. ago</p>
                </div>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="message-item">
              <a href="#">
                <img
                  src="assets/img/messages-2.jpg"
                  alt=""
                  className="rounded-circle"
                />
                <div>
                  <h4>Anna Nelson</h4>
                  <p>
                    Velit asperiores et ducimus soluta repudiandae labore
                    officia est ut...
                  </p>
                  <p>6 hrs. ago</p>
                </div>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="message-item">
              <a href="#">
                <img
                  src="assets/img/messages-3.jpg"
                  alt=""
                  className="rounded-circle"
                />
                <div>
                  <h4>David Muldon</h4>
                  <p>
                    Velit asperiores et ducimus soluta repudiandae labore
                    officia est ut...
                  </p>
                  <p>8 hrs. ago</p>
                </div>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="dropdown-footer">
              <a href="#">Show all messages</a>
            </li>
          </ul>
          {/* End Messages Dropdown Items */}
        </li>
        {/* End Messages Nav */}
        <li className="nav-item dropdown pe-3">
          <a
            className="nav-link nav-profile d-flex align-items-center pe-0"
            href="#"
            data-bs-toggle="dropdown"
          >
            <img
              src="assets/img/profile-img.jpg"
              alt="Profile"
              className="rounded-circle"
            />
            <span className="d-none d-md-block dropdown-toggle ps-2">
              K. Anderson
            </span>
          </a>
          {/* End Profile Iamge Icon */}
          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
            <li className="dropdown-header">
              <h6>Kevin Anderson</h6>
              <span>Web Designer</span>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a
                className="dropdown-item d-flex align-items-center"
                href="users-profile.html"
              >
                <i className="bi bi-person" />
                <span>My Profile</span>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a
                className="dropdown-item d-flex align-items-center"
                href="users-profile.html"
              >
                <i className="bi bi-gear" />
                <span>Account Settings</span>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a
                className="dropdown-item d-flex align-items-center"
                href="pages-faq.html"
              >
                <i className="bi bi-question-circle" />
                <span>Need Help?</span>
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <i className="bi bi-box-arrow-right" />
                <span>Sign Out</span>
              </a>
            </li>
          </ul>
          {/* End Profile Dropdown Items */}
        </li>
        {/* End Profile Nav */}
      </ul>
    </nav>
    {/* End Icons Navigation */}
  </header>
  {/* End Header */}
  {/* ======= Sidebar ======= */}
  <aside id="sidebar" className="sidebar">
    <ul className="sidebar-nav" id="sidebar-nav">
      <li className="nav-item">
        <a className="nav-link " href="index.html">
          <i className="bi bi-grid" />
          <span>Dashboard</span>
        </a>
      </li>
      {/* End Dashboard Nav */}
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          data-bs-target="#components-nav"
          data-bs-toggle="collapse"
          href="#"
        >
          <i className="bi bi-menu-button-wide" />
          <span>Components</span>
          <i className="bi bi-chevron-down ms-auto" />
        </a>
        <ul
          id="components-nav"
          className="nav-content collapse "
          data-bs-parent="#sidebar-nav"
        >
          <li>
            <a href="components-alerts.html">
              <i className="bi bi-circle" />
              <span>Alerts</span>
            </a>
          </li>
          <li>
            <a href="components-accordion.html">
              <i className="bi bi-circle" />
              <span>Accordion</span>
            </a>
          </li>
          <li>
            <a href="components-badges.html">
              <i className="bi bi-circle" />
              <span>Badges</span>
            </a>
          </li>
          <li>
            <a href="components-breadcrumbs.html">
              <i className="bi bi-circle" />
              <span>Breadcrumbs</span>
            </a>
          </li>
          <li>
            <a href="components-buttons.html">
              <i className="bi bi-circle" />
              <span>Buttons</span>
            </a>
          </li>
          <li>
            <a href="components-cards.html">
              <i className="bi bi-circle" />
              <span>Cards</span>
            </a>
          </li>
          <li>
            <a href="components-carousel.html">
              <i className="bi bi-circle" />
              <span>Carousel</span>
            </a>
          </li>
          <li>
            <a href="components-list-group.html">
              <i className="bi bi-circle" />
              <span>List group</span>
            </a>
          </li>
          <li>
            <a href="components-modal.html">
              <i className="bi bi-circle" />
              <span>Modal</span>
            </a>
          </li>
          <li>
            <a href="components-tabs.html">
              <i className="bi bi-circle" />
              <span>Tabs</span>
            </a>
          </li>
          <li>
            <a href="components-pagination.html">
              <i className="bi bi-circle" />
              <span>Pagination</span>
            </a>
          </li>
          <li>
            <a href="components-progress.html">
              <i className="bi bi-circle" />
              <span>Progress</span>
            </a>
          </li>
          <li>
            <a href="components-spinners.html">
              <i className="bi bi-circle" />
              <span>Spinners</span>
            </a>
          </li>
          <li>
            <a href="components-tooltips.html">
              <i className="bi bi-circle" />
              <span>Tooltips</span>
            </a>
          </li>
        </ul>
      </li>
      {/* End Components Nav */}
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          data-bs-target="#forms-nav"
          data-bs-toggle="collapse"
          href="#"
        >
          <i className="bi bi-journal-text" />
          <span>Forms</span>
          <i className="bi bi-chevron-down ms-auto" />
        </a>
        <ul
          id="forms-nav"
          className="nav-content collapse "
          data-bs-parent="#sidebar-nav"
        >
          <li>
            <a href="forms-elements.html">
              <i className="bi bi-circle" />
              <span>Form Elements</span>
            </a>
          </li>
          <li>
            <a href="forms-layouts.html">
              <i className="bi bi-circle" />
              <span>Form Layouts</span>
            </a>
          </li>
          <li>
            <a href="forms-editors.html">
              <i className="bi bi-circle" />
              <span>Form Editors</span>
            </a>
          </li>
          <li>
            <a href="forms-validation.html">
              <i className="bi bi-circle" />
              <span>Form Validation</span>
            </a>
          </li>
        </ul>
      </li>
      {/* End Forms Nav */}
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          data-bs-target="#tables-nav"
          data-bs-toggle="collapse"
          href="#"
        >
          <i className="bi bi-layout-text-window-reverse" />
          <span>Tables</span>
          <i className="bi bi-chevron-down ms-auto" />
        </a>
        <ul
          id="tables-nav"
          className="nav-content collapse "
          data-bs-parent="#sidebar-nav"
        >
          <li>
            <a href="tables-general.html">
              <i className="bi bi-circle" />
              <span>General Tables</span>
            </a>
          </li>
          <li>
            <a href="tables-data.html">
              <i className="bi bi-circle" />
              <span>Data Tables</span>
            </a>
          </li>
        </ul>
      </li>
      {/* End Tables Nav */}
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          data-bs-target="#charts-nav"
          data-bs-toggle="collapse"
          href="#"
        >
          <i className="bi bi-bar-chart" />
          <span>Charts</span>
          <i className="bi bi-chevron-down ms-auto" />
        </a>
        <ul
          id="charts-nav"
          className="nav-content collapse "
          data-bs-parent="#sidebar-nav"
        >
          <li>
            <a href="charts-chartjs.html">
              <i className="bi bi-circle" />
              <span>Chart.js</span>
            </a>
          </li>
          <li>
            <a href="charts-apexcharts.html">
              <i className="bi bi-circle" />
              <span>ApexCharts</span>
            </a>
          </li>
          <li>
            <a href="charts-echarts.html">
              <i className="bi bi-circle" />
              <span>ECharts</span>
            </a>
          </li>
        </ul>
      </li>
      {/* End Charts Nav */}
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          data-bs-target="#icons-nav"
          data-bs-toggle="collapse"
          href="#"
        >
          <i className="bi bi-gem" />
          <span>Icons</span>
          <i className="bi bi-chevron-down ms-auto" />
        </a>
        <ul
          id="icons-nav"
          className="nav-content collapse "
          data-bs-parent="#sidebar-nav"
        >
          <li>
            <a href="icons-bootstrap.html">
              <i className="bi bi-circle" />
              <span>Bootstrap Icons</span>
            </a>
          </li>
          <li>
            <a href="icons-remix.html">
              <i className="bi bi-circle" />
              <span>Remix Icons</span>
            </a>
          </li>
          <li>
            <a href="icons-boxicons.html">
              <i className="bi bi-circle" />
              <span>Boxicons</span>
            </a>
          </li>
        </ul>
      </li>
      {/* End Icons Nav */}
      <li className="nav-heading">Pages</li>
      <li className="nav-item">
        <a className="nav-link collapsed" href="users-profile.html">
          <i className="bi bi-person" />
          <span>Profile</span>
        </a>
      </li>
      {/* End Profile Page Nav */}
      <li className="nav-item">
        <a className="nav-link collapsed" href="pages-faq.html">
          <i className="bi bi-question-circle" />
          <span>F.A.Q</span>
        </a>
      </li>
      {/* End F.A.Q Page Nav */}
      <li className="nav-item">
        <a className="nav-link collapsed" href="pages-contact.html">
          <i className="bi bi-envelope" />
          <span>Contact</span>
        </a>
      </li>
      {/* End Contact Page Nav */}
      <li className="nav-item">
        <a className="nav-link collapsed" href="pages-register.html">
          <i className="bi bi-card-list" />
          <span>Register</span>
        </a>
      </li>
      {/* End Register Page Nav */}
      <li className="nav-item">
        <a className="nav-link collapsed" href="pages-login.html">
          <i className="bi bi-box-arrow-in-right" />
          <span>Login</span>
        </a>
      </li>
      {/* End Login Page Nav */}
      <li className="nav-item">
        <a className="nav-link collapsed" href="pages-error-404.html">
          <i className="bi bi-dash-circle" />
          <span>Error 404</span>
        </a>
      </li>
      {/* End Error 404 Page Nav */}
      <li className="nav-item">
        <a className="nav-link collapsed" href="pages-blank.html">
          <i className="bi bi-file-earmark" />
          <span>Blank</span>
        </a>
      </li>
      {/* End Blank Page Nav */}
    </ul>
  </aside>
  {/* End Sidebar*/}
  <main id="main" className="main">
    <div className="pagetitle">
      <h1>Dashboard</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="index.html">Home</a>
          </li>
          <li className="breadcrumb-item active">Dashboard</li>
        </ol>
      </nav>
    </div>
    {/* End Page Title */}
    <section className="section dashboard">
      <div className="row">
        {/* Left side columns */}
        <div className="col-lg-8">
          <div className="row">
            {/* Sales Card */}
            <div className="col-xxl-4 col-md-6">
              <div className="card info-card sales-card">
                <div className="filter">
                  <a className="icon" href="#" data-bs-toggle="dropdown">
                    <i className="bi bi-three-dots" />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Today
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        This Month
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        This Year
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Sales <span>| Today</span>
                  </h5>
                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i className="bi bi-cart" />
                    </div>
                    <div className="ps-3">
                      <h6>145</h6>
                      <span className="text-success small pt-1 fw-bold">
                        12%
                      </span>{" "}
                      <span className="text-muted small pt-2 ps-1">
                        increase
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Sales Card */}
            {/* Revenue Card */}
            <div className="col-xxl-4 col-md-6">
              <div className="card info-card revenue-card">
                <div className="filter">
                  <a className="icon" href="#" data-bs-toggle="dropdown">
                    <i className="bi bi-three-dots" />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Today
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        This Month
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        This Year
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Revenue <span>| This Month</span>
                  </h5>
                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i className="bi bi-currency-dollar" />
                    </div>
                    <div className="ps-3">
                      <h6>$3,264</h6>
                      <span className="text-success small pt-1 fw-bold">
                        8%
                      </span>{" "}
                      <span className="text-muted small pt-2 ps-1">
                        increase
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Revenue Card */}
            {/* Customers Card */}
            <div className="col-xxl-4 col-xl-12">
              <div className="card info-card customers-card">
                <div className="filter">
                  <a className="icon" href="#" data-bs-toggle="dropdown">
                    <i className="bi bi-three-dots" />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Today
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        This Month
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        This Year
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Customers <span>| This Year</span>
                  </h5>
                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i className="bi bi-people" />
                    </div>
                    <div className="ps-3">
                      <h6>1244</h6>
                      <span className="text-danger small pt-1 fw-bold">
                        12%
                      </span>{" "}
                      <span className="text-muted small pt-2 ps-1">
                        decrease
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Customers Card */}
            {/* Reports */}
            <div className="col-12">
              <div className="card">
                <div className="filter">
                  <a className="icon" href="#" data-bs-toggle="dropdown">
                    <i className="bi bi-three-dots" />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Today
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        This Month
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        This Year
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Reports <span>/Today</span>
                  </h5>
                  {/* Line Chart */}
                  <div id="reportsChart" />
                  {/* End Line Chart */}
                </div>
              </div>
            </div>
            {/* End Reports */}
            {/* Recent Sales */}
            <div className="col-12">
              <div className="card recent-sales overflow-auto">
                <div className="filter">
                  <a className="icon" href="#" data-bs-toggle="dropdown">
                    <i className="bi bi-three-dots" />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Today
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        This Month
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        This Year
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Recent Sales <span>| Today</span>
                  </h5>
                  <table className="table table-borderless datatable">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Customer</th>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
                          <a href="#">#2457</a>
                        </th>
                        <td>Brandon Jacob</td>
                        <td>
                          <a href="#" className="text-primary">
                            At praesentium minu
                          </a>
                        </td>
                        <td>$64</td>
                        <td>
                          <span className="badge bg-success">Approved</span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <a href="#">#2147</a>
                        </th>
                        <td>Bridie Kessler</td>
                        <td>
                          <a href="#" className="text-primary">
                            Blanditiis dolor omnis similique
                          </a>
                        </td>
                        <td>$47</td>
                        <td>
                          <span className="badge bg-warning">Pending</span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <a href="#">#2049</a>
                        </th>
                        <td>Ashleigh Langosh</td>
                        <td>
                          <a href="#" className="text-primary">
                            At recusandae consectetur
                          </a>
                        </td>
                        <td>$147</td>
                        <td>
                          <span className="badge bg-success">Approved</span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <a href="#">#2644</a>
                        </th>
                        <td>Angus Grady</td>
                        <td>
                          <a href="#" className="text-primar">
                            Ut voluptatem id earum et
                          </a>
                        </td>
                        <td>$67</td>
                        <td>
                          <span className="badge bg-danger">Rejected</span>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <a href="#">#2644</a>
                        </th>
                        <td>Raheem Lehner</td>
                        <td>
                          <a href="#" className="text-primary">
                            Sunt similique distinctio
                          </a>
                        </td>
                        <td>$165</td>
                        <td>
                          <span className="badge bg-success">Approved</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* End Recent Sales */}
            {/* Top Selling */}
            <div className="col-12">
              <div className="card top-selling overflow-auto">
                <div className="filter">
                  <a className="icon" href="#" data-bs-toggle="dropdown">
                    <i className="bi bi-three-dots" />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Today
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        This Month
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        This Year
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-body pb-0">
                  <h5 className="card-title">
                    Top Selling <span>| Today</span>
                  </h5>
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th scope="col">Preview</th>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Sold</th>
                        <th scope="col">Revenue</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
                          <a href="#">
                            <img src="assets/img/product-1.jpg" alt="" />
                          </a>
                        </th>
                        <td>
                          <a href="#" className="text-primary fw-bold">
                            Ut inventore ipsa voluptas nulla
                          </a>
                        </td>
                        <td>$64</td>
                        <td className="fw-bold">124</td>
                        <td>$5,828</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <a href="#">
                            <img src="assets/img/product-2.jpg" alt="" />
                          </a>
                        </th>
                        <td>
                          <a href="#" className="text-primary fw-bold">
                            Exercitationem similique doloremque
                          </a>
                        </td>
                        <td>$46</td>
                        <td className="fw-bold">98</td>
                        <td>$4,508</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <a href="#">
                            <img src="assets/img/product-3.jpg" alt="" />
                          </a>
                        </th>
                        <td>
                          <a href="#" className="text-primary fw-bold">
                            Doloribus nisi exercitationem
                          </a>
                        </td>
                        <td>$59</td>
                        <td className="fw-bold">74</td>
                        <td>$4,366</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <a href="#">
                            <img src="assets/img/product-4.jpg" alt="" />
                          </a>
                        </th>
                        <td>
                          <a href="#" className="text-primary fw-bold">
                            Officiis quaerat sint rerum error
                          </a>
                        </td>
                        <td>$32</td>
                        <td className="fw-bold">63</td>
                        <td>$2,016</td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <a href="#">
                            <img src="assets/img/product-5.jpg" alt="" />
                          </a>
                        </th>
                        <td>
                          <a href="#" className="text-primary fw-bold">
                            Sit unde debitis delectus repellendus
                          </a>
                        </td>
                        <td>$79</td>
                        <td className="fw-bold">41</td>
                        <td>$3,239</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* End Top Selling */}
          </div>
        </div>
        {/* End Left side columns */}
        {/* Right side columns */}
        <div className="col-lg-4">
          {/* Recent Activity */}
          <div className="card">
            <div className="filter">
              <a className="icon" href="#" data-bs-toggle="dropdown">
                <i className="bi bi-three-dots" />
              </a>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li className="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Today
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    This Month
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    This Year
                  </a>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <h5 className="card-title">
                Recent Activity <span>| Today</span>
              </h5>
              <div className="activity">
                <div className="activity-item d-flex">
                  <div className="activite-label">32 min</div>
                  <i className="bi bi-circle-fill activity-badge text-success align-self-start" />
                  <div className="activity-content">
                    Quia quae rerum{" "}
                    <a href="#" className="fw-bold text-dark">
                      explicabo officiis
                    </a>{" "}
                    beatae
                  </div>
                </div>
                {/* End activity item*/}
                <div className="activity-item d-flex">
                  <div className="activite-label">56 min</div>
                  <i className="bi bi-circle-fill activity-badge text-danger align-self-start" />
                  <div className="activity-content">
                    Voluptatem blanditiis blanditiis eveniet
                  </div>
                </div>
                {/* End activity item*/}
                <div className="activity-item d-flex">
                  <div className="activite-label">2 hrs</div>
                  <i className="bi bi-circle-fill activity-badge text-primary align-self-start" />
                  <div className="activity-content">
                    Voluptates corrupti molestias voluptatem
                  </div>
                </div>
                {/* End activity item*/}
                <div className="activity-item d-flex">
                  <div className="activite-label">1 day</div>
                  <i className="bi bi-circle-fill activity-badge text-info align-self-start" />
                  <div className="activity-content">
                    Tempore autem saepe{" "}
                    <a href="#" className="fw-bold text-dark">
                      occaecati voluptatem
                    </a>{" "}
                    tempore
                  </div>
                </div>
                {/* End activity item*/}
                <div className="activity-item d-flex">
                  <div className="activite-label">2 days</div>
                  <i className="bi bi-circle-fill activity-badge text-warning align-self-start" />
                  <div className="activity-content">
                    Est sit eum reiciendis exercitationem
                  </div>
                </div>
                {/* End activity item*/}
                <div className="activity-item d-flex">
                  <div className="activite-label">4 weeks</div>
                  <i className="bi bi-circle-fill activity-badge text-muted align-self-start" />
                  <div className="activity-content">
                    Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
                  </div>
                </div>
                {/* End activity item*/}
              </div>
            </div>
          </div>
          {/* End Recent Activity */}
          {/* Budget Report */}
          <div className="card">
            <div className="filter">
              <a className="icon" href="#" data-bs-toggle="dropdown">
                <i className="bi bi-three-dots" />
              </a>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li className="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Today
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    This Month
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    This Year
                  </a>
                </li>
              </ul>
            </div>
            <div className="card-body pb-0">
              <h5 className="card-title">
                Budget Report <span>| This Month</span>
              </h5>
              <div
                id="budgetChart"
                style={{ minHeight: 400 }}
                className="echart"
              />
            </div>
          </div>
          {/* End Budget Report */}
          {/* Website Traffic */}
          <div className="card">
            <div className="filter">
              <a className="icon" href="#" data-bs-toggle="dropdown">
                <i className="bi bi-three-dots" />
              </a>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li className="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Today
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    This Month
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    This Year
                  </a>
                </li>
              </ul>
            </div>
            <div className="card-body pb-0">
              <h5 className="card-title">
                Website Traffic <span>| Today</span>
              </h5>
              <div
                id="trafficChart"
                style={{ minHeight: 400 }}
                className="echart"
              />
            </div>
          </div>
          {/* End Website Traffic */}
          {/* News & Updates Traffic */}
          <div className="card">
            <div className="filter">
              <a className="icon" href="#" data-bs-toggle="dropdown">
                <i className="bi bi-three-dots" />
              </a>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li className="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Today
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    This Month
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    This Year
                  </a>
                </li>
              </ul>
            </div>
            <div className="card-body pb-0">
              <h5 className="card-title">
                News &amp; Updates <span>| Today</span>
              </h5>
              <div className="news">
                <div className="post-item clearfix">
                  <img src="assets/img/news-1.jpg" alt="" />
                  <h4>
                    <a href="#">Nihil blanditiis at in nihil autem</a>
                  </h4>
                  <p>
                    Sit recusandae non aspernatur laboriosam. Quia enim eligendi
                    sed ut harum...
                  </p>
                </div>
                <div className="post-item clearfix">
                  <img src="assets/img/news-2.jpg" alt="" />
                  <h4>
                    <a href="#">Quidem autem et impedit</a>
                  </h4>
                  <p>
                    Illo nemo neque maiores vitae officiis cum eum turos elan
                    dries werona nande...
                  </p>
                </div>
                <div className="post-item clearfix">
                  <img src="assets/img/news-3.jpg" alt="" />
                  <h4>
                    <a href="#">
                      Id quia et et ut maxime similique occaecati ut
                    </a>
                  </h4>
                  <p>
                    Fugiat voluptas vero eaque accusantium eos. Consequuntur sed
                    ipsam et totam...
                  </p>
                </div>
                <div className="post-item clearfix">
                  <img src="assets/img/news-4.jpg" alt="" />
                  <h4>
                    <a href="#">Laborum corporis quo dara net para</a>
                  </h4>
                  <p>
                    Qui enim quia optio. Eligendi aut asperiores enim
                    repellendusvel rerum cuder...
                  </p>
                </div>
                <div className="post-item clearfix">
                  <img src="assets/img/news-5.jpg" alt="" />
                  <h4>
                    <a href="#">Et dolores corrupti quae illo quod dolor</a>
                  </h4>
                  <p>
                    Odit ut eveniet modi reiciendis. Atque cupiditate libero
                    beatae dignissimos eius...
                  </p>
                </div>
              </div>
              {/* End sidebar recent posts*/}
            </div>
          </div>
          {/* End News & Updates */}
        </div>
        {/* End Right side columns */}
      </div>
    </section>
  </main>
  {/* End #main */}
  {/* ======= Footer ======= */}
  <footer id="footer" className="footer">
    <div className="copyright">
      © Copyright{" "}
      <strong>
        <span>NiceAdmin</span>
      </strong>
      . All Rights Reserved
    </div>
    <div className="credits">
      {/* All the links in the footer should remain intact. */}
      {/* You can delete the links only if you purchased the pro version. */}
      {/* Licensing information: https://bootstrapmade.com/license/ */}
      {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ */}
      Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
    </div>
  </footer>
  {/* End Footer */}
  <a
    href="#"
    className="back-to-top d-flex align-items-center justify-content-center"
  >
    <i className="bi bi-arrow-up-short" />
  </a>
  {/* Vendor JS Files */}
  {/* Template Main JS File */}
</>

  );
}

export default App;
