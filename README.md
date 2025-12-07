# Discord Active Window Status (Rich Presence for Windows 11)

A lightweight Node.js script that updates your Discord status in real time based on the **active window** you're using on Windows 11.  
If no application is active, it displays **Idle**.

Perfect for showing what you're doing, tracking productivity, or building a custom personal presence system.

---

## ⭐ Features
- Shows the currently active application on Windows
- Shows “Idle” when no trackable window exists
- Updates every few seconds
- 100% local — no bot account required
- Runs 24/7 with Windows startup
- Lightweight and simple

---

## 📦 Requirements
- Windows 11  
- Discord Desktop App (not browser)  
- Node.js (v16+) — https://nodejs.org

---

## 🚀 Setup

### 1. Clone the repository  (Visual Studio Code)
```git clone https://github.com/YOUR-USERNAME/YOUR-REPO.git```
```cd YOUR-REPO```

---

### 2. Install dependencies  
```npm install discord-rpc active-win```

---

### 3. Create a Discord Application (Required)  
This is **not** a bot — it's a normal application for RPC.

1. Open https://discord.com/developers/applications  
2. Click **New Application**  
3. Name it (example: "Windows Status RPC")  
4. Open **General Information**  
5. Copy your **Application ID** (this is the Client ID under the general information tab)

Insert your Application ID into your script file (example):  
```const clientId = 'YOUR_APPLICATION_ID';```

If your repository has an `index.js`, replace the clientId value there.

---

### 4. Run the script  
```node index.js```

You should see in console: RPC connected

Your Discord profile will now display something like:  
Active on Windows 11 — Using: <Current App Name>

---

## 🔄 Run Automatically on Startup (24/7)

### Option A — Task Scheduler (Recommended)
1. Open **Task Scheduler**  
2. Click **Create Task**  
3. Name: DiscordStatusRPC  
4. Check: Run whether user is logged on or not  
5. Triggers → New → Begin the task: At log on  
6. Actions → New → Program/script: node  
   Add arguments: C:\PATH\TO\YOUR\index.js  
7. Save the task

This will start the script on every boot.

---

### Option B — Startup Folder (Easy)
1. Press Win + R  
2. Type: shell:startup  
3. Create a `.bat` file inside that folder (example filename: start-rpc.bat)

Contents of start-rpc.bat (single-line example):  
BAT: @echo off && node C:\PATH\TO\YOUR\index.js

This will run the script on login.

---

## 🛠️ Troubleshooting

- The script says "RPC connected" but nothing shows on Discord:
  - Ensure **Discord Desktop** (not browser) is running and you are logged in.
  - Restart Discord after starting the script (Discord caches RPC sessions).
  - Remove `largeImageKey` / `smallImageKey` in the script unless you uploaded assets in the Developer Portal.
  - Verify Application ID is correct and pasted in the script.
  - Some windows don't expose an owner name; the script will fall back to "Idle" in those cases.

- Permissions/Task Scheduler issues:
  - If using "Run whether user is logged on or not", store credentials when saving the task.
  - Use absolute paths for node and index.js.

---

## 💡 Suggested Features / Requests
Open an Issue or PR to request:
- Idle detection based on last input (mouse/keyboard)
- Display window title instead of app name
- Per-app custom messages
- Custom icons per app (Art Assets)
- Minimize to system tray
- Logging/debug mode

---

## ⚙️ Example minimal `index.js` usage notes
- Ensure `discord-rpc` and `active-win` are installed.
- Replace the clientId line with your Application ID:
  JS: const clientId = 'YOUR_APPLICATION_ID';
- Run with: CMD: node index.js

---

## 📄 License
MIT License — free to modify and redistribute.

---

## 📞 Community & Support
Require additional support, want to make new friends or get help with code based situations on any OS? Join our discord: 

Enjoy the project! Raise issues or PRs in this repo for features, bugs, or improvements.
