import React, { useState } from 'react';
import { FileText, Search, User } from 'lucide-react';

const Header = () => {
    const [showUserMenu, setShowUserMenu] = useState(false);

    return (
        <header style={{
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 var(--space-xl)',
            borderBottom: '1px solid var(--border-light)',
            backgroundColor: 'rgba(15, 23, 42, 0.8)', // Semi-transparent bg-app
            backdropFilter: 'var(--glass-blur)',
            position: 'sticky',
            top: 0,
            zIndex: 5
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', color: 'var(--text-muted)' }}>
                <Search size={18} />
                <input
                    type="text"
                    placeholder="搜索项目..."
                    style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--text-primary)',
                        fontSize: '0.9rem',
                        outline: 'none',
                        width: '200px'
                    }}
                />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-lg)' }}>
                <button style={{ position: 'relative', color: 'var(--text-secondary)' }}>
                    <FileText size={20} />
                    {/* Removed the notification dot as it's likely not needed for a document icon, or can be re-added if requested */}
                </button>
                <div
                    style={{ position: 'relative', cursor: 'pointer' }}
                    onClick={() => setShowUserMenu(!showUserMenu)}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                        <div style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--bg-panel-hover)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid var(--border-light)'
                        }}>
                            <User size={18} />
                        </div>
                        <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>投手一号</span>
                    </div>

                    {/* User Menu Popup */}
                    {showUserMenu && (
                        <div className="glass-panel" style={{
                            position: 'absolute',
                            top: 'calc(100% + 10px)',
                            right: 0,
                            width: '240px',
                            padding: '16px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                            zIndex: 1000,
                            boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                            cursor: 'default',
                            backgroundColor: '#1e293b' // Solid background color
                        }}
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                        >
                            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px', marginBottom: '4px' }}>
                                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '4px' }}>所在部门</div>
                                <div style={{ fontSize: '0.95rem', fontWeight: 500 }}>1688网服</div>
                            </div>
                            <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px', marginBottom: '4px' }}>
                                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '4px' }}>登录账号</div>
                                <div style={{ fontSize: '0.95rem', fontWeight: 500 }}>tou_shu_001</div>
                            </div>
                            <div style={{
                                padding: '8px 0',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                color: 'var(--color-primary)',
                                cursor: 'pointer',
                                fontSize: '0.9rem'
                            }}>
                                <User size={16} />
                                账号设置
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
