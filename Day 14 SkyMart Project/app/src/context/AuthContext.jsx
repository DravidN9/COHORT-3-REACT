import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

const USERS_KEY = "skymart_users";
const SESSION_KEY = "skymart_session";

function loadUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  } catch {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function seedDemoUser() {
  const users = loadUsers();
  if (users.length === 0) {
    const demo = { name: "Demo User", email: "demo@skymart.com", password: "demo1234" };
    saveUsers([demo]);
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    seedDemoUser();
    try {
      const session = JSON.parse(localStorage.getItem(SESSION_KEY));
      if (session) setUser(session);
    } catch {
      /* ignore corrupt session */
    }
    setLoading(false);
  }, []);

  function login(email, password) {
    const users = loadUsers();
    const found = users.find(
      (u) => u.email.toLowerCase() === email.trim().toLowerCase() && u.password === password
    );
    if (!found) {
      return { success: false, error: "Invalid email or password" };
    }
    const session = { name: found.name, email: found.email };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    setUser(session);
    return { success: true };
  }

  function register(name, email, password) {
    const users = loadUsers();
    const exists = users.some((u) => u.email.toLowerCase() === email.trim().toLowerCase());
    if (exists) {
      return { success: false, error: "Email already registered!" };
    }
    const newUser = { name: name.trim(), email: email.trim(), password };
    saveUsers([...users, newUser]);
    const session = { name: newUser.name, email: newUser.email };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    setUser(session);
    return { success: true };
  }

  function logout() {
    localStorage.removeItem(SESSION_KEY);
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}
