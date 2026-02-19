# Agilon - Project Overview

## Vision

Agilon is the **Operating System for SMEs**, built to serve the **36 million small and medium enterprises** in the US — including **31 million non-employee firms** (sole proprietors, freelancers, single-member LLCs).

## Core Flow

```
Login → Onboarding → Bot Creation → Deployment (Web + Mobile)
```

### 1. Login
User authenticates into the Agilon platform.

### 2. Onboarding
Two sets of information collected:

**Basic Info**
- Industry
- Company size
- State

**Style**
- Templates
- Logo
- Color

### 3. Provisioning (happens automatically after account creation)

Two things are created in parallel on Aedify.ai:

**A. Dedicated Agilon Bot**
- Agilon logs into Aedify and assigns a dedicated bot to the customer
- Bot is an **OpenClaw-like bot**, based on a much smaller open-source model: **Nanobot**
- This bot is the **core** of the client's experience

**B. Client Cloud Storage**
- Agilon creates dedicated cloud storage for the client's data
- This is separate from the bot's own database (LightSQL)
- Client data lives in cloud storage; bot state lives in LightSQL

### 4. Deployment

| Channel    | Access Method       |
|------------|---------------------|
| Web App    | Direct browser URL  |
| Mobile App | QR Code             |

## Skills (Back-Office Modules)

Skills are modular back-office capabilities that clients can choose and activate for their Agilon Bot. Each skill adds a specific business function.

| Skill         | Description                                      |
|---------------|--------------------------------------------------|
| Accounting    | Bookkeeping, invoicing, financial reporting      |
| HR            | Employee management, payroll, benefits           |
| Tax           | Tax preparation, filing, compliance              |
| Scheduling    | Appointments, calendar, resource booking         |
| VDR           | Virtual Data Room — secure document sharing      |
| IT            | IT support, device management, helpdesk          |
| Legal         | Contract management, compliance, legal docs      |
| ...           | All possible back-office modules                 |

**Concept:** Clients pick the skills they need → the bot is equipped with those capabilities → the bot becomes their personalized back-office operating system.

## Skills (Front-Office Modules) — Future

Industry-specific front-office modules will be added gradually to serve different SME verticals:

| Vertical        | Examples                                          |
|-----------------|---------------------------------------------------|
| Healthcare      | Patient scheduling, records, billing              |
| Repair Services | Job tracking, estimates, parts inventory          |
| Ride/Delivery   | Uber drivers, route management, earnings tracking |
| Freelancers     | Ad creation, content generation, client management|
| ...             | More verticals over time                          |

**Roadmap:** Back-office skills first (universal) → Front-office skills added per vertical (industry-specific).

## Custom Workflows

Clients can **create their own workflows** — a key differentiator. Each step in a workflow can be handled by:

| Executor Type  | Description                                        |
|----------------|----------------------------------------------------|
| AI Agent       | Automated — handled by the Agilon Bot / AI         |
| Human          | Manual — assigned to a real person                  |
| Hybrid         | Combination — AI does the work, human reviews/approves |

**Example workflow:** Invoice Processing
```
Receive Invoice (AI) → Extract Data (AI) → Review & Approve (Human) → Book Entry (AI) → Notify Client (AI)
```

This gives clients full flexibility to design processes that match how their business actually works — mixing automation with human judgment wherever needed.

## Infrastructure

**Cloud Provider:** [Aedify.ai](https://aedify.ai)

| Resource   | Provided by Aedify.ai |
|------------|----------------------|
| CPU        | Compute              |
| GPU        | AI/ML workloads      |
| Storage    | Cloud storage        |
| Bandwidth  | Network/CDN          |

## Target Market

- **Total addressable market:** 36 million SMEs
- **Primary segment:** 31 million non-employee firms (sole proprietors, freelancers, single-member LLCs)
- **Secondary segment:** ~5 million employer SMEs
