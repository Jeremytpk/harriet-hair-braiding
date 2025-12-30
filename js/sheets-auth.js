// Google Sheets Auth API integration for signup/login
// Replace with your Apps Script Web App URL
const SHEETS_AUTH_URL = 'https://sheetdb.io/api/v1/mg8dwcpcv9i2u';

// Helper: Save user session
function saveUserSession(email, role) {
  localStorage.setItem('userEmail', email);
  localStorage.setItem('userRole', role);
}

// Helper: Clear user session
function clearUserSession() {
  localStorage.removeItem('userEmail');
  localStorage.removeItem('userRole');
}

// Helper: Get user session
function getUserSession() {
  return {
    email: localStorage.getItem('userEmail'),
    role: localStorage.getItem('userRole')
  };
}

// Signup function
async function signupUser(name, phone, email, password, role) {
  const res = await fetch(SHEETS_AUTH_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      action: 'signup',
      name, phone, email, password, role
    })
  });
  // No-cors: can't read response, so just assume success
  saveUserSession(email, role);
}

// Login function
async function loginUser(email, password) {
  const res = await fetch(SHEETS_AUTH_URL + `?action=login&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`);
  const data = await res.json();
  if (data && data.role) {
    saveUserSession(email, data.role);
    return data.role;
  } else {
    throw new Error('Invalid credentials');
  }
}

// Logout
function logoutUser() {
  clearUserSession();
  window.location.reload();
}
