---
uid: reference/xmla
title: pbicli xmla
documentId: a072d66d-39b1-4566-947b-04bb670877ec
---

# pbicli xmla

> [!CAUTION]
> The XMLA command is now obsolete and will be removed in future version. Please use [`pbici dataset query`](xref:reference/dataset#pbicli-dataset-query)

## Commands

|                                         |                                                          |
| --------------------------------------- | -------------------------------------------------------- |
| [pbicli xmla query](#pbicli-xmla-query) | Execute an XMLA query against the Power BI XMLA endpoint |

## pbicli xmla query

Execute an XMLA query against the Power BI XMLA endpoint

```bash
pbicli xmla query [--connection] [-c]
                  [--dataset] [-d]
                  [--script]
                  [--script-file]
```

### Parameters

-   `--connection -c <connection>`<br/>XMLA Endpoint or workspace connection

-   `--dataset -d <dataset>`<br/>Name of the Power BI dataset

-   `--script <script>`<br/>String with the actual script, query, or statement

-   `--script-file <file>`<br/>File with the actual script, query, or statement

> [!div class="global-parameters"]
>
> [Global Parameters](xref:global)

## Feedback
