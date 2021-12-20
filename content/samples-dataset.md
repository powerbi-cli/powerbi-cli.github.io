---
uid: samples/dataset
title: Power BI CLI Samples for Power BI datasets
documentId: 66fcbb9f-9deb-4bae-9c23-991d2eba50ce
---

# Power BI CLI Samples for Power BI datasets

The following table includes links to bash and PowerShell scripts built using the Power BI CLI.

| Script                                              | Description                              |
| --------------------------------------------------- | ---------------------------------------- |
| [List datasets](#list-datasets)                     | List datasets                            |
| [Execute query](#execute-query)                     | Execute DAX query to a (premium) dataset |
| [Update refresh schedule](#update-refresh-schedule) | Update a dataset refresh schedule        |

## List datasets

List datasets the user/service principal has access to for a certain workspace

### [Bash](#tab/bash)

```bash
pbicli dataset list --workspace Demos
```

### [PowerShell](#tab/powershell)

```powershell
pbicli dataset list --workspace Demos
```

---

## Execute query

Update a dataset refresh schedule which is stored in a JSON file in the current directory

### [Bash](#tab/bash)

```bash
pbicli dataset query --workspace Demos --dataset Demos --dax "EVALUATE(TOPN(1, 'Customer'))"
```

### [PowerShell](#tab/powershell)

```powershell
pbicli dataset query --workspace Demos --dataset Demos --dax "EVALUATE(TOPN(1, 'Customer'))"
```

---

## Update refresh schedule

Executes a DAX query to a premium dataset

### [Bash](#tab/bash)

```bash
pbicli dataset refresh update --workspace Demos --dataset Demos --refresh-schedule-file .\refresh-schedule.json
```

### [PowerShell](#tab/powershell)

```powershell
pbicli dataset refresh update --workspace Demos --dataset Demos --refresh-schedule-file .\refresh-schedule.json
```

---

###

Schedule definition (`refresh-schedule.json`) file that enables the schedule for a dataset to be fereshed at Sunday, Tuesday, Friday and Saturday at 7:00, 11:30, 16:00 and 23:30 UTC.

```json
{
    "value": {
        "days": ["Sunday", "Tuesday", "Friday", "Saturday"],
        "times": ["07:00", "11:30", "16:00", "23:30"],
        "localTimeZoneId": "UTC",
        "enabled": true
    }
}
```

## Feedback
