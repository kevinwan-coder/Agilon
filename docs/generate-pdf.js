const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument({
    size: 'A4',
    margins: { top: 50, bottom: 50, left: 55, right: 55 },
    info: {
        Title: 'Agilon - Project Planning',
        Author: 'Agilon',
        Subject: 'Project Planning Document'
    }
});

const stream = fs.createWriteStream('C:\\1. Agilon\\Planning\\project-planning.pdf');
doc.pipe(stream);

const PRIMARY = '#1a56db';
const DARK = '#1e293b';
const GRAY = '#64748b';
const LIGHT_BG = '#f1f5f9';
const WHITE = '#ffffff';

const pageW = doc.page.width - 110; // usable width

// ── Helper functions ──

function drawHeader() {
    doc.rect(0, 0, doc.page.width, 140).fill(PRIMARY);
    doc.fontSize(36).font('Helvetica-Bold').fillColor(WHITE).text('Agilon', 0, 40, { align: 'center' });
    doc.fontSize(16).font('Helvetica').text('The Operating System for SMEs', 0, 82, { align: 'center' });
    doc.fontSize(10).fillColor('#a3bffa').text('Project Planning Document — February 2026', 0, 108, { align: 'center' });
    doc.moveDown(3);
    doc.y = 165;
}

function sectionTitle(text) {
    checkPageBreak(60);
    doc.moveDown(0.8);
    doc.fontSize(18).font('Helvetica-Bold').fillColor(PRIMARY).text(text);
    const y = doc.y + 2;
    doc.moveTo(55, y).lineTo(55 + pageW, y).strokeColor('#d0dcf0').lineWidth(1.5).stroke();
    doc.moveDown(0.5);
}

function subTitle(text) {
    checkPageBreak(40);
    doc.moveDown(0.4);
    doc.fontSize(13).font('Helvetica-Bold').fillColor(DARK).text(text);
    doc.moveDown(0.3);
}

function para(text) {
    doc.fontSize(10.5).font('Helvetica').fillColor(GRAY).text(text, { lineGap: 3 });
    doc.moveDown(0.3);
}

function bulletList(items) {
    items.forEach(item => {
        checkPageBreak(20);
        doc.fontSize(10.5).font('Helvetica').fillColor(GRAY);
        doc.text(`  •  ${item}`, { indent: 10, lineGap: 2 });
    });
    doc.moveDown(0.3);
}

function highlightBox(text) {
    checkPageBreak(50);
    const startY = doc.y + 4;
    doc.rect(55, startY, pageW, 40).fill('#e8eefb');
    doc.rect(55, startY, 4, 40).fill(PRIMARY);
    doc.fontSize(10.5).font('Helvetica-Bold').fillColor(DARK).text(text, 70, startY + 12, { width: pageW - 30 });
    doc.y = startY + 48;
}

function drawTable(headers, rows, colWidths) {
    checkPageBreak(40 + rows.length * 28);
    const startX = 55;
    let y = doc.y + 4;
    const rowH = 28;
    const totalW = colWidths.reduce((a, b) => a + b, 0);

    // Header row
    doc.rect(startX, y, totalW, rowH).fill(PRIMARY);
    let x = startX;
    headers.forEach((h, i) => {
        doc.fontSize(9.5).font('Helvetica-Bold').fillColor(WHITE).text(h, x + 10, y + 8, { width: colWidths[i] - 20 });
        x += colWidths[i];
    });
    y += rowH;

    // Data rows
    rows.forEach((row, ri) => {
        if (ri % 2 === 0) doc.rect(startX, y, totalW, rowH).fill('#f8fafc');
        else doc.rect(startX, y, totalW, rowH).fill(WHITE);

        x = startX;
        row.forEach((cell, ci) => {
            const isFirst = ci === 0;
            doc.fontSize(9.5).font(isFirst ? 'Helvetica-Bold' : 'Helvetica').fillColor(isFirst ? DARK : GRAY);
            doc.text(cell, x + 10, y + 8, { width: colWidths[ci] - 20 });
            x += colWidths[ci];
        });
        y += rowH;
    });

    doc.y = y + 8;
}

function statBoxes(stats) {
    checkPageBreak(80);
    const boxW = pageW / stats.length - 8;
    const startY = doc.y + 4;
    let x = 55;

    stats.forEach(s => {
        doc.rect(x, startY, boxW, 60).lineWidth(1).strokeColor('#e2e8f0').fillAndStroke('#f8fafc', '#e2e8f0');
        doc.fontSize(22).font('Helvetica-Bold').fillColor(PRIMARY).text(s.number, x, startY + 10, { width: boxW, align: 'center' });
        doc.fontSize(9).font('Helvetica').fillColor(GRAY).text(s.label, x, startY + 38, { width: boxW, align: 'center' });
        x += boxW + 12;
    });

    doc.y = startY + 72;
}

function flowDiagram(steps) {
    checkPageBreak(50);
    const stepW = 105;
    const arrowW = 25;
    const totalW = steps.length * stepW + (steps.length - 1) * arrowW;
    let x = 55 + (pageW - totalW) / 2;
    const y = doc.y + 8;

    steps.forEach((step, i) => {
        doc.roundedRect(x, y, stepW, 32, 6).fill(PRIMARY);
        doc.fontSize(10).font('Helvetica-Bold').fillColor(WHITE).text(step, x, y + 10, { width: stepW, align: 'center' });
        x += stepW;
        if (i < steps.length - 1) {
            doc.fontSize(16).font('Helvetica').fillColor(PRIMARY).text('\u2192', x + 2, y + 6, { width: arrowW, align: 'center' });
            x += arrowW;
        }
    });

    doc.y = y + 50;
}

function workflowDiagram(steps) {
    checkPageBreak(50);
    const y = doc.y + 6;
    let x = 55;
    const stepH = 26;

    steps.forEach((s, i) => {
        const isAI = s.type === 'ai';
        const bgColor = isAI ? '#dbeafe' : '#fce7f3';
        const textColor = isAI ? '#1d4ed8' : '#be185d';
        const w = doc.widthOfString(s.label, { fontSize: 8.5 }) + 18;

        if (x + w > 55 + pageW - 10) {
            // wrap
            x = 55;
        }

        doc.roundedRect(x, y, w, stepH, 4).fill(bgColor);
        doc.fontSize(8.5).font('Helvetica-Bold').fillColor(textColor).text(s.label, x + 9, y + 8);
        x += w + 4;

        if (i < steps.length - 1) {
            doc.fontSize(11).font('Helvetica').fillColor(GRAY).text('\u2192', x, y + 6);
            x += 16;
        }
    });

    doc.y = y + stepH + 14;
}

function checkPageBreak(needed) {
    if (doc.y + needed > doc.page.height - 60) {
        doc.addPage();
    }
}

// ══════════════════════════════════════════════
// CONTENT
// ══════════════════════════════════════════════

drawHeader();

// Vision
sectionTitle('Vision');
para('Agilon is the Operating System for Small and Medium Enterprises, built to serve 36 million SMEs in the US \u2014 including 31 million non-employee firms (sole proprietors, freelancers, single-member LLCs).');

statBoxes([
    { number: '36M', label: 'Total SMEs (TAM)' },
    { number: '31M', label: 'Non-Employee Firms' },
    { number: '~5M', label: 'Employer SMEs' }
]);

// Core Flow
sectionTitle('Core Flow');
flowDiagram(['Login', 'Onboarding', 'Provisioning', 'Deployment']);

subTitle('1. Login');
para('User authenticates into the Agilon platform.');

subTitle('2. Onboarding');
para('Two sets of information are collected from the user:');
para('Basic Info: Industry, Company size, State');
para('Style: Templates, Logo, Color');

subTitle('3. Provisioning');
para('Happens automatically after account creation. Two resources are created in parallel on Aedify.ai:');
doc.moveDown(0.2);
para('A. Dedicated Agilon Bot');
bulletList([
    'Agilon logs into Aedify and assigns a dedicated bot to the customer',
    'OpenClaw-like bot based on Nanobot (small open-source model)',
    'This bot is the core of the client\'s experience'
]);
para('B. Client Cloud Storage');
bulletList([
    'Dedicated cloud storage for the client\'s data',
    'Separate from bot\'s own database (LightSQL)',
    'Client data in cloud storage; bot state in LightSQL'
]);

subTitle('4. Deployment');
drawTable(
    ['Channel', 'Access Method'],
    [
        ['Web App', 'Direct browser URL'],
        ['Mobile App', 'QR Code']
    ],
    [pageW * 0.4, pageW * 0.6]
);

// Skills: Back-Office
sectionTitle('Skills \u2014 Back-Office Modules (Phase 1)');
para('Skills are modular back-office capabilities that clients choose and activate. Each skill adds a specific business function to their Agilon Bot.');

drawTable(
    ['Skill', 'Description'],
    [
        ['Accounting', 'Bookkeeping, invoicing, financial reporting'],
        ['HR', 'Employee management, payroll, benefits'],
        ['Tax', 'Tax preparation, filing, compliance'],
        ['Scheduling', 'Appointments, calendar, resource booking'],
        ['VDR', 'Virtual Data Room \u2014 secure document sharing'],
        ['IT', 'IT support, device management, helpdesk'],
        ['Legal', 'Contract management, compliance, legal docs']
    ],
    [pageW * 0.25, pageW * 0.75]
);

highlightBox('Concept: Clients pick skills \u2192 bot is equipped with capabilities \u2192 personalized back-office OS.');

// Skills: Front-Office
sectionTitle('Skills \u2014 Front-Office Modules (Future)');
para('Industry-specific front-office modules will be added gradually to serve different SME verticals:');

drawTable(
    ['Vertical', 'Examples'],
    [
        ['Healthcare', 'Patient scheduling, records, billing'],
        ['Repair Services', 'Job tracking, estimates, parts inventory'],
        ['Ride / Delivery', 'Route management, earnings tracking'],
        ['Freelancers', 'Ad creation, content generation, client management']
    ],
    [pageW * 0.3, pageW * 0.7]
);

highlightBox('Roadmap: Back-office skills first (universal) \u2192 Front-office skills per vertical (industry-specific).');

// Custom Workflows
sectionTitle('Custom Workflows');
para('Clients can create their own workflows \u2014 a key differentiator. Each step can be handled by:');

drawTable(
    ['Executor Type', 'Description'],
    [
        ['AI Agent', 'Automated \u2014 handled by the Agilon Bot / AI'],
        ['Human', 'Manual \u2014 assigned to a real person'],
        ['Hybrid', 'AI does the work, human reviews/approves']
    ],
    [pageW * 0.3, pageW * 0.7]
);

subTitle('Example: Invoice Processing');
workflowDiagram([
    { label: 'Receive Invoice', type: 'ai' },
    { label: 'Extract Data', type: 'ai' },
    { label: 'Review & Approve', type: 'human' },
    { label: 'Book Entry', type: 'ai' },
    { label: 'Notify Client', type: 'ai' }
]);
para('Clients design processes that match how their business works \u2014 mixing automation with human judgment.');

// Infrastructure
sectionTitle('Infrastructure');
para('Cloud Provider: Aedify.ai \u2014 providing full-stack cloud infrastructure.');

drawTable(
    ['Resource', 'Purpose'],
    [
        ['CPU', 'General compute'],
        ['GPU', 'AI/ML workloads'],
        ['Storage', 'Cloud storage for client data'],
        ['Bandwidth', 'Network and CDN']
    ],
    [pageW * 0.3, pageW * 0.7]
);

// Footer
doc.moveDown(2);
const footerY = doc.y;
doc.moveTo(55, footerY).lineTo(55 + pageW, footerY).strokeColor('#e2e8f0').lineWidth(0.5).stroke();
doc.moveDown(0.5);
doc.fontSize(9).font('Helvetica').fillColor(GRAY).text('Agilon Project Planning \u2014 February 2026 \u2014 Confidential', { align: 'center' });

doc.end();

stream.on('finish', () => {
    console.log('PDF generated successfully: C:\\1. Agilon\\Planning\\project-planning.pdf');
});
