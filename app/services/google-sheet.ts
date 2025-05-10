import { Auth, google } from "googleapis"
import { auth } from "./google"

type SheetService<T> = {
    values: T[][]
    sheetName: string
}

export const insertDataIntoSheet = async <T>({ sheetName, values }: SheetService<T>) => {
    const client = await auth.getClient()
    const googleSheets = google.sheets({ version: "v4", auth: client as Auth.OAuth2Client })
    const id = process.env.SHEET_ID
   
    await googleSheets.spreadsheets.values.append({
        auth,
        range: `${sheetName}!A1:B2`,
        spreadsheetId: id,
        valueInputOption: "USER_ENTERED",
        insertDataOption: "INSERT_ROWS",
        requestBody: {
            values
        }
    })
}