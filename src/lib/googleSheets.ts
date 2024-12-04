import { google } from 'googleapis'
import { JWT } from 'google-auth-library'

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets']

const auth = new JWT({
  email: process.env.GOOGLE_CLIENT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  scopes: SCOPES
})

const sheets = google.sheets({ version: 'v4', auth })

export const setupGoogleSheet = async (spreadsheetUrl: string) => {
  try {
    const spreadsheetId = extractSpreadsheetId(spreadsheetUrl)
    
    // Set up headers
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: 'A1:J1',
      valueInputOption: 'RAW',
      requestBody: {
        values: [[
          'Lead ID',
          'Date',
          'First Name',
          'Last Name',
          'Email',
          'Phone',
          'Address',
          'City',
          'State',
          'ZIP Code'
        ]]
      }
    })

    return spreadsheetId
  } catch (error) {
    console.error('Google Sheets setup error:', error)
    throw error
  }
}

export const addLeadToSheet = async (spreadsheetId: string, lead: any) => {
  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'A2:J2',
      valueInputOption: 'RAW',
      requestBody: {
        values: [[
          lead.id,
          new Date().toISOString(),
          lead.firstName,
          lead.lastName,
          lead.email,
          lead.phone,
          lead.address,
          lead.city,
          lead.state,
          lead.zipCode
        ]]
      }
    })
  } catch (error) {
    console.error('Failed to add lead to sheet:', error)
    throw error
  }
}

const extractSpreadsheetId = (url: string) => {
  const match = url.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/)
  if (!match) throw new Error('Invalid Google Sheets URL')
  return match[1]
}
