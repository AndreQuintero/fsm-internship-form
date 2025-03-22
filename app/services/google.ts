import { google } from 'googleapis';
import { credentials } from './credentials';

export const auth = new google.auth.GoogleAuth({
    credentials: credentials,
    scopes: "https://www.googleapis.com/auth/spreadsheets",
    
})