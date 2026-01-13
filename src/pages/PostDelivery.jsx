import React, { useState } from 'react';
import {
    TrendingUp, TrendingDown, Target, DollarSign, Eye, ShoppingCart,
    Award, AlertTriangle, Lightbulb, BookOpen, Users, Tag, Image as ImageIcon,
    ChevronRight, CheckCircle2, XCircle, Minus, Download, Sparkles
} from 'lucide-react';

const PostDelivery = () => {
    const [activeTab, setActiveTab] = useState('channel');
    const [resourceTab, setResourceTab] = useState('audiences');

    // Mock Data
    const overview = {
        totalSpend: '¥45,200',
        budget: '¥50,000',
        completionRate: 90.4,
        roi: 3.2,
        roiTrend: 'up',
        roiChange: '+12%',
        gmv: '¥144,640',
        gmvTarget: '¥150,000',
        gmvCompletion: 96.4,
        impressions: '1,245,680',
        conversions: 1523
    };

    const stageAnalysis = [
        {
            stage: '蓄水期',
            range: '11.01-11.05',
            spend: '¥8,500',
            roi: 2.8,
            performance: 'good',
            keyEvents: ['新增竞品人群包', '调整出价系数至1.2']
        },
        {
            stage: '预热期',
            range: '11.06-11.08',
            spend: '¥12,300',
            roi: 3.1,
            performance: 'good',
            keyEvents: ['提升搜索流预算', '新增关键词包']
        },
        {
            stage: '爆发期',
            range: '11.09-11.11',
            spend: '¥18,900',
            roi: 4.2,
            performance: 'excellent',
            keyEvents: ['集中预算投放', '启用智能托管']
        },
        {
            stage: '延续期',
            range: '11.12-11.15',
            spend: '¥5,500',
            roi: 2.1,
            performance: 'needImprovement',
            keyEvents: ['减少预算', '关停低效计划']
        }
    ];

    const channelPerformance = [
        { channel: '信息流', spend: '¥18,200', roi: 3.5, ctr: '3.2%', cvr: '2.1%', cpa: '¥32', gmv: '¥63,700' },
        { channel: '搜索流', spend: '¥15,800', roi: 3.8, ctr: '4.1%', cvr: '2.8%', cpa: '¥28', gmv: '¥60,040' },
        { channel: '全站', spend: '¥7,200', roi: 2.2, ctr: '1.9%', cvr: '1.2%', cpa: '¥48', gmv: '¥15,840' },
        { channel: '视频流', spend: '¥4,000', roi: 2.8, ctr: '2.5%', cvr: '1.5%', cpa: '¥38', gmv: '¥11,200' }
    ];

    const topPlans = [
        { name: '搜索 + 精准竞品人群包 + 善弈核心关键词包', spend: '¥6,200', roi: 4.8, gmv: '¥29,760', ctr: '4.8%', cvr: '3.2%' },
        { name: '信息流 + 高潜兴趣人群包 + 致铂站内热词包', spend: '¥5,800', roi: 4.2, gmv: '¥24,360', ctr: '3.9%', cvr: '2.6%' },
        { name: '笔记 + 智能扩量人群包 + 海尔净水关键词包', spend: '¥4,500', roi: 3.9, gmv: '¥17,550', ctr: '3.5%', cvr: '2.4%' }
    ];

    const bottomPlans = [
        { name: '全站 + 智能托管 + 自动出价', spend: '¥3,200', roi: 1.2, gmv: '¥3,840', ctr: '1.1%', cvr: '0.8%' },
        { name: '视频流 + 新品种草人群包 + 可复美首发关键词包', spend: '¥2,800', roi: 1.5, gmv: '¥4,200', ctr: '1.6%', cvr: '1.0%' }
    ];

    const aiInsights = {
        keyFindings: [
            { text: '人群包"20-30岁女性"在爆发期 ROI 达 4.2，建议未来重点投放', type: 'positive' },
            { text: '搜索流整体表现优异，CVR 2.8% 高于全站平均 40%', type: 'positive' },
            { text: '关键词"海尔净水器"转化成本 ¥28，低于行业平均', type: 'positive' }
        ],
        highlights: [
            { text: '11月10日达到峰值 ROI 5.2，当日 GMV ¥18,500', type: 'info' },
            { text: '爆发期消耗占比 42%，贡献了 58% 的总 GMV', type: 'info' }
        ],
        improvements: [
            { text: '延续期 ROI 2.1，较爆发期下降 50%，建议缩短延续期时长', type: 'warning' },
            { text: '素材"护肤日常分享" CTR 仅 0.9%，建议更新创意', type: 'warning' },
            { text: '全站渠道 ROI 2.2，低于预期，建议减少投放占比', type: 'warning' }
        ]
    };

    const resourceRankings = {
        audiences: [
            { name: '20-30岁女性_护肤', roi: 4.5, gmv: '¥52,000', usage: 18, rank: 1, change: 'up' },
            { name: '竞品粉丝人群', roi: 3.8, gmv: '¥38,500', usage: 15, rank: 2, change: 'up' },
            { name: '高消费力人群', roi: 3.2, gmv: '¥28,200', usage: 12, rank: 3, change: 'same' },
            { name: '新品种草人群', roi: 1.8, gmv: '¥8,100', usage: 5, rank: 4, change: 'down' },
            { name: '智能托管人群', roi: 1.2, gmv: '¥4,500', usage: 3, rank: 5, change: 'down' }
        ],
        keywords: [
            { name: '海尔净水器', roi: 4.2, gmv: '¥42,000', usage: 16, rank: 1, change: 'up' },
            { name: '智能热水器', roi: 3.6, gmv: '¥32,800', usage: 14, rank: 2, change: 'up' },
            { name: '电热水器推荐', roi: 2.9, gmv: '¥24,500', usage: 10, rank: 3, change: 'same' },
            { name: '净水器品牌', roi: 2.1, gmv: '¥12,600', usage: 6, rank: 4, change: 'down' },
            { name: '热水器安装', roi: 1.5, gmv: '¥7,500', usage: 4, rank: 5, change: 'down' }
        ],
        creatives: [
            { name: '夏季防晒测评', roi: 4.0, gmv: '¥36,000', usage: 12, rank: 1, change: 'up' },
            { name: '美白精华种草', roi: 3.4, gmv: '¥28,900', usage: 10, rank: 2, change: 'up' },
            { name: '新品开箱体验', roi: 2.8, gmv: '¥19,600', usage: 8, rank: 3, change: 'same' },
            { name: '产品使用教程', roi: 2.0, gmv: '¥10,000', usage: 5, rank: 4, change: 'down' },
            { name: '护肤日常分享', roi: 1.1, gmv: '¥4,400', usage: 3, rank: 5, change: 'down' }
        ]
    };

    const getPerformanceBadge = (performance) => {
        const config = {
            excellent: { label: '优秀', color: '#22c55e', bg: 'rgba(34, 197, 94, 0.1)' },
            good: { label: '良好', color: '#3b82f6', bg: 'rgba(59, 130, 246, 0.1)' },
            needImprovement: { label: '待改进', color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.1)' }
        };
        const badge = config[performance];
        return (
            <span style={{
                fontSize: '0.7rem',
                padding: '2px 8px',
                borderRadius: '999px',
                backgroundColor: badge.bg,
                color: badge.color,
                fontWeight: 600
            }}>
                {badge.label}
            </span>
        );
    };

    const getTrendIcon = (trend) => {
        if (trend === 'up') return <TrendingUp size={16} color="#22c55e" />;
        if (trend === 'down') return <TrendingDown size={16} color="#ef4444" />;
        return <Minus size={16} color="var(--text-muted)" />;
    };

    return (
        <div style={{ padding: 'var(--space-lg)', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 'var(--space-xl)' }}>
            {/* Left Column: Main Analysis */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
                {/* 1. Overview Cards */}
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-lg)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
                            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <Target size={24} color="var(--color-primary)" />
                                整体表现总览
                            </h2>
                            <div style={{
                                fontSize: '0.85rem',
                                color: 'var(--text-muted)',
                                padding: '4px 12px',
                                backgroundColor: 'rgba(255,255,255,0.05)',
                                borderRadius: 'var(--radius-sm)',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}>
                                截止: 2024-11-15
                            </div>
                        </div>
                        <button style={{
                            padding: '8px 16px',
                            borderRadius: 'var(--radius-md)',
                            backgroundColor: 'rgba(0,240,255,0.1)',
                            border: '1px solid rgba(0,240,255,0.3)',
                            color: '#00f0ff',
                            cursor: 'pointer',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px'
                        }}>
                            <Download size={16} />
                            导出报告
                        </button>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 'var(--space-md)' }}>
                        {/* Total Spend Card */}
                        <div className="glass-panel" style={{ padding: 'var(--space-md)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                                <DollarSign size={14} />
                                总消耗
                            </div>
                            <div style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '6px' }}>{overview.totalSpend}</div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                                预算: {overview.budget} ({overview.completionRate}%)
                            </div>
                            <div style={{ marginTop: '8px', height: '4px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                                <div style={{ width: `${overview.completionRate}%`, height: '100%', backgroundColor: 'var(--color-primary)' }} />
                            </div>
                        </div>

                        {/* ROI Card */}
                        <div className="glass-panel" style={{ padding: 'var(--space-md)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                                <TrendingUp size={14} />
                                总 ROI
                            </div>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                                <div style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--color-success)' }}>{overview.roi}</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: '#22c55e' }}>
                                    {getTrendIcon(overview.roiTrend)}
                                    {overview.roiChange}
                                </div>
                            </div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '6px' }}>
                                环比上期
                            </div>
                        </div>

                        {/* GMV Card */}
                        <div className="glass-panel" style={{ padding: 'var(--space-md)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                                <ShoppingCart size={14} />
                                总 GMV
                            </div>
                            <div style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '6px' }}>{overview.gmv}</div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                                目标: {overview.gmvTarget} ({overview.gmvCompletion}%)
                            </div>
                            <div style={{ marginTop: '8px', height: '4px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                                <div style={{ width: `${overview.gmvCompletion}%`, height: '100%', backgroundColor: 'var(--color-success)' }} />
                            </div>
                        </div>

                        {/* Conversions Card */}
                        <div className="glass-panel" style={{ padding: 'var(--space-md)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                                <Eye size={14} />
                                曝光/转化
                            </div>
                            <div style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '6px' }}>{overview.impressions}</div>
                            <div style={{ fontSize: '0.85rem', color: 'var(--color-success)' }}>
                                转化 {overview.conversions}
                            </div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                                CVR {((overview.conversions / parseFloat(overview.impressions.replace(/,/g, ''))) * 100).toFixed(2)}%
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. Stage Analysis */}
                <div className="glass-panel" style={{ padding: 'var(--space-lg)' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 'var(--space-lg)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Award size={20} color="var(--color-primary)" />
                        阶段性分析
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 'var(--space-md)' }}>
                        {stageAnalysis.map((stage, index) => (
                            <div key={stage.stage} style={{
                                backgroundColor: 'rgba(255,255,255,0.03)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                borderRadius: 'var(--radius-md)',
                                padding: 'var(--space-md)',
                                position: 'relative'
                            }}>
                                <div style={{ position: 'absolute', top: '12px', right: '12px' }}>
                                    {getPerformanceBadge(stage.performance)}
                                </div>
                                <div style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '4px' }}>{stage.stage}</div>
                                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: 'var(--space-sm)' }}>{stage.range}</div>
                                <div style={{ marginBottom: 'var(--space-sm)' }}>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>消耗</div>
                                    <div style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-primary)' }}>{stage.spend}</div>
                                </div>
                                <div style={{ marginBottom: 'var(--space-sm)' }}>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>ROI</div>
                                    <div style={{ fontSize: '1.3rem', fontWeight: 700, color: stage.roi > 3 ? 'var(--color-success)' : 'inherit' }}>{stage.roi}</div>
                                </div>
                                <div style={{ marginTop: 'var(--space-sm)', paddingTop: 'var(--space-sm)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '4px' }}>关键事件</div>
                                    {stage.keyEvents.map((event, idx) => (
                                        <div key={idx} style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginBottom: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                            <ChevronRight size={10} />
                                            {event}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. Channel & Plan Performance */}
                <div className="glass-panel" style={{ padding: 'var(--space-lg)' }}>
                    <div style={{ display: 'flex', gap: 'var(--space-md)', marginBottom: 'var(--space-lg)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <button
                            onClick={() => setActiveTab('channel')}
                            style={{
                                padding: '12px 20px',
                                backgroundColor: 'transparent',
                                border: 'none',
                                borderBottom: activeTab === 'channel' ? '2px solid var(--color-primary)' : '2px solid transparent',
                                color: activeTab === 'channel' ? 'var(--color-primary)' : 'var(--text-muted)',
                                cursor: 'pointer',
                                fontSize: '0.95rem',
                                fontWeight: 600,
                                transition: 'all 0.2s'
                            }}
                        >
                            渠道对比
                        </button>
                        <button
                            onClick={() => setActiveTab('plan')}
                            style={{
                                padding: '12px 20px',
                                backgroundColor: 'transparent',
                                border: 'none',
                                borderBottom: activeTab === 'plan' ? '2px solid var(--color-primary)' : '2px solid transparent',
                                color: activeTab === 'plan' ? 'var(--color-primary)' : 'var(--text-muted)',
                                cursor: 'pointer',
                                fontSize: '0.95rem',
                                fontWeight: 600,
                                transition: 'all 0.2s'
                            }}
                        >
                            计划排行
                        </button>
                    </div>

                    {activeTab === 'channel' && (
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                            <thead>
                                <tr style={{ color: 'var(--text-muted)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                                    <th style={{ padding: '12px 0', textAlign: 'left', fontWeight: 400 }}>渠道</th>
                                    <th style={{ padding: '12px 0', textAlign: 'right', fontWeight: 400 }}>消耗</th>
                                    <th style={{ padding: '12px 0', textAlign: 'right', fontWeight: 400 }}>ROI</th>
                                    <th style={{ padding: '12px 0', textAlign: 'right', fontWeight: 400 }}>CTR</th>
                                    <th style={{ padding: '12px 0', textAlign: 'right', fontWeight: 400 }}>CVR</th>
                                    <th style={{ padding: '12px 0', textAlign: 'right', fontWeight: 400 }}>CPA</th>
                                    <th style={{ padding: '12px 0', textAlign: 'right', fontWeight: 400 }}>GMV</th>
                                </tr>
                            </thead>
                            <tbody>
                                {channelPerformance.map((channel, idx) => (
                                    <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                        <td style={{ padding: '16px 0', fontWeight: 600 }}>{channel.channel}</td>
                                        <td style={{ padding: '16px 0', textAlign: 'right', fontFamily: 'monospace' }}>{channel.spend}</td>
                                        <td style={{ padding: '16px 0', textAlign: 'right', fontWeight: 700, color: channel.roi > 3 ? 'var(--color-success)' : 'inherit' }}>{channel.roi}</td>
                                        <td style={{ padding: '16px 0', textAlign: 'right' }}>{channel.ctr}</td>
                                        <td style={{ padding: '16px 0', textAlign: 'right' }}>{channel.cvr}</td>
                                        <td style={{ padding: '16px 0', textAlign: 'right', fontFamily: 'monospace' }}>{channel.cpa}</td>
                                        <td style={{ padding: '16px 0', textAlign: 'right', fontFamily: 'monospace', color: 'var(--color-success)' }}>{channel.gmv}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}

                    {activeTab === 'plan' && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
                            <div>
                                <div style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: 'var(--space-sm)', color: 'var(--color-success)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <Award size={16} />
                                    Top 3 表现最佳
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    {topPlans.map((plan, idx) => (
                                        <div key={idx} style={{
                                            backgroundColor: 'rgba(34, 197, 94, 0.05)',
                                            border: '1px solid rgba(34, 197, 94, 0.2)',
                                            borderRadius: 'var(--radius-md)',
                                            padding: 'var(--space-sm)',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center'
                                        }}>
                                            <div style={{ flex: 1 }}>
                                                <div style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '4px' }}>{plan.name}</div>
                                                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                                                    消耗 {plan.spend} • CTR {plan.ctr} • CVR {plan.cvr}
                                                </div>
                                            </div>
                                            <div style={{ display: 'flex', gap: 'var(--space-md)', textAlign: 'right' }}>
                                                <div>
                                                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>ROI</div>
                                                    <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-success)' }}>{plan.roi}</div>
                                                </div>
                                                <div>
                                                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>GMV</div>
                                                    <div style={{ fontSize: '1.2rem', fontWeight: 700 }}>{plan.gmv}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <div style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: 'var(--space-sm)', color: 'var(--color-warning)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <AlertTriangle size={16} />
                                    Bottom 2 待改进
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    {bottomPlans.map((plan, idx) => (
                                        <div key={idx} style={{
                                            backgroundColor: 'rgba(245, 158, 11, 0.05)',
                                            border: '1px solid rgba(245, 158, 11, 0.2)',
                                            borderRadius: 'var(--radius-md)',
                                            padding: 'var(--space-sm)',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center'
                                        }}>
                                            <div style={{ flex: 1 }}>
                                                <div style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '4px' }}>{plan.name}</div>
                                                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                                                    消耗 {plan.spend} • CTR {plan.ctr} • CVR {plan.cvr}
                                                </div>
                                            </div>
                                            <div style={{ display: 'flex', gap: 'var(--space-md)', textAlign: 'right' }}>
                                                <div>
                                                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>ROI</div>
                                                    <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-warning)' }}>{plan.roi}</div>
                                                </div>
                                                <div>
                                                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>GMV</div>
                                                    <div style={{ fontSize: '1.2rem', fontWeight: 700 }}>{plan.gmv}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Right Column: Insights */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
                {/* AI Insights */}
                <div className="glass-panel" style={{
                    padding: 'var(--space-lg)',
                    background: 'linear-gradient(135deg, rgba(0,240,255,0.05), rgba(124,58,237,0.05))',
                    border: '1px solid rgba(0,240,255,0.2)',
                    boxShadow: '0 0 20px rgba(0,240,255,0.1)'
                }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 'var(--space-md)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Sparkles size={20} color="#00f0ff" />
                        AI 智能洞察
                    </h3>

                    {/* Key Findings */}
                    <div style={{ marginBottom: 'var(--space-md)' }}>
                        <div style={{ fontSize: '0.8rem', fontWeight: 600, marginBottom: '8px', color: 'var(--color-success)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <CheckCircle2 size={14} />
                            关键发现
                        </div>
                        {aiInsights.keyFindings.map((item, idx) => (
                            <div key={idx} style={{
                                fontSize: '0.75rem',
                                padding: '8px',
                                backgroundColor: 'rgba(34, 197, 94, 0.05)',
                                borderLeft: '3px solid var(--color-success)',
                                borderRadius: '4px',
                                marginBottom: '6px',
                                lineHeight: 1.4
                            }}>
                                {item.text}
                            </div>
                        ))}
                    </div>

                    {/* Highlights */}
                    <div style={{ marginBottom: 'var(--space-md)' }}>
                        <div style={{ fontSize: '0.8rem', fontWeight: 600, marginBottom: '8px', color: '#00f0ff', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <Lightbulb size={14} />
                            表现亮点
                        </div>
                        {aiInsights.highlights.map((item, idx) => (
                            <div key={idx} style={{
                                fontSize: '0.75rem',
                                padding: '8px',
                                backgroundColor: 'rgba(0, 240, 255, 0.05)',
                                borderLeft: '3px solid #00f0ff',
                                borderRadius: '4px',
                                marginBottom: '6px',
                                lineHeight: 1.4
                            }}>
                                {item.text}
                            </div>
                        ))}
                    </div>

                    {/* Improvements */}
                    <div>
                        <div style={{ fontSize: '0.8rem', fontWeight: 600, marginBottom: '8px', color: 'var(--color-warning)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <AlertTriangle size={14} />
                            待改进点
                        </div>
                        {aiInsights.improvements.map((item, idx) => (
                            <div key={idx} style={{
                                fontSize: '0.75rem',
                                padding: '8px',
                                backgroundColor: 'rgba(245, 158, 11, 0.05)',
                                borderLeft: '3px solid var(--color-warning)',
                                borderRadius: '4px',
                                marginBottom: '6px',
                                lineHeight: 1.4
                            }}>
                                {item.text}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Resource Rankings */}
                <div className="glass-panel" style={{ padding: 'var(--space-lg)' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 'var(--space-md)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Award size={20} color="var(--color-primary)" />
                        资源效果排名
                    </h3>

                    <div style={{ display: 'flex', gap: '8px', marginBottom: 'var(--space-md)' }}>
                        <button
                            onClick={() => setResourceTab('audiences')}
                            style={{
                                flex: 1,
                                padding: '8px',
                                backgroundColor: resourceTab === 'audiences' ? 'rgba(0,240,255,0.15)' : 'rgba(255,255,255,0.05)',
                                border: resourceTab === 'audiences' ? '1px solid #00f0ff' : '1px solid rgba(255,255,255,0.1)',
                                borderRadius: 'var(--radius-sm)',
                                color: resourceTab === 'audiences' ? '#00f0ff' : 'var(--text-muted)',
                                cursor: 'pointer',
                                fontSize: '0.75rem',
                                fontWeight: 600,
                                transition: 'all 0.2s',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '4px'
                            }}
                        >
                            <Users size={12} />
                            人群包
                        </button>
                        <button
                            onClick={() => setResourceTab('keywords')}
                            style={{
                                flex: 1,
                                padding: '8px',
                                backgroundColor: resourceTab === 'keywords' ? 'rgba(0,240,255,0.15)' : 'rgba(255,255,255,0.05)',
                                border: resourceTab === 'keywords' ? '1px solid #00f0ff' : '1px solid rgba(255,255,255,0.1)',
                                borderRadius: 'var(--radius-sm)',
                                color: resourceTab === 'keywords' ? '#00f0ff' : 'var(--text-muted)',
                                cursor: 'pointer',
                                fontSize: '0.75rem',
                                fontWeight: 600,
                                transition: 'all 0.2s',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '4px'
                            }}
                        >
                            <Tag size={12} />
                            关键词包
                        </button>
                        <button
                            onClick={() => setResourceTab('creatives')}
                            style={{
                                flex: 1,
                                padding: '8px',
                                backgroundColor: resourceTab === 'creatives' ? 'rgba(0,240,255,0.15)' : 'rgba(255,255,255,0.05)',
                                border: resourceTab === 'creatives' ? '1px solid #00f0ff' : '1px solid rgba(255,255,255,0.1)',
                                borderRadius: 'var(--radius-sm)',
                                color: resourceTab === 'creatives' ? '#00f0ff' : 'var(--text-muted)',
                                cursor: 'pointer',
                                fontSize: '0.75rem',
                                fontWeight: 600,
                                transition: 'all 0.2s',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '4px'
                            }}
                        >
                            <ImageIcon size={12} />
                            素材包
                        </button>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {resourceRankings[resourceTab].map((resource, idx) => (
                            <div key={idx} style={{
                                padding: '10px',
                                backgroundColor: idx < 3 ? 'rgba(34, 197, 94, 0.05)' : idx >= resourceRankings[resourceTab].length - 2 ? 'rgba(245, 158, 11, 0.05)' : 'rgba(255,255,255,0.02)',
                                border: `1px solid ${idx < 3 ? 'rgba(34, 197, 94, 0.2)' : idx >= resourceRankings[resourceTab].length - 2 ? 'rgba(245, 158, 11, 0.2)' : 'rgba(255,255,255,0.05)'}`,
                                borderRadius: 'var(--radius-sm)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}>
                                <div style={{
                                    width: '24px',
                                    height: '24px',
                                    borderRadius: '50%',
                                    backgroundColor: idx < 3 ? 'var(--color-success)' : idx >= resourceRankings[resourceTab].length - 2 ? 'var(--color-warning)' : 'rgba(255,255,255,0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '0.75rem',
                                    fontWeight: 700,
                                    color: idx < 3 || idx >= resourceRankings[resourceTab].length - 2 ? '#000' : 'var(--text-primary)',
                                    flexShrink: 0
                                }}>
                                    {resource.rank}
                                </div>
                                <div style={{ flex: 1, minWidth: 0 }}>
                                    <div style={{ fontSize: '0.8rem', fontWeight: 600, marginBottom: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                        {resource.name}
                                    </div>
                                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                                        使用 {resource.usage} 次 • GMV {resource.gmv}
                                    </div>
                                </div>
                                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>ROI</div>
                                    <div style={{ fontSize: '1.1rem', fontWeight: 700, color: resource.roi > 3 ? 'var(--color-success)' : 'inherit' }}>
                                        {resource.roi}
                                    </div>
                                </div>
                                <div style={{ flexShrink: 0 }}>
                                    {getTrendIcon(resource.change)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PostDelivery;
