import { Link } from "aleph/react";

export default function Header() {
  return (
    <header
      style={{
        width: "100%",
        height: 80,
        position: "sticky",
        top: 0,
      }}
    >
      <div
        style={{
          margin: "0 auto",
          width: "90%",
          maxWidth: 900,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1>
          <Link
            style={{
              fontSize: 16,
              fontWeight: "bold", 
              cursor: "pointer",  
              color: "#333",
              textDecoration: "none",
              fontFamily: "Inter, system-ui, AppleSystem, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;"
            }}
            to="/"
          >
            Josue.tsx
          </Link>
        </h1>
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <a
            href="https://www.linkedin.com/in/josue-retamozo/"
            style={{
              fontSize: 20,
              cursor: "pointer", 
            }}
          >
            <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g data-name="Layer 2"><g data-name="linkedin"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" />
              <title>Linkedin</title>
              <path d="M15.15 8.4a5.83 5.83 0 0 0-5.85 5.82v5.88a.9.9 0 0 0 .9.9h2.1a.9.9 0 0 0 .9-.9v-5.88a1.94 1.94 0 0 1 2.15-1.93 2 2 0 0 1 1.75 2v5.81a.9.9 0 0 0 .9.9h2.1a.9.9 0 0 0 .9-.9v-5.88a5.83 5.83 0 0 0-5.85-5.82z" /><rect x="3" y="9.3" width="4.5" height="11.7" rx=".9" ry=".9" /><circle cx="5.25" cy="5.25" r="2.25" /></g></g></svg>
          </a>
          <a
            href="https://github.com/joskr2"
            style={{
              fontSize: 20,
              color: "#454545",
              cursor: "pointer", 
            }}
          >
            <svg
              viewBox="0 0 1024 1024"
              style={{
                width: "1em",
                height: "1em",
              }}
              fill="currentColor"
            >
              <title>Github</title>
              <path d="M512-0.001c-282.778 0-512.001 229.581-512.001 512.871 0 226.56 146.688 418.816 350.157 486.606 25.6 4.71 34.919-11.111 34.919-24.73 0-12.134-0.409-44.442-0.666-87.193-142.439 30.976-172.493-68.761-172.493-68.761-23.245-59.29-56.832-75.059-56.832-75.059-46.489-31.744 3.533-31.129 3.533-31.129 51.354 3.584 78.388 52.838 78.388 52.838 45.671 78.336 119.86 55.705 148.992 42.599 4.71-33.126 17.92-55.705 32.563-68.506-113.664-12.954-233.217-56.986-233.217-253.492 0-55.962 19.968-101.785 52.685-137.626-5.274-12.954-22.835-65.126 5.017-135.681 0 0 43.008-13.824 140.8 52.531 38.411-10.894 82.534-17.188 128.116-17.255h0.038c43.52 0.205 87.297 5.888 128.205 17.255 97.741-66.355 140.646-52.583 140.646-52.583 27.955 70.605 10.343 122.778 5.12 135.731 32.768 35.84 52.633 81.664 52.633 137.626 0 197.018-119.757 240.384-233.78 253.082 18.38 15.821 34.714 47.104 34.714 94.977 0 68.506-0.614 123.853-0.614 140.646 0 13.722 9.216 29.696 35.226 24.678 205.067-70.281 349.85-261.406 349.85-486.346 0-0.073 0-0.146 0-0.22v0.012c0-283.29-229.274-512.871-512.001-512.871z" />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
}
