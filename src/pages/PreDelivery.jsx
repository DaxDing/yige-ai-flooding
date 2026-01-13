import React, { useState } from 'react';
import {
    AlertCircle, CheckCircle, Database, Image as ImageIcon,
    Users, Search, Zap, ChevronRight, Plus, Tag, Settings, Clock
} from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';

const stageTimeline = [
    {
        stage: '蓄水期',
        range: '11.01 - 11.05',
        focus: '铺设高质量内容与互动，稳定模型学习。',
        tactic: '达人笔记 + 种草直播 → 积累收藏与加购',
        status: 'done'
    },
    {
        stage: '预热期',
        range: '11.06 - 11.08',
        focus: '拉高搜索热度，提前圈定重点人群。',
        tactic: '视频预告 + 搜索联动 → 提升点击率',
        status: 'done'
    },
    {
        stage: '爆发期',
        range: '11.09 - 11.11',
        focus: '集中预算冲刺转化与客单。',
        tactic: '短视频+直播混投 → 锁定高意向人群',
        status: 'active'
    },
    {
        stage: '延续期',
        range: '11.12 - 11.15',
        focus: '承接长尾转化，保持品牌热度。',
        tactic: '笔记复盘 + 站外扩展 → 回收复购',
        status: 'upcoming'
    }
];

const PreDelivery = () => {
    const { id } = useParams();
    const activeStageIndex = stageTimeline.findIndex(item => item.status === 'active');
    const currentStage = activeStageIndex >= 0 ? stageTimeline[activeStageIndex] : stageTimeline[0];

    // Mock Data for Assets
    const [assets, setAssets] = useState({
        budget: { amount: '¥2,000', status: 'set' },
        notes: [
            { id: 1, title: '夏季防晒测评', type: 'video', status: 'ready' },
            { id: 2, title: '美白精华种草', type: 'image', status: 'ready' }
        ],
        creatives: [],
        audiences: [
            { id: 1, name: '20-30岁女性_护肤', bid: 1.2 },
            { id: 2, name: '竞品粉丝人群', bid: 1.5 }
        ],
        keywords: []
    });

    // Mock Generated Plans
    const generatedPlans = [
        {
            id: 10001,
            type: 'ai', // 'ai' or 'manual'
            spu: '海尔净水器',
            channel: '信息流',
            stage: '蓄水期',
            unit: '笔记 + 智能扩量人群包 + 致铂加购关键词包',
            budget: '¥500/天',
            audienceCoverage: '120万',
            publishTime: '2024-11-18 14:30',
            holiday: '双十一余温'
        },
        {
            id: 10002,
            type: 'manual',
            spu: '海尔净水器',
            channel: '搜索流',
            stage: '预热期',
            unit: '视频 + 精准竞品人群包 + 善弈核心关键词包',
            budget: '¥300/天',
            audienceCoverage: '85万',
            publishTime: '2024-11-17 09:15',
            holiday: ''
        },
        {
            id: 10003,
            type: 'ai',
            spu: '海尔净水器',
            channel: '全站',
            stage: '爆发期',
            unit: '笔记 + 高潜兴趣人群包 + 致铂站内热词包',
            budget: '¥450/天',
            audienceCoverage: '98万',
            publishTime: '2024-11-19 10:00',
            holiday: '感恩季'
        },
        {
            id: 10004,
            type: 'manual',
            spu: '雅萌美容仪',
            channel: '视频流',
            stage: '延续期',
            unit: '视频 + 精细达人人群包 + 雅萌直播关键词包',
            budget: '¥380/天',
            audienceCoverage: '76万',
            publishTime: '2024-11-20 16:45',
            holiday: ''
        },
        {
            id: 10005,
            type: 'ai',
            spu: '海尔净水器',
            channel: '信息流',
            stage: '蓄水期',
            unit: '笔记 + 高净值人群包 + 海尔净水关键词包',
            budget: '¥520/天',
            audienceCoverage: '140万',
            publishTime: '2024-11-21 08:30',
            holiday: '黑五预热'
        },
        {
            id: 10006,
            type: 'manual',
            spu: '可复美面膜',
            channel: '搜索流',
            stage: '预热期',
            unit: '视频 + 新品种草人群包 + 可复美首发关键词包',
            budget: '¥260/天',
            audienceCoverage: '62万',
            publishTime: '2024-11-22 11:20',
            holiday: ''
        }
    ].sort((a, b) => {
        const order = ['蓄水期', '预热期', '爆发期', '延续期'];
        const indexA = order.indexOf(a.stage?.trim());
        const indexB = order.indexOf(b.stage?.trim());
        return (indexA === -1 ? 99 : indexA) - (indexB === -1 ? 99 : indexB);
    });

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 'var(--space-xl)' }}>
                {/* Left Column: Intelligent Plan Generator (now larger) */}
                <div className="glass-panel" style={{ padding: 'var(--space-lg)', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-lg)' }}>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                            <Zap size={20} color="var(--color-warning)" />
                            待发布计划
                            <span style={{
                                backgroundColor: 'rgba(124, 58, 237, 0.2)',
                                color: 'var(--color-primary)',
                                padding: '2px 8px',
                                borderRadius: 'var(--radius-sm)',
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                marginLeft: '4px'
                            }}>
                                {generatedPlans.length}
                            </span>
                        </h3>
                        <div style={{ display: 'flex', gap: '6px' }}>
                            <button style={{
                                padding: '6px',
                                borderRadius: 'var(--radius-sm)',
                                backgroundColor: 'rgba(255,255,255,0.05)',
                                border: '1px solid var(--border-light)',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                transition: 'all 0.2s ease'
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'}
                            >
                                <Plus size={16} color="var(--color-primary)" />
                            </button>
                            <button style={{
                                padding: '6px 10px',
                                borderRadius: 'var(--radius-sm)',
                                backgroundColor: 'rgba(0, 240, 255, 0.1)',
                                border: '1px solid rgba(0, 240, 255, 0.3)',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                transition: 'all 0.2s ease',
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                color: '#00f0ff'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = 'rgba(0, 240, 255, 0.2)';
                                    e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 240, 255, 0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'rgba(0, 240, 255, 0.1)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                AI
                            </button>
                        </div>
                    </div>

                    <div style={{
                        flex: 1,
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: 'var(--space-md)'
                    }}>
                        {generatedPlans.map(plan => (
                            <div
                                key={plan.id}
                                style={{
                                    backgroundColor: 'rgba(255,255,255,0.04)',
                                    borderRadius: 'var(--radius-md)',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    padding: '14px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '10px',
                                    cursor: 'pointer',
                                    transition: 'border-color 0.2s ease, transform 0.2s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--color-primary)';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                {/* Header */}
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                                            <span style={{
                                                fontSize: '0.75rem',
                                                fontWeight: 600,
                                                color: plan.type === 'ai' ? '#00f0ff' : '#c4b5fd',
                                                padding: '2px 8px',
                                                borderRadius: '999px',
                                                backgroundColor: plan.type === 'ai' ? 'rgba(0,240,255,0.12)' : 'rgba(196,181,253,0.15)'
                                            }}>
                                                {plan.type === 'ai' ? '智能计划' : '人工计划'}
                                            </span>
                                            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>SPU : {plan.spu}</span>
                                        </div>
                                        <div style={{ fontSize: '1rem', fontWeight: 600, marginTop: '4px' }}>{plan.channel}</div>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>预算</div>
                                        <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-primary)' }}>{plan.budget}</div>
                                        <div style={{ fontSize: '0.75rem', color: 'var(--color-success)' }}>覆盖 {plan.audienceCoverage}</div>
                                    </div>
                                </div>

                                {/* Body */}
                                <div style={{
                                    backgroundColor: 'rgba(255,255,255,0.02)',
                                    borderRadius: 'var(--radius-sm)',
                                    padding: '10px 12px'
                                }}>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                                        {plan.unit}
                                    </div>
                                </div>

                                {/* Footer */}
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '6px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                                        <span style={{
                                            fontSize: '0.75rem',
                                            fontWeight: 600,
                                            color: '#0af5ff',
                                            padding: '2px 10px',
                                            borderRadius: '999px',
                                            backgroundColor: 'rgba(10,245,255,0.12)'
                                        }}>
                                            {plan.stage}
                                        </span>
                                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{plan.publishTime}</span>
                                        {plan.holiday && (
                                            <span style={{
                                                fontSize: '0.7rem',
                                                color: 'var(--color-warning)',
                                                backgroundColor: 'rgba(251, 191, 36, 0.15)',
                                                padding: '2px 8px',
                                                borderRadius: '999px'
                                            }}>
                                                {plan.holiday}
                                            </span>
                                        )}
                                        <style>{`
                                            @keyframes rotate {
                                                from { transform: rotate(0deg); }
                                                to { transform: rotate(360deg); }
                                            }
                                        `}</style>
                                        <Clock size={16} color="#00f0ff" style={{ animation: 'rotate 2s linear infinite' }} />
                                    </div>
                                    <button style={{
                                        backgroundColor: 'transparent',
                                        color: 'var(--color-primary)',
                                        padding: '4px 12px',
                                        borderRadius: 'var(--radius-full)',
                                        border: '1px solid rgba(0,240,255,0.4)',
                                        fontSize: '0.8rem',
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease'
                                    }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.backgroundColor = 'rgba(0,240,255,0.15)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.backgroundColor = 'transparent';
                                        }}
                                    >
                                        手动发布
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Right Column: Goal Strategy (was Asset Management) */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>

                    {/* Goal Strategy Panel */}
                    <div className="glass-panel" style={{ padding: 'var(--space-lg)' }}>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 'var(--space-lg)', display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                            <Zap size={20} color="var(--color-primary)" />
                            目标策略
                        </h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                            {/* Budget Strategy - NOW FIRST */}
                            <div style={{ backgroundColor: 'rgba(0,0,0,0.2)', padding: 'var(--space-md)', borderRadius: 'var(--radius-md)' }}>
                                <div style={{ marginBottom: 'var(--space-sm)' }}>
                                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        预算策略
                                        <Settings size={12} color="var(--text-muted)" style={{ cursor: 'pointer' }} />
                                    </span>
                                </div>

                                {/* Daily Budget and Total Budget Side by Side */}
                                <div style={{ display: 'flex', gap: 'var(--space-md)', marginBottom: 'var(--space-sm)' }}>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '4px' }}>今日预算</div>
                                        <div style={{ fontSize: '1.2rem', fontWeight: 700 }}>
                                            {assets.budget.amount}
                                        </div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                            自动分配 • 智能出价
                                        </div>
                                    </div>
                                    <div style={{ flex: 1, textAlign: 'right' }}>
                                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '4px' }}>总预算</div>
                                        <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                                            ¥60,000
                                        </div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                            剩余 ¥42,000
                                        </div>
                                    </div>
                                </div>

                                {/* Next High Budget Event */}
                                <div style={{
                                    marginTop: 'var(--space-sm)',
                                    paddingTop: 'var(--space-sm)',
                                    borderTop: '1px solid var(--border-light)',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <div>
                                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '2px' }}>下一节点</div>
                                        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-warning)' }}>双十一大促</div>
                                        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>11月11日</div>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '2px' }}>预算加倍</div>
                                        <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-success)' }}>¥4,000</div>
                                    </div>
                                </div>


                            </div>

                            {/* Stage Goals */}
                            <div style={{ backgroundColor: 'rgba(0,0,0,0.2)', padding: 'var(--space-md)', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        阶段目标
                                        <Settings size={12} color="var(--text-muted)" style={{ cursor: 'pointer' }} />
                                    </span>
                                    <span style={{
                                        fontSize: '0.75rem',
                                        color: '#f43f5e',
                                        backgroundColor: 'rgba(244,63,94,0.15)',
                                        padding: '2px 10px',
                                        borderRadius: '999px'
                                    }}>
                                        {currentStage.stage} · {currentStage.range}
                                    </span>
                                </div>

                                <div style={{
                                    backgroundColor: 'rgba(255,255,255,0.03)',
                                    border: '1px solid var(--border-light)',
                                    borderRadius: 'var(--radius-md)',
                                    padding: 'var(--space-sm)'
                                }}>
                                    <div style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '4px' }}>
                                        当前阶段重点：{currentStage.focus}
                                    </div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                                        核心打法：{currentStage.tactic}
                                    </div>
                                </div>

                                {/* Timeline */}
                                <div>
                                    {/* Grid container for both dots and text */}
                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: `repeat(${stageTimeline.length}, minmax(0, 1fr))`,
                                        gap: '8px'
                                    }}>
                                        {/* Dots and connectors row */}
                                        {stageTimeline.map((phase, index) => {
                                            const color = phase.status === 'active'
                                                ? '#f43f5e'
                                                : phase.status === 'done'
                                                    ? '#22c55e'
                                                    : 'rgba(255,255,255,0.2)';
                                            const connectorColor = phase.status === 'done'
                                                ? '#22c55e'
                                                : phase.status === 'active'
                                                    ? '#fb7185'
                                                    : 'rgba(255,255,255,0.15)';
                                            return (
                                                <div key={phase.stage} style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    marginBottom: '8px',
                                                    position: 'relative'
                                                }}>
                                                    <div style={{
                                                        width: '16px',
                                                        height: '16px',
                                                        borderRadius: '50%',
                                                        backgroundColor: color,
                                                        boxShadow: phase.status === 'active' ? '0 0 8px rgba(244,63,94,0.5)' : 'none',
                                                        border: phase.status === 'upcoming' ? '1px solid rgba(255,255,255,0.3)' : 'none',
                                                        opacity: phase.status === 'upcoming' ? 0.4 : 1,
                                                        zIndex: 2,
                                                        position: 'relative'
                                                    }} />
                                                    {index < stageTimeline.length - 1 && (
                                                        <div style={{
                                                            position: 'absolute',
                                                            left: '50%',
                                                            right: `calc(-100% - 8px + 50%)`,
                                                            height: '2px',
                                                            backgroundColor: connectorColor,
                                                            borderRadius: '1px',
                                                            top: '50%',
                                                            transform: 'translateY(-50%)',
                                                            zIndex: 1
                                                        }} />
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                    {/* Text labels row */}
                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: `repeat(${stageTimeline.length}, minmax(0, 1fr))`,
                                        gap: '8px',
                                        textAlign: 'center'
                                    }}>
                                        {stageTimeline.map(phase => (
                                            <div key={phase.stage}>
                                                <div style={{
                                                    fontSize: '0.8rem',
                                                    fontWeight: 600,
                                                    color: phase.status === 'active'
                                                        ? '#fda4af'
                                                        : phase.status === 'done'
                                                            ? '#86efac'
                                                            : 'rgba(255,255,255,0.4)'
                                                }}>
                                                    {phase.stage}
                                                </div>
                                                <div style={{ fontSize: '0.7rem', color: phase.status === 'upcoming' ? 'rgba(255,255,255,0.4)' : 'var(--text-muted)' }}>
                                                    {phase.range}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>

                            {/* Delivery Schedule with Intelligent Strategy */}
                            <div style={{ backgroundColor: 'rgba(0,0,0,0.2)', padding: 'var(--space-md)', borderRadius: 'var(--radius-md)' }}>
                                <div style={{ marginBottom: 'var(--space-sm)' }}>
                                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        投放时段
                                        <Settings size={12} color="var(--text-muted)" style={{ cursor: 'pointer' }} />
                                    </span>
                                </div>
                                <div style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'center' }}>
                                    {/* Left: Text Info */}
                                    <div style={{ flex: 1 }}>
                                        <style>{`
                                            @keyframes gradientFlow {
                                                0% {
                                                    background-position: 0% 50%;
                                                }
                                                50% {
                                                    background-position: 100% 50%;
                                                }
                                                100% {
                                                    background-position: 0% 50%;
                                                }
                                            }
                                        `}</style>
                                        <div style={{
                                            fontSize: '1.1rem',
                                            fontWeight: 700,
                                            marginBottom: 'var(--space-sm)',
                                            background: 'linear-gradient(90deg, #00f0ff, #7c3aed, #ec4899, #00f0ff, #7c3aed)',
                                            backgroundSize: '200% 100%',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text',
                                            letterSpacing: '1px',
                                            animation: 'gradientFlow 3s ease infinite'
                                        }}>
                                            AI策略
                                        </div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                                            AI持续优化中
                                        </div>
                                    </div>

                                    {/* Right: Time Intensity Chart */}
                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: 'flex', gap: '2px', alignItems: 'flex-end', height: '40px' }}>
                                            {/* Generate 24 hours bars with varying intensity */}
                                            {[20, 15, 10, 8, 12, 25, 40, 60, 80, 90, 95, 85, 70, 75, 80, 85, 90, 95, 100, 85, 70, 50, 35, 25].map((intensity, hour) => (
                                                <div
                                                    key={hour}
                                                    style={{
                                                        flex: 1,
                                                        height: `${intensity}%`,
                                                        backgroundColor: intensity > 70 ? 'var(--color-primary)' : intensity > 40 ? 'var(--color-secondary)' : 'rgba(255,255,255,0.2)',
                                                        borderRadius: '2px',
                                                        transition: 'all 0.2s ease',
                                                        cursor: 'pointer',
                                                        position: 'relative'
                                                    }}
                                                    title={`${hour}:00 - 强度 ${intensity}%`}
                                                />
                                            ))}
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                                            <span>0h</span>
                                            <span>6h</span>
                                            <span>12h</span>
                                            <span>18h</span>
                                            <span>24h</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreDelivery;
