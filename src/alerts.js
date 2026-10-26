// Fictional, deterministic data for the hiring challenge. No real customer information.
const titles = [
  ['Repeated failed VPN logins', 'Multiple invalid credentials for a remote-access account', 'Identity'],
  ['Unusual outbound DNS volume', 'A workstation queried an unusually high number of domains', 'Network'],
  ['Privileged group membership changed', 'An account was added to a privileged directory group', 'Identity'],
  ['Suspicious PowerShell execution', 'Encoded command line observed on a Windows endpoint', 'Endpoint'],
  ['Unexpected RDP access', 'Remote desktop session outside typical working hours', 'Endpoint'],
  ['Possible credential stuffing', 'Burst of login failures across several user accounts', 'Identity'],
  ['Malware detection quarantined', 'Endpoint agent quarantined a suspicious executable', 'Endpoint'],
  ['New internet-facing service', 'Previously unseen listening service detected', 'Exposure'],
  ['Large file download', 'High-volume transfer from a sensitive file share', 'Data'],
  ['Administrative login from new location', 'A privileged account signed in from an unusual location', 'Identity'],
  ['Blocked connection to suspicious IP', 'Firewall denied traffic to a threat-intelligence match', 'Network'],
  ['Potential lateral movement', 'Multiple authentication attempts between internal hosts', 'Network'],
];

const assets = ['FIN-LAPTOP-04', 'DC-01', 'WEB-PROD-02', 'HR-WS-17', 'VPN-GW-01', 'DB-REPORTS-01', 'ENG-WS-09', 'MAIL-01'];
const users = ['a.micallef', 'j.borg', 's.camilleri', 'd.farrugia', 'r.attard', 'm.vella'];
const severityCycle = ['Medium', 'Low', 'High', 'Medium', 'Critical', 'Low', 'High', 'Medium', 'High', 'Critical', 'Low', 'Medium'];
const statusCycle = ['New', 'New', 'Acknowledged', 'New', 'Resolved', 'New', 'False Positive', 'Acknowledged', 'New'];

export const initialAlerts = Array.from({ length: 36 }, (_, index) => {
  const issue = titles[(index * 7) % titles.length];
  const id = `ALT-${String(1042 + index).padStart(5, '0')}`;
  const minutesAgo = 9 + index * 38;
  return {
    id,
    title: issue[0],
    description: issue[1],
    category: issue[2],
    severity: severityCycle[(index * 5 + Math.floor(index / 4)) % severityCycle.length],
    status: statusCycle[(index * 2) % statusCycle.length],
    timestamp: new Date(Date.UTC(2026, 9, 22, 16, 30) - minutesAgo * 60000).toISOString(),
    asset: assets[(index * 3) % assets.length],
    user: users[(index * 5) % users.length],
    source: ['Sentio SIEM', 'Endpoint agent', 'Network sensor', 'Identity provider'][index % 4],
    srcIp: `10.${20 + (index % 6)}.${10 + (index % 20)}.${15 + (index * 7) % 200}`,
    notes: index % 4 === 0 ? 'Detection triggered by an unusual sequence of events. Analyst review recommended.' : 'Additional context is available from the originating system.',
  };
});
