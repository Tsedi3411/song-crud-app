import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:7000'

export const getSongsAPI = async () => axios.get('/Songs')

export const getSongByIdAPI = async (id) => axios.get(`/Songs/${id}`)

export const createSongAPI = async (song) => axios.post(`/Songs`, song)

export const updateSongAPI = async (song) => axios.put(`/Songs/${song.id}`, song)

export const deleteSongByIdAPI = async (id) => axios.delete(`/Songs/${id}`)