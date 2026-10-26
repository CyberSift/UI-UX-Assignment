import React, { useMemo, useState } from 'react';
import { initialAlerts } from './alerts';

// This intentionally starts as one oversized component. It is a candidate exercise, not a reference architecture.
export default function App() {
  const [alerts, setAlerts] = useState(initialAlerts);
  const [search, setSearch] = useState('');
  const [severity, setSeverity] = useState('All');
  const [status, setStatus] = useState('All');
  const [selectedId, setSelectedId] = useState(initialAlerts[0].id);
  const [pendingAction, setPendingAction] = useState('Acknowledged');
  const [notice, setNotice] = useState('');
  const [showNotes, setShowNotes] = useState(false);
  const selected = alerts.find(item => item.id === selectedId);

  const filtered = useMemo(() => alerts.filter(alert => {
    const term = search.toLowerCase().trim();
    return (severity === 'All' || alert.severity === severity)
      && (status === 'All' || alert.status === status)
      && (!term || [alert.id, alert.title, alert.asset, alert.user, alert.description].some(value => value.toLowerCase().includes(term)));
  }), [alerts, search, severity, status]);

  function applyAction() {
    if (!selected) return;
    setAlerts(current => current.map(item => item.id === selectedId ? { ...item, status: pendingAction } : item));
    setNotice(`Update saved for ${selectedId}.`);
  }

  function reset() {
    setSearch(''); setSeverity('All'); setStatus('All');
  }

  return (
    <div className="page">
      <div className="topbar">
        <div className="brand"><span className="brandbox">CS</span> CyberSift <small>Part of GO plc. Group · Operations</small></div>
        <div className="toplinks">Overview &nbsp; / &nbsp; Events &nbsp; / &nbsp; Rules &nbsp; / &nbsp; Inventory &nbsp; / &nbsp; Settings</div>
        <div className="user">Analyst ▾</div>
      </div>
      <div className="content">
        <div className="breadcrumbs">Security / Operations / Alerts / Alert list / All alerts</div>
        <div className="headline"><h1>Alert Management Console</h1><span>Environment: Production &nbsp; | &nbsp; Last reviewed: —</span></div>
        <p className="intro">Use this page to review security event notifications, locate relevant items and maintain their investigation status.</p>
        <div className="statline">
          <div><b>{alerts.length}</b><small>TOTAL ALERTS</small></div>
          <div><b>{alerts.filter(a => a.status === 'New').length}</b><small>NEW ITEMS</small></div>
          <div><b>{alerts.filter(a => a.severity === 'Critical').length}</b><small>CRITICAL</small></div>
          <div><b>{alerts.filter(a => a.status === 'Resolved').length}</b><small>RESOLVED</small></div>
        </div>
        <div className="bar"><strong>Query and filtering options</strong><span>Use the controls below to narrow the displayed records.</span></div>
        <div className="filters">
          <label>Search records <input placeholder="Type a search term" value={search} onChange={e => setSearch(e.target.value)} /></label>
          <label>Severity category <select value={severity} onChange={e => setSeverity(e.target.value)}>{['All', 'Critical', 'High', 'Medium', 'Low'].map(s => <option key={s}>{s}</option>)}</select></label>
          <label>Investigation status <select value={status} onChange={e => setStatus(e.target.value)}>{['All', 'New', 'Acknowledged', 'Resolved', 'False Positive'].map(s => <option key={s}>{s}</option>)}</select></label>
          <button className="reset" onClick={reset}>Clear selections</button>
        </div>
        <div className="tablebar"><b>Matching alert records</b><span>{filtered.length} records returned</span></div>
        <div className="tablewrap"><table>
          <thead><tr><th>Alert ID</th><th>Detection title</th><th>Severity</th><th>Event time (UTC)</th><th>Asset name</th><th>Current status</th><th>Detection source</th><th>More</th></tr></thead>
          <tbody>{filtered.map(a => <tr key={a.id} className={a.id === selectedId ? 'active' : ''}>
            <td>{a.id}</td><td>{a.title}</td><td><span className={'sev ' + a.severity.toLowerCase()}>{a.severity}</span></td>
            <td>{new Date(a.timestamp).toLocaleString('en-GB', { timeZone: 'UTC' })}</td><td>{a.asset}</td><td>{a.status}</td><td>{a.source}</td>
            <td><button className="tiny" onClick={() => { setSelectedId(a.id); setNotice(''); setShowNotes(false); }}>View</button></td>
          </tr>)}</tbody>
        </table>{filtered.length === 0 && <div className="empty">No matching records. Please modify the selected parameters and try again.</div>}</div>
        <p className="footnote">Tip: click “View” to load an alert into the details section below. You may need to scroll.</p>
        <div className="detailbar"><strong>Selected record details</strong><span>Investigation / Record inspector</span></div>
        {selected ? <div className="details">
          <div className="fieldgrid">
            <div><small>IDENTIFIER</small><p>{selected.id}</p></div><div><small>DETECTION TITLE</small><p>{selected.title}</p></div><div><small>SEVERITY</small><p>{selected.severity}</p></div>
            <div><small>CATEGORY</small><p>{selected.category}</p></div><div><small>ASSOCIATED USER</small><p>{selected.user}</p></div><div><small>ASSET</small><p>{selected.asset}</p></div>
            <div><small>SOURCE IP</small><p>{selected.srcIp}</p></div><div><small>ORIGIN SYSTEM</small><p>{selected.source}</p></div><div><small>STATUS</small><p>{selected.status}</p></div>
          </div>
          <h3>Event description</h3><p>{selected.description}</p>
          <button className="linkbutton" onClick={() => setShowNotes(v => !v)}>{showNotes ? 'Hide' : 'Show'} supporting notes</button>
          {showNotes && <p className="notes">{selected.notes}</p>}
          <div className="actionbox"><label>Change investigation status
            <select value={pendingAction} onChange={e => setPendingAction(e.target.value)}>
              {['Acknowledged', 'Resolved', 'False Positive', 'New'].map(s => <option key={s}>{s}</option>)}
            </select></label>
            <button onClick={applyAction}>Apply change to record</button>
            <span className="notice">{notice}</span>
          </div>
        </div> : <div className="empty">Select an alert.</div>}
        <footer>CyberSift · Part of GO plc. Group · Demo environment · All alerts and identities are fictional</footer>
      </div>
    </div>
  );
}
