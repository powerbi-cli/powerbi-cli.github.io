---
uid: samples/scorecard
title: Power BI CLI Samples for Power BI scorecards
documentId: 9c9dfcc6-5c5c-43be-a825-c9695b90ad80
---

# Power BI CLI Samples for Power BI scorecards

The following table includes links to Bash and PowerShell scripts built using the Power BI CLI.

| Script                                                  | Description                                                  |
| ------------------------------------------------------- | ------------------------------------------------------------ |
| [List scorecards](#list-scorecards)                     | List scorecards                                              |
| [List metrics](#list-metrics)                           | List all metrics from a scorecard                            |
| [List value check-ins](#list-value-check-ins)           | List all the value check-ins of a given metric and scorecard |
| [List value check-in notes](#list-value-check-in-notes) | List all notes of a specific value check-in                  |
| [Add value check-in note](#add-value-check-in-note)     | Add a new note to a value check-in                           |

## List scorecards

List scorecards the user/service principal has access to for a certain workspace

### [Bash](#tab/bash)

```bash
pbicli scorecard list --workspace Demos
```

### [PowerShell](#tab/powershell)

```powershell
pbicli scorecard list --workspace Demos
```

---

## List metrics

List all metrics from a scorecard

### [Bash](#tab/bash)

```bash
pbicli scorecard goal list --workspace Demos --scorecard Demo
```

### [PowerShell](#tab/powershell)

```powershell
pbicli scorecard goal list --workspace Demos --scorecard Demo
```

---

## List value check-ins

List all the value check-ins of a given metric and scorecard

### [Bash](#tab/bash)

```bash
pbicli scorecard goal value list --workspace Demos --scorecard Demo --goal Goal
```

### [PowerShell](#tab/powershell)

```powershell
pbicli scorecard goal value list --workspace Demos --scorecard Demo --goal Goal
```

---

## List value check-in notes

List all notes of a specific value check-in

### [Bash](#tab/bash)

```bash
pbicli scorecard goal value show --workspace Demos --scorecard Demo --goal Goal --timestamp 2022-08-01 --expand notes --query notes
```

### [PowerShell](#tab/powershell)

```powershell
pbicli scorecard goal value show --workspace Demos --scorecard Demo --goal Goal --timestamp 2022-08-01 --expand notes --query notes
```

---

## Add value check-in note

Add a new note to a value check-in

### [Bash](#tab/bash)

```bash
pbicli scorecard goal value show --workspace Demos --scorecard Demo --goal Goal --timestamp 2022-08-01 --text "Check-in note"
```

### [PowerShell](#tab/powershell)

```powershell
pbicli scorecard goal value show --workspace Demos --scorecard Demo --goal Goal --timestamp 2022-08-01 --text "Check-in note"
```

---

To mention someone when a note is added to a value check-in, a JSON file is needed with the following definition. The GUID used doen;t need to be related to the online identity and can be generated for the note. To use it with the `pbicli` use `--text @note.json`.

```json
# note.json
{
    "body": "API call with a mention  @cfdf20c3-4b53-4f5f-afd7-4a8b108b9dfc",
    "mentions": [
        {
            "id": "cfdf20c3-4b53-4f5f-afd7-4a8b108b9dfc",
            "emailAddress": "johndoe@contoso.com",
            "displayName": "John Doe"
        }
    ]
}
```

## Feedback
