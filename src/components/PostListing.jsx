import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PostListings } from "../utils";

export default function PostListing() {
  const [showMoreIndex, setShowMoreIndex] = useState(null);

  const handleShowMore = (index) => {
    setShowMoreIndex(index === showMoreIndex ? null : index);
  };

  return (
    <>
      <div className="blogs">
        {PostListings.map((post, index) => (
          <div key={index} className="container">
            <div className="row">
              <div className="color">
                <div className="d-flex align-items-center mt-4">
                  <h6 className="me-5" style={{ color: "#4f4f4f" }}>
                    {post.dateId}
                    <i className="fa-solid fa-calendar-days ms-2"></i>
                  </h6>
                  <h5>
                    {post.name}{" "}
                    <i
                      className="fa-solid fa-circle-check"
                      style={{ color: "green" }}
                    >
                      <span className="ms-2" style={{ fontSize: "15px" }}>
                        seen
                      </span>
                    </i>
                  </h5>
                </div>
                {showMoreIndex === index ? (
                  <>
                    <h2>
                      <span
                        style={{
                          color: "#800080",
                          fontSize: "35px",
                          fontWeight: "600",
                        }}
                      >
                        {post.title}
                      </span>{" "}
                      <span
                        style={{
                          color: "#B76E79",
                          fontSize: "35px",
                          fontWeight: "600",
                        }}
                      >
                        {post.title1}
                      </span>
                    </h2>
                    <p className="content-1">{post.body}</p>
                  </>
                ) : (
                  <h2 className="mb-3">
                    <span
                      style={{
                        color: "#800080",
                        fontSize: "35px",
                        fontWeight: "600",
                      }}
                    >
                      {post.title}
                    </span>{" "}
                    <span
                      style={{
                        color: "#B76E79",
                        fontSize: "35px",
                        fontWeight: "600",
                      }}
                    >
                      {post.title1}
                    </span>
                  </h2>
                )}
              </div>
            </div>
            <div className="text-start mt-3 mb-5">
              <button className="btn-6" onClick={() => handleShowMore(index)}>
                {showMoreIndex === index ? (
                  <>
                    <div>
                      Hide <i class="fa-solid fa-eye-slash"></i>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      Show <i class="fa-solid fa-eye"></i>{" "}
                    </div>
                  </>
                )}
              </button>
            </div>
          </div>
        ))}

        <footer>
          <div className="text-1 text-center justify-content-center align-items-center d-flex">
            <h5>Looking for more</h5>
            <a href="" className="btn-3 ms-5"> Archive</a>
          </div>
          <div className="text-center">
            <ul className="list-unstyled d-flex justify-content-center mt-5 ">
              <li>
                <i class="fa-brands fa-twitter pe-4"></i>
              </li>
              <li>
                <i class="fa-brands fa-instagram pe-4"></i>
              </li>
              <li>
                <i class="fa-solid fa-basketball"></i>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}
