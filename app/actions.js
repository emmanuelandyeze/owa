'use server';

import { google } from 'googleapis';
import { GoogleAuth } from 'google-auth-library';

/**
 * Submits form data to a Google Spreadsheet.
 *
 * **Important Setup:**
 * 1.  **Enable Google Sheets API:** In your Google Cloud project, enable the "Google Sheets API".
 * 2.  **Create a Service Account:** Create a service account and download its JSON key file.
 * 3.  **Share Your Sheet:** Share your Google Sheet with the service account's email address (`client_email` from the JSON key) and give it "Editor" permissions.
 * 4.  **Set Environment Variables:** Store your credentials and the sheet ID securely as environment variables.
 *
 * @param {AgentFormData} formData The form data to submit. Assumes fields named 'name', 'email', and 'message'.
 * @returns {Promise<{success: boolean, message: string}>} An object indicating success or failure.
 */
export async function submitToGoogleSheet(formData) {
	try {
		// 1. Authentication
		const auth = new GoogleAuth({
			credentials: {
				client_email:
					process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
				// The private key might have newline characters, which need to be handled correctly.
				private_key:
					process.env.GOOGLE_PRIVATE_KEY?.replace(
						/\\n/g,
						'\n',
					),
			},
			scopes: [
				'https://www.googleapis.com/auth/spreadsheets',
			],
		});

		const sheets = google.sheets({
			auth,
			version: 'v4',
		});

		// 2. Prepare the data to be inserted (a new row)
		const values = [
			[
				new Date().toISOString(), // Timestamp
				formData.firstName,
				formData.lastName,
				formData.email,
				formData.number,
				formData.address,
				formData.academicQualification,
				formData.role
			],
		];

		// 3. Append data to the spreadsheet
		await sheets.spreadsheets.values.append({
			spreadsheetId: process.env.GOOGLE_SHEET_ID,
			range: 'AgentApplications',
			valueInputOption: 'USER_ENTERED',
			requestBody: { values },
		});

		return {
			success: true,
			message: 'Form submitted successfully!',
		};
	} catch (error) {
		console.error(
			'Error submitting form to Google Sheet:',
			error,
		);
		// Return a generic error message to the client for security reasons.
		return {
			success: false,
			message: 'An unexpected error occurred.',
		};
	}
}

export async function submitContactForm(formData) {
	try {
		// 1. Authentication
		const auth = new GoogleAuth({
			credentials: {
				client_email:
					process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
				private_key:
					process.env.GOOGLE_PRIVATE_KEY?.replace(
						/\\n/g,
						'\n',
					),
			},
			scopes: [
				'https://www.googleapis.com/auth/spreadsheets',
			],
		});

		const sheets = google.sheets({
			auth,
			version: 'v4',
		});

		// 2. Prepare the data for the contact form
		const values = [
			[
				new Date().toISOString(), // Timestamp
				formData.firstName,
				formData.lastName,
				formData.email,
				formData.message,
			],
		];

		// 3. Append data to the 'ContactMessages' spreadsheet
		await sheets.spreadsheets.values.append({
			spreadsheetId: process.env.GOOGLE_SHEET_ID,
			range: 'ContactMessages', // Target sheet for contact messages
			valueInputOption: 'USER_ENTERED',
			requestBody: { values },
		});

		return {
			success: true,
			message: 'Message sent successfully!',
		};
	} catch (error) {
		console.error(
			'Error submitting contact form to Google Sheet:',
			error,
		);
		return {
			success: false,
			message: 'An unexpected error occurred.',
		};
	}
}
