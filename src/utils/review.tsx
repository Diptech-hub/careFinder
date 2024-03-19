import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

interface MarkdownEditorProps {
  onChange?: (markdown: string) => void;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({ onChange }) => {
  const [markdown, setMarkdown] = useState<string>("");
  const [reviews, setReviews] = useState<string[]>([]);

  const fetchReviews = async () => {
    const reviewsCollection = firebase.firestore().collection("reviews");
    const snapshot = await reviewsCollection.get();
    const reviewList: string[] = [];
    snapshot.forEach((doc) => {
      const data = doc.data();
      reviewList.push(data.review);
    });
    setReviews(reviewList);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const updatedMarkdown = event.target.value;
    setMarkdown(updatedMarkdown);
    if (onChange) {
      onChange(updatedMarkdown);
    }
  };

  const submitReview = async () => {
    try {
      const reviewContent = {
        review: markdown,
      };
      await firebase.firestore().collection("reviews").add(reviewContent);
      setMarkdown("");
      fetchReviews();
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <div className="flex flex-col space-y-4 my-8 mx-4 md:mx-12">
      <strong className="text-2xl md:text-xl text-teal-500 my-2">
        Health Care Information
      </strong>
      <p className="text-sm">
        Welcome to our CareFinder review page! Here, you have the opportunity to
        share your experiences using our website. Your feedback matters greatly
        to us as it helps us improve and better serve our community. Whether you
        had a positive or constructive experience, we encourage you to share
        your thoughts. Your reviews not only help others make informed decisions
        but also contribute to our ongoing commitment to excellence in
        healthcare. Thank you for taking the time to share your feedback with
        us!
      </p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <textarea
          value={markdown}
          onChange={handleInputChange}
          placeholder="More Information about your health care services..."
          className="w-full md:w-1/2 h-32 md:h-40 border border-teal-500 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-teal-700"
        />
        <div className="border border-teal-500 rounded-md p-4 w-full md:w-1/2">
          <ReactMarkdown remarkPlugins={[gfm]}>{markdown}</ReactMarkdown>
        </div>
      </div>
      <button
        onClick={submitReview}
        className="bg-teal-500 hover:bg-teal-700 text-white px-4 py-2 rounded-md text-sm w-full md:w-1/2"
      >
        Submit Review
      </button>
      <div className="mt-8">
        <h2 className="text-2xl md:text-3xl text-teal-500 my-2">Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reviews.map((review, index) => (
            <div key={index} className="border border-teal-500 rounded-md p-4">
              <ReactMarkdown remarkPlugins={[gfm]}>{review}</ReactMarkdown>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarkdownEditor;
