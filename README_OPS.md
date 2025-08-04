# SKIDS App: Operations Manual for User Management

This guide explains how to manage user access for the SKIDS training application. As the Operations Manager, your role is to control who can log into the app.

This process is simple, does not require any coding, and is handled entirely through our secure authentication partner, **Magic.link**.

---

### Your "Security Headquarters": The Magic.link Dashboard

Think of the Magic.link dashboard as your **official guest list** for the SKIDS app. Only people whose email addresses are on this list will be allowed to log in.

You will be provided with login credentials for the SKIDS account on Magic.link.

### 📋 How to Add a New User (Authorize Access)

When a new parent or teacher signs up for a paid plan or a trial, you need to add them to the guest list.

**Step 1: Log into Magic.link**
- Go to the [Magic.link dashboard](https://dashboard.magic.link/).
- Log in with the company credentials.

**Step 2: Go to the "Users" Section**
- In the left-hand menu, find and click on **"Users"**. This will show you a list of everyone who currently has access.

**Step 3: Add the New User's Email**
- Find the button to add a new user (it might be labeled "Create User," "Add User," or a `+` symbol).
- A form will appear asking for the user's email address.
- Carefully enter the email address of the parent or teacher you want to authorize.
- Click "Create" or "Save."

**That's it!** The user is now on the guest list. You can now email them their welcome instructions (see `README_USER.md`) and let them know they can access the app.

---

### 🗓️ How to Manage User Access & Subscriptions (Revoke Access)

It is crucial to ensure that only active, paying users can access the application. This requires a simple periodic check.

**The Concept:**
Your spreadsheet (Google Sheets, Excel, etc.) of paying subscribers is your **source of truth**. The Magic.link user list must always match your active subscriber list.

**Step 1: Track Subscriptions**
- Maintain a simple spreadsheet with at least two columns: `User Email` and `Subscription End Date`.

**Step 2: Perform a Regular Audit (e.g., Weekly)**
- Once a week, review your spreadsheet. Identify any users whose `Subscription End Date` has passed.

**Step 3: Log into the Magic.link Dashboard**
- Go to the "Users" section as described above.

**Step 4: Revoke Access**
- For each expired user you identified in your spreadsheet:
  - Use the search bar in the Magic dashboard to find their email address.
  - Click on the user to see their details.
  - Find the option to **"Delete User"** or **"Revoke Access"**. This action is permanent and immediate.
  - Confirm the deletion.

**What this does:** The user is now removed from the guest list. The next time they try to log into the app, the system will not recognize their email and will not send them a login link. Their access is securely cut off.

---

### 🚀 Future Possibilities (Advanced Access Control)

As SKIDS grows, Magic.link offers more advanced features that you can explore (these may require developer help to implement):

-   **Domain-Based Rules:** Automatically allow anyone with an email from a specific school's domain (e.g., `@abcschool.edu`) to sign up.
-   **Bulk Imports:** Upload a CSV file of many users at once instead of adding them one by one.
-   **Integrations:** Connect your user list to other tools like a CRM or billing platform to automate the access management process.

For now, the manual process of adding and removing users is the most direct and secure way to manage your service.
