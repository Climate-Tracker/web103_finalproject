import { pool } from './database.js';
import './dotenv.js';
import regionsData from '../data/regions.js';

const createRegionsTable = async () => {
    const dropTableQuery = `
        DROP TABLE IF EXISTS regions;
    `;

    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS regions (
            id SERIAL PRIMARY KEY,
            lat REAL NOT NULL,
            lng REAL NOT NULL,
            name TEXT NOT NULL
        );
    `;


    try {
        // First, drop the table if it exists
        await pool.query(dropTableQuery);
        console.log("Dropped table if it existed.");

        const res = await pool.query(createTableQuery);
        console.log('table created successfully');
    } catch (error) {
        console.error('⚠️ error creating Region table', error)
    }
}

const sendRegionsTable = async () => {
    await createRegionsTable();

    regionsData.forEach((region) => {
        const insertQuery = {
            text: 'INSERT INTO regions (lat, lng, name) VALUES ($1, $2, $3);'
        }

        const values = [
            region.lat,
            region.lng,
            region.name
        ]

        pool.query(insertQuery, values, (error, res) => {
            if (error) {
                console.error('⚠️ error inserting regions', error)
                return;
            }

            console.log(`✅ ${region.name} added successfully`)
        })
    })
}

sendRegionsTable();