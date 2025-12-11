import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

import SiteNavbar from "./components/SiteNavbar.jsx";
import Home from "./components/Home.jsx";
import Browse from "./components/Browse.jsx";
import SubmitReview from "./components/SubmitReview.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Footer from "./components/Footer.jsx";

import { DISHES } from "./data/dishes";

/* Create or load a local user ID */
function getOrCreateUserId() {
  let userId = localStorage.getItem("userId");
  if (!userId) {
    userId = crypto.randomUUID();
    localStorage.setItem("userId", userId);
  }
  return userId;
}

function App() {
  const currentUserId = getOrCreateUserId();

  const [dishes, setDishes] = useState(() => {
    const saved = localStorage.getItem("dishes");
    return saved ? JSON.parse(saved) : DISHES;
  });

  /* Persist dishes */
  useEffect(() => {
    localStorage.setItem("dishes", JSON.stringify(dishes));
  }, [dishes]);

  function handleAddReview(review) {
    const newDish = {
      id: Date.now(),
      name: review.dish,
      place: review.place,
      type: review.type.trim(),
      rating: review.rating,
      description: review.comment || "User-submitted review.",
      createdAt: Date.now(),
      authorId: currentUserId, // 🔒 ownership
    };

    setDishes((prev) => [newDish, ...prev]);
  }

  function handleDeleteDish(id) {
    setDishes((prev) => prev.filter((dish) => dish.id !== id));
  }

  return (
    <>
      <SiteNavbar />

      <Container className="mt-4 mb-5">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                dishes={dishes}
                onDelete={handleDeleteDish}
                currentUserId={currentUserId}
              />
            }
          />
          <Route
            path="/browse"
            element={
              <Browse
                dishes={dishes}
                onDelete={handleDeleteDish}
                currentUserId={currentUserId}
              />
            }
          />
          <Route
            path="/submit"
            element={<SubmitReview onSubmitReview={handleAddReview} />}
          />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </Container>

      <Footer />
    </>
  );
}

export default App;