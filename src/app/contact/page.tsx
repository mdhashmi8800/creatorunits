"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useToast } from "@/context/ToastContext";

export default function ContactPage() {
  const { showToast } = useToast();
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      showToast("Please fill in all required fields.", "warning");
      return;
    }

    if (message.length < 10) {
      showToast("Message must be at least 10 characters.", "warning");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        showToast(data.message || "Message sent successfully!", "success");
      } else {
        showToast(data.error || "Something went wrong. Please try again.", "error");
      }
    } catch {
      showToast("Network error. Please check your connection and try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main className="main-content section" id="main-content">
        <div className="container" style={{ maxWidth: "600px" }}>
          <h1 className="mb-2 text-center">Contact Us</h1>
          <p className="text-center text-muted mb-6">
            Have questions, feedback, or tool ideas? Drop us a line below.
          </p>

          {submitted ? (
            <div
              className="card text-center"
              style={{
                backgroundColor: "var(--success-light)",
                borderColor: "var(--success)",
                borderStyle: "solid",
                padding: "2.5rem 1.5rem"
              }}
              role="status"
            >
              <span style={{ fontSize: "2.5rem", display: "block", marginBottom: "0.5rem" }} aria-hidden="true">✉️</span>
              <h3 style={{ color: "var(--success)", marginBottom: "0.5rem" }}>Thank You!</h3>
              <p style={{ margin: 0, fontSize: "0.95rem" }}>
                We have received your message. We will respond to your query within 24 hours.
              </p>
              <button
                className="btn btn-secondary btn-sm"
                style={{ marginTop: "1.5rem" }}
                onClick={() => {
                  setName("");
                  setEmail("");
                  setSubject("");
                  setMessage("");
                  setSubmitted(false);
                }}
                aria-label="Send another message"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card flex flex-col gap-4" style={{ borderStyle: "solid" }} noValidate>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" htmlFor="contact-name">Your Name (Required)</label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                  placeholder="Jane Smith"
                  required
                  minLength={2}
                  maxLength={100}
                  autoComplete="name"
                  aria-required="true"
                />
              </div>

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" htmlFor="contact-email">Email Address (Required)</label>
                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  placeholder="jane@example.com"
                  required
                  autoComplete="email"
                  aria-required="true"
                />
              </div>

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="form-control"
                  placeholder="Tool Suggestion, Partnership, Bug Report"
                />
              </div>

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" htmlFor="contact-message">Message (Required)</label>
                <textarea
                  id="contact-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="form-control"
                  placeholder="Write your message details..."
                  style={{ height: "140px" }}
                  required
                  minLength={10}
                  maxLength={5000}
                  aria-required="true"
                />
              </div>

              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ marginTop: "0.5rem" }}
                disabled={loading}
                aria-label={loading ? "Sending message..." : "Send message"}
              >
                {loading ? "Sending..." : "✉️ Send Message"}
              </button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
