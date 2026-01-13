import React, { useState } from 'react';
import { Users, Tag, Image as ImageIcon, Plus, Zap, Sparkles } from 'lucide-react';

const Assets = () => {
    // Mock data
    const audiences = [
        { id: 1, name: '20-30岁女性_护肤', size: '120万', bid: 1.2, status: 'active' },
        { id: 2, name: '竞品粉丝人群', size: '85万', bid: 1.5, status: 'active' },
        { id: 3, name: '高消费力人群', size: '50万', bid: 1.8, status: 'paused' },
    ];

    const keywords = [
        { id: 1, keyword: '海尔热水器', volume: '6800', bid: '¥3.5', status: 'active' },
        { id: 2, keyword: '电热水器推荐', volume: '4200', bid: '¥4.2', status: 'active' },
        { id: 3, keyword: '智能热水器', volume: '3100', bid: '¥3.8', status: 'paused' },
    ];

    const creatives = [
        { id: 1, title: '夏季防晒测评', type: '视频', status: 'active', ctr: '2.8%' },
        { id: 2, title: '美白精华种草', type: '图文', status: 'active', ctr: '2.1%' },
        { id: 3, title: '护肤日常分享', type: '视频', status: 'draft', ctr: '-' },
    ];

    return (
        <div style={{ padding: 'var(--space-lg)', color: 'var(--text-primary)' }}>
            {/* Intelligent Plan Creation Button */}
            <div style={{ marginBottom: 'var(--space-xl)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Stats on the left */}
                <div style={{ display: 'flex', gap: 'var(--space-lg)', alignItems: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '4px' }}>已测试计划</span>
                        <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                            12
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginLeft: '4px' }}>个</span>
                        </span>
                    </div>
                    <div style={{ width: '1px', height: '40px', backgroundColor: 'var(--border-light)' }} />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '4px' }}>可新增机会</span>
                        <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-success)' }}>
                            8
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginLeft: '4px' }}>个</span>
                        </span>
                    </div>
                    <div style={{ width: '1px', height: '40px', backgroundColor: 'var(--border-light)' }} />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '4px' }}>放弃计划</span>
                        <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                            3
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginLeft: '4px' }}>个</span>
                        </span>
                    </div>
                </div>

                {/* Button on the right */}
                <button style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '14px 32px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(0, 0, 0, 0.6)',
                    color: '#00f0ff',
                    border: '2px solid transparent',
                    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), linear-gradient(135deg, #00f0ff, #7c3aed, #ec4899)',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: 700,
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    boxShadow: '0 0 20px rgba(0, 240, 255, 0.3), inset 0 0 20px rgba(0, 240, 255, 0.1)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden'
                }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#ffffff';
                        e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 240, 255, 0.6), inset 0 0 30px rgba(0, 240, 255, 0.2)';
                        e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#00f0ff';
                        e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 240, 255, 0.3), inset 0 0 20px rgba(0, 240, 255, 0.1)';
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    }}
                >
                    <Zap size={22} strokeWidth={2.5} />
                    <span style={{
                        background: 'linear-gradient(135deg, #00f0ff, #7c3aed)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}>
                        AI智能创建计划
                    </span>
                </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 'var(--space-lg)' }}>

                {/* Audiences Section */}
                <div className="glass-panel" style={{ padding: 'var(--space-lg)', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-lg)' }}>
                        <h3 style={{ fontSize: '1rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <Users size={18} color="var(--color-primary)" />
                            人群包
                            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 400, marginLeft: '2px' }}>{audiences.length}</span>
                        </h3>
                        <div style={{ display: 'flex', gap: '6px' }}>
                            <button style={{
                                padding: '4px 8px',
                                borderRadius: 'var(--radius-sm)',
                                backgroundColor: 'rgba(0, 240, 255, 0.1)',
                                color: '#00f0ff',
                                border: '1px solid rgba(0, 240, 255, 0.3)',
                                cursor: 'pointer',
                                fontSize: '0.75rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px'
                            }}>
                                <Sparkles size={12} />
                                AI
                            </button>
                            <button style={{
                                padding: '4px 8px',
                                borderRadius: 'var(--radius-sm)',
                                backgroundColor: 'rgba(255,255,255,0.1)',
                                color: 'var(--text-primary)',
                                border: '1px solid var(--border-light)',
                                cursor: 'pointer',
                                fontSize: '0.75rem'
                            }}>
                                <Plus size={12} />
                            </button>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', flex: 1 }}>
                        {audiences.map(audience => (
                            <div key={audience.id} style={{
                                padding: 'var(--space-sm)',
                                backgroundColor: 'rgba(255,255,255,0.03)',
                                borderRadius: 'var(--radius-sm)',
                                border: '1px solid var(--border-light)',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <div>
                                    <h4 style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '4px' }}>{audience.name}</h4>
                                    <p style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
                                        {audience.size} • x{audience.bid}
                                    </p>
                                </div>
                                <span style={{
                                    padding: '2px 6px',
                                    borderRadius: 'var(--radius-full)',
                                    fontSize: '0.65rem',
                                    backgroundColor: audience.status === 'active' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(255, 255, 255, 0.1)',
                                    color: audience.status === 'active' ? 'var(--color-success)' : 'var(--text-muted)',
                                    whiteSpace: 'nowrap'
                                }}>
                                    {audience.status === 'active' ? '使用中' : '已暂停'}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Keywords Section */}
                <div className="glass-panel" style={{ padding: 'var(--space-lg)', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-lg)' }}>
                        <h3 style={{ fontSize: '1rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <Tag size={18} color="var(--color-primary)" />
                            关键词包
                            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 400, marginLeft: '2px' }}>{keywords.length}</span>
                        </h3>
                        <div style={{ display: 'flex', gap: '6px' }}>
                            <button style={{
                                padding: '4px 8px',
                                borderRadius: 'var(--radius-sm)',
                                backgroundColor: 'rgba(0, 240, 255, 0.1)',
                                color: '#00f0ff',
                                border: '1px solid rgba(0, 240, 255, 0.3)',
                                cursor: 'pointer',
                                fontSize: '0.75rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px'
                            }}>
                                <Sparkles size={12} />
                                AI
                            </button>
                            <button style={{
                                padding: '4px 8px',
                                borderRadius: 'var(--radius-sm)',
                                backgroundColor: 'rgba(255,255,255,0.1)',
                                color: 'var(--text-primary)',
                                border: '1px solid var(--border-light)',
                                cursor: 'pointer',
                                fontSize: '0.75rem'
                            }}>
                                <Plus size={12} />
                            </button>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', flex: 1 }}>
                        {keywords.map(kw => (
                            <div key={kw.id} style={{
                                padding: 'var(--space-sm)',
                                backgroundColor: 'rgba(255,255,255,0.03)',
                                borderRadius: 'var(--radius-sm)',
                                border: '1px solid var(--border-light)',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <div>
                                    <h4 style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '4px' }}>{kw.keyword}</h4>
                                    <p style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
                                        {kw.volume}/月 • {kw.bid}
                                    </p>
                                </div>
                                <span style={{
                                    padding: '2px 6px',
                                    borderRadius: 'var(--radius-full)',
                                    fontSize: '0.65rem',
                                    backgroundColor: kw.status === 'active' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(255, 255, 255, 0.1)',
                                    color: kw.status === 'active' ? 'var(--color-success)' : 'var(--text-muted)',
                                    whiteSpace: 'nowrap'
                                }}>
                                    {kw.status === 'active' ? '使用中' : '已暂停'}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Creatives Section */}
                <div className="glass-panel" style={{ padding: 'var(--space-lg)', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-lg)' }}>
                        <h3 style={{ fontSize: '1rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <ImageIcon size={18} color="var(--color-primary)" />
                            素材包
                            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 400, marginLeft: '2px' }}>{creatives.length}</span>
                        </h3>
                        <div style={{ display: 'flex', gap: '6px' }}>
                            <button style={{
                                padding: '4px 8px',
                                borderRadius: 'var(--radius-sm)',
                                backgroundColor: 'rgba(0, 240, 255, 0.1)',
                                color: '#00f0ff',
                                border: '1px solid rgba(0, 240, 255, 0.3)',
                                cursor: 'pointer',
                                fontSize: '0.75rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px'
                            }}>
                                <Sparkles size={12} />
                                AI
                            </button>
                            <button style={{
                                padding: '4px 8px',
                                borderRadius: 'var(--radius-sm)',
                                backgroundColor: 'rgba(255,255,255,0.1)',
                                color: 'var(--text-primary)',
                                border: '1px solid var(--border-light)',
                                cursor: 'pointer',
                                fontSize: '0.75rem'
                            }}>
                                <Plus size={12} />
                            </button>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', flex: 1 }}>
                        {creatives.map(creative => (
                            <div key={creative.id} style={{
                                padding: 'var(--space-sm)',
                                backgroundColor: 'rgba(255,255,255,0.03)',
                                borderRadius: 'var(--radius-sm)',
                                border: '1px solid var(--border-light)',
                                display: 'flex',
                                gap: 'var(--space-sm)',
                                alignItems: 'center'
                            }}>
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    backgroundColor: 'rgba(255,255,255,0.05)',
                                    borderRadius: 'var(--radius-sm)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                }}>
                                    <ImageIcon size={20} color="var(--text-muted)" />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <h4 style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '2px' }}>{creative.title}</h4>
                                    <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
                                        {creative.type} • {creative.ctr}
                                    </div>
                                </div>
                                <span style={{
                                    padding: '2px 6px',
                                    borderRadius: 'var(--radius-full)',
                                    fontSize: '0.65rem',
                                    backgroundColor: creative.status === 'active' ? 'rgba(16, 185, 129, 0.1)' : creative.status === 'draft' ? 'rgba(251, 191, 36, 0.1)' : 'rgba(255, 255, 255, 0.1)',
                                    color: creative.status === 'active' ? 'var(--color-success)' : creative.status === 'draft' ? 'var(--color-warning)' : 'var(--text-muted)',
                                    whiteSpace: 'nowrap',
                                    flexShrink: 0
                                }}>
                                    {creative.status === 'active' ? '使用中' : creative.status === 'draft' ? '草稿' : '已暂停'}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Assets;
