export const ADMIN_CREDENTIALS = {
  username: 'admin',
  passwordHash: '$2a$10$X8qKzF.hq3vK/YP4Zm9C3.XQ5Hs7gYoKxrJdm0YM8Pq/KqJxKqJxK' // GaroPomozi321
}

export function checkAuth(username, password) {
  // Jednostavna provjera (u produkciji koristi bcrypt.compare)
  return username === 'admin' && password === 'GaroPomozi321'
}

export function isAuthenticated(cookies) {
  return cookies.get('admin-auth')?.value === 'true'
}
