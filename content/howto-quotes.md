---
uid: howto/quotes
title: "How-to: using quotes"
documentId: 17b2606b-92ef-414e-883e-8060b99a37aa
---

# How-to: using quotes

Using the correct quotes (`'` single, `"` double or the ```` grave-accent) in combination with a shell is usually a challenge.

## Quotes with JSON options

With some commands it is possible to add plain JSON as an option to the command.

In this sample we are using [`pbicli pipeline deploy`](xref:reference/pipeline#pbicli-pipeline-deploy)

### [Bash](#tab/bash)

In Bash use the single quote `'` to enclose the JSON and escape the double quotes as `""`:

```bash
pbicli pipeline deploy --pipeline Pipeline --options '{ ""sourceStageOrder"": 0, ""options"": { ""allowOverwriteArtifact"": true } }'
```

### [PowerShell](#tab/powershell)

In PowerShell use the single quote `'` to enclose the JSON and escape the double quotes as `""`:

```powershell
pbicli pipeline deploy --pipeline Pipeline --options '{ ""sourceStageOrder"": 0, ""options"": { ""allowOverwriteArtifact"": true } }'
```

---

## Feedback
