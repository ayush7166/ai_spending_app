# Metrics Documentation

## Overview

This document defines the core metrics used in the AI Spend Audit Engine for subscription analysis and optimization.

The system evaluates AI subscription plans using pricing, user count, and priority-based comparison logic.

---

## Core Metrics

### 1. Total Subscription Cost

The total subscription cost represents the estimated monthly spending for a plan based on the number of users.

Formula:

Total Cost = Plan Price × Number of Users


### 2. Savings Metric

Savings represent the amount reduced by switching to a cheaper equivalent-priority plan.

Formula:

Savings = Current Plan Cost - Recommended Plan Cost


### 3. Optimization Score

The optimization score indicates how efficiently the current subscription setup is optimized.



Higher score:

    Better optimization
    Lower unnecessary spending

Lower score:

    Higher overspending
    Better alternatives available

Optimization Score =
        100 - ((Savings / Current Cost) × 100)