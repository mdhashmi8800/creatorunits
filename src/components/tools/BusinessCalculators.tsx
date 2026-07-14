"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useToast } from "@/context/ToastContext";

export default function BusinessCalculators() {
  const params = useParams();
  const { showToast } = useToast();
  const slug = (params?.slug as string) || "youtube-earnings-calculator";

  // State values for various calculators
  // 1. YouTube Earnings
  const [ytViews, setYtViews] = useState<number>(25000);
  const [ytRPM, setYtRPM] = useState<number>(4.5);

  // 2. Instagram Earnings
  const [igFollowers, setIgFollowers] = useState<number>(50000);
  const [igEngagement, setIgEngagement] = useState<number>(3.2);

  // 3. TikTok Earnings
  const [ttFollowers, setTtFollowers] = useState<number>(100000);
  const [ttViews, setTtViews] = useState<number>(30000);
  const [ttRPM, setTtRPM] = useState<number>(0.8);

  // 4. CPM Calculator (calculates missing field out of: Cost, Impressions, CPM)
  const [cpmCost, setCpmCost] = useState<string>("500");
  const [cpmImpressions, setCpmImpressions] = useState<string>("100000");
  const [cpmValue, setCpmValue] = useState<string>("5");
  const [cpmCalcMode, setCpmCalcMode] = useState<"cpm" | "cost" | "impressions">("cpm");

  // 5. RPM Calculator (calculates missing field out of: Earnings, Views, RPM)
  const [rpmEarnings, setRpmEarnings] = useState<string>("400");
  const [rpmViews, setRpmViews] = useState<string>("100000");
  const [rpmValue, setRpmValue] = useState<string>("4");
  const [rpmCalcMode, setRpmCalcMode] = useState<"rpm" | "earnings" | "views">("rpm");

  // 6. ROI Calculator
  const [roiInvested, setRoiInvested] = useState<string>("1000");
  const [roiReturned, setRoiReturned] = useState<string>("1500");

  // 7. Affiliate Commission Calculator
  const [affPrice, setAffPrice] = useState<string>("99");
  const [affRate, setAffRate] = useState<string>("15");
  const [affSales, setAffSales] = useState<string>("50");

  // 8. Profit Calculator
  const [profitCost, setProfitCost] = useState<string>("30");
  const [profitPrice, setProfitPrice] = useState<string>("75");
  const [profitQty, setProfitQty] = useState<string>("100");

  // 9. Discount Calculator
  const [discPrice, setDiscPrice] = useState<string>("120");
  const [discPercent, setDiscPercent] = useState<string>("20");
  const [discTax, setDiscTax] = useState<string>("8");

  // 10. Currency Converter
  const [currAmount, setCurrAmount] = useState<string>("100");
  const [currSource, setCurrSource] = useState<string>("USD");
  const [currTarget, setCurrTarget] = useState<string>("EUR");

  const exchangeRates: Record<string, Record<string, number>> = {
    USD: { USD: 1, EUR: 0.92, GBP: 0.78, CAD: 1.36, AUD: 1.5, INR: 83.5, JPY: 158.2, CNY: 7.26 },
    EUR: { USD: 1.09, EUR: 1, GBP: 0.85, CAD: 1.48, AUD: 1.63, INR: 90.8, JPY: 172.0, CNY: 7.89 },
    GBP: { USD: 1.28, EUR: 1.18, GBP: 1, CAD: 1.74, AUD: 1.92, INR: 107.1, JPY: 202.8, CNY: 9.3 },
    CAD: { USD: 0.74, EUR: 0.68, GBP: 0.57, CAD: 1, AUD: 1.1, INR: 61.4, JPY: 116.3, CNY: 5.34 },
    AUD: { USD: 0.67, EUR: 0.61, GBP: 0.52, CAD: 0.91, AUD: 1, INR: 55.7, JPY: 105.5, CNY: 4.84 },
    INR: { USD: 0.012, EUR: 0.011, GBP: 0.0093, CAD: 0.016, AUD: 0.018, INR: 1, JPY: 1.9, CNY: 0.087 },
    JPY: { USD: 0.0063, EUR: 0.0058, GBP: 0.0049, CAD: 0.0086, AUD: 0.0095, INR: 0.53, JPY: 1, CNY: 0.046 },
    CNY: { USD: 0.14, EUR: 0.13, GBP: 0.11, CAD: 0.19, AUD: 0.21, INR: 11.5, JPY: 21.8, CNY: 1 }
  };

  const handleCopyResult = (text: string, message: string) => {
    navigator.clipboard.writeText(text);
    showToast(message, "success");
  };

  const formatNumber = (num: number, decimals: number = 2) => {
    return num.toLocaleString(undefined, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  };

  return (
    <div className="card">
      <div className="flex flex-col gap-6">
        
        {/* Render Active Calculator */}

        {/* 1. YOUTUBE EARNINGS CALCULATOR */}
        {slug === "youtube-earnings-calculator" && (
          <div className="flex flex-col gap-6">
            <div className="card" style={{ backgroundColor: "var(--bg-secondary)", borderStyle: "solid" }}>
              <h3 style={{ fontSize: "1.2rem", marginTop: 0, marginBottom: "1rem" }}>YouTube Earnings Estimator</h3>
              
              <div className="flex flex-col gap-4">
                <div className="form-group">
                  <label className="form-label" htmlFor="yt-views-slider">
                    Daily Video Views: <strong>{formatNumber(ytViews, 0)}</strong>
                  </label>
                  <input
                    id="yt-views-slider"
                    type="range"
                    min="1000"
                    max="500000"
                    step="1000"
                    value={ytViews}
                    onChange={(e) => setYtViews(Number(e.target.value))}
                    style={{ width: "100%" }}
                  />
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", color: "var(--text-muted)" }}>
                    <span>1,000</span>
                    <span>250,000</span>
                    <span>500,000</span>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="yt-rpm-slider">
                    Estimated RPM (Revenue Per 1k Views): <strong>${ytRPM.toFixed(2)}</strong>
                  </label>
                  <input
                    id="yt-rpm-slider"
                    type="range"
                    min="0.5"
                    max="25"
                    step="0.1"
                    value={ytRPM}
                    onChange={(e) => setYtRPM(Number(e.target.value))}
                    style={{ width: "100%" }}
                  />
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", color: "var(--text-muted)" }}>
                    <span>$0.50</span>
                    <span>$12.50</span>
                    <span>$25.00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid-cols-3" style={{ gap: "1rem" }}>
              <div className="card text-center" style={{ borderStyle: "solid" }}>
                <span className="text-muted" style={{ fontSize: "0.8rem" }}>Daily Earnings</span>
                <div style={{ fontSize: "1.75rem", fontWeight: "bold", margin: "0.5rem 0", color: "var(--text-primary)" }}>
                  ${formatNumber((ytViews / 1000) * ytRPM)}
                </div>
              </div>
              <div className="card text-center" style={{ borderStyle: "solid" }}>
                <span className="text-muted" style={{ fontSize: "0.8rem" }}>Monthly Earnings</span>
                <div style={{ fontSize: "1.75rem", fontWeight: "bold", margin: "0.5rem 0", color: "var(--text-primary)" }}>
                  ${formatNumber((ytViews / 1000) * ytRPM * 30.4)}
                </div>
              </div>
              <div className="card text-center" style={{ borderStyle: "solid" }}>
                <span className="text-muted" style={{ fontSize: "0.8rem" }}>Yearly Earnings</span>
                <div style={{ fontSize: "1.75rem", fontWeight: "bold", margin: "0.5rem 0", color: "var(--text-primary)" }}>
                  ${formatNumber((ytViews / 1000) * ytRPM * 365)}
                </div>
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <button 
                className="btn btn-secondary btn-sm"
                onClick={() => handleCopyResult(`Estimated YouTube Earnings:\nDaily: $${((ytViews / 1000) * ytRPM).toFixed(2)}\nMonthly: $${((ytViews / 1000) * ytRPM * 30.4).toFixed(2)}\nYearly: $${((ytViews / 1000) * ytRPM * 365).toFixed(2)}`, "Earnings report copied!")}
              >
                📋 Copy Earnings Report
              </button>
            </div>
          </div>
        )}

        {/* 2. INSTAGRAM EARNINGS CALCULATOR */}
        {slug === "instagram-earnings-calculator" && (
          <div className="flex flex-col gap-6">
            <div className="card" style={{ backgroundColor: "var(--bg-secondary)", borderStyle: "solid" }}>
              <h3 style={{ fontSize: "1.2rem", marginTop: 0, marginBottom: "1rem" }}>Instagram Earnings Estimator</h3>
              
              <div className="flex flex-col gap-4">
                <div className="form-group">
                  <label className="form-label" htmlFor="ig-followers-slider">
                    Followers Count: <strong>{formatNumber(igFollowers, 0)}</strong>
                  </label>
                  <input
                    id="ig-followers-slider"
                    type="range"
                    min="1000"
                    max="1000000"
                    step="5000"
                    value={igFollowers}
                    onChange={(e) => setIgFollowers(Number(e.target.value))}
                    style={{ width: "100%" }}
                  />
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", color: "var(--text-muted)" }}>
                    <span>1,000</span>
                    <span>500,000</span>
                    <span>1M</span>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="ig-engagement-slider">
                    Average Engagement Rate: <strong>{igEngagement.toFixed(1)}%</strong>
                  </label>
                  <input
                    id="ig-engagement-slider"
                    type="range"
                    min="0.1"
                    max="15"
                    step="0.1"
                    value={igEngagement}
                    onChange={(e) => setIgEngagement(Number(e.target.value))}
                    style={{ width: "100%" }}
                  />
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", color: "var(--text-muted)" }}>
                    <span>0.1%</span>
                    <span>7.5%</span>
                    <span>15.0%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid-cols-2" style={{ gap: "1rem" }}>
              <div className="card text-center" style={{ borderStyle: "solid" }}>
                <span className="text-muted" style={{ fontSize: "0.8rem" }}>Engagement Per Post</span>
                <div style={{ fontSize: "1.75rem", fontWeight: "bold", margin: "0.5rem 0" }}>
                  {formatNumber((igFollowers * igEngagement) / 100, 0)} engagements
                </div>
              </div>
              <div className="card text-center" style={{ borderStyle: "solid" }}>
                <span className="text-muted" style={{ fontSize: "0.8rem" }}>Estimated Earnings Per Post</span>
                <div style={{ fontSize: "1.75rem", fontWeight: "bold", margin: "0.5rem 0", color: "var(--success-color, #0070f3)" }}>
                  ${formatNumber(igFollowers * 0.005 + (igFollowers * (igEngagement / 100)) * 0.1, 0)} - ${formatNumber(igFollowers * 0.01 + (igFollowers * (igEngagement / 100)) * 0.25, 0)}
                </div>
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <button 
                className="btn btn-secondary btn-sm"
                onClick={() => handleCopyResult(`Estimated Instagram sponsored post rate for ${igFollowers.toLocaleString()} followers and ${igEngagement}% engagement rate: $${formatNumber(igFollowers * 0.005 + (igFollowers * (igEngagement / 100)) * 0.1, 0)} - $${formatNumber(igFollowers * 0.01 + (igFollowers * (igEngagement / 100)) * 0.25, 0)} per post.`, "Earnings estimate copied!")}
              >
                📋 Copy Pricing Estimate
              </button>
            </div>
          </div>
        )}

        {/* 3. TIKTOK EARNINGS CALCULATOR */}
        {slug === "tiktok-earnings-calculator" && (
          <div className="flex flex-col gap-6">
            <div className="card" style={{ backgroundColor: "var(--bg-secondary)", borderStyle: "solid" }}>
              <h3 style={{ fontSize: "1.2rem", marginTop: 0, marginBottom: "1rem" }}>TikTok Earnings Estimator</h3>
              
              <div className="flex flex-col gap-4">
                <div className="form-group">
                  <label className="form-label" htmlFor="tt-followers">Followers Count</label>
                  <input
                    id="tt-followers"
                    type="number"
                    value={ttFollowers}
                    onChange={(e) => setTtFollowers(Math.max(0, Number(e.target.value)))}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="tt-views-slider">
                    Average Views Per Video: <strong>{formatNumber(ttViews, 0)}</strong>
                  </label>
                  <input
                    id="tt-views-slider"
                    type="range"
                    min="1000"
                    max="250000"
                    step="1000"
                    value={ttViews}
                    onChange={(e) => setTtViews(Number(e.target.value))}
                    style={{ width: "100%" }}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="tt-rpm-slider">
                    TikTok Rewards Program RPM (per 1,000 qualified views): <strong>${ttRPM.toFixed(2)}</strong>
                  </label>
                  <input
                    id="tt-rpm-slider"
                    type="range"
                    min="0.1"
                    max="3"
                    step="0.05"
                    value={ttRPM}
                    onChange={(e) => setTtRPM(Number(e.target.value))}
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>

            <div className="grid-cols-2" style={{ gap: "1rem" }}>
              <div className="card text-center" style={{ borderStyle: "solid" }}>
                <span className="text-muted" style={{ fontSize: "0.8rem" }}>Creator Program Earnings Per Video</span>
                <div style={{ fontSize: "1.75rem", fontWeight: "bold", margin: "0.5rem 0", color: "var(--text-primary)" }}>
                  ${formatNumber((ttViews * 0.55 / 1000) * ttRPM)} <span style={{ fontSize: "0.8rem", fontWeight: "normal", color: "var(--text-muted)" }}>(est. 55% qualified views)</span>
                </div>
              </div>
              <div className="card text-center" style={{ borderStyle: "solid" }}>
                <span className="text-muted" style={{ fontSize: "0.8rem" }}>Brand Sponsor Rate Per Post</span>
                <div style={{ fontSize: "1.75rem", fontWeight: "bold", margin: "0.5rem 0", color: "var(--success-color, #0070f3)" }}>
                  ${formatNumber(ttFollowers * 0.002 + ttViews * 0.008, 0)} - ${formatNumber(ttFollowers * 0.005 + ttViews * 0.02, 0)}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. CPM CALCULATOR */}
        {slug === "cpm-calculator" && (
          <div className="flex flex-col gap-5">
            <div className="card" style={{ backgroundColor: "var(--bg-secondary)", borderStyle: "solid" }}>
              <h3 style={{ fontSize: "1.2rem", marginTop: 0, marginBottom: "1rem" }}>CPM Campaign Calculator</h3>
              
              <div className="form-group">
                <label className="form-label" htmlFor="cpm-calc-mode">Select Target Field to Calculate</label>
                <select
                  id="cpm-calc-mode"
                  value={cpmCalcMode}
                  onChange={(e) => setCpmCalcMode(e.target.value as any)}
                  className="form-control form-select"
                >
                  <option value="cpm">Calculate CPM (using Cost and Impressions)</option>
                  <option value="cost">Calculate Total Campaign Cost (using CPM and Impressions)</option>
                  <option value="impressions">Calculate Impressions (using Cost and CPM)</option>
                </select>
              </div>

              <div className="grid-cols-2" style={{ gap: "1rem", marginTop: "1rem" }}>
                {cpmCalcMode !== "cost" && (
                  <div className="form-group">
                    <label className="form-label" htmlFor="cpm-cost">Total Campaign Cost ($)</label>
                    <input
                      id="cpm-cost"
                      type="number"
                      value={cpmCost}
                      onChange={(e) => setCpmCost(e.target.value)}
                      className="form-control"
                    />
                  </div>
                )}

                {cpmCalcMode !== "impressions" && (
                  <div className="form-group">
                    <label className="form-label" htmlFor="cpm-impressions">Total Ad Impressions</label>
                    <input
                      id="cpm-impressions"
                      type="number"
                      value={cpmImpressions}
                      onChange={(e) => setCpmImpressions(e.target.value)}
                      className="form-control"
                    />
                  </div>
                )}

                {cpmCalcMode !== "cpm" && (
                  <div className="form-group">
                    <label className="form-label" htmlFor="cpm-value">CPM Rate ($)</label>
                    <input
                      id="cpm-value"
                      type="number"
                      value={cpmValue}
                      onChange={(e) => setCpmValue(e.target.value)}
                      className="form-control"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="card text-center" style={{ borderStyle: "solid", borderColor: "var(--accent)" }}>
              <span className="text-muted" style={{ fontSize: "0.85rem" }}>Calculation Result</span>
              <div style={{ fontSize: "2rem", fontWeight: "bold", marginTop: "0.5rem", color: "var(--text-primary)" }}>
                {(() => {
                  const cost = parseFloat(cpmCost) || 0;
                  const imps = parseFloat(cpmImpressions) || 0;
                  const cpm = parseFloat(cpmValue) || 0;

                  if (cpmCalcMode === "cpm") {
                    if (imps === 0) return "$0.00 CPM";
                    return `$${formatNumber((cost / imps) * 1000)} CPM`;
                  } else if (cpmCalcMode === "cost") {
                    return `$${formatNumber((imps / 1000) * cpm)} Campaign Cost`;
                  } else {
                    if (cpm === 0) return "0 Impressions";
                    return `${formatNumber((cost / cpm) * 1000, 0)} Impressions`;
                  }
                })()}
              </div>
            </div>
          </div>
        )}

        {/* 5. RPM CALCULATOR */}
        {slug === "rpm-calculator" && (
          <div className="flex flex-col gap-5">
            <div className="card" style={{ backgroundColor: "var(--bg-secondary)", borderStyle: "solid" }}>
              <h3 style={{ fontSize: "1.2rem", marginTop: 0, marginBottom: "1rem" }}>RPM Revenue Calculator</h3>
              
              <div className="form-group">
                <label className="form-label" htmlFor="rpm-calc-mode">Select Target Field to Calculate</label>
                <select
                  id="rpm-calc-mode"
                  value={rpmCalcMode}
                  onChange={(e) => setRpmCalcMode(e.target.value as any)}
                  className="form-control form-select"
                >
                  <option value="rpm">Calculate RPM (using Earnings and Views)</option>
                  <option value="earnings">Calculate Earnings (using RPM and Views)</option>
                  <option value="views">Calculate Views (using Earnings and RPM)</option>
                </select>
              </div>

              <div className="grid-cols-2" style={{ gap: "1rem", marginTop: "1rem" }}>
                {rpmCalcMode !== "earnings" && (
                  <div className="form-group">
                    <label className="form-label" htmlFor="rpm-earnings">Total Earnings ($)</label>
                    <input
                      id="rpm-earnings"
                      type="number"
                      value={rpmEarnings}
                      onChange={(e) => setRpmEarnings(e.target.value)}
                      className="form-control"
                    />
                  </div>
                )}

                {rpmCalcMode !== "views" && (
                  <div className="form-group">
                    <label className="form-label" htmlFor="rpm-views">Total Video/Blog Views</label>
                    <input
                      id="rpm-views"
                      type="number"
                      value={rpmViews}
                      onChange={(e) => setRpmViews(e.target.value)}
                      className="form-control"
                    />
                  </div>
                )}

                {rpmCalcMode !== "rpm" && (
                  <div className="form-group">
                    <label className="form-label" htmlFor="rpm-value">RPM ($)</label>
                    <input
                      id="rpm-value"
                      type="number"
                      value={rpmValue}
                      onChange={(e) => setRpmValue(e.target.value)}
                      className="form-control"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="card text-center" style={{ borderStyle: "solid", borderColor: "var(--accent)" }}>
              <span className="text-muted" style={{ fontSize: "0.85rem" }}>Calculation Result</span>
              <div style={{ fontSize: "2rem", fontWeight: "bold", marginTop: "0.5rem", color: "var(--text-primary)" }}>
                {(() => {
                  const earn = parseFloat(rpmEarnings) || 0;
                  const views = parseFloat(rpmViews) || 0;
                  const rpm = parseFloat(rpmValue) || 0;

                  if (rpmCalcMode === "rpm") {
                    if (views === 0) return "$0.00 RPM";
                    return `$${formatNumber((earn / views) * 1000)} RPM`;
                  } else if (rpmCalcMode === "earnings") {
                    return `$${formatNumber((views / 1000) * rpm)} Revenue`;
                  } else {
                    if (rpm === 0) return "0 Views";
                    return `${formatNumber((earn / rpm) * 1000, 0)} Views`;
                  }
                })()}
              </div>
            </div>
          </div>
        )}

        {/* 6. ROI CALCULATOR */}
        {slug === "roi-calculator" && (
          <div className="flex flex-col gap-6">
            <div className="card" style={{ backgroundColor: "var(--bg-secondary)", borderStyle: "solid" }}>
              <h3 style={{ fontSize: "1.2rem", marginTop: 0, marginBottom: "1rem" }}>Return on Investment (ROI) Calculator</h3>
              
              <div className="grid-cols-2" style={{ gap: "1rem" }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="roi-invested">Amount Invested ($)</label>
                  <input
                    id="roi-invested"
                    type="number"
                    value={roiInvested}
                    onChange={(e) => setRoiInvested(e.target.value)}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="roi-returned">Amount Returned ($)</label>
                  <input
                    id="roi-returned"
                    type="number"
                    value={roiReturned}
                    onChange={(e) => setRoiReturned(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
            </div>

            {(() => {
              const invested = parseFloat(roiInvested) || 0;
              const returned = parseFloat(roiReturned) || 0;
              const profit = returned - invested;
              const roi = invested !== 0 ? (profit / invested) * 100 : 0;
              const isProfit = profit >= 0;

              return (
                <div className="grid-cols-2" style={{ gap: "1rem" }}>
                  <div className="card text-center" style={{ borderStyle: "solid" }}>
                    <span className="text-muted" style={{ fontSize: "0.8rem" }}>Net Profit</span>
                    <div style={{ 
                      fontSize: "1.75rem", 
                      fontWeight: "bold", 
                      margin: "0.5rem 0",
                      color: isProfit ? "var(--success-color, #0070f3)" : "var(--error-color, #ee0000)" 
                    }}>
                      {isProfit ? "" : "-"}${formatNumber(Math.abs(profit))}
                    </div>
                  </div>
                  <div className="card text-center" style={{ borderStyle: "solid" }}>
                    <span className="text-muted" style={{ fontSize: "0.8rem" }}>ROI %</span>
                    <div style={{ 
                      fontSize: "1.75rem", 
                      fontWeight: "bold", 
                      margin: "0.5rem 0",
                      color: isProfit ? "var(--success-color, #0070f3)" : "var(--error-color, #ee0000)" 
                    }}>
                      {roi.toFixed(2)}%
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* 7. AFFILIATE COMMISSION CALCULATOR */}
        {slug === "affiliate-commission-calculator" && (
          <div className="flex flex-col gap-6">
            <div className="card" style={{ backgroundColor: "var(--bg-secondary)", borderStyle: "solid" }}>
              <h3 style={{ fontSize: "1.2rem", marginTop: 0, marginBottom: "1rem" }}>Affiliate Commission Calculator</h3>
              
              <div className="grid-cols-3" style={{ gap: "1rem" }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="aff-price">Product Price ($)</label>
                  <input
                    id="aff-price"
                    type="number"
                    value={affPrice}
                    onChange={(e) => setAffPrice(e.target.value)}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="aff-rate">Commission Rate (%)</label>
                  <input
                    id="aff-rate"
                    type="number"
                    value={affRate}
                    onChange={(e) => setAffRate(e.target.value)}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="aff-sales">Total Sales Count</label>
                  <input
                    id="aff-sales"
                    type="number"
                    value={affSales}
                    onChange={(e) => setAffSales(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
            </div>

            {(() => {
              const price = parseFloat(affPrice) || 0;
              const rate = parseFloat(affRate) || 0;
              const sales = parseFloat(affSales) || 0;
              const commissionPerSale = price * (rate / 100);
              const grossSales = price * sales;
              const totalCommission = commissionPerSale * sales;

              return (
                <div className="grid-cols-3" style={{ gap: "1rem" }}>
                  <div className="card text-center" style={{ borderStyle: "solid" }}>
                    <span className="text-muted" style={{ fontSize: "0.8rem" }}>Commission / Sale</span>
                    <div style={{ fontSize: "1.5rem", fontWeight: "bold", margin: "0.5rem 0" }}>
                      ${formatNumber(commissionPerSale)}
                    </div>
                  </div>
                  <div className="card text-center" style={{ borderStyle: "solid" }}>
                    <span className="text-muted" style={{ fontSize: "0.8rem" }}>Gross Sales Volume</span>
                    <div style={{ fontSize: "1.5rem", fontWeight: "bold", margin: "0.5rem 0" }}>
                      ${formatNumber(grossSales)}
                    </div>
                  </div>
                  <div className="card text-center" style={{ borderStyle: "solid" }}>
                    <span className="text-muted" style={{ fontSize: "0.8rem" }}>Total Commission</span>
                    <div style={{ fontSize: "1.5rem", fontWeight: "bold", margin: "0.5rem 0", color: "var(--success-color, #0070f3)" }}>
                      ${formatNumber(totalCommission)}
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* 8. PROFIT MARGIN CALCULATOR */}
        {slug === "profit-calculator" && (
          <div className="flex flex-col gap-6">
            <div className="card" style={{ backgroundColor: "var(--bg-secondary)", borderStyle: "solid" }}>
              <h3 style={{ fontSize: "1.2rem", marginTop: 0, marginBottom: "1rem" }}>Profit Margin & Markup Calculator</h3>
              
              <div className="grid-cols-3" style={{ gap: "1rem" }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="profit-cost">Cost Price ($)</label>
                  <input
                    id="profit-cost"
                    type="number"
                    value={profitCost}
                    onChange={(e) => setProfitCost(e.target.value)}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="profit-price">Selling Price ($)</label>
                  <input
                    id="profit-price"
                    type="number"
                    value={profitPrice}
                    onChange={(e) => setProfitPrice(e.target.value)}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="profit-qty">Quantity Sold</label>
                  <input
                    id="profit-qty"
                    type="number"
                    value={profitQty}
                    onChange={(e) => setProfitQty(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
            </div>

            {(() => {
              const cost = parseFloat(profitCost) || 0;
              const price = parseFloat(profitPrice) || 0;
              const qty = parseFloat(profitQty) || 0;
              
              const revenue = price * qty;
              const totalCost = cost * qty;
              const netProfit = revenue - totalCost;
              const profitPerItem = price - cost;

              const margin = price !== 0 ? (profitPerItem / price) * 100 : 0;
              const markup = cost !== 0 ? (profitPerItem / cost) * 100 : 0;

              return (
                <div className="flex flex-col gap-4">
                  <div className="grid-cols-2" style={{ gap: "1rem" }}>
                    <div className="card text-center" style={{ borderStyle: "solid" }}>
                      <span className="text-muted" style={{ fontSize: "0.8rem" }}>Profit Margin</span>
                      <div style={{ fontSize: "1.75rem", fontWeight: "bold", margin: "0.5rem 0", color: "var(--success-color, #0070f3)" }}>
                        {margin.toFixed(2)}%
                      </div>
                    </div>
                    <div className="card text-center" style={{ borderStyle: "solid" }}>
                      <span className="text-muted" style={{ fontSize: "0.8rem" }}>Markup Percentage</span>
                      <div style={{ fontSize: "1.75rem", fontWeight: "bold", margin: "0.5rem 0" }}>
                        {markup.toFixed(2)}%
                      </div>
                    </div>
                  </div>
                  <div className="grid-cols-3" style={{ gap: "1rem" }}>
                    <div className="card text-center" style={{ borderStyle: "solid" }}>
                      <span className="text-muted" style={{ fontSize: "0.8rem" }}>Total Revenue</span>
                      <div style={{ fontSize: "1.25rem", fontWeight: "bold", margin: "0.5rem 0" }}>
                        ${formatNumber(revenue)}
                      </div>
                    </div>
                    <div className="card text-center" style={{ borderStyle: "solid" }}>
                      <span className="text-muted" style={{ fontSize: "0.8rem" }}>Total Costs</span>
                      <div style={{ fontSize: "1.25rem", fontWeight: "bold", margin: "0.5rem 0" }}>
                        ${formatNumber(totalCost)}
                      </div>
                    </div>
                    <div className="card text-center" style={{ borderStyle: "solid" }}>
                      <span className="text-muted" style={{ fontSize: "0.8rem" }}>Total Net Profit</span>
                      <div style={{ fontSize: "1.25rem", fontWeight: "bold", margin: "0.5rem 0", color: "var(--success-color, #0070f3)" }}>
                        ${formatNumber(netProfit)}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* 9. DISCOUNT CALCULATOR */}
        {slug === "discount-calculator" && (
          <div className="flex flex-col gap-6">
            <div className="card" style={{ backgroundColor: "var(--bg-secondary)", borderStyle: "solid" }}>
              <h3 style={{ fontSize: "1.2rem", marginTop: 0, marginBottom: "1rem" }}>Discount & Savings Calculator</h3>
              
              <div className="grid-cols-3" style={{ gap: "1rem" }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="disc-price">Original Price ($)</label>
                  <input
                    id="disc-price"
                    type="number"
                    value={discPrice}
                    onChange={(e) => setDiscPrice(e.target.value)}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="disc-percent">Discount (%)</label>
                  <input
                    id="disc-percent"
                    type="number"
                    value={discPercent}
                    onChange={(e) => setDiscPercent(e.target.value)}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="disc-tax">Sales Tax (%, optional)</label>
                  <input
                    id="disc-tax"
                    type="number"
                    value={discTax}
                    onChange={(e) => setDiscTax(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
            </div>

            {(() => {
              const price = parseFloat(discPrice) || 0;
              const disc = parseFloat(discPercent) || 0;
              const tax = parseFloat(discTax) || 0;

              const savings = price * (disc / 100);
              const discountedPrice = price - savings;
              const taxAmount = discountedPrice * (tax / 100);
              const finalPrice = discountedPrice + taxAmount;

              return (
                <div className="grid-cols-3" style={{ gap: "1rem" }}>
                  <div className="card text-center" style={{ borderStyle: "solid" }}>
                    <span className="text-muted" style={{ fontSize: "0.8rem" }}>Savings</span>
                    <div style={{ fontSize: "1.5rem", fontWeight: "bold", margin: "0.5rem 0", color: "var(--success-color, #0070f3)" }}>
                      ${formatNumber(savings)}
                    </div>
                  </div>
                  <div className="card text-center" style={{ borderStyle: "solid" }}>
                    <span className="text-muted" style={{ fontSize: "0.8rem" }}>Tax Amount</span>
                    <div style={{ fontSize: "1.5rem", fontWeight: "bold", margin: "0.5rem 0" }}>
                      ${formatNumber(taxAmount)}
                    </div>
                  </div>
                  <div className="card text-center" style={{ borderStyle: "solid" }}>
                    <span className="text-muted" style={{ fontSize: "0.8rem" }}>Final Price</span>
                    <div style={{ fontSize: "1.5rem", fontWeight: "bold", margin: "0.5rem 0", color: "var(--text-primary)" }}>
                      ${formatNumber(finalPrice)}
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* 10. CURRENCY CONVERTER */}
        {slug === "currency-converter" && (
          <div className="flex flex-col gap-6">
            <div className="card" style={{ backgroundColor: "var(--bg-secondary)", borderStyle: "solid" }}>
              <h3 style={{ fontSize: "1.2rem", marginTop: 0, marginBottom: "1rem" }}>Offline Currency Converter</h3>
              
              <div className="grid-cols-3" style={{ gap: "1rem" }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="curr-amount">Amount</label>
                  <input
                    id="curr-amount"
                    type="number"
                    value={currAmount}
                    onChange={(e) => setCurrAmount(e.target.value)}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="curr-source">From</label>
                  <select
                    id="curr-source"
                    value={currSource}
                    onChange={(e) => setCurrSource(e.target.value)}
                    className="form-control form-select"
                  >
                    {Object.keys(exchangeRates).map((curr) => (
                      <option key={curr} value={curr}>{curr}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="curr-target">To</label>
                  <select
                    id="curr-target"
                    value={currTarget}
                    onChange={(e) => setCurrTarget(e.target.value)}
                    className="form-control form-select"
                  >
                    {Object.keys(exchangeRates).map((curr) => (
                      <option key={curr} value={curr}>{curr}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {(() => {
              const amount = parseFloat(currAmount) || 0;
              const rate = exchangeRates[currSource]?.[currTarget] || 1;
              const converted = amount * rate;

              return (
                <div className="card text-center" style={{ borderStyle: "solid", borderColor: "var(--accent)" }}>
                  <span className="text-muted" style={{ fontSize: "0.85rem" }}>Converted Value</span>
                  <div style={{ fontSize: "2rem", fontWeight: "bold", marginTop: "0.5rem" }}>
                    {formatNumber(amount)} {currSource} = {formatNumber(converted)} {currTarget}
                  </div>
                  <span className="text-muted" style={{ fontSize: "0.75rem", marginTop: "0.5rem", display: "block" }}>
                    *Offline conversion rates: 1 {currSource} &asymp; {rate.toFixed(4)} {currTarget}
                  </span>
                </div>
              );
            })()}
          </div>
        )}

      </div>
    </div>
  );
}
