import React from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import './layouts.style.css';

export default class Sidebar extends React.Component<{}> {
  state = {
    showBenchmarkSubmenu: false
  };

  BenchmarkSubmenu = () => {
    if (this.state.showBenchmarkSubmenu) {
      this.setState({
        showBenchmarkSubmenu: false
      });
    } else {
      this.setState({
        showBenchmarkSubmenu: true
      });
    }
  };

  render() {
    return (
      <Router>
        <div className="sidebar">
          <div className="sidebar-content">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <div>
                <div className="sidebar-inner">
                  <img
                    src="assets/icons/dashboard-icon.svg"
                    className="sidebar-inner"
                    alt="dashboard"
                  />
                  <div className="sidebar-head sidebar-inner">Dashboard</div>
                </div>
              </div>
            </Link>
            <Link to="/monitoring" style={{ textDecoration: 'none' }}>
              <div>
                <div className="sidebar-inner">
                  <img
                    src="assets/icons/monitoring-icon.svg"
                    className="sidebar-inner"
                    alt="monitoring"
                  />
                  <div className="sidebar-head sidebar-inner">Monitoring</div>
                </div>
              </div>
            </Link>

            <div
              onClick={() => {
                this.BenchmarkSubmenu();
              }}
            >
              <div className="sidebar-inner benchmarking">
                <img
                  src="assets/icons/bench-icon.svg"
                  className="sidebar-inner"
                  alt="Benchmarks"
                />
                <div className="sidebar-head sidebar-inner">Benchmarks</div>
              </div>
            </div>

            <div className="benchmark-submenu">
              {this.state.showBenchmarkSubmenu ? (
                <div>
                  <Link to="/ping" style={{ textDecoration: 'none' }}>
                    <div>
                      <div className="sidebar-inner">
                        <img
                          src="assets/icons/ping-meter.svg"
                          className="sidebar-submenu-inner"
                          alt="Benchmarks"
                        />
                        <div className="sidebar-head sidebar-inner">Ping</div>
                      </div>
                    </div>
                  </Link>
                  <Link to="/floodping" style={{ textDecoration: 'none' }}>
                    <div>
                      <div className="sidebar-inner">
                        {/* <img
                            src="assets/icons/ping-meter.svg"
                            className="sidebar-submenu-inner"
                            alt="Benchmarks"
                        /> */}
                        <div className="sidebar-head sidebar-inner">
                          FloodPing
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link to="/jitter" style={{ textDecoration: 'none' }}>
                    <div>
                      <div className="sidebar-inner">
                        {/* <img
                            src="assets/icons/bench-icon.svg"
                            className="sidebar-submenu-inner"
                            alt="Benchmarks"
                        /> */}
                        <div className="sidebar-head sidebar-inner">Jitter</div>
                      </div>
                    </div>
                  </Link>
                </div>
              ) : (
                <div />
              )}
            </div>

            <div className="sidebar-bottom-links">
              <Link to="/settings" style={{ textDecoration: 'none' }}>
                <div>
                  <div className="sidebar-inner">
                    <img
                      src="assets/icons/settings-icon.svg"
                      className="sidebar-inner"
                      alt="settings"
                    />
                    <div className="sidebar-head sidebar-inner">Settings</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
