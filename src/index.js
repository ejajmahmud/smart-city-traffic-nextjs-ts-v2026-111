const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        app: 'smart-city-traffic-nextjs-ts-v2026-111',
        category: 'Smart City Traffic & Mobility Hub',
        tech: 'TypeScript / Next.js React App',
        status: 'active'
    });
});

app.listen(PORT, () => {
    console.log(`[smart-city-traffic-nextjs-ts-v2026-111] Service listening on port ${PORT}`);
});
