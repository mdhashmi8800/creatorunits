"use client";

import React, { useState } from "react";
import { useToast } from "@/context/ToastContext";
import styles from "./contact.module.css";

export default function ContactForm() {
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

  if (submitted) {
    return (
      <div className={`${styles.formCard} ${styles.successCard}`} role="status">
        <div className={styles.formCardHeaderStripe}></div>
        <span className={styles.successIcon} aria-hidden="true">✉️</span>
        <h3 className={styles.successTitle}>Thank You!</h3>
        <p className={styles.successText}>
          We have received your message. We usually respond to queries as soon as possible.
        </p>
        <button
          className={styles.resetBtn}
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
    );
  }

  return (
    <div className={styles.formCard}>
      <div className={styles.formCardHeaderStripe}></div>
      <h2 className={styles.formTitle}>Send a Message</h2>
      <p className={styles.formDesc}>
        Use the form below if you prefer to drop us a quick note.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="contact-name">
            Your Name <span style={{ color: "var(--error)" }}>*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.formControl}
            placeholder="Jane Smith"
            required
            minLength={2}
            maxLength={100}
            autoComplete="name"
            aria-required="true"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="contact-email">
            Email Address <span style={{ color: "var(--error)" }}>*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.formControl}
            placeholder="jane@example.com"
            required
            autoComplete="email"
            aria-required="true"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="contact-subject">
            Subject
          </label>
          <input
            id="contact-subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className={styles.formControl}
            placeholder="Tool suggestion, partnership, bug report..."
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="contact-message">
            Message <span style={{ color: "var(--error)" }}>*</span>
          </label>
          <textarea
            id="contact-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={styles.formControl}
            placeholder="Write your message details..."
            style={{ height: "140px", resize: "vertical" }}
            required
            minLength={10}
            maxLength={5000}
            aria-required="true"
          />
        </div>

        <button 
          type="submit" 
          className={styles.submitBtn}
          disabled={loading}
          aria-label={loading ? "Sending message..." : "Send message"}
        >
          {loading ? "Sending..." : "✉️ Send Message"}
        </button>
      </form>
    </div>
  );
}
