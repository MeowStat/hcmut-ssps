import React from 'react'
import { useNavigate } from 'react-router-dom'; // Change this import
import Navbar from './Navbar'; // Add this import 
import Footer from './Footer'; // Add this import 

const Card = ({ children, style }) => (
    <div style={{ ...style, padding: '24px', border: '1px solid #e5e7eb', borderRadius: '8px', backgroundColor: 'white' }}>
        {children}
    </div>
)

const Select = ({ options, defaultValue }) => (
    <select defaultValue={defaultValue} style={{ padding: '8px', border: '1px solid #e5e7eb', borderRadius: '4px' }}>
        {options.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
        ))}
    </select>
)

const Table = ({ children }) => (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>{children}</table>
)

const TableHeader = ({ children }) => <thead>{children}</thead>
const TableBody = ({ children }) => <tbody>{children}</tbody>
const TableRow = ({ children }) => <tr>{children}</tr>
const TableHead = ({ children }) => (
    <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid #e5e7eb' }}>{children}</th>
)
const TableCell = ({ children }) => (
    <td style={{ padding: '12px', borderBottom: '1px solid #e5e7eb' }}>{children}</td>
)



export default function Component() {
    return (
    <>
        <Navbar/>
        <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
            {/* Header */}
            <div style={{ marginBottom: '32px' }}>
                <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px' }}>Welcome back !</h1>
                <p style={{ color: '#6b7280' }}>
                    Fast, reliable, and always ready—your campus printing partner
                </p>
            </div>

            {/* Last Access Activity */}
            <div style={{ backgroundColor: '#e0f2fe', borderRadius: '8px', padding: '24px', display: 'flex', alignItems: 'flex-start', gap: '24px', marginBottom: '32px' }}>
                <div style={{ backgroundColor: '#3b82f6', padding: '16px', borderRadius: '8px' }}>
                    {/* Printer icon placeholder */}
                    <div style={{ width: '32px', height: '32px', backgroundColor: 'white' }}></div>
                </div>
                <div>
                    <h2 style={{ fontWeight: '500', marginBottom: '4px' }}>Last Access Activity</h2>
                    <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '4px' }}>05/10/2024 10:12:42</div>
                    <div style={{ fontSize: '14px', color: '#6b7280' }}>Total access: 478</div>
                </div>
            </div>

            {/* Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '32px' }}>
                <Card>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                            <h3 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '8px' }}>Total Prints</h3>
                            <div style={{ fontSize: '24px', fontWeight: 'bold' }}>12 Pages</div>
                        </div>
                        <div style={{ backgroundColor: '#d1fae5', color: '#059669', padding: '4px 8px', borderRadius: '9999px', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                            {/* Up arrow icon placeholder */}
                            <div style={{ width: '16px', height: '16px', backgroundColor: '#059669' }}></div>
                            2% from last month
                        </div>
                    </div>
                </Card>
                <Card>
                    <h3 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '8px' }}>Your Remain Pages</h3>
                    <div style={{ fontSize: '24px', fontWeight: 'bold' }}>50 Pages</div>
                </Card>
            </div>

            {/* Recent Activities and Printer Status */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                {/* Recent Activities */}
                <Card>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                        <h3 style={{ fontSize: '18px', fontWeight: '500' }}>Recent Printing Activities</h3>
                        <a
                            href="#"
                            style={{
                                fontSize: '14px',
                                color: '#6b7280',
                                textDecoration: 'none',
                                transition: 'color 0.2s ease',
                                fontWeight: '500',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px',
                                ':hover': {
                                    color: '#3b82f6'  // This won't work with inline styles, consider using CSS file
                                }
                            }}
                            onMouseOver={(e) => e.target.style.color = '#3b82f6'}
                            onMouseOut={(e) => e.target.style.color = '#6b7280'}
                        >
                            View All <span style={{ marginLeft: '2px' }}>→</span>
                        </a>
                    </div>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Page No.</TableHead>
                                <TableHead>Printer</TableHead>
                                <TableHead>Time</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>36</TableCell>
                                <TableCell>B7-10</TableCell>
                                <TableCell>03/10/2024, 19:11</TableCell>
                                <TableCell>
                                    <span style={{ color: '#f97316' }}>Pending</span>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>32</TableCell>
                                <TableCell>H1-19</TableCell>
                                <TableCell>29/09/2024, 19:30</TableCell>
                                <TableCell>
                                    <span style={{ color: '#22c55e' }}>Success</span>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>76</TableCell>
                                <TableCell>C5-07</TableCell>
                                <TableCell>29/09/2024, 01:15</TableCell>
                                <TableCell>
                                    <span style={{ color: '#ef4444' }}>Fail</span>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Card>

                {/* Printer Status */}
                <Card>
                    <div style={{ marginBottom: '16px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                            <h3 style={{ fontSize: '18px', fontWeight: '500' }}>Printers Status Around Campus</h3>
                            <Select
                                options={[{ value: 'hcmut2', label: 'HCMUT 2' }]}
                                defaultValue="hcmut2"
                            />
                        </div>

                        <div style={{ fontSize: '14px' }}>
                            <div>Total: 12</div>
                            <div style={{ color: '#6b7280' }}>
                                Active: 8
                                <br />
                                Pending: 3
                                <br />
                                Unavailable: 1
                            </div>
                        </div>
                    </div>

                    {/* Map Layout */}
                    <div style={{ position: 'relative', minHeight: '400px', background: '#f0fff4' }}>
                        {/* H1 Block */}
                        <div style={{
                            position: 'absolute',
                            top: '10px',
                            left: '5%',
                            width: '120px',
                            height: '160px',
                            background: '#f3f4f6',
                            padding: '12px',
                        }}>
                            <h4>H1</h4>
                            <div style={{ position: 'absolute', bottom: '12px' }}>
                                <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }}></div>
                                    <span>3</span>
                                </div>
                            </div>
                        </div>

                        {/* H2 Block */}
                        <div style={{
                            position: 'absolute',
                            top: '10px',
                            left: '35%',
                            width: '120px',
                            height: '160px',
                            background: '#f3f4f6',
                            padding: '12px'
                        }}>
                            <h4>H2</h4>
                            <div style={{ position: 'absolute', bottom: '12px' }}>
                                <div style={{ display: 'flex', gap: '4px', alignItems: 'center', marginBottom: '4px' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }}></div>
                                    <span>1</span>
                                </div>
                                <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fbbf24' }}></div>
                                    <span>2</span>
                                </div>
                            </div>
                        </div>

                        {/* H3 Block */}
                        <div style={{
                            position: 'absolute',
                            top: '10px',
                            right: '5%',
                            width: '120px',
                            height: '160px',
                            background: '#f3f4f6',
                            padding: '12px'
                        }}>
                            <h4>H3</h4>
                            <div style={{ position: 'absolute', bottom: '12px' }}>
                                <div style={{ display: 'flex', gap: '4px', alignItems: 'center', marginBottom: '4px' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }}></div>
                                    <span>2</span>
                                </div>
                                <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fbbf24' }}></div>
                                    <span>1</span>
                                </div>
                            </div>
                        </div>

                        {/* H6 Block */}
                        <div style={{
                            position: 'absolute',
                            bottom: '5px',
                            left: '45%',
                            width: '120px',
                            height: '160px',
                            background: '#f3f4f6',
                            padding: '12px'
                        }}>
                            <h4>H6</h4>
                            <div style={{ position: 'absolute', bottom: '12px' }}>
                                <div style={{ display: 'flex', gap: '4px', alignItems: 'center', marginBottom: '4px' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }}></div>
                                    <span>2</span>
                                </div>
                                <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }}></div>
                                    <span>1</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
        <Footer/>
    </>
    )
}