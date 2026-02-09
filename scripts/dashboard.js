// =============================================
// Client Security Dashboard - Mock Data & Logic
// =============================================

// ===== Mock Data =====
const clients = [
  {
    id: 1,
    name: "Meridian Financial Group",
    industry: "Finance",
    contact: "Sarah Chen",
    email: "s.chen@meridianfg.com",
    assets: 142,
    contractStart: "2024-03-15",
    lastScan: "2026-02-07",
    riskScore: 78,
    vulns: { critical: 5, high: 18, medium: 34, low: 45 }
  },
  {
    id: 2,
    name: "NovaCare Health Systems",
    industry: "Healthcare",
    contact: "James Rodriguez",
    email: "j.rodriguez@novacare.org",
    assets: 230,
    contractStart: "2023-11-01",
    lastScan: "2026-02-08",
    riskScore: 85,
    vulns: { critical: 9, high: 27, medium: 51, low: 63 }
  },
  {
    id: 3,
    name: "Atlas Manufacturing Co.",
    industry: "Manufacturing",
    contact: "Linda Park",
    email: "l.park@atlasmanuf.com",
    assets: 87,
    contractStart: "2024-07-20",
    lastScan: "2026-02-06",
    riskScore: 52,
    vulns: { critical: 1, high: 7, medium: 19, low: 31 }
  },
  {
    id: 4,
    name: "Bright Horizons Education",
    industry: "Education",
    contact: "David Kim",
    email: "d.kim@brighthorizons.edu",
    assets: 64,
    contractStart: "2025-01-10",
    lastScan: "2026-02-08",
    riskScore: 35,
    vulns: { critical: 0, high: 3, medium: 12, low: 22 }
  },
  {
    id: 5,
    name: "Apex Retail Solutions",
    industry: "Retail",
    contact: "Maria Gonzalez",
    email: "m.gonzalez@apexretail.com",
    assets: 198,
    contractStart: "2024-09-01",
    lastScan: "2026-02-05",
    riskScore: 67,
    vulns: { critical: 3, high: 14, medium: 28, low: 39 }
  },
  {
    id: 6,
    name: "Crestline Legal Partners",
    industry: "Legal",
    contact: "Robert Taylor",
    email: "r.taylor@crestlinelegal.com",
    assets: 45,
    contractStart: "2025-06-15",
    lastScan: "2026-02-07",
    riskScore: 41,
    vulns: { critical: 0, high: 5, medium: 14, low: 18 }
  }
];

const assets = [
  { id: 1, name: "MERID-DC01", clientId: 1, type: "server", ip: "10.10.1.10", os: "Windows Server 2022", vulns: 12, lastScanned: "2026-02-07", status: "active" },
  { id: 2, name: "MERID-DC02", clientId: 1, type: "server", ip: "10.10.1.11", os: "Windows Server 2022", vulns: 8, lastScanned: "2026-02-07", status: "active" },
  { id: 3, name: "MERID-WEB01", clientId: 1, type: "server", ip: "10.10.2.20", os: "Ubuntu 22.04 LTS", vulns: 5, lastScanned: "2026-02-07", status: "active" },
  { id: 4, name: "MERID-FW01", clientId: 1, type: "network", ip: "10.10.0.1", os: "Palo Alto PAN-OS 11", vulns: 2, lastScanned: "2026-02-06", status: "active" },
  { id: 5, name: "MERID-AWS-PROD", clientId: 1, type: "cloud", ip: "vpc-0a1b2c3d", os: "AWS VPC", vulns: 7, lastScanned: "2026-02-07", status: "active" },
  { id: 6, name: "NOVA-EMR-SRV", clientId: 2, type: "server", ip: "172.16.1.50", os: "RHEL 9", vulns: 15, lastScanned: "2026-02-08", status: "active" },
  { id: 7, name: "NOVA-DC01", clientId: 2, type: "server", ip: "172.16.1.10", os: "Windows Server 2022", vulns: 9, lastScanned: "2026-02-08", status: "active" },
  { id: 8, name: "NOVA-PACS-01", clientId: 2, type: "application", ip: "172.16.3.100", os: "DICOM/PACS Server", vulns: 18, lastScanned: "2026-02-08", status: "warning" },
  { id: 9, name: "NOVA-WS-NURSE01", clientId: 2, type: "workstation", ip: "172.16.10.51", os: "Windows 11 Pro", vulns: 3, lastScanned: "2026-02-08", status: "active" },
  { id: 10, name: "NOVA-AZURE-PROD", clientId: 2, type: "cloud", ip: "vnet-healthcare-prod", os: "Azure VNet", vulns: 11, lastScanned: "2026-02-08", status: "active" },
  { id: 11, name: "ATLAS-SCADA-01", clientId: 3, type: "server", ip: "192.168.100.10", os: "Windows Server 2019", vulns: 6, lastScanned: "2026-02-06", status: "active" },
  { id: 12, name: "ATLAS-PLC-GW", clientId: 3, type: "network", ip: "192.168.100.1", os: "Siemens SCALANCE", vulns: 4, lastScanned: "2026-02-06", status: "warning" },
  { id: 13, name: "ATLAS-ERP-01", clientId: 3, type: "application", ip: "192.168.1.50", os: "SAP S/4HANA", vulns: 3, lastScanned: "2026-02-06", status: "active" },
  { id: 14, name: "BRIGHT-LMS-01", clientId: 4, type: "application", ip: "10.20.1.100", os: "Canvas LMS (Linux)", vulns: 2, lastScanned: "2026-02-08", status: "active" },
  { id: 15, name: "BRIGHT-DC01", clientId: 4, type: "server", ip: "10.20.1.10", os: "Windows Server 2022", vulns: 4, lastScanned: "2026-02-08", status: "active" },
  { id: 16, name: "BRIGHT-GCP-PROD", clientId: 4, type: "cloud", ip: "vpc-edu-production", os: "GCP VPC", vulns: 1, lastScanned: "2026-02-08", status: "active" },
  { id: 17, name: "APEX-POS-SRV01", clientId: 5, type: "server", ip: "10.50.1.20", os: "Windows Server 2022", vulns: 9, lastScanned: "2026-02-05", status: "active" },
  { id: 18, name: "APEX-ECOM-01", clientId: 5, type: "application", ip: "10.50.2.100", os: "Kubernetes (EKS)", vulns: 14, lastScanned: "2026-02-05", status: "warning" },
  { id: 19, name: "APEX-CDN-EDGE", clientId: 5, type: "cloud", ip: "d-cloudfront-apex", os: "AWS CloudFront", vulns: 2, lastScanned: "2026-02-05", status: "active" },
  { id: 20, name: "CREST-DOCMGMT", clientId: 6, type: "application", ip: "10.60.1.50", os: "iManage Work 10", vulns: 5, lastScanned: "2026-02-07", status: "active" },
  { id: 21, name: "CREST-DC01", clientId: 6, type: "server", ip: "10.60.1.10", os: "Windows Server 2022", vulns: 3, lastScanned: "2026-02-07", status: "active" },
  { id: 22, name: "CREST-VPN-GW", clientId: 6, type: "network", ip: "10.60.0.1", os: "Cisco ASA 5525-X", vulns: 4, lastScanned: "2026-02-07", status: "active" }
];

const vulnerabilities = [
  { id: 1, cve: "CVE-2026-1234", title: "Remote Code Execution in SMBv3", clientId: 2, assetId: 7, severity: "critical", cvss: 9.8, status: "open", discovered: "2026-02-08" },
  { id: 2, cve: "CVE-2025-5678", title: "SQL Injection in EMR Web Interface", clientId: 2, assetId: 6, severity: "critical", cvss: 9.6, status: "in_progress", discovered: "2026-02-05" },
  { id: 3, cve: "CVE-2026-0911", title: "Privilege Escalation via Kernel Exploit", clientId: 1, assetId: 3, severity: "critical", cvss: 9.1, status: "open", discovered: "2026-02-06" },
  { id: 4, cve: "CVE-2025-4321", title: "DICOM Service Buffer Overflow", clientId: 2, assetId: 8, severity: "critical", cvss: 9.4, status: "open", discovered: "2026-01-28" },
  { id: 5, cve: "CVE-2026-0088", title: "PAN-OS Authentication Bypass", clientId: 1, assetId: 4, severity: "critical", cvss: 9.0, status: "in_progress", discovered: "2026-02-01" },
  { id: 6, cve: "CVE-2025-9012", title: "Cross-Site Scripting in POS Terminal UI", clientId: 5, assetId: 17, severity: "high", cvss: 8.2, status: "open", discovered: "2026-02-04" },
  { id: 7, cve: "CVE-2026-0234", title: "SSL/TLS Certificate Validation Flaw", clientId: 1, assetId: 5, severity: "high", cvss: 7.5, status: "open", discovered: "2026-02-03" },
  { id: 8, cve: "CVE-2025-7890", title: "Container Escape in EKS Cluster", clientId: 5, assetId: 18, severity: "critical", cvss: 9.2, status: "open", discovered: "2026-02-02" },
  { id: 9, cve: "CVE-2026-0456", title: "LDAP Injection in Active Directory", clientId: 2, assetId: 7, severity: "high", cvss: 8.1, status: "in_progress", discovered: "2026-01-30" },
  { id: 10, cve: "CVE-2025-6543", title: "Insecure Deserialization in SAP", clientId: 3, assetId: 13, severity: "high", cvss: 7.8, status: "open", discovered: "2026-02-01" },
  { id: 11, cve: "CVE-2026-0789", title: "DNS Cache Poisoning", clientId: 4, assetId: 15, severity: "medium", cvss: 6.5, status: "resolved", discovered: "2026-01-20" },
  { id: 12, cve: "CVE-2025-3210", title: "Weak SSH Key Exchange Algorithm", clientId: 3, assetId: 11, severity: "medium", cvss: 5.9, status: "open", discovered: "2026-01-25" },
  { id: 13, cve: "CVE-2026-0567", title: "Missing HTTP Security Headers", clientId: 5, assetId: 18, severity: "medium", cvss: 5.3, status: "open", discovered: "2026-02-01" },
  { id: 14, cve: "CVE-2025-8901", title: "Information Disclosure via Error Pages", clientId: 6, assetId: 20, severity: "medium", cvss: 5.0, status: "in_progress", discovered: "2026-01-28" },
  { id: 15, cve: "CVE-2026-0345", title: "Outdated TLS 1.0 Enabled", clientId: 6, assetId: 22, severity: "medium", cvss: 6.1, status: "open", discovered: "2026-02-03" },
  { id: 16, cve: "CVE-2025-2109", title: "SNMP Community String Default", clientId: 3, assetId: 12, severity: "medium", cvss: 5.7, status: "open", discovered: "2026-01-22" },
  { id: 17, cve: "CVE-2026-0123", title: "Self-Signed Certificate on Internal Portal", clientId: 4, assetId: 14, severity: "low", cvss: 3.1, status: "open", discovered: "2026-02-05" },
  { id: 18, cve: "CVE-2025-1098", title: "Verbose Server Banner Disclosure", clientId: 1, assetId: 3, severity: "low", cvss: 2.6, status: "resolved", discovered: "2026-01-15" },
  { id: 19, cve: "CVE-2026-0678", title: "Missing Content-Security-Policy", clientId: 5, assetId: 19, severity: "low", cvss: 3.5, status: "open", discovered: "2026-02-02" },
  { id: 20, cve: "CVE-2025-4567", title: "Clickjacking on Admin Panel", clientId: 2, assetId: 6, severity: "low", cvss: 4.0, status: "open", discovered: "2026-01-18" },
  { id: 21, cve: "CVE-2026-0999", title: "Azure AD Token Validation Bypass", clientId: 2, assetId: 10, severity: "critical", cvss: 9.3, status: "open", discovered: "2026-02-09" },
  { id: 22, cve: "CVE-2025-7777", title: "Path Traversal in Document Manager", clientId: 6, assetId: 20, severity: "high", cvss: 7.4, status: "open", discovered: "2026-02-06" },
  { id: 23, cve: "CVE-2026-0411", title: "ICS Protocol Man-in-the-Middle", clientId: 3, assetId: 12, severity: "high", cvss: 8.0, status: "in_progress", discovered: "2026-02-04" },
  { id: 24, cve: "CVE-2025-6000", title: "Kubernetes API Server Exposure", clientId: 5, assetId: 18, severity: "critical", cvss: 9.5, status: "in_progress", discovered: "2026-02-03" }
];

const activityLog = [
  { type: "vuln", text: '<strong>CVE-2026-0999</strong> (Critical) discovered on <strong>NOVA-AZURE-PROD</strong> — Azure AD Token Validation Bypass', time: "2 hours ago" },
  { type: "scan", text: 'Scheduled scan completed for <strong>NovaCare Health Systems</strong> — 230 assets scanned', time: "5 hours ago" },
  { type: "resolve", text: '<strong>CVE-2026-0789</strong> marked as resolved on <strong>BRIGHT-DC01</strong>', time: "8 hours ago" },
  { type: "vuln", text: '<strong>CVE-2026-1234</strong> (Critical) discovered on <strong>NOVA-DC01</strong> — Remote Code Execution in SMBv3', time: "1 day ago" },
  { type: "scan", text: 'Scheduled scan completed for <strong>Meridian Financial Group</strong> — 142 assets scanned', time: "1 day ago" },
  { type: "client", text: 'New asset <strong>CREST-VPN-GW</strong> added for <strong>Crestline Legal Partners</strong>', time: "2 days ago" },
  { type: "resolve", text: '<strong>CVE-2025-1098</strong> marked as resolved on <strong>MERID-WEB01</strong>', time: "3 days ago" },
  { type: "vuln", text: '<strong>CVE-2026-0911</strong> (Critical) discovered on <strong>MERID-WEB01</strong> — Privilege Escalation via Kernel Exploit', time: "3 days ago" }
];

// ===== Utility Functions =====
function getClientById(id) {
  return clients.find(c => c.id === id);
}

function getAssetById(id) {
  return assets.find(a => a.id === id);
}

function getRiskColor(score) {
  if (score >= 75) return 'var(--severity-critical)';
  if (score >= 55) return 'var(--severity-high)';
  if (score >= 35) return 'var(--severity-medium)';
  return 'var(--severity-low)';
}

function getRiskLabel(score) {
  if (score >= 75) return 'Critical';
  if (score >= 55) return 'High';
  if (score >= 35) return 'Medium';
  return 'Low';
}

function getRiskClass(score) {
  if (score >= 75) return 'critical';
  if (score >= 55) return 'high';
  if (score >= 35) return 'medium';
  return 'low';
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function animateValue(element, target, duration) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start);
    }
  }, 16);
}

// ===== Navigation =====
const sidebarLinks = document.querySelectorAll('.sidebar__link[data-view]');
const views = document.querySelectorAll('.view');

sidebarLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const viewId = link.dataset.view;

    sidebarLinks.forEach(l => l.classList.remove('sidebar__link--active'));
    link.classList.add('sidebar__link--active');

    views.forEach(v => v.classList.remove('view--active'));
    document.getElementById(`view-${viewId}`).classList.add('view--active');

    // Close sidebar on mobile
    document.getElementById('sidebar').classList.remove('sidebar--open');
  });
});

// Sidebar toggle (mobile)
document.getElementById('sidebarToggle').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('sidebar--open');
});

// ===== KPI Cards =====
function updateKPIs() {
  const totalClients = clients.length;
  const totalAssets = clients.reduce((sum, c) => sum + c.assets, 0);
  const totalCritical = clients.reduce((sum, c) => sum + c.vulns.critical, 0);
  const resolvedCount = vulnerabilities.filter(v => v.status === 'resolved').length;

  animateValue(document.getElementById('kpi-clients'), totalClients, 600);
  animateValue(document.getElementById('kpi-assets'), totalAssets, 800);
  animateValue(document.getElementById('kpi-critical'), totalCritical, 700);
  animateValue(document.getElementById('kpi-resolved'), resolvedCount, 600);
}

// ===== Charts =====
const chartDefaults = {
  color: '#8899aa',
  borderColor: '#2a3a4a',
  font: { family: 'Inter, sans-serif' }
};

Chart.defaults.color = chartDefaults.color;
Chart.defaults.borderColor = chartDefaults.borderColor;
Chart.defaults.font.family = chartDefaults.font.family;

function createSeverityChart() {
  const ctx = document.getElementById('chart-severity').getContext('2d');
  const totals = {
    critical: vulnerabilities.filter(v => v.severity === 'critical').length,
    high: vulnerabilities.filter(v => v.severity === 'high').length,
    medium: vulnerabilities.filter(v => v.severity === 'medium').length,
    low: vulnerabilities.filter(v => v.severity === 'low').length
  };

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Critical', 'High', 'Medium', 'Low'],
      datasets: [{
        data: [totals.critical, totals.high, totals.medium, totals.low],
        backgroundColor: ['#ef4444', '#f97316', '#f59e0b', '#3b82f6'],
        borderWidth: 0,
        hoverOffset: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      cutout: '65%',
      plugins: {
        legend: {
          position: 'bottom',
          labels: { padding: 16, usePointStyle: true, pointStyleWidth: 10 }
        }
      }
    }
  });
}

function createTrendChart() {
  const ctx = document.getElementById('chart-trend').getContext('2d');
  const months = ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'];

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: months,
      datasets: [
        {
          label: 'Critical',
          data: [12, 14, 10, 15, 11, 18],
          borderColor: '#ef4444',
          backgroundColor: 'rgba(239, 68, 68, 0.1)',
          fill: true,
          tension: 0.3
        },
        {
          label: 'High',
          data: [35, 42, 38, 45, 40, 52],
          borderColor: '#f97316',
          backgroundColor: 'rgba(249, 115, 22, 0.1)',
          fill: true,
          tension: 0.3
        },
        {
          label: 'Medium',
          data: [60, 55, 70, 65, 72, 80],
          borderColor: '#f59e0b',
          backgroundColor: 'rgba(245, 158, 11, 0.05)',
          fill: true,
          tension: 0.3
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      interaction: { intersect: false, mode: 'index' },
      plugins: {
        legend: {
          position: 'bottom',
          labels: { padding: 16, usePointStyle: true, pointStyleWidth: 10 }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: { color: 'rgba(42, 58, 74, 0.5)' }
        },
        x: {
          grid: { display: false }
        }
      }
    }
  });
}

function createAssetTypeChart() {
  const ctx = document.getElementById('chart-assetTypes').getContext('2d');
  const types = ['server', 'workstation', 'network', 'cloud', 'application'];
  const counts = types.map(t => assets.filter(a => a.type === t).length);

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Servers', 'Workstations', 'Network', 'Cloud', 'Applications'],
      datasets: [{
        label: 'Assets',
        data: counts,
        backgroundColor: ['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'],
        borderRadius: 4,
        barThickness: 40
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: { color: 'rgba(42, 58, 74, 0.5)' }
        },
        x: {
          grid: { display: false }
        }
      }
    }
  });
}

function createAssetsByClientChart() {
  const ctx = document.getElementById('chart-assetsByClient').getContext('2d');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: clients.map(c => c.name.split(' ').slice(0, 2).join(' ')),
      datasets: [{
        label: 'Total Assets',
        data: clients.map(c => c.assets),
        backgroundColor: '#06b6d4',
        borderRadius: 4,
        barThickness: 40
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      indexAxis: 'y',
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: {
          beginAtZero: true,
          grid: { color: 'rgba(42, 58, 74, 0.5)' }
        },
        y: {
          grid: { display: false }
        }
      }
    }
  });
}

// ===== Client Risk Table =====
function renderClientRiskTable(filter) {
  const tbody = document.getElementById('clientRiskBody');
  const filtered = filter === 'all'
    ? clients
    : clients.filter(c => getRiskClass(c.riskScore) === filter);

  tbody.innerHTML = filtered.map(c => `
    <tr class="clickable-row" data-client-id="${c.id}">
      <td><strong>${c.name}</strong></td>
      <td>${c.industry}</td>
      <td>${c.assets}</td>
      <td><span class="badge badge--critical">${c.vulns.critical}</span></td>
      <td><span class="badge badge--high">${c.vulns.high}</span></td>
      <td><span class="badge badge--medium">${c.vulns.medium}</span></td>
      <td><span class="badge badge--low">${c.vulns.low}</span></td>
      <td>
        <div class="risk-score">
          <span class="risk-score__value" style="color: ${getRiskColor(c.riskScore)}">${c.riskScore}</span>
          <div class="risk-score__bar">
            <div class="risk-score__fill" style="width: ${c.riskScore}%; background: ${getRiskColor(c.riskScore)}"></div>
          </div>
        </div>
      </td>
      <td><span class="badge badge--${getRiskClass(c.riskScore)}">${getRiskLabel(c.riskScore)}</span></td>
    </tr>
  `).join('');

  // Add click handlers
  tbody.querySelectorAll('.clickable-row').forEach(row => {
    row.style.cursor = 'pointer';
    row.addEventListener('click', () => openClientDetail(parseInt(row.dataset.clientId)));
  });
}

document.getElementById('riskFilter').addEventListener('change', (e) => {
  renderClientRiskTable(e.target.value);
});

// ===== Activity Feed =====
function renderActivityFeed() {
  const feed = document.getElementById('activityFeed');
  feed.innerHTML = activityLog.map(item => `
    <div class="activity-item">
      <div class="activity-item__icon activity-item__icon--${item.type}">
        <i class="fa fa-${item.type === 'vuln' ? 'bug' : item.type === 'scan' ? 'search' : item.type === 'resolve' ? 'check' : 'building'}"></i>
      </div>
      <div class="activity-item__text">${item.text}</div>
      <div class="activity-item__time">${item.time}</div>
    </div>
  `).join('');
}

// ===== Client Cards =====
function renderClientCards() {
  const container = document.getElementById('clientCards');
  container.innerHTML = clients.map(c => {
    const totalVulns = c.vulns.critical + c.vulns.high + c.vulns.medium + c.vulns.low;
    const critPct = totalVulns ? (c.vulns.critical / totalVulns) * 100 : 0;
    const highPct = totalVulns ? (c.vulns.high / totalVulns) * 100 : 0;
    const medPct = totalVulns ? (c.vulns.medium / totalVulns) * 100 : 0;
    const lowPct = totalVulns ? (c.vulns.low / totalVulns) * 100 : 0;

    return `
      <div class="client-card" data-client-id="${c.id}">
        <div class="client-card__header">
          <span class="client-card__name">${c.name}</span>
          <span class="client-card__industry">${c.industry}</span>
        </div>
        <div class="client-card__stats">
          <div class="client-card__stat">
            <div class="client-card__stat-value">${c.assets}</div>
            <div class="client-card__stat-label">Assets</div>
          </div>
          <div class="client-card__stat">
            <div class="client-card__stat-value">${totalVulns}</div>
            <div class="client-card__stat-label">Vulns</div>
          </div>
          <div class="client-card__stat">
            <div class="client-card__stat-value" style="color: ${getRiskColor(c.riskScore)}">${c.riskScore}</div>
            <div class="client-card__stat-label">Risk Score</div>
          </div>
        </div>
        <div class="client-card__vulns">
          <div class="client-card__vuln-bar" style="flex: ${critPct}; background: var(--severity-critical);"></div>
          <div class="client-card__vuln-bar" style="flex: ${highPct}; background: var(--severity-high);"></div>
          <div class="client-card__vuln-bar" style="flex: ${medPct}; background: var(--severity-medium);"></div>
          <div class="client-card__vuln-bar" style="flex: ${lowPct}; background: var(--severity-low);"></div>
        </div>
        <div class="client-card__footer">
          <span class="client-card__risk">
            <span class="badge badge--${getRiskClass(c.riskScore)}">${getRiskLabel(c.riskScore)} Risk</span>
          </span>
          <span class="client-card__scan">Last scan: ${formatDate(c.lastScan)}</span>
        </div>
      </div>
    `;
  }).join('');

  container.querySelectorAll('.client-card').forEach(card => {
    card.addEventListener('click', () => openClientDetail(parseInt(card.dataset.clientId)));
  });
}

// ===== Asset Table =====
function renderAssetTable(clientFilter, typeFilter) {
  const tbody = document.getElementById('assetBody');
  let filtered = assets;

  if (clientFilter !== 'all') {
    filtered = filtered.filter(a => a.clientId === parseInt(clientFilter));
  }
  if (typeFilter !== 'all') {
    filtered = filtered.filter(a => a.type === typeFilter);
  }

  tbody.innerHTML = filtered.map(a => {
    const client = getClientById(a.clientId);
    const statusClass = a.status === 'active' ? 'active' : a.status === 'warning' ? 'warning' : 'inactive';
    return `
      <tr>
        <td><strong>${a.name}</strong></td>
        <td>${client.name}</td>
        <td>${a.type.charAt(0).toUpperCase() + a.type.slice(1)}</td>
        <td><code>${a.ip}</code></td>
        <td>${a.os}</td>
        <td>${a.vulns > 0 ? `<span class="badge badge--${a.vulns >= 10 ? 'critical' : a.vulns >= 5 ? 'high' : 'medium'}">${a.vulns}</span>` : '<span class="badge badge--info">0</span>'}</td>
        <td>${formatDate(a.lastScanned)}</td>
        <td>
          <span class="status status--${statusClass}">
            <span class="status__dot"></span>
            ${statusClass.charAt(0).toUpperCase() + statusClass.slice(1)}
          </span>
        </td>
      </tr>
    `;
  }).join('');
}

function populateClientFilters() {
  const selects = ['assetClientFilter', 'vulnClientFilter'];
  selects.forEach(id => {
    const select = document.getElementById(id);
    clients.forEach(c => {
      const option = document.createElement('option');
      option.value = c.id;
      option.textContent = c.name;
      select.appendChild(option);
    });
  });
}

document.getElementById('assetClientFilter').addEventListener('change', () => {
  renderAssetTable(
    document.getElementById('assetClientFilter').value,
    document.getElementById('assetTypeFilter').value
  );
});

document.getElementById('assetTypeFilter').addEventListener('change', () => {
  renderAssetTable(
    document.getElementById('assetClientFilter').value,
    document.getElementById('assetTypeFilter').value
  );
});

// ===== Vulnerability Table =====
function renderVulnTable(clientFilter, severityFilter, statusFilter) {
  const tbody = document.getElementById('vulnBody');
  let filtered = vulnerabilities;

  if (clientFilter !== 'all') {
    filtered = filtered.filter(v => v.clientId === parseInt(clientFilter));
  }
  if (severityFilter !== 'all') {
    filtered = filtered.filter(v => v.severity === severityFilter);
  }
  if (statusFilter !== 'all') {
    filtered = filtered.filter(v => v.status === statusFilter);
  }

  // Sort by CVSS descending
  filtered.sort((a, b) => b.cvss - a.cvss);

  tbody.innerHTML = filtered.map(v => {
    const client = getClientById(v.clientId);
    const asset = getAssetById(v.assetId);
    const statusLabel = v.status === 'in_progress' ? 'In Progress' : v.status.charAt(0).toUpperCase() + v.status.slice(1);

    return `
      <tr>
        <td><code>${v.cve}</code></td>
        <td><strong>${v.title}</strong></td>
        <td>${client.name}</td>
        <td>${asset.name}</td>
        <td><span class="badge badge--${v.severity}">${v.severity.charAt(0).toUpperCase() + v.severity.slice(1)}</span></td>
        <td><strong style="color: ${getRiskColor(v.cvss * 10)}">${v.cvss}</strong></td>
        <td>
          <span class="status status--${v.status}">
            <span class="status__dot"></span>
            ${statusLabel}
          </span>
        </td>
        <td>${formatDate(v.discovered)}</td>
      </tr>
    `;
  }).join('');
}

document.getElementById('vulnClientFilter').addEventListener('change', updateVulnTable);
document.getElementById('vulnSeverityFilter').addEventListener('change', updateVulnTable);
document.getElementById('vulnStatusFilter').addEventListener('change', updateVulnTable);

function updateVulnTable() {
  renderVulnTable(
    document.getElementById('vulnClientFilter').value,
    document.getElementById('vulnSeverityFilter').value,
    document.getElementById('vulnStatusFilter').value
  );
}

// ===== Client Detail Modal =====
function openClientDetail(clientId) {
  const client = getClientById(clientId);
  const clientAssets = assets.filter(a => a.clientId === clientId);
  const clientVulns = vulnerabilities.filter(v => v.clientId === clientId);
  const totalVulns = client.vulns.critical + client.vulns.high + client.vulns.medium + client.vulns.low;

  document.getElementById('modalClientName').textContent = client.name;

  document.getElementById('modalBody').innerHTML = `
    <div class="modal__section">
      <h4>Client Information</h4>
      <table class="table">
        <tr><td><strong>Industry</strong></td><td>${client.industry}</td></tr>
        <tr><td><strong>Primary Contact</strong></td><td>${client.contact}</td></tr>
        <tr><td><strong>Email</strong></td><td>${client.email}</td></tr>
        <tr><td><strong>Contract Start</strong></td><td>${formatDate(client.contractStart)}</td></tr>
        <tr><td><strong>Last Scan</strong></td><td>${formatDate(client.lastScan)}</td></tr>
        <tr><td><strong>Risk Score</strong></td><td><span class="badge badge--${getRiskClass(client.riskScore)}">${client.riskScore} — ${getRiskLabel(client.riskScore)}</span></td></tr>
      </table>
    </div>

    <div class="modal__section">
      <h4>Vulnerability Summary</h4>
      <div class="kpi-grid" style="margin-bottom: 0;">
        <div class="kpi-card">
          <div class="kpi-card__icon kpi-card__icon--red"><i class="fa fa-times-circle"></i></div>
          <div class="kpi-card__content">
            <span class="kpi-card__value">${client.vulns.critical}</span>
            <span class="kpi-card__label">Critical</span>
          </div>
        </div>
        <div class="kpi-card">
          <div class="kpi-card__icon" style="background: rgba(249,115,22,0.15); color: var(--severity-high);"><i class="fa fa-exclamation-circle"></i></div>
          <div class="kpi-card__content">
            <span class="kpi-card__value">${client.vulns.high}</span>
            <span class="kpi-card__label">High</span>
          </div>
        </div>
        <div class="kpi-card">
          <div class="kpi-card__icon" style="background: rgba(245,158,11,0.15); color: var(--severity-medium);"><i class="fa fa-exclamation"></i></div>
          <div class="kpi-card__content">
            <span class="kpi-card__value">${client.vulns.medium}</span>
            <span class="kpi-card__label">Medium</span>
          </div>
        </div>
        <div class="kpi-card">
          <div class="kpi-card__icon kpi-card__icon--blue"><i class="fa fa-info-circle"></i></div>
          <div class="kpi-card__content">
            <span class="kpi-card__value">${client.vulns.low}</span>
            <span class="kpi-card__label">Low</span>
          </div>
        </div>
      </div>
    </div>

    <div class="modal__section">
      <h4>Assets (${clientAssets.length} shown in inventory)</h4>
      <table class="table">
        <thead>
          <tr><th>Name</th><th>Type</th><th>IP</th><th>Vulns</th><th>Status</th></tr>
        </thead>
        <tbody>
          ${clientAssets.map(a => `
            <tr>
              <td><strong>${a.name}</strong></td>
              <td>${a.type.charAt(0).toUpperCase() + a.type.slice(1)}</td>
              <td><code>${a.ip}</code></td>
              <td>${a.vulns}</td>
              <td><span class="status status--${a.status === 'warning' ? 'warning' : 'active'}"><span class="status__dot"></span>${a.status.charAt(0).toUpperCase() + a.status.slice(1)}</span></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>

    <div class="modal__section">
      <h4>Open Vulnerabilities (${clientVulns.filter(v => v.status !== 'resolved').length})</h4>
      <table class="table">
        <thead>
          <tr><th>CVE</th><th>Title</th><th>Severity</th><th>CVSS</th><th>Status</th></tr>
        </thead>
        <tbody>
          ${clientVulns.filter(v => v.status !== 'resolved').sort((a, b) => b.cvss - a.cvss).map(v => `
            <tr>
              <td><code>${v.cve}</code></td>
              <td>${v.title}</td>
              <td><span class="badge badge--${v.severity}">${v.severity.charAt(0).toUpperCase() + v.severity.slice(1)}</span></td>
              <td><strong>${v.cvss}</strong></td>
              <td><span class="status status--${v.status}"><span class="status__dot"></span>${v.status === 'in_progress' ? 'In Progress' : 'Open'}</span></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;

  document.getElementById('clientDetailModal').classList.add('modal--open');
}

// Modal close
document.getElementById('modalClose').addEventListener('click', () => {
  document.getElementById('clientDetailModal').classList.remove('modal--open');
});

document.querySelector('.modal__overlay').addEventListener('click', () => {
  document.getElementById('clientDetailModal').classList.remove('modal--open');
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.getElementById('clientDetailModal').classList.remove('modal--open');
  }
});

// ===== Global Search =====
document.getElementById('globalSearch').addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase().trim();
  if (!query) return;

  // Search across clients, assets, and vulnerabilities
  const matchedClients = clients.filter(c =>
    c.name.toLowerCase().includes(query) || c.industry.toLowerCase().includes(query)
  );
  const matchedAssets = assets.filter(a =>
    a.name.toLowerCase().includes(query) || a.ip.toLowerCase().includes(query) || a.os.toLowerCase().includes(query)
  );
  const matchedVulns = vulnerabilities.filter(v =>
    v.cve.toLowerCase().includes(query) || v.title.toLowerCase().includes(query)
  );

  // Navigate to relevant view based on search results
  if (matchedVulns.length > 0 && query.startsWith('cve')) {
    switchToView('vulnerabilities');
  } else if (matchedAssets.length > 0 && matchedClients.length === 0) {
    switchToView('assets');
  } else if (matchedClients.length > 0) {
    switchToView('clients');
  }
});

function switchToView(viewName) {
  sidebarLinks.forEach(l => l.classList.remove('sidebar__link--active'));
  const link = document.querySelector(`[data-view="${viewName}"]`);
  if (link) link.classList.add('sidebar__link--active');

  views.forEach(v => v.classList.remove('view--active'));
  document.getElementById(`view-${viewName}`).classList.add('view--active');
}

// ===== Initialize =====
function init() {
  updateKPIs();
  createSeverityChart();
  createTrendChart();
  renderClientRiskTable('all');
  renderActivityFeed();
  renderClientCards();
  populateClientFilters();
  renderAssetTable('all', 'all');
  renderVulnTable('all', 'all', 'all');
  createAssetTypeChart();
  createAssetsByClientChart();
}

document.addEventListener('DOMContentLoaded', init);
