import { pool } from '../config/database.js';

const getRegions = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM regions ORDER BY id ASC');
        res.status(200).json(results.rows);
    } catch (error) {
        res.status(409).json( { error: error.message });
    }
}

const postRegion = async (req, res) => {
    try {
        const { lat, lng, name } = req.body;
        const postQuery = 'INSERT INTO regions (lat, lng, name) VALUES ($1, $2, $3) RETURNING *';
        const results = await pool.query(postQuery, [lat, lng, name]);

        res.status(201).json(results.rows[0]);
    } catch (error) {
        res.status(409).json( { error: error.message });
    }
}

const deleteRegion = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const results = await pool.query('DELETE FROM regions WHERE id = $1', [id])
        res.status(200).json(results.rows[0])
    } catch (error) {
        res.status(409).json( { error: error.message } )
    }
  }

// const updateregion = async (req, res) => {
//     try {
//         const id = parseInt
//         res.status(200).json(results.rows[0]);
//     } catch (error) {
//         res.status(409).json( { error: error.message });
//     }
// }

// const getregionById = async (req, res) => {
//     try {
//         const selectQuery = 'SELECT * FROM regions WHERE id = $1';
//         const regionId = req.params.id;
//         const results = await pool.query(selectQuery, [regionId]);
//         res.status(200).json(results.rows[0]);
//     } catch (error) {
//         res.status(409).json( { error: error.message });
//     }
// }

export default {
    getRegions,
    postRegion,
    deleteRegion
    // getregionById
};