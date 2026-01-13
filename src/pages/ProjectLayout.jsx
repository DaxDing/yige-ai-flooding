import React from 'react';
import { Outlet, useParams, useNavigate, useLocation } from 'react-router-dom';
import { LayoutGrid, ArrowLeft, Layers, Activity, BarChart3, Database, CheckCircle2, CircleDashed } from 'lucide-react';
import { mockProjects } from '../data/mockProjects';

const ProjectLayout = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    // Mock Project Name lookup (in a real app, this would come from an API/Context)
    const project = mockProjects.find(p => p.id === parseInt(id));
    const projectName = project ? project.name : "未知项目";

    const tabs = [
        { path: 'in-delivery', label: '盯盘', icon: Activity },
        { path: 'pre-delivery', label: '计划', icon: Layers },
        { path: 'assets', label: '资产', icon: Database },
        { path: 'post-delivery', label: '复盘', icon: BarChart3 },
    ];

    const currentTab = tabs.find(tab => location.pathname.includes(tab.path))?.path || 'pre-delivery';

    const isOnboardingProject = project?.status === 'pre-delivery';

    const onboardingSteps = [
        { label: '基础资料', status: 'active' },
        { label: '目标策略', status: 'pending' },
        { label: '人群包', status: 'pending' },
        { label: '关键词包', status: 'pending' },
        { label: '素材包', status: 'pending' }
    ];
    const activeStepIndexRaw = onboardingSteps.findIndex(step => step.status === 'active');
    const activeStepIndex = activeStepIndexRaw === -1 ? 0 : activeStepIndexRaw;

    const renderOnboarding = () => (
        <div className="glass-panel" style={{ padding: 'var(--space-xl)', display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
            <div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '8px' }}>启动投流项目</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>按照顺序补齐每个环节，AI 即可生成投放方案。</p>
            </div>

            <div style={{ position: 'relative', padding: 'var(--space-xl) var(--space-lg)', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.08)', marginBottom: 'var(--space-lg)' }}>
                <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative' }}>
                    <div style={{ display: 'flex', position: 'relative' }}>
                        {onboardingSteps.map((step, index) => {
                            const isActive = step.status === 'active';
                            const isCompleted = index < activeStepIndex;
                            return (
                                <div key={step.label} style={{
                                    flex: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    position: 'relative'
                                }}>
                                    {/* Dot */}
                                    <div style={{
                                        width: '20px',
                                        height: '20px',
                                        borderRadius: '50%',
                                        backgroundColor: isActive ? 'var(--color-primary)' : isCompleted ? 'var(--color-primary)' : 'rgba(255,255,255,0.18)',
                                        border: (isActive || isCompleted) ? 'none' : '2px solid rgba(255,255,255,0.25)',
                                        boxShadow: isActive ? '0 0 12px rgba(0,240,255,0.5)' : 'none',
                                        zIndex: 2,
                                        marginBottom: '12px'
                                    }} />

                                    {/* Connecting line - positioned absolutely */}
                                    {index < onboardingSteps.length - 1 && (
                                        <div style={{
                                            position: 'absolute',
                                            top: '10px',
                                            left: 'calc(50% + 10px)',
                                            right: 'calc(-50% + 10px)',
                                            height: '2px',
                                            backgroundColor: isCompleted ? 'var(--color-primary)' : 'rgba(255,255,255,0.2)',
                                            zIndex: 1
                                        }} />
                                    )}

                                    {/* Label */}
                                    <div style={{ textAlign: 'center', width: '100%' }}>
                                        <div style={{
                                            fontSize: '0.85rem',
                                            fontWeight: 600,
                                            color: isActive ? 'var(--color-primary)' : isCompleted ? 'var(--color-success)' : 'var(--text-secondary)',
                                            marginBottom: '4px'
                                        }}>
                                            {step.label}
                                        </div>
                                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                                            {isCompleted ? '已完成' : isActive ? '当前步骤' : '等待'}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div style={{
                backgroundColor: 'rgba(255,255,255,0.02)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(255,255,255,0.08)',
                padding: 'var(--space-xl)',
                maxWidth: '860px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-md)'
            }}>
                <div>
                    <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '4px', display: 'block' }}>广告组名称</label>
                    <input defaultValue={projectName} style={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid rgba(255,255,255,0.15)',
                        backgroundColor: 'rgba(0,0,0,0.3)',
                        color: 'var(--text-primary)'
                    }} />
                </div>
                <div>
                    <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '4px', display: 'block' }}>投流总预算</label>
                    <input placeholder="如：¥50,000" style={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid rgba(255,255,255,0.15)',
                        backgroundColor: 'rgba(0,0,0,0.3)',
                        color: 'var(--text-primary)'
                    }} />
                </div>
                <div>
                    <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '4px', display: 'block' }}>SPU</label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-sm)' }}>
                        {['热水器 SPU A', '热水器 SPU B', '净水器 SPU C', '热泵 SPU D'].map(spu => (
                            <button key={spu} style={{
                                padding: '6px 10px',
                                borderRadius: 'var(--radius-full)',
                                border: '1px solid rgba(255,255,255,0.2)',
                                backgroundColor: 'rgba(255,255,255,0.05)',
                                color: 'var(--text-secondary)',
                                fontSize: '0.75rem',
                                cursor: 'pointer'
                            }}>
                                {spu}
                            </button>
                        ))}
                    </div>
                </div>
                <div>
                    <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '4px', display: 'block' }}>营销诉求</label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-sm)' }}>
                        {['产品种草', '种草直达'].map(reason => (
                            <button key={reason} style={{
                                padding: '6px 10px',
                                borderRadius: 'var(--radius-full)',
                                border: reason === '产品种草' || reason === '种草直达' ? '1px solid var(--color-primary)' : '1px solid rgba(255,255,255,0.2)',
                                backgroundColor: reason === '产品种草' || reason === '种草直达' ? 'rgba(0,240,255,0.15)' : 'rgba(255,255,255,0.05)',
                                color: reason === '产品种草' || reason === '种草直达' ? 'var(--color-primary)' : 'var(--text-secondary)',
                                fontSize: '0.75rem',
                                cursor: 'pointer'
                            }}>
                                {reason}
                            </button>
                        ))}
                    </div>
                </div>
                <div>
                    <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '4px', display: 'block' }}>投流方式</label>
                    <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
                        {['手动投放', 'AI投放'].map(mode => (
                            <button key={mode} style={{
                                flex: 1,
                                padding: '8px 10px',
                                borderRadius: 'var(--radius-full)',
                                border: '1px solid var(--color-primary)',
                                backgroundColor: 'rgba(0,240,255,0.15)',
                                color: 'var(--color-primary)',
                                fontSize: '0.8rem',
                                cursor: 'pointer'
                            }}>
                                {mode}
                            </button>
                        ))}
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'var(--space-md)' }}>
                    <button style={{
                        padding: '10px 18px',
                        borderRadius: 'var(--radius-sm)',
                        border: 'none',
                        backgroundColor: 'var(--color-primary)',
                        color: '#0f172a',
                        fontWeight: 600,
                        cursor: 'pointer'
                    }}>下一步</button>
                </div>
            </div>
        </div >
    );

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            {/* Project Header / Breadcrumb */}
            <div style={{
                marginBottom: 'var(--space-lg)',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-md)'
            }}>
                <h2 style={{ fontSize: '1.2rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {projectName}
                    {project && project.brand && (
                        <span style={{
                            fontSize: '0.75rem',
                            padding: '4px 12px',
                            borderRadius: 'var(--radius-full)',
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            color: 'var(--text-secondary)',
                            fontWeight: 400
                        }}>
                            {project.brand}
                        </span>
                    )}
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 400 }}>
                        {project?.accountName ? `投流账户：${project.accountName}` : `(ID: ${id})`}
                    </span>
                </h2>
            </div>

            {isOnboardingProject ? (
                renderOnboarding()
            ) : (
                <>
                    {/* Stage Navigation Tabs */}
                    <div style={{
                        display: 'flex',
                        gap: '4px',
                        marginBottom: 'var(--space-xl)',
                        borderBottom: '1px solid var(--border-light)',
                        paddingBottom: '1px'
                    }}>
                        {tabs.map(tab => {
                            const isActive = location.pathname.includes(tab.path);
                            const Icon = tab.icon;
                            return (
                                <button
                                    key={tab.path}
                                    onClick={() => navigate(`/project/${id}/${tab.path}`)}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        padding: '10px 20px',
                                        fontSize: '0.95rem',
                                        fontWeight: isActive ? 600 : 400,
                                        color: isActive ? 'var(--color-primary)' : 'var(--text-secondary)',
                                        borderBottom: isActive ? '2px solid var(--color-primary)' : '2px solid transparent',
                                        marginBottom: '-1px',
                                        transition: 'all 0.2s ease'
                                    }}
                                >
                                    <Icon size={18} />
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>

                    {/* Content Area */}
                    <div style={{ flex: 1 }}>
                        <Outlet />
                    </div>
                </>
            )}
        </div>
    );
};

export default ProjectLayout;

