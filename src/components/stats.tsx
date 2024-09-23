"use client";

import { Activity, Server, User } from "lucide-react";
import { useState, useEffect } from "react";
import { NumericFormat } from 'react-number-format';

export default function Stats() {
    const [stats, setStats] = useState({
        servers: 0,
        users: 0,
        uptime: 0
    });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await fetch('/api/status');
                const data = await response.json();
                setStats(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchStats();
    }, []);

    const formatNumber = (value: number) => {
        if (value >= 1000) {
            return (value / 1000).toFixed(1) + 'K+';
        }
        return value.toString();
    };

    const CustomNumberFormat = ({ value }: { value: number }) => (
        <span>{formatNumber(value)}</span>
    );

    const formatPercentage = (value: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'percent',
            minimumFractionDigits: 1,
            maximumFractionDigits: 1
        }).format(value);
    };

    return (
        <div className="bg-[rgba(45,48,77,0.60)] p-8 flex flex-col md:flex-row justify-between items-center w-full px-40">
            <div className="flex flex-col items-center text-white text-xl mb-4 md:mb-0">
                <p className="text-left w-full">Servers</p>
                <div className="flex items-center">
                    <Server className="mr-2" />
                    <NumericFormat
                        value={stats.servers}
                        displayType={'text'}
                        thousandSeparator={true}
                        decimalScale={0}
                        customInput={CustomNumberFormat}
                    />
                </div>
            </div>
            <div className="flex flex-col items-center text-white text-xl mb-4 md:mb-0">
                <p className="text-left w-full">Users</p>
                <div className="flex items-center">
                    <User className="mr-2" />
                    <NumericFormat
                        value={stats.users}
                        displayType={'text'}
                        thousandSeparator={true}
                        decimalScale={0}
                        customInput={CustomNumberFormat}
                    />
                </div>
            </div>
            <div className="flex flex-col items-center text-white text-xl">
                <p className="text-left w-full">Uptime</p>
                <div className="flex items-center">
                    <Activity className="mr-2" />
                    <span>{formatPercentage(stats.uptime)} Uptime</span>
                </div>
            </div>
        </div>
    );
}