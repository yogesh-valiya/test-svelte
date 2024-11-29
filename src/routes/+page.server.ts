// src/routes/+page.server.ts
import type { Load } from '@sveltejs/kit';
import fetch from 'node-fetch';

export const load: Load = async () => {
    let ipAddress = '';

    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data: any = await response.json();
        ipAddress = data.ip;
    } catch (error) {
        console.error('Error fetching IP address:', error);
    }
    return {
        ipAddress
    };
};