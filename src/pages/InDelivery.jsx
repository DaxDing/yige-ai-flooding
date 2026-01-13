import React, { useState, useEffect } from 'react';
import {
    Activity,
    AlertTriangle,
    ArrowUpRight,
    ArrowDownRight,
    BarChart2,
    CheckCircle2,
    Clock,
    Cpu,
    Eye,
    Filter,
    MessageSquare,
    Play,
    Pause,
    RefreshCw,
    Search,
    Settings,
    Shield,
    TrendingUp,
    Zap,
    XCircle
} from 'lucide-react';

const InDelivery = () => {
    // Mock Data for "Monitoring Assistant"
    const [logs, setLogs] = useState([
        { id: 1, time: '10:42:15', type: 'info', message: '扫描全站计划，流量波动正常。', icon: Activity },
        { id: 2, time: '10:40:33', type: 'success', message: '自动提升「优质人群包A」出价 (+5%)，因转化率优于预期。', icon: ArrowUpRight },
        { id: 3, time: '10:38:12', type: 'warning', message: '检测到「创意素材_04」点击率下滑至 1.2%，建议暂停。', icon: AlertTriangle },
        { id: 4, time: '10:35:00', type: 'info', message: '同步最新消耗数据...', icon: RefreshCw },
    ]);

    const [activeAlerts, setActiveAlerts] = useState([
        { id: 101, level: 'high', title: '预算撞线预警', desc: '「搜索_核心词」计划预算使用率达 95%，预计 15分钟后 停投。', action: '追加预算' },
        { id: 102, level: 'medium', title: '低效素材', desc: '3 个素材连续 2 小时 ROI < 0.8。', action: '一键关停' }
    ]);

    const [activeTab, setActiveTab] = useState('异常计划');

    const metrics = [
        { label: '实时消耗', value: '¥8,432', estimate: '/ ¥12,000', trend: '+12%', status: 'normal' },
        { label: '综合 ROI', value: '2.14', estimate: '/ 2.0', trend: '+0.3', status: 'good' },
        { label: '点击率 (CTR)', value: '3.2%', estimate: '/ 3.5%', trend: '-0.1%', status: 'warning' },
        { label: '转化成本 (CPA)', value: '¥45.2', estimate: '/ ¥40.0', trend: '-2%', status: 'good' },
    ];

    const detailedPlans = [
        { id: 1, name: '笔记 + 智能扩量人群包 + 致铂加购关键词包', status: 'running', startTime: '10/27 10:00', endTime: '10/29 23:59', spend: '¥1,200', budget: '¥2,000', impressions: '45,231', ctr: '3.5%', cpc: '¥0.8', conversions: '28', cvr: '1.8%', cpa: '¥42.8', roi: '2.4', gmv: '¥2,880' },
        { id: 2, name: '搜索 + 竞品词 + 强引流', status: 'high-risk', startTime: '10/27 08:00', endTime: '10/27 20:00', spend: '¥2,300', budget: '¥2,000', impressions: '89,102', ctr: '1.1%', cpc: '¥1.2', conversions: '15', cvr: '0.5%', cpa: '¥153.3', roi: '0.4', gmv: '¥920' },

        { id: 4, name: '信息流 + 核心人群 + 优选', status: 'running', startTime: '10/26 09:00', endTime: '11/01 00:00', spend: '¥3,400', budget: '¥5,000', impressions: '120,500', ctr: '4.2%', cpc: '¥0.6', conversions: '98', cvr: '2.1%', cpa: '¥34.7', roi: '3.1', gmv: '¥10,540' },
        { id: 5, name: '搜索 + 品牌词 + 防守', status: 'running', startTime: '10/25 00:00', endTime: '长期投放', spend: '¥800', budget: '¥1,000', impressions: '5,600', ctr: '8.5%', cpc: '¥2.1', conversions: '45', cvr: '12.5%', cpa: '¥17.8', roi: '5.6', gmv: '¥4,480' },
        { id: 6, name: '历史大促活动计划_2023', status: 'closed', startTime: '09/01 00:00', endTime: '09/15 23:59', spend: '¥12,000', budget: '¥12,000', impressions: '450,000', ctr: '2.1%', cpc: '¥1.5', conversions: '320', cvr: '1.8%', cpa: '¥37.5', roi: '2.8', gmv: '¥33,600' },
    ];

    const creativeRankings = [
        { id: 1, title: '封面_产品特写_01.jpg', type: 'image', ctr: '4.5%', cvr: '2.8%', spend: '¥1,200', gmv: '¥4,800', status: 'active' },
        { id: 2, title: '视频_使用场景_A.mp4', type: 'video', ctr: '3.2%', cvr: '1.5%', spend: '¥3,500', gmv: '¥8,750', status: 'active' },
        { id: 3, title: '封面_痛点直击_03.jpg', type: 'image', ctr: '1.1%', cvr: '0.4%', spend: '¥800', gmv: '¥320', status: 'warning' },
        { id: 4, title: '视频_口播种草_B.mp4', type: 'video', ctr: '5.1%', cvr: '3.2%', spend: '¥2,100', gmv: '¥10,500', status: 'active' },
        { id: 5, title: '封面_对比图_02.jpg', type: 'image', ctr: '2.4%', cvr: '1.1%', spend: '¥450', gmv: '¥1,125', status: 'active' },
    ];

    const audienceRankings = [
        { id: 1, name: '20-30岁女性_护肤', size: '120万', cpc: '¥1.2', ctr: '3.5%', cvr: '1.8%', roi: '2.5', status: 'active' },
        { id: 2, name: '竞品粉丝人群', size: '85万', cpc: '¥1.5', ctr: '2.8%', cvr: '1.5%', roi: '2.1', status: 'active' },
        { id: 3, name: '高消费力人群', size: '50万', cpc: '¥2.1', ctr: '4.2%', cvr: '2.2%', roi: '1.8', status: 'active' },
        { id: 4, name: '美妆兴趣人群', size: '200万', cpc: '¥0.8', ctr: '1.5%', cvr: '0.8%', roi: '1.5', status: 'learning' },
        { id: 5, name: '母婴人群', size: '150万', cpc: '¥1.8', ctr: '2.1%', cvr: '1.1%', roi: '1.2', status: 'warning' },
    ];

    const keywordRankings = [
        { id: 1, keyword: '海尔热水器', volume: '6800', ctr: '4.2%', cpc: '¥3.5', cpa: '¥45', conversions: '120', status: 'active' },
        { id: 2, keyword: '电热水器推荐', volume: '4200', ctr: '3.8%', cpc: '¥4.2', cpa: '¥52', conversions: '85', status: 'active' },
        { id: 3, keyword: '智能热水器', volume: '3100', ctr: '3.5%', cpc: '¥3.8', cpa: '¥48', conversions: '60', status: 'active' },
        { id: 4, keyword: '洗澡神器', volume: '1200', ctr: '2.1%', cpc: '¥2.5', cpa: '¥65', conversions: '15', status: 'learning' },
        { id: 5, keyword: '省电热水器', volume: '900', ctr: '1.8%', cpc: '¥2.2', cpa: '¥70', conversions: '8', status: 'warning' },
    ];

    // Simulate live log updates
    useEffect(() => {
        const interval = setInterval(() => {
            const newLog = {
                id: Date.now(),
                time: new Date().toLocaleTimeString('en-GB'),
                type: 'info',
                message: 'AI 持续监控中... 正在分析实时竞价流。',
                icon: Shield
            };
            // setLogs(prev => [newLog, ...prev].slice(0, 10)); // Optional: enable for live effect
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: '350px 1fr',
            gap: 'var(--space-lg)',
            height: 'calc(100vh - 140px)', // Adjust based on layout
            overflow: 'hidden'
        }}>
            {/* Left Column: The "Assistant" / Console */}
            <div className="glass-panel" style={{
                display: 'flex',
                flexDirection: 'column',
                padding: 0,
                overflow: 'hidden',
                border: '1px solid rgba(0, 240, 255, 0.2)',
                boxShadow: '0 0 20px rgba(0, 240, 255, 0.05)'
            }}>
                {/* Assistant Header */}
                <div style={{
                    padding: 'var(--space-md)',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(0,0,0,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #00f0ff, #0066ff)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 0 10px rgba(0, 240, 255, 0.5)'
                        }}>
                            <Cpu size={18} color="#fff" />
                        </div>
                        <div>
                            <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Flooding AI</div>
                            <div style={{ fontSize: '0.7rem', color: 'var(--color-success)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-success)', display: 'inline-block' }}></span>
                                实时盯盘中
                            </div>
                        </div>
                    </div>
                    <Settings size={16} color="var(--text-muted)" style={{ cursor: 'pointer' }} />
                </div>

                {/* Alerts Section (Moved from Right) */}
                {activeAlerts.length > 0 && (
                    <div style={{
                        padding: 'var(--space-md)',
                        borderBottom: '1px solid rgba(255,255,255,0.1)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'var(--space-sm)'
                    }}>
                        <div style={{ fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-warning)' }}>
                            <AlertTriangle size={14} />
                            需要人工确认 ({activeAlerts.length})
                        </div>
                        {activeAlerts.map(alert => (
                            <div key={alert.id} style={{
                                background: 'rgba(251, 191, 36, 0.05)',
                                border: '1px solid rgba(251, 191, 36, 0.2)',
                                borderRadius: 'var(--radius-md)',
                                padding: '10px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '8px'
                            }}>
                                <div>
                                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-warning)', marginBottom: '2px' }}>{alert.title}</div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: '1.3' }}>{alert.desc}</div>
                                </div>
                                <button style={{
                                    alignSelf: 'flex-end',
                                    backgroundColor: 'var(--color-warning)',
                                    color: '#000',
                                    border: 'none',
                                    padding: '4px 12px',
                                    borderRadius: 'var(--radius-full)',
                                    fontSize: '0.75rem',
                                    fontWeight: 600,
                                    cursor: 'pointer'
                                }}>
                                    {alert.action}
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {/* Live Feed */}
                <div style={{ flex: 1, overflowY: 'auto', padding: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                    {logs.map(log => (
                        <div key={log.id} style={{ display: 'flex', gap: '10px', opacity: log.type === 'info' ? 0.8 : 1 }}>
                            <div style={{
                                marginTop: '2px',
                                minWidth: '24px',
                                height: '24px',
                                borderRadius: '50%',
                                backgroundColor: log.type === 'warning' ? 'rgba(251, 191, 36, 0.1)' : log.type === 'success' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(255,255,255,0.05)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: log.type === 'warning' ? '1px solid rgba(251, 191, 36, 0.3)' : log.type === 'success' ? '1px solid rgba(16, 185, 129, 0.3)' : 'none'
                            }}>
                                <log.icon size={12} color={log.type === 'warning' ? 'var(--color-warning)' : log.type === 'success' ? 'var(--color-success)' : 'var(--text-muted)'} />
                            </div>
                            <div>
                                <div style={{ fontSize: '0.85rem', lineHeight: '1.4', color: 'var(--text-primary)' }}>
                                    {log.message}
                                </div>
                                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '2px' }}>{log.time}</div>
                            </div>
                        </div>
                    ))}
                    <div style={{ textAlign: 'center', padding: '10px', opacity: 0.5 }}>
                        <div className="loading-dots" style={{ display: 'flex', gap: '4px', justifyContent: 'center' }}>
                            <span style={{ width: '4px', height: '4px', backgroundColor: 'var(--color-primary)', borderRadius: '50%' }}></span>
                            <span style={{ width: '4px', height: '4px', backgroundColor: 'var(--color-primary)', borderRadius: '50%' }}></span>
                            <span style={{ width: '4px', height: '4px', backgroundColor: 'var(--color-primary)', borderRadius: '50%' }}></span>
                        </div>
                    </div>
                </div>


            </div>

            {/* Right Column: Dashboard & Controls */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)', overflowY: 'auto' }}>

                {/* 1. Vital Signs */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 'var(--space-md)' }}>
                    {/* New Card: Plan Counts */}
                    <div className="glass-panel" style={{ padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>在投计划数</div>
                            <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)' }}>{detailedPlans.filter(p => p.status !== 'closed').length}</div>
                        </div>
                        <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>待投计划数</div>
                            <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-secondary)' }}>3</div>
                        </div>
                    </div>
                    {metrics.map(metric => (
                        <div key={metric.label} className="glass-panel" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{metric.label}</div>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>{metric.value}</div>
                                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 400 }}>{metric.estimate}</div>
                            </div>

                            {/* Special rendering for Real-time Spend to show Progress */}
                            {metric.label === '实时消耗' ? (
                                <div style={{ marginTop: '4px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
                                        <span>消耗进度</span>
                                        <span>74%</span>
                                    </div>
                                    <div style={{ height: '4px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                                        <div style={{ width: '74%', height: '100%', backgroundColor: 'var(--color-primary)' }} />
                                    </div>
                                </div>
                            ) : (
                                <div style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '4px', color: metric.status === 'good' ? 'var(--color-success)' : metric.status === 'warning' ? 'var(--color-warning)' : 'var(--text-secondary)' }}>
                                    {metric.status === 'good' ? <ArrowUpRight size={12} /> : metric.status === 'warning' ? <ArrowDownRight size={12} /> : null}
                                    {metric.trend}
                                </div>
                            )}
                        </div>
                    ))}
                </div>



                {/* 3. Detailed Monitoring Views (Tabs) */}
                <div className="glass-panel" style={{ flex: 1, padding: 'var(--space-lg)', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 'var(--space-sm)' }}>
                        <div style={{ display: 'flex', gap: 'var(--space-lg)' }}>
                            {['异常计划', '计划列表', '资源排行'].map((tab, idx) => (
                                <div key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    style={{
                                        fontSize: '0.95rem',
                                        fontWeight: activeTab === tab ? 600 : 400,
                                        color: activeTab === tab ? 'var(--color-primary)' : 'var(--text-secondary)',
                                        cursor: 'pointer',
                                        position: 'relative'
                                    }}>
                                    {tab}
                                    {activeTab === tab && <div style={{ position: 'absolute', bottom: '-10px', left: 0, right: 0, height: '2px', backgroundColor: 'var(--color-primary)' }} />}
                                </div>
                            ))}
                        </div>
                        <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
                            <button style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '4px', padding: '4px 8px', color: 'var(--text-secondary)', cursor: 'pointer' }}>
                                <Filter size={14} />
                            </button>
                            <button style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '4px', padding: '4px 8px', color: 'var(--text-secondary)', cursor: 'pointer' }}>
                                <RefreshCw size={14} />
                            </button>
                        </div>
                    </div>

                    {/* Tab Content: Exception Plans */}
                    {activeTab === '异常计划' && (
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                            <thead>
                                <tr style={{ color: 'var(--text-muted)', textAlign: 'left' }}>
                                    <th style={{ padding: '12px 0', fontWeight: 400 }}>监控对象</th>
                                    <th style={{ padding: '12px 0', fontWeight: 400 }}>风险等级</th>
                                    <th style={{ padding: '12px 0', fontWeight: 400 }}>消耗/预算</th>
                                    <th style={{ padding: '12px 0', fontWeight: 400 }}>异常原因</th>
                                    <th style={{ padding: '12px 0', fontWeight: 400 }}>AI 建议</th>
                                    <th style={{ padding: '12px 0', fontWeight: 400, textAlign: 'right' }}>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { name: '搜索 + 精准竞品人群包 + 善弈核心关键词包', status: 'high-value', spend: '¥1,580 / ¥2,000', reason: 'ROI 4.2 (远超预期)', startTime: '10/26 10:00', endTime: '10/29 23:59', suggestion: '建议追投' },
                                    { name: '搜索 + 竞品词 + 强引流', status: 'high-risk', spend: '¥2,300 / ¥2,000', reason: 'ROI 0.4 (低于阈值)', startTime: '10/27 08:00', endTime: '10/27 20:00', suggestion: '立即关停' },
                                    { name: '信息流 + 高净值人群包 + 海尔净水关键词包', status: 'medium-risk', spend: '¥980 / ¥1,500', reason: 'CTR 0.8% (低于平均)', startTime: '10/27 09:00', endTime: '10/29 22:00', suggestion: '优化创意' },
                                    { name: '笔记 + 智能扩量人群包 + 致铂加购关键词包', status: 'low-risk', spend: '¥1,200 / ¥2,000', reason: 'ROI 2.4 (优于预期)', startTime: '10/27 10:00', endTime: '10/29 23:59', suggestion: '保持观察' },
                                ].map((row, idx) => (
                                    <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                        <td style={{ padding: '16px 0' }}>
                                            <div style={{ fontWeight: 500, maxWidth: '240px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} title={row.name}>{row.name}</div>
                                            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '4px', fontFamily: 'monospace' }}>{row.startTime} - 预估 {row.endTime}</div>
                                        </td>
                                        <td style={{ padding: '16px 0' }}>
                                            <span style={{
                                                display: 'inline-flex', alignItems: 'center', gap: '4px',
                                                fontSize: '0.75rem', padding: '2px 8px', borderRadius: '999px',
                                                backgroundColor: row.status === 'high-value' ? 'rgba(0, 240, 255, 0.1)' :
                                                    row.status === 'low-risk' ? 'rgba(16, 185, 129, 0.1)' :
                                                        row.status === 'medium-risk' ? 'rgba(245, 158, 11, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                                                color: row.status === 'high-value' ? '#00f0ff' :
                                                    row.status === 'low-risk' ? 'var(--color-success)' :
                                                        row.status === 'medium-risk' ? '#f59e0b' : '#ef4444'
                                            }}>
                                                {row.status === 'high-value' ? <TrendingUp size={10} /> :
                                                    row.status === 'low-risk' ? <CheckCircle2 size={10} /> : <AlertTriangle size={10} />}
                                                {row.status === 'high-value' ? '高价值' :
                                                    row.status === 'low-risk' ? '低风险' :
                                                        row.status === 'medium-risk' ? '中风险' : '高风险'}
                                            </span>
                                        </td>
                                        <td style={{ padding: '16px 0', fontFamily: 'monospace' }}>{row.spend}</td>
                                        <td style={{ padding: '16px 0', color: row.status === 'low-risk' ? 'var(--color-success)' : 'var(--color-warning)' }}>{row.reason}</td>
                                        <td style={{ padding: '16px 0', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{row.suggestion}</td>
                                        <td style={{ padding: '16px 0', textAlign: 'right' }}>
                                            <button style={{
                                                padding: '4px 12px',
                                                fontSize: '0.75rem',
                                                borderRadius: 'var(--radius-sm)',
                                                border: row.status === 'high-value' ? '1px solid rgba(0, 240, 255, 0.3)' : '1px solid rgba(239, 68, 68, 0.3)',
                                                backgroundColor: row.status === 'high-value' ? 'rgba(0, 240, 255, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                                                color: row.status === 'high-value' ? '#00f0ff' : '#ef4444',
                                                cursor: 'pointer',
                                                fontWeight: 500,
                                                transition: 'all 0.2s'
                                            }}
                                                onMouseEnter={(e) => {
                                                    if (row.status === 'high-value') {
                                                        e.currentTarget.style.backgroundColor = 'rgba(0, 240, 255, 0.2)';
                                                        e.currentTarget.style.borderColor = '#00f0ff';
                                                    } else {
                                                        e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.2)';
                                                        e.currentTarget.style.borderColor = '#ef4444';
                                                    }
                                                }}
                                                onMouseLeave={(e) => {
                                                    if (row.status === 'high-value') {
                                                        e.currentTarget.style.backgroundColor = 'rgba(0, 240, 255, 0.1)';
                                                        e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.3)';
                                                    } else {
                                                        e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
                                                        e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.3)';
                                                    }
                                                }}
                                            >
                                                {row.status === 'high-value' ? '追投' : '下架'}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}

                    {/* Tab Content: Plan List */}
                    {activeTab === '计划列表' && (
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                            <thead>
                                <tr style={{ color: 'var(--text-muted)', textAlign: 'left' }}>
                                    <th style={{ padding: '12px 0', fontWeight: 400 }}>计划名称</th>
                                    <th style={{ padding: '12px 0', fontWeight: 400 }}>状态</th>
                                    <th style={{ padding: '12px 0', fontWeight: 400 }}>消耗 / 预算</th>
                                    <th style={{ padding: '12px 0', fontWeight: 400 }}>曝光量</th>
                                    <th style={{ padding: '12px 0', fontWeight: 400 }}>CTR / CPC</th>
                                    <th style={{ padding: '12px 0', fontWeight: 400 }}>转化 / CVR</th>
                                    <th style={{ padding: '12px 0', fontWeight: 400 }}>CPA / ROI</th>
                                    <th style={{ padding: '12px 0', fontWeight: 400 }}>GMV</th>
                                    <th style={{ padding: '12px 0', fontWeight: 400, textAlign: 'right' }}>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                {detailedPlans.filter(plan => plan.status !== 'closed').map((plan) => (
                                    <tr key={plan.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                        <td style={{ padding: '16px 0' }}>
                                            <div style={{ fontWeight: 500, maxWidth: '180px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} title={plan.name}>{plan.name}</div>
                                            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '4px', fontFamily: 'monospace' }}>{plan.startTime} - 预估 {plan.endTime}</div>
                                        </td>
                                        <td style={{ padding: '16px 0' }}>
                                            <span style={{
                                                fontSize: '0.7rem', padding: '2px 6px', borderRadius: '4px',
                                                backgroundColor: plan.status === 'running' ? 'rgba(16, 185, 129, 0.1)' : plan.status === 'high-risk' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(59, 130, 246, 0.1)',
                                                color: plan.status === 'running' ? 'var(--color-success)' : plan.status === 'high-risk' ? '#ef4444' : '#3b82f6'
                                            }}>
                                                {plan.status === 'running' ? '投放中' : plan.status === 'high-risk' ? '高风险' : '学习期'}
                                            </span>
                                        </td>
                                        <td style={{ padding: '16px 0' }}>
                                            <div style={{ fontFamily: 'monospace' }}>{plan.spend}</div>
                                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>/ {plan.budget}</div>
                                        </td>
                                        <td style={{ padding: '16px 0', fontFamily: 'monospace' }}>{plan.impressions}</td>
                                        <td style={{ padding: '16px 0' }}>
                                            <div style={{ fontWeight: 600 }}>{plan.ctr}</div>
                                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{plan.cpc}</div>
                                        </td>
                                        <td style={{ padding: '16px 0' }}>
                                            <div style={{ fontWeight: 600 }}>{plan.conversions}</div>
                                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{plan.cvr}</div>
                                        </td>
                                        <td style={{ padding: '16px 0' }}>
                                            <div style={{ fontWeight: 600 }}>{plan.cpa}</div>
                                            <div style={{ fontSize: '0.75rem', color: plan.roi > 2 ? 'var(--color-success)' : 'var(--text-muted)' }}>ROI {plan.roi}</div>
                                        </td>
                                        <td style={{ padding: '16px 0', fontWeight: 700, color: 'var(--text-primary)' }}>{plan.gmv}</td>
                                        <td style={{ padding: '16px 0', textAlign: 'right' }}>
                                            <div style={{ display: 'flex', gap: '6px', justifyContent: 'flex-end' }}>
                                                <button style={{
                                                    padding: '4px 10px',
                                                    fontSize: '0.75rem',
                                                    borderRadius: 'var(--radius-sm)',
                                                    border: '1px solid rgba(239, 68, 68, 0.3)',
                                                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                                                    color: '#ef4444',
                                                    cursor: 'pointer',
                                                    fontWeight: 500,
                                                    transition: 'all 0.2s'
                                                }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.2)';
                                                        e.currentTarget.style.borderColor = '#ef4444';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
                                                        e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.3)';
                                                    }}
                                                >
                                                    下架
                                                </button>
                                                <button style={{
                                                    padding: '4px 10px',
                                                    fontSize: '0.75rem',
                                                    borderRadius: 'var(--radius-sm)',
                                                    border: '1px solid rgba(0, 240, 255, 0.3)',
                                                    backgroundColor: 'rgba(0, 240, 255, 0.1)',
                                                    color: '#00f0ff',
                                                    cursor: 'pointer',
                                                    fontWeight: 500,
                                                    transition: 'all 0.2s'
                                                }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.backgroundColor = 'rgba(0, 240, 255, 0.2)';
                                                        e.currentTarget.style.borderColor = '#00f0ff';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.backgroundColor = 'rgba(0, 240, 255, 0.1)';
                                                        e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.3)';
                                                    }}
                                                >
                                                    追投
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}

                    {/* Tab Content: Resource Ranking (Split into 3 Columns) */}
                    {activeTab === '资源排行' && (
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 'var(--space-md)' }}>

                            {/* 1. Audience Ranking */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                                <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>人群包排行</h4>
                                {audienceRankings.map((item, idx) => (
                                    <div key={item.id} className="glass-panel" style={{ padding: '12px', display: 'flex', alignItems: 'flex-start', gap: '12px', background: 'rgba(255,255,255,0.02)' }}>
                                        <div style={{ fontSize: '1rem', fontWeight: 700, color: idx < 3 ? 'var(--color-primary)' : 'var(--text-muted)', width: '20px', textAlign: 'center', fontStyle: 'italic', marginTop: '2px' }}>{idx + 1}</div>
                                        <div style={{ flex: 1, overflow: 'hidden' }}>
                                            <div style={{ fontWeight: 500, fontSize: '0.85rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginBottom: '6px' }} title={item.name}>{item.name}</div>
                                            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '4px 8px', fontSize: '0.7rem' }}>
                                                <span style={{ color: 'var(--text-muted)' }}>投:</span>
                                                <span style={{ color: 'var(--text-secondary)' }}>CPC {item.cpc} · CTR {item.ctr}</span>
                                                <span style={{ color: 'var(--text-muted)' }}>回:</span>
                                                <span style={{ color: item.roi > 2 ? 'var(--color-success)' : 'var(--text-secondary)' }}>ROI {item.roi} · CVR {item.cvr}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* 2. Keyword Ranking */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                                <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>关键词排行</h4>
                                {keywordRankings.map((item, idx) => (
                                    <div key={item.id} className="glass-panel" style={{ padding: '12px', display: 'flex', alignItems: 'flex-start', gap: '12px', background: 'rgba(255,255,255,0.02)' }}>
                                        <div style={{ fontSize: '1rem', fontWeight: 700, color: idx < 3 ? 'var(--color-primary)' : 'var(--text-muted)', width: '20px', textAlign: 'center', fontStyle: 'italic', marginTop: '2px' }}>{idx + 1}</div>
                                        <div style={{ flex: 1, overflow: 'hidden' }}>
                                            <div style={{ fontWeight: 500, fontSize: '0.85rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginBottom: '6px' }} title={item.keyword}>{item.keyword}</div>
                                            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '4px 8px', fontSize: '0.7rem' }}>
                                                <span style={{ color: 'var(--text-muted)' }}>投:</span>
                                                <span style={{ color: 'var(--text-secondary)' }}>CPC {item.cpc} · CTR {item.ctr}</span>
                                                <span style={{ color: 'var(--text-muted)' }}>回:</span>
                                                <span style={{ color: 'var(--text-secondary)' }}>CPA {item.cpa} · 转化 {item.conversions}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* 3. Creative Ranking */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                                <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>素材排行</h4>
                                {creativeRankings.map((creative, idx) => (
                                    <div key={creative.id} className="glass-panel" style={{ padding: '12px', display: 'flex', alignItems: 'flex-start', gap: '12px', background: 'rgba(255,255,255,0.02)' }}>
                                        <div style={{ fontSize: '1rem', fontWeight: 700, color: idx < 3 ? 'var(--color-primary)' : 'var(--text-muted)', width: '20px', textAlign: 'center', fontStyle: 'italic', marginTop: '2px' }}>{idx + 1}</div>

                                        {/* Thumbnail Placeholder */}
                                        <div style={{
                                            width: '32px', height: '32px', borderRadius: '4px', backgroundColor: 'rgba(255,255,255,0.1)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', flexShrink: 0, marginTop: '2px'
                                        }}>
                                            {creative.type === 'video' ? <Play size={12} /> : <Eye size={12} />}
                                        </div>

                                        <div style={{ flex: 1, overflow: 'hidden' }}>
                                            <div style={{ fontWeight: 500, fontSize: '0.85rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginBottom: '6px' }} title={creative.title}>{creative.title}</div>
                                            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '4px 8px', fontSize: '0.7rem' }}>
                                                <span style={{ color: 'var(--text-muted)' }}>投:</span>
                                                <span style={{ color: 'var(--text-secondary)' }}>CTR {creative.ctr} · 消耗 {creative.spend}</span>
                                                <span style={{ color: 'var(--text-muted)' }}>回:</span>
                                                <span style={{ color: 'var(--text-secondary)' }}>CVR {creative.cvr} · GMV {creative.gmv}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default InDelivery;
