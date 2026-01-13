import React, { useState } from 'react';
import {
    TrendingUp, AlertCircle, Bell, ChevronRight,
    MoreHorizontal, Clock, ArrowUpRight, X, Archive, Cpu
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { mockProjects } from '../data/mockProjects';

const Dashboard = () => {
    const navigate = useNavigate();
    const [openMenuId, setOpenMenuId] = useState(null);

    // Mock Notifications
    const notifications = [
        { id: 1, type: 'warning', message: '“新用户获取”计划 ROI 下跌至 1.1', time: '10分钟前', project: '新用户获取计划' },
        { id: 2, type: 'info', message: '“夏季大促”素材审核通过', time: '30分钟前', project: '夏季大促推广' },
        { id: 3, type: 'danger', message: '账户余额不足 ¥500', time: '1小时前', project: '系统' },
        { id: 4, type: 'success', message: '昨日消耗达成率 105%', time: '2小时前', project: '全域' },
        { id: 5, type: 'warning', message: '部分关键词搜索量异常波动', time: '4小时前', project: '品牌形象建设' },
    ];

    return (
        <div style={{ display: 'grid', gridTemplateColumns: '4fr 1fr', gap: 'var(--space-xl)', height: 'calc(100vh - 100px)' }}>

            {/* Left Column: Project Cards */}
            <div style={{ overflowY: 'auto', paddingRight: 'var(--space-md)' }}>
                <div style={{ marginBottom: 'var(--space-lg)' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '4px' }}>项目概览</h2>
                    <p style={{ color: 'var(--text-secondary)' }}>实时监控核心指标与进度</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-lg)' }}>
                    {mockProjects
                        .map(p => ({
                            ...p,
                            isExpired: new Date(p.deadline) < new Date()
                        }))
                        .sort((a, b) => {
                            const statusOrder = { 'in-delivery': 0, 'pre-delivery': 1, 'post-delivery': 2 };
                            if (statusOrder[a.status] !== statusOrder[b.status]) {
                                return statusOrder[a.status] - statusOrder[b.status];
                            }
                            // Sort by stage for pre-delivery projects
                            if (a.status === 'pre-delivery' && b.status === 'pre-delivery') {
                                const stageOrder = { '蓄水': 0, '预热': 1, '爆发': 2, '延续': 3 };
                                const stageA = stageOrder[a.stage] !== undefined ? stageOrder[a.stage] : 99;
                                const stageB = stageOrder[b.stage] !== undefined ? stageOrder[b.stage] : 99;
                                if (stageA !== stageB) {
                                    return stageA - stageB;
                                }
                            }
                            return a.id - b.id;
                        })
                        .map((project) => (
                            <div
                                key={project.id}
                                className="glass-panel"
                                onClick={(e) => {
                                    // Don't navigate if clicking on the menu area
                                    if (e.target.closest('button')) return;
                                    if (!project.isExpired) {
                                        navigate(`/project/${project.id}/${project.status}`);
                                    }
                                }}
                                style={{
                                    padding: 'var(--space-lg)',
                                    cursor: project.isExpired ? 'not-allowed' : 'pointer',
                                    transition: 'var(--transition-normal)',
                                    position: 'relative',
                                    borderLeft: project.status === 'in-delivery' && !project.isExpired
                                        ? '4px solid var(--color-success)'
                                        : '4px solid transparent',
                                    opacity: project.isExpired ? 0.6 : 1,
                                    filter: project.isExpired ? 'grayscale(0.8)' : 'none',
                                }}
                                onMouseEnter={(e) => {
                                    if (!project.isExpired) {
                                        e.currentTarget.style.borderColor = project.status === 'in-delivery'
                                            ? 'var(--color-success)'
                                            : 'var(--color-primary)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (!project.isExpired) {
                                        e.currentTarget.style.borderColor = project.status === 'in-delivery'
                                            ? 'var(--color-success)'
                                            : 'var(--border-light)';
                                    }
                                }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-md)' }}>
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                                            <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>{project.name}</h3>
                                            <span style={{
                                                fontSize: '0.75rem',
                                                padding: '2px 8px',
                                                borderRadius: 'var(--radius-full)',
                                                backgroundColor: 'rgba(255,255,255,0.1)',
                                                color: 'var(--text-secondary)'
                                            }}>
                                                {project.brand}
                                            </span>
                                        </div>
                                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>ID: {project.id} • 截止: {project.deadline}</p>
                                    </div>
                                    <div style={{ position: 'relative' }}>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setOpenMenuId(openMenuId === project.id ? null : project.id);
                                            }}
                                            style={{
                                                color: 'var(--text-muted)',
                                                padding: '4px',
                                                cursor: 'pointer',
                                                backgroundColor: openMenuId === project.id ? 'rgba(255,255,255,0.1)' : 'transparent',
                                                border: 'none',
                                                borderRadius: 'var(--radius-sm)',
                                                transition: 'all 0.2s'
                                            }}
                                        >
                                            <MoreHorizontal size={20} />
                                        </button>
                                        {openMenuId === project.id && (
                                            <div style={{
                                                position: 'absolute',
                                                top: '100%',
                                                right: 0,
                                                marginTop: '4px',
                                                backgroundColor: 'rgba(20, 20, 25, 0.98)',
                                                border: '1px solid rgba(255,255,255,0.15)',
                                                borderRadius: 'var(--radius-md)',
                                                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                                                zIndex: 1000,
                                                minWidth: '160px',
                                                overflow: 'hidden'
                                            }}>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setOpenMenuId(null);
                                                        // Handle archive/close action
                                                        alert(`关闭项目: ${project.name}`);
                                                    }}
                                                    style={{
                                                        width: '100%',
                                                        padding: '10px 14px',
                                                        backgroundColor: 'transparent',
                                                        border: 'none',
                                                        color: 'var(--color-danger)',
                                                        fontSize: '0.85rem',
                                                        textAlign: 'left',
                                                        cursor: 'pointer',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '8px',
                                                        transition: 'background-color 0.2s'
                                                    }}
                                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.1)'}
                                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                                                >
                                                    <X size={16} />
                                                    关闭项目
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)' }}>
                                        {/* Metrics */}
                                        <div>
                                            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>今日消耗 / 日预算</p>
                                            <p style={{ fontSize: '1.1rem', fontWeight: 'bold', fontFamily: 'monospace' }}>
                                                {project.dailySpend} <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 'normal' }}>/ {project.dailyBudget}</span>
                                            </p>
                                        </div>

                                        <div>
                                            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>ROI</p>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                <p style={{ fontSize: '1.2rem', fontWeight: 'bold', fontFamily: 'monospace', color: project.roi !== '-' ? 'var(--color-success)' : 'inherit' }}>
                                                    {project.roi}
                                                </p>
                                                {project.roi !== '-' && <TrendingUp size={14} color="var(--color-success)" />}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Progress */}
                                    <div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                                            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>总预算进度</span>
                                            <span style={{ fontSize: '0.8rem', fontWeight: 600, fontFamily: 'monospace' }}>{project.spend} / {project.budget}</span>
                                        </div>
                                        <div style={{ height: '4px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 'var(--radius-full)' }}>
                                            <div style={{
                                                width: `${project.progress}%`,
                                                height: '100%',
                                                backgroundColor: project.progress === 100 ? 'var(--color-success)' : 'var(--color-primary)',
                                                borderRadius: 'var(--radius-full)',
                                                transition: 'width 1s ease-in-out'
                                            }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>

            {/* Right Column: Notification Center */}
            <div style={{
                borderLeft: '1px solid var(--border-light)',
                paddingLeft: 'var(--space-xl)',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <div style={{ marginBottom: 'var(--space-lg)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Cpu size={18} />
                        Flooding AI
                    </h3>
                    <span style={{
                        fontSize: '0.75rem',
                        backgroundColor: 'var(--color-danger)',
                        color: '#fff',
                        padding: '2px 6px',
                        borderRadius: '10px',
                        fontWeight: 'bold'
                    }}>
                        5
                    </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', overflowY: 'auto' }}>
                    {notifications.map(note => (
                        <div key={note.id} style={{
                            padding: 'var(--space-md)',
                            backgroundColor: 'rgba(255,255,255,0.03)',
                            borderRadius: 'var(--radius-md)',
                            borderLeft: `3px solid ${note.type === 'warning' ? 'var(--color-warning)' :
                                note.type === 'danger' ? 'var(--color-danger)' :
                                    note.type === 'success' ? 'var(--color-success)' :
                                        'var(--color-primary)'
                                }`
                        }}>
                            <p style={{ fontSize: '0.9rem', marginBottom: '6px', lineHeight: '1.4' }}>{note.message}</p>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{note.project}</span>
                                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <Clock size={12} /> {note.time}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: 'auto', paddingTop: 'var(--space-lg)' }}>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;
