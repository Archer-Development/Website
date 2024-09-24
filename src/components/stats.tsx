"use client";

import { Activity, Server, User } from "lucide-react";
import { useState, useEffect } from "react";
import { NumericFormat } from 'react-number-format';
import Image from 'next/image';
import banner from '../../public/Banner.png';

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
        <div className="bg-gray-800 w-full max-w-2xl shadow-lg rounded-lg overflow-hidden">
            {/* Banner */}
            <Image
                src={banner}
                alt="Discord banner"
                width={500}
                height={200}
                className="w-full object-cover"
            />

            {/* Bot Info Section */}
            <div className="p-6 bg-gray-900">
                <h1 className="text-white text-3xl font-bold text-center">Archer</h1>
                <p className="text-gray-400 text-center text-lg mt-2">Archer Security is a discord bot designed for moderation and security.</p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-6 p-6 bg-gray-900 text-white text-center">
                <div className="flex flex-col items-center">
                    <Server className="text-2xl mb-2" />
                    <NumericFormat
                        value={stats.servers}
                        displayType={'text'}
                        thousandSeparator={true}
                        decimalScale={0}
                        customInput={CustomNumberFormat}
                    />
                    <p className="text-sm mt-1">Servers</p>
                </div>
                <div className="flex flex-col items-center">
                    <User className="text-2xl mb-2" />
                    <NumericFormat
                        value={stats.users}
                        displayType={'text'}
                        thousandSeparator={true}
                        decimalScale={0}
                        customInput={CustomNumberFormat}
                    />
                    <p className="text-sm mt-1">Members</p>
                </div>
                <div className="flex flex-col items-center">
                    <Activity className="text-2xl mb-2" />
                    <span>{formatPercentage(stats.uptime)} Uptime</span>
                    <p className="text-sm mt-1">Uptime</p>
                </div>
            </div>
        </div>
    );
}
