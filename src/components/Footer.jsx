export default function Footer() {
    return (
      <footer
        className="text-center mt-5 pt-3 border-top"
        style={{ fontSize: "0.9rem", color: "#666" }}
      >
        <p className="mb-1">© {new Date().getFullYear()} Madison Bites</p>
        <p className="mb-0">Discover the best dishes in Madison, Wisconsin.</p>
      </footer>
    );
  }