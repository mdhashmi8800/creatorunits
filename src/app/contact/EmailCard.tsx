"use client";

import React from "react";
import { useToast } from "@/context/ToastContext";
import styles from "./contact.module.css";

interface EmailCardProps {
  email: string;
}

export default function EmailCard({ email }: EmailCardProps) {
  const { showToast } = useToast();

  const handleCopyAndEmail = (e: React.MouseEvent<HTMLAnchorElement>) => {
    try {
      navigator.clipboard.writeText(email);
      showToast("Email address copied to clipboard!", "success");
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <a 
      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleCopyAndEmail}
      className={`${styles.card} ${styles.emailCard}`}
      aria-label={`Email ${email} (opens Gmail and copies address)`}
    >
      <div className={styles.mStripe}>
        <div className={styles.mStripeLightBlue}></div>
        <div className={styles.mStripeDarkBlue}></div>
        <div className={styles.mStripeRed}></div>
      </div>
      
      <div className={styles.cardLeft}>
        <div className={styles.iconContainer}>
          <svg 
            className={styles.icon} 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </div>
        <div className={styles.cardDetails}>
          <span className={styles.cardLabel}>Email</span>
          <strong className={styles.cardValue}>{email}</strong>
          <span className={styles.cardSub}>Send us a direct message</span>
        </div>
      </div>

      <span className={styles.arrow} aria-hidden="true">&rarr;</span>
    </a>
  );
}
