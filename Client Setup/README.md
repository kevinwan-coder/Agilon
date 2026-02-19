# Client Setup — Design Specification

## Overview

The Client Setup is a 4-step wizard that onboards new clients after authentication. It collects business information, branding preferences, and skill selections, then provisions the client's Agilon workspace on Aedify.ai.

> Login/Auth is handled separately and is NOT part of this flow.

## Flow

```
Step 1: Business Info → Step 2: Branding → Step 3: Skills → Step 4: Review → Provisioning → Success
```

## Steps

### Step 1 — Business Info
| Field            | Type       | Required | Notes                              |
|------------------|------------|----------|------------------------------------|
| Business Name    | Text input | Yes      |                                    |
| Industry         | Dropdown   | Yes      | 11 options + "Other"               |
| State            | Dropdown   | Yes      | All 50 US states                   |
| Company Size     | Card select| Yes      | Just Me / 2-10 / 11-50            |
| Description      | Textarea   | No       | Brief business description         |

### Step 2 — Branding & Style
| Field         | Type          | Required | Notes                           |
|---------------|---------------|----------|---------------------------------|
| Template      | Visual cards  | Yes      | Modern / Classic / Bold         |
| Logo          | File upload   | No       | SVG, PNG, JPG (max 2MB)        |
| Brand Color   | Color swatches| Yes      | 8 presets + custom picker       |

### Step 3 — Skills Selection
| Skill       | Description                                |
|-------------|--------------------------------------------|
| Accounting  | Bookkeeping, invoicing, financial reporting|
| HR          | Employee management, payroll, benefits     |
| Tax         | Tax preparation, filing, compliance        |
| Scheduling  | Appointments, calendar, resource booking   |
| VDR         | Virtual Data Room — secure doc sharing     |
| IT          | IT support, device management, helpdesk    |
| Legal       | Contract management, compliance, legal docs|

Skills are optional — clients can add more later.

### Step 4 — Review & Launch
- Displays all selections in a summary view
- "Launch My Agilon" button triggers provisioning

### Provisioning (animated)
Sequential steps shown to the user:
1. Creating your Agilon Bot on Aedify...
2. Provisioning cloud storage...
3. Installing selected skills...
4. Applying your branding...
5. Finalizing workspace...

### Success Screen
- Confirmation message
- Two CTAs: "Open Web App" / "Get Mobile QR Code"

## Prototype

- **Interactive HTML**: `client-setup.html` (open in browser)
- Fully functional wizard with state management
- Click through all steps to see the flow

## API Calls (to implement)

| Endpoint                   | Trigger          | Payload                                  |
|----------------------------|------------------|------------------------------------------|
| `POST /api/setup/profile`  | Step 1 complete  | name, industry, state, size, description |
| `POST /api/setup/branding` | Step 2 complete  | template, logo (file), color             |
| `POST /api/setup/skills`   | Step 3 complete  | skills[]                                 |
| `POST /api/setup/launch`   | Launch button    | (triggers provisioning on Aedify.ai)     |
