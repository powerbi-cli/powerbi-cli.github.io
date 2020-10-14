---
uid: samples/report
title: Power BI CLI Samples for Power BI reports
documentId: 682ed0b7-93d1-4f80-8a22-52fa60fcd7af
---

# Power BI CLI Samples for Power BI reports

The following table includes links to bash and PowerShell scripts built using the Power BI CLI.

| Script                                | Description      |
| ------------------------------------- | ---------------- |
| [List reports](#list-reports)         | List reports     |
| [List all reports](#list-all-reports) | List all reports |

## List reports

List reports the user/service principal has access to for a certain workspace

### [Bash](#tab/bash)

```bash
pbicli report list --workspace Demos
```

### [PowerShell](#tab/powershell)

```powershell
pbicli report list --workspace Demos
```

---

## List all reports

List all reports from all workspaces the user/service principal has access to

### [Bash](#tab/bash)

```bash
# Retrieve all workspace ids
workspaces=`pbicli workspace list --query "[*].{id:id}" --output tsv`

# Loop thru all the available workspaces
for workspace in $workspaces
do
    pbicli report list --workspace $workspace
done
```

### [PowerShell](#tab/powershell)

```powershell
# Retrieve all workspace ids
$workspaces=pbicli workspace list --query "[*].{id:id}" --output tsv

# Loop thru all the available workspaces
foreach ($workspace in $workspaces) {
    pbicli report list --workspace $workspace
}
```

---

## Feedback
