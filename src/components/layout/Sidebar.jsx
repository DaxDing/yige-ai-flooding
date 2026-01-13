import React, { useState } from 'react';
import { LayoutGrid, Settings, FolderDot, Plus, ShieldAlert } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import { mockProjects } from '../../data/mockProjects';

const Sidebar = () => {
    const navigate = useNavigate();
    const [showSettingsMenu, setShowSettingsMenu] = useState(false);

    return (
        <div style={{
            width: '260px',
            height: '100vh',
            backgroundColor: 'rgba(20, 20, 25, 0.95)',
            borderRight: '1px solid var(--border-light)',
            display: 'flex',
            flexDirection: 'column',
            padding: 'var(--space-lg)',
            backdropFilter: 'blur(20px)',
            position: 'fixed',
            left: 0,
            top: 0,
            zIndex: 100
        }}>
            {/* Logo Area */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-sm)',
                marginBottom: 'var(--space-xl)',
                paddingLeft: 'var(--space-xs)'
            }}>
                <div style={{
                    width: '32px',
                    height: '32px',
                    background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    color: '#fff'
                }}>
                    F
                </div>
                <span style={{ fontSize: '1.2rem', fontWeight: 700, letterSpacing: '0.5px' }}>AI Flooding</span>
            </div>

            {/* Main Navigation */}
            <div style={{ marginBottom: 'var(--space-xl)' }}>
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', borderRadius: 'var(--radius-md)', color: 'var(--text-secondary)', textDecoration: 'none', transition: 'all 0.2s ease' }}
                >
                    <LayoutGrid size={20} />
                    <span>首页</span>
                </NavLink>
            </div>

            {/* Project List */}
            <div style={{ flex: 1, overflowY: 'auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-sm)', paddingLeft: 'var(--space-xs)' }}>
                    <p style={{
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}>
                        项目列表
                    </p>
                    <button style={{ color: 'var(--color-primary)', padding: '4px' }}>
                        <Plus size={14} />
                    </button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {mockProjects
                        .sort((a, b) => {
                            const statusOrder = { 'in-delivery': 0, 'pre-delivery': 1, 'post-delivery': 2 };
                            if (statusOrder[a.status] !== statusOrder[b.status]) {
                                return statusOrder[a.status] - statusOrder[b.status];
                            }
                            return a.id - b.id;
                        })
                        .map(project => (
                            <NavLink
                                key={project.id}
                                to={`/project/${project.id}`}
                                className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    padding: '8px 10px',
                                    borderRadius: 'var(--radius-md)',
                                    color: 'var(--text-secondary)',
                                    textDecoration: 'none',
                                    transition: 'all 0.2s ease',
                                    fontSize: '0.9rem'
                                }}
                            >
                                <FolderDot size={16} />
                                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{project.name}</span>
                                {(project.status === 'in-delivery' || project.status === 'pre-delivery') && (
                                    <div style={{
                                        width: '6px',
                                        height: '6px',
                                        backgroundColor: project.status === 'in-delivery' ? 'var(--color-success)' : 'var(--color-danger)',
                                        borderRadius: '50%',
                                        marginLeft: 'auto',
                                        boxShadow: `0 0 4px ${project.status === 'in-delivery' ? 'var(--color-success)' : 'var(--color-danger)'}`
                                    }} />
                                )}
                            </NavLink>
                        ))}
                </div>
            </div>

            {/* Bottom Actions */}
            <div style={{ marginTop: 'auto', borderTop: '1px solid var(--border-light)', paddingTop: 'var(--space-md)', position: 'relative' }}>
                {showSettingsMenu && (
                    <div className="glass-panel" style={{
                        position: 'absolute',
                        bottom: '100%',
                        left: '0',
                        width: '100%',
                        marginBottom: '10px',
                        padding: '8px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px',
                        zIndex: 1000,
                        boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
                    }}>
                        {[
                            { label: '预警规则', icon: ShieldAlert },
                            { label: '策略模版', icon: LayoutGrid }
                        ].map((item, idx) => (
                            <div key={idx} style={{
                                padding: '8px 12px',
                                borderRadius: 'var(--radius-sm)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                cursor: 'pointer',
                                color: 'var(--text-secondary)',
                                transition: 'all 0.2s',
                                fontSize: '0.9rem'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                                    e.currentTarget.style.color = 'var(--text-primary)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.color = 'var(--text-secondary)';
                                }}
                            >
                                <item.icon size={16} />
                                {item.label}
                            </div>
                        ))}
                    </div>
                )}
                <button
                    onClick={() => setShowSettingsMenu(!showSettingsMenu)}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        width: '100%',
                        padding: '10px',
                        borderRadius: 'var(--radius-md)',
                        color: showSettingsMenu ? 'var(--color-primary)' : 'var(--text-secondary)',
                        background: showSettingsMenu ? 'rgba(0, 240, 255, 0.1)' : 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'var(--transition-fast)'
                    }}>
                    <Settings size={20} />
                    <span>设置</span>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
