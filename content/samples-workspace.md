---
uid: samples/workspace
title: Power BI CLI Samples for Power BI workspaces
documentId: 66298cae-b164-48bc-a5b8-7ad21c9e234a
---

# Power BI CLI Samples for Power BI workspaces

The following table includes links to bash and PowerShell scripts built using the Power BI CLI.

| Script                              | Description           |
| ----------------------------------- | --------------------- |
| [List workspaces](#list-workspaces) | List workspaces       |
| [Add user](#add-user)               | Add user to workspace |

## List workspaces

List all workspace the user/service principal has access to

### [Bash](#tab/bash)

```bash
pbicli workspace list
```

### [PowerShell](#tab/powershell)

```powershell
pbicli workspace list
```

---

## Add user

Add a user to a given workspace

### [Bash](#tab/bash)

```bash
pbicli workspace user add --workspace Demos --email john.doe@adventureworks.com --principal-type User --access-right Member
```

### [PowerShell](#tab/powershell)

```powershell
pbicli workspace user add --workspace Demos --email john.doe@adventureworks.com --principal-type User --access-right Member
```

## Feedback
